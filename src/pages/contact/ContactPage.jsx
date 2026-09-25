import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Helmet } from "react-helmet-async";
import { Reveal } from "../../components/Reveal";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./ContactPage.css";

const initialForm = {
  firstname: "",
  surname: "",
  email: "",
  message: "",
};

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [tel, setTel] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setFeedback("");

    if (!tel || !isValidPhoneNumber(tel)) {
      setStatus("error");
      setFeedback("Please enter a valid mobile number.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tel }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );

      setStatus("success");
      setFeedback("Message received. I’ll be in touch shortly.");
      setForm(initialForm);
      setTel("");
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Start a Project | Venture Technologies</title>

        <meta
          name="description"
          content="Start a project with Venture Technologies. Get in touch to discuss custom software, websites, mobile applications, automations or another digital solution for your business."
        />

        <link rel="canonical" href="https://venturetechnologies.co/contact" />

        <meta
          property="og:title"
          content="Start a Project | Venture Technologies"
        />
        <meta
          property="og:description"
          content="Have a business problem, idea or digital project? Start a conversation with Venture Technologies and find the right way forward."
        />
        <meta
          property="og:url"
          content="https://venturetechnologies.co/contact"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://venturetechnologies.co/images/Logo.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Start a Project | Venture Technologies"
        />
        <meta
          name="twitter:description"
          content="Have a business problem, idea or digital project? Start a conversation with Venture Technologies and find the right way forward."
        />
        <meta
          name="twitter:image"
          content="https://venturetechnologies.co/images/Logo.webp"
        />
      </Helmet>
      <Header />
      <main className="contact-page">
        <section className="contact-hero">
          <Reveal className="contact-kicker">
            <span>Contact / Start a project</span>
            <i /> South Africa / Worldwide
          </Reveal>

          <Reveal as="h1" direction="up" delay={70}>
            Bring the problem.
            <br />
            <em>We’ll find the way forward.</em>
          </Reveal>

          <div className="contact-hero__bottom">
            <Reveal as="p" delay={140}>
              Tell me what you are trying to build, improve or untangle. You do
              not need a technical specification—just a useful place to begin.
            </Reveal>
            <Reveal className="contact-hero__status" delay={210}>
              <span>
                <i /> Available for selected projects
              </span>
              <small>Response time / Usually within one business day</small>
            </Reveal>
          </div>

          <div className="contact-hero__signal" aria-hidden="true">
            <span>V</span>
            <i />
            <i />
            <i />
          </div>
          <span className="contact-hero__scroll">
            Scroll to connect <i>↓</i>
          </span>
        </section>

        <section className="contact-connect">
          <div className="contact-connect__intro">
            <Reveal className="contact-section-label">
              Start the conversation
            </Reveal>
            <Reveal as="h2" direction="up">
              A few details.
              <br />
              <em>Then we get to work.</em>
            </Reveal>
            <Reveal as="p" delay={100}>
              Every good project starts with a clear conversation. Share as much
              or as little as you currently know.
            </Reveal>

            <Reveal className="contact-direct" delay={160}>
              <small>Prefer to reach out directly?</small>
              <a href="mailto:johan@venturetechnologies.co">
                johan@venturetechnologies.co <Arrow />
              </a>
              <a href="tel:+27814605994">
                +27 81 460 5994 <Arrow />
              </a>
            </Reveal>
          </div>

          <Reveal className="contact-form-shell" direction="right" delay={80}>
            <div className="contact-form-shell__head">
              <span>Venture / Project intake</span>
              <b>
                <i /> System ready
              </b>
            </div>

            {status === "success" ? (
              <div className="contact-success" role="status">
                <div className="contact-success__mark">
                  <span>✓</span>
                  <i />
                  <i />
                </div>
                <small>Transmission complete</small>
                <h2>
                  Thank you.
                  <br />
                  Message received.
                </h2>
                <p>
                  I’ll review the details and get back to you as soon as
                  possible.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFeedback("");
                  }}
                >
                  Send another message <Arrow />
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submitForm}>
                <div className="contact-form__row">
                  <label>
                    <span>
                      <b>01</b> First name
                    </span>
                    <input
                      name="firstname"
                      value={form.firstname}
                      onChange={updateField}
                      autoComplete="given-name"
                      placeholder="First Name"
                      required
                    />
                  </label>
                  <label>
                    <span>
                      <b>02</b> Surname
                    </span>
                    <input
                      name="surname"
                      value={form.surname}
                      onChange={updateField}
                      autoComplete="family-name"
                      placeholder="Surname"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>
                    <b>03</b> Email address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>

                <label className="contact-form__phone">
                  <span>
                    <b>04</b> Mobile number
                  </span>
                  <PhoneInput
                    international
                    defaultCountry="ZA"
                    countryCallingCodeEditable={false}
                    value={tel}
                    onChange={(value) => setTel(value || "")}
                    placeholder="Mobile number"
                    autoComplete="tel"
                  />
                </label>

                <label>
                  <span>
                    <b>05</b> Tell us about the project
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    rows="5"
                    placeholder="What are you trying to build, improve or solve?"
                    required
                  />
                </label>

                <div className="contact-form__footer">
                  <p>
                    By submitting this form, you agree to be contacted about
                    your enquiry.
                  </p>
                  <button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send enquiry"}{" "}
                    <Arrow />
                  </button>
                </div>

                {feedback && (
                  <p className="contact-form__feedback" role="alert">
                    {feedback}
                  </p>
                )}
              </form>
            )}

            <div className="contact-form-shell__foot">
              <span>Encrypted connection</span>
              <b>V.01</b>
            </div>
          </Reveal>
        </section>

        <section className="contact-next">
          <Reveal className="contact-section-label">What happens next</Reveal>
          <div className="contact-next__grid">
            <Reveal as="article">
              <span>01</span>
              <small>Review</small>
              <h3>I read your enquiry</h3>
              <p>
                I’ll look at the goal, the current problem and any useful
                context you have shared.
              </p>
            </Reveal>
            <Reveal as="article" delay={70}>
              <span>02</span>
              <small>Conversation</small>
              <h3>We talk it through</h3>
              <p>
                A straightforward conversation to clarify what matters, what is
                possible and what comes next.
              </p>
            </Reveal>
            <Reveal as="article" delay={140}>
              <span>03</span>
              <small>Direction</small>
              <h3>You get a clear way forward</h3>
              <p>
                If we are a good fit, I’ll outline the recommended solution,
                scope, timing and investment.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
