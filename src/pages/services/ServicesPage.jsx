import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../../components/Reveal";
import { Footer } from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import "./ServicesPage.css";
import { Header } from "../../components/Header";

const services = [
  {
    number: "01",
    title: "Websites",
    label: "Digital presence",
    intro:
      "High-performance websites that communicate clearly, feel considered and turn attention into action.",
    items: [
      "Company websites",
      "E-commerce",
      "Landing pages",
      "Client portals",
    ],
    visual: "web",
  },
  {
    number: "02",
    title: "Custom software",
    label: "Business systems",
    intro:
      "Purpose-built software for the processes, information and decisions that generic tools cannot handle properly.",
    items: [
      "Admin systems",
      "Dashboards",
      "Customer portals",
      "Internal tools",
    ],
    visual: "software",
  },
  {
    number: "03",
    title: "Mobile applications",
    label: "Products in your pocket",
    intro:
      "Focused mobile experiences for customers, teams and people working beyond the office.",
    items: ["Customer apps", "Business apps", "Field tools", "MVP products"],
    visual: "mobile",
  },
  {
    number: "04",
    title: "Automations",
    label: "Connected operations",
    intro:
      "Workflows and integrations that remove repetitive work and keep systems, teams and customers in sync.",
    items: [
      "System integrations",
      "Notifications",
      "Data workflows",
      "AI automations",
    ],
    visual: "automation",
  },
];

const signals = [
  ["Your website no longer reflects the business", "Website"],
  ["Your team is running the company from spreadsheets", "Software"],
  ["Customers need access wherever they are", "Mobile"],
  ["People keep repeating work between systems", "Automation"],
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

function ServiceVisual({ type, number }) {
  return (
    <div
      className={`services-visual services-visual--${type}`}
      aria-hidden="true"
    >
      <div className="services-visual__head">
        <span>Venture / Build system</span>
        <b>{number}</b>
      </div>
      <div className="services-visual__stage">
        <span className="services-visual__grid" />
        {type === "web" && (
          <>
            <div className="sv-browser">
              <i />
              <i />
              <i />
              <span />
              <strong />
              <b />
            </div>
            <span className="sv-pointer">↗</span>
          </>
        )}
        {type === "software" && (
          <>
            <div className="sv-panel sv-panel--a">
              <i />
              <i />
              <i />
            </div>
            <div className="sv-panel sv-panel--b">
              <span />
              <span />
              <span />
              <span />
            </div>
            <svg className="sv-chart" viewBox="0 0 300 90">
              <path d="M4 78 C45 68 68 20 110 48 S177 75 210 35 S260 28 296 8" />
            </svg>
          </>
        )}
        {type === "mobile" && (
          <>
            <div className="sv-phone">
              <i />
              <span />
              <span />
              <strong />
            </div>
            <div className="sv-ping">
              Product ready <i />
            </div>
          </>
        )}
        {type === "automation" && (
          <>
            <div className="visual-node visual-node--one">01</div>
            <div className="visual-node visual-node--two">02</div>
            <div className="visual-node visual-node--three">03</div>
            <svg className="visual-flow" viewBox="0 0 400 250">
              <path d="M80 65 C175 65 125 185 220 185 S285 75 340 75" />
            </svg>
          </>
        )}
      </div>
      <div className="services-visual__foot">
        <span>
          <i />
          System active
        </span>
        <b>V.0{number}</b>
      </div>
    </div>
  );
}

export function ServicesPage() {
  const [active, setActive] = useState(0);
  const selected = services[active];

  return (
    <>
      <Helmet>
        <title>
          Software Development & Digital Services | Venture Technologies
        </title>

        <meta
          name="description"
          content="Explore Venture Technologies' services including custom software development, websites, mobile applications, business automation and system integrations."
        />

        <link rel="canonical" href="https://venturetechnologies.co/services" />

        <meta
          property="og:title"
          content="Software Development & Digital Services | Venture Technologies"
        />
        <meta
          property="og:description"
          content="Custom software, websites, mobile applications and automations designed around real business problems."
        />
        <meta
          property="og:url"
          content="https://venturetechnologies.co/services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://venturetechnologies.co/images/Logo.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Software Development & Digital Services | Venture Technologies"
        />
        <meta
          name="twitter:description"
          content="Custom software, websites, mobile applications and automations designed around real business problems."
        />
        <meta
          name="twitter:image"
          content="https://venturetechnologies.co/images/Logo.webp"
        />
      </Helmet>
      <Header />
      <main className="services-page">
        <section className="services-hero">
          <Reveal className="services-kicker">
            <span>Services / 01—04</span>
            <i />
            Technology built around the problem
          </Reveal>
          <Reveal as="h1" direction="up" delay={70}>
            The right technology.
            <br />
            <em>For what comes next.</em>
          </Reveal>
          <div className="services-hero__bottom">
            <Reveal as="p" delay={140}>
              Venture designs and builds useful digital products, from a
              company’s first serious website to the software that runs its
              operations.
            </Reveal>
            <Reveal className="services-hero__index" delay={210}>
              {services.map((s) => (
                <span key={s.number}>
                  <b>{s.number}</b>
                  {s.title}
                </span>
              ))}
            </Reveal>
          </div>
          <div className="services-hero__orb" aria-hidden="true">
            <i />
            <i />
            <span>V</span>
          </div>
        </section>

        <section className="services-system">
          <Reveal className="services-section-label">What we build</Reveal>
          <div className="services-system__grid">
            <div className="services-list">
              {services.map((service, index) => (
                <button
                  type="button"
                  key={service.number}
                  className={active === index ? "is-active" : ""}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                >
                  <small>{service.number}</small>
                  <span>
                    <i>{service.label}</i>
                    <strong>{service.title}</strong>
                  </span>
                  <b className="arrow-icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20">
                      <path d="M5 15L15 5M7 5h8v8" />
                    </svg>
                  </b>
                </button>
              ))}
            </div>
            <Reveal className="services-system__display" direction="right">
              <ServiceVisual type={selected.visual} number={selected.number} />
              <div className="services-system__copy" key={selected.number}>
                <p>{selected.intro}</p>
                <ul>
                  {selected.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="services-fit">
          <div className="services-fit__heading">
            <Reveal className="services-section-label">
              <span>02</span>Where to start
            </Reveal>
            <Reveal as="h2" direction="up">
              Start with the friction.
              <br />
              <em>Not the technology.</em>
            </Reveal>
            <Reveal as="p" delay={100}>
              You do not need to know whether you need an app, a platform or an
              automation. Tell us what is slowing the business down.
            </Reveal>
          </div>
          <div className="services-fit__rows">
            {signals.map(([problem, answer], index) => (
              <Reveal
                className="services-fit__row"
                key={problem}
                delay={index * 60}
              >
                <small>0{index + 1}</small>
                <p>{problem}</p>
                <span>
                  {answer}
                  <Arrow />
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="services-principles">
          <Reveal className="services-section-label">
            <span>03</span>How we think
          </Reveal>
          <div className="services-principles__grid">
            <Reveal as="h2" direction="up">
              Built to work.
              <br />
              <em>Built to last.</em>
            </Reveal>
            <div className="services-principles__cards">
              <Reveal as="article">
                <span>01</span>
                <h3>Useful first</h3>
                <p>
                  Every decision must make the product clearer, faster or easier
                  to use.
                </p>
              </Reveal>
              <Reveal as="article" delay={70}>
                <span>02</span>
                <h3>Designed to grow</h3>
                <p>
                  The foundation should support where the business is going, not
                  only where it is today.
                </p>
              </Reveal>
              <Reveal as="article" delay={140}>
                <span>03</span>
                <h3>No black boxes</h3>
                <p>
                  You stay involved, understand the decisions and know exactly
                  what is being built.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="services-cta">
          <Reveal className="services-section-label">
            <span>04</span>Your next move
          </Reveal>
          <Reveal as="h2" direction="up">
            Whatever the problem.
            <br />
            <em>We build the solution.</em>
          </Reveal>
          <Reveal as="p" delay={100}>
            Whether the answer is a website, a custom system or something that
            does not have a name yet, we can work it out together.
          </Reveal>
          <Reveal delay={170}>
            <Link to="/contact">
              Start a project <Arrow />
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
