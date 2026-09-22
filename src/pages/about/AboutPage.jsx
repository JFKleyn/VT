import { Link } from "react-router-dom";
import { Reveal } from "../../components/Reveal";
import { Footer } from "../../components/Footer";
import founder from "../../assets/about/johan-kleyn.webp"
import "./AboutPage.css";

const principles = [
  {
    number: "01",
    title: "Understand first",
    text: "The best solution begins with the business, the people and the real source of the friction.",
  },
  {
    number: "02",
    title: "Make it useful",
    text: "Technology should make something clearer, faster or easier—not exist simply to look impressive.",
  },
  {
    number: "03",
    title: "Build with care",
    text: "Small details shape how a product feels, while strong foundations determine how long it lasts.",
  },
  {
    number: "04",
    title: "Stay accountable",
    text: "Clear communication, honest decisions and personal ownership from the first conversation onward.",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function AboutPage() {
  return (
    <>
      <main className="about-page">
        <section className="about-hero">
          <Reveal className="about-label">
            <span>About Venture</span>
            <i />
            Independent technology company
          </Reveal>
          <Reveal as="h1" direction="up" delay={70}>
            Independent by design.
            <br />
            <em>Ambitious by nature.</em>
          </Reveal>
          <div className="about-hero__bottom">
            <Reveal as="p" delay={140}>
              Venture is a South African technology company building thoughtful
              digital products for businesses at home and around the world.
            </Reveal>
            <Reveal className="about-hero__coordinates" delay={210}>
              <span>Founded by Johan Kleyn</span>
              <span>South Africa / Worldwide</span>
              <span>Strategy / Design / Engineering</span>
            </Reveal>
          </div>
          <div className="about-hero__system" aria-hidden="true">
            <span>V</span>
            <i />
            <i />
            <b>BUILD / SOLVE / IMPROVE</b>
          </div>
        </section>

        <section className="about-founder">
          <div className="about-founder__portrait">
            <Reveal className="about-founder__frame" direction="left">
              <img
                src={founder}
                alt="Johan Kleyn, founder of Venture Technologies"
              />
              <span className="about-founder__scan" aria-hidden="true" />
              <div className="about-founder__photo-meta">
                <span>Founder / Developer</span>
                <span>Johan Kleyn</span>
              </div>
            </Reveal>
          </div>
          <div className="about-founder__story">
            <Reveal className="about-section-label">
              <span>01</span>The person behind Venture
            </Reveal>
            <Reveal as="h2" direction="up">
              Close to the problem.
              <br />
              <em>Responsible for the solution.</em>
            </Reveal>
            <Reveal as="p" delay={100}>
              I’m Johan Kleyn, the founder and developer behind Venture. My
              background began close to the operational side of business—working
              with databases, reporting, spreadsheets and internal systems.
            </Reveal>
            <Reveal as="p" delay={150}>
              That experience taught me something important: software matters
              most when it removes friction from real work. Venture grew from
              that belief and from a desire to build digital products with
              greater care, clarity and creative freedom.
            </Reveal>
            <Reveal className="about-founder__signature" delay={210}>
              <strong>Johan Kleyn</strong>
              <span>Founder, Venture Technologies</span>
            </Reveal>
          </div>
        </section>

        <section className="about-evolution">
          <Reveal className="about-section-label">
            <span>02</span>The evolution
          </Reveal>
          <div className="about-evolution__heading">
            <Reveal as="h2" direction="up">
              From internal systems
              <br />
              <em>to ideas without limits.</em>
            </Reveal>
            <Reveal as="p" delay={100}>
              Venture’s direction has expanded, but the foundation remains the
              same: understand the problem properly and create something
              genuinely useful.
            </Reveal>
          </div>
          <div className="about-evolution__track">
            <Reveal as="article">
              <span>01</span>
              <small>The foundation</small>
              <h3>Business systems</h3>
              <p>
                Learning how information, processes and people connect behind
                the scenes.
              </p>
            </Reveal>
            <Reveal as="article" delay={70}>
              <span>02</span>
              <small>The beginning</small>
              <h3>Web experiences</h3>
              <p>
                Turning ideas and established businesses into clear, credible
                digital experiences.
              </p>
            </Reveal>
            <Reveal as="article" delay={140}>
              <span>03</span>
              <small>The expansion</small>
              <h3>Digital products</h3>
              <p>
                Moving beyond websites into software, applications, portals and
                automation.
              </p>
            </Reveal>
            <Reveal as="article" delay={210}>
              <span>04</span>
              <small>What comes next</small>
              <h3>No fixed ceiling</h3>
              <p>
                Working across borders and choosing the right technology for
                every new challenge.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="about-principles">
          <div className="about-principles__intro">
            <Reveal className="about-section-label">
              <span>03</span>Working principles
            </Reveal>
            <Reveal as="h2" direction="up">
              A small company
              <br />
              <em>with serious standards.</em>
            </Reveal>
            <Reveal as="p" delay={100}>
              Being independent means the person you speak to is closely
              involved in the thinking, designing and building.
            </Reveal>
          </div>
          <div className="about-principles__list">
            {principles.map((principle, index) => (
              <Reveal as="article" key={principle.number} delay={index * 60}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
                <i>↗</i>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="about-now">
          <Reveal className="about-section-label">
            <span>04</span>Venture today
          </Reveal>
          <Reveal as="h2" direction="up">
            Based in South Africa.
            <br />
            <em>Built for everywhere.</em>
          </Reveal>
          <div className="about-now__grid">
            <Reveal as="p" delay={100}>
              Venture works with businesses that value clear thinking, useful
              design and technology built around the way they actually operate.
            </Reveal>
            <Reveal className="about-now__services" delay={160}>
              <span>Websites</span>
              <span>Custom software</span>
              <span>Mobile applications</span>
              <span>Automations</span>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <Link to="/contact">
              Start a conversation <Arrow />
            </Link>
          </Reveal>
          <div className="about-now__orbit" aria-hidden="true">
            <i />
            <i />
            <span>V</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
