import { connect } from "cloudflare:sockets";

export async function onRequestPost(context) {
  const { request, env } = context;

  let socket;
  let writer;
  let reader;

  try {
    // ─────────────────────────────────────────────
    // Read form submission
    // ─────────────────────────────────────────────
    const body = await request.json();

    const firstname = body.firstname?.trim();
    const surname = body.surname?.trim();
    const email = body.email?.trim();
    const tel = body.tel?.trim();
    const message = body.message?.trim();

    if (!firstname || !surname || !email || !tel || !message) {
      return json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        400,
      );
    }

    // Basic server-side email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        400,
      );
    }

    // Prevent header injection
    if (/[\r\n]/.test(email)) {
      return json(
        {
          success: false,
          error: "Invalid email address.",
        },
        400,
      );
    }

    // ─────────────────────────────────────────────
    // Connect to xneelo SMTP
    // ─────────────────────────────────────────────
    socket = connect(
      {
        hostname: env.SMTP_HOST,
        port: 465,
      },
      {
        secureTransport: "on",
      },
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

        if (lastLine && /^\d{3} /.test(lastLine)) {
          break;
        }
      }

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

    // ─────────────────────────────────────────────
    // SMTP authentication
    // ─────────────────────────────────────────────
    let response = await readResponse();
    expect(response, [220]);

    response = await send("EHLO venturetechnologies.co");
    expect(response, [250]);

    response = await send("AUTH LOGIN");
    expect(response, [334]);

    response = await send(btoa(env.SMTP_USER));
    expect(response, [334]);

    response = await send(btoa(env.SMTP_PASSWORD));
    expect(response, [235]);

    // ─────────────────────────────────────────────
    // Addressing
    // ─────────────────────────────────────────────
    response = await send(`MAIL FROM:<${env.SMTP_USER}>`);
    expect(response, [250]);

    response = await send("RCPT TO:<johan@venturetechnologies.co>");
    expect(response, [250, 251]);

    response = await send("DATA");
    expect(response, [354]);

    // ─────────────────────────────────────────────
    // Build email
    // ─────────────────────────────────────────────
    const safeFirstname = cleanHeader(firstname);
    const safeSurname = cleanHeader(surname);
    const safeEmail = cleanHeader(email);

    const subject = `New Venture Enquiry - ${safeFirstname} ${safeSurname}`;

    const emailBody = [
      `From: Venture Website <${env.SMTP_USER}>`,
      `To: Johan <johan@venturetechnologies.co>`,
      `Reply-To: ${safeFirstname} ${safeSurname} <${safeEmail}>`,
      `Subject: ${subject}`,
      "MIME-Version: 1.0",
      'Content-Type: text/plain; charset="UTF-8"',
      "",
      "NEW WEBSITE ENQUIRY",
      "========================================",
      "",
      `Name: ${firstname} ${surname}`,
      `Email: ${email}`,
      `Mobile: ${tel}`,
      "",
      "PROJECT / ENQUIRY",
      "----------------------------------------",
      message,
      "",
      "========================================",
      "Sent via venturetechnologies.co",
    ].join("\r\n");

    // Dot-stuff lines beginning with a period for SMTP DATA.
    const smtpSafeBody = emailBody.replace(/^\./gm, "..");

    await writer.write(encoder.encode(smtpSafeBody + "\r\n.\r\n"));

    response = await readResponse();
    expect(response, [250]);

    await writer.write(encoder.encode("QUIT\r\n"));

    try {
      await writer.close();
    } catch {
      // SMTP transaction already completed successfully.
    }

    return json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT FORM SMTP ERROR:", error);

    try {
      if (writer) await writer.close();
    } catch {
      return json(
        {
          success: false,
          error: "We couldn't send your enquiry. Please try again.",
        },
        500,
      );
    }
  }
}

function cleanHeader(value) {
  return String(value)
    .replace(/[\r\n]/g, " ")
    .trim();
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
