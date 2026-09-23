import { connect } from "cloudflare:sockets";

export async function onRequestGet(context) {
  const { env } = context;

  let socket;
  let writer;
  let reader;

  try {
    socket = connect(
      {
        hostname: env.SMTP_HOST,
        port: 465,
      },
      {
        secureTransport: "on",
      }
    );

    writer = socket.writable.getWriter();
    reader = socket.readable.getReader();

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    async function readResponse() {
      let response = "";

      while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        response += decoder.decode(value, { stream: true });

        const lines = response.split("\r\n").filter(Boolean);
        const lastLine = lines[lines.length - 1];

        // SMTP multiline responses use "250-..."
        // Final response uses "250 ..."
        if (lastLine && /^\d{3} /.test(lastLine)) {
          break;
        }
      }

      console.log("SMTP:", response);
      return response;
    }

    async function send(command) {
      await writer.write(encoder.encode(command + "\r\n"));
      return await readResponse();
    }

    function expect(response, codes) {
      const code = Number(response.slice(0, 3));

      if (!codes.includes(code)) {
        throw new Error(`SMTP error: ${response}`);
      }
    }

    // Server greeting
    let response = await readResponse();
    expect(response, [220]);

    // Identify ourselves
    response = await send("EHLO venturetechnologies.co");
    expect(response, [250]);

    // Login
    response = await send("AUTH LOGIN");
    expect(response, [334]);

    response = await send(btoa(env.SMTP_USER));
    expect(response, [334]);

    response = await send(btoa(env.SMTP_PASSWORD));
    expect(response, [235]);

    // Sender
    response = await send(`MAIL FROM:<${env.SMTP_USER}>`);
    expect(response, [250]);

    // Recipient
    response = await send("RCPT TO:<johan@venturetechnologies.co>");
    expect(response, [250, 251]);

    // Start email body
    response = await send("DATA");
    expect(response, [354]);

    const message = [
      `From: Venture Website <${env.SMTP_USER}>`,
      "To: Johan <johan@venturetechnologies.co>",
      "Subject: Venture xneelo SMTP Test",
      "MIME-Version: 1.0",
      'Content-Type: text/plain; charset="UTF-8"',
      "",
      "Success!",
      "",
      "This email was sent from the new Venture website through a Cloudflare Function using the xneelo SMTP server.",
      "",
      "If you're reading this, Cloudflare -> xneelo SMTP is working.",
    ].join("\r\n");

    await writer.write(
      encoder.encode(message + "\r\n.\r\n")
    );

    response = await readResponse();
    expect(response, [250]);

    // Close SMTP session
    await writer.write(encoder.encode("QUIT\r\n"));

    await writer.close();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Test email sent to johan@venturetechnologies.co",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("SMTP TEST FAILED:", error);

    try {
      if (writer) await writer.close();
    } catch {

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  }
}