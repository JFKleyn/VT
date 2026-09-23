import { Link } from "react-router-dom";
import { Reveal } from "../../components/Reveal";
import "./HomeReady.css";

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function HomeReady() {
  return (
    <section className="home-ready">
      <div className="home-ready__orbit" aria-hidden="true">
        <span className="home-ready__ring home-ready__ring--outer" />
        <span className="home-ready__ring home-ready__ring--inner" />
        <span className="home-ready__track home-ready__track--one"><i /></span>
        <span className="home-ready__track home-ready__track--two"><i /></span>
        <div className="home-ready__core"><span>V</span></div>
      </div>

      <Reveal className="home-ready__label">
        Start a conversation
      </Reveal>

      <Reveal as="h2" direction="up" delay={70}>
        Have a problem<br />
        <em>worth solving?</em>
      </Reveal>

      <Reveal as="p" delay={140}>
        Tell us what is not working, what you want to improve or what you have
        been waiting to build. We’ll help you find the right way forward.
      </Reveal>

      <Reveal className="home-ready__actions" delay={210}>
        <Link className="home-ready__primary" to="/contact">
          Start a project <Arrow />
        </Link>
        <a className="home-ready__secondary" href="mailto:johan@venturetechnologies.co.za">
          johan@venturetechnologies.co.za <Arrow />
        </a>
      </Reveal>

      <Reveal className="home-ready__meta" delay={260}>
        <span><i /> Available for new projects</span>
        <span>South Africa / Worldwide</span>
      </Reveal>
    </section>
  );
}
