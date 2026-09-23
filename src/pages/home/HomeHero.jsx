import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "./HomeHero.css";

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M7 5h8v8" />
  </svg>
);
const capabilities = ["Websites", "Software", "Mobile apps", "Automations"];

export function HomeHero() {
  return (
    <>
      <Header />
      <main className="venture-hero">
        <div className="venture-hero__grid" aria-hidden="true" />
        <div className="venture-hero__glow" aria-hidden="true" />
        <section className="venture-hero__content">
          <div className="venture-hero__eyebrow hero-reveal">
            <span className="venture-hero__status" />
            Independent Software Company · South Africa / Worldwide
          </div>
          <h1 className="venture-hero__title">
            <span className="hero-reveal">Whatever the</span>
            <span className="hero-reveal venture-hero__title-row">
              <em>problem,</em>
              <span className="venture-hero__signal" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </span>
            <span className="hero-reveal venture-hero__title-last">
              we build the <strong>solution.</strong>
            </span>
          </h1>
          <div className="venture-hero__lower hero-reveal">
            <p>
              Venture turns ambitious ideas and stubborn business problems into
              beautifully engineered digital products.
            </p>
            <div className="venture-hero__actions">
              <Link className="venture-hero__primary" to="/contact">
                Start a project <Arrow />
              </Link>
              <a className="venture-hero__secondary" href="#selected-work">
                Explore our work <span>↓</span>
              </a>
            </div>
          </div>
        </section>
        <aside
          className="solution-system hero-reveal"
          aria-label="Venture capabilities"
        >
          <div className="solution-system__head">
            <span>Venture / Solution system</span>
            <span className="solution-system__live">Live</span>
          </div>
          <div className="solution-system__core" aria-hidden="true">
            <span className="solution-system__orbit solution-system__orbit--one" />
            <span className="solution-system__orbit solution-system__orbit--two" />
            <div className="solution-system__mark">
              <b>V</b>
            </div>
            <span className="solution-system__pulse" />
          </div>
          <div className="solution-system__flow">
            <span>Business problem</span>
            <i />
            <strong>Digital solution</strong>
          </div>
          <div className="solution-system__capabilities">
            {capabilities.map((item, i) => (
              <span key={item}>
                <small>0{i + 1}</small>
                {item}
              </span>
            ))}
          </div>
        </aside>
        <div
          className="venture-hero__edge venture-hero__edge--left"
          aria-hidden="true"
        >
          VT / 2026
        </div>
        <div
          className="venture-hero__edge venture-hero__edge--right"
          aria-hidden="true"
        >
          SCROLL TO DISCOVER
        </div>
      </main>
    </>
  );
}
