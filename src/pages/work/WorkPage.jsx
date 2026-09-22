import mcss from "../../assets/work/mcss.webp";
import pcib from "../../assets/work/pcib.webp";
import sa from "../../assets/work/studio-amberleigh.webp";
import ltl from "../../assets/work/love-to-learn.webp";
import { Link } from "react-router-dom";
import { Reveal } from "../../components/Reveal";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./WorkPage.css";

// ADDING A PROJECT:
// Copy one object, change its content, and add its image to public/assets/work/.
const projects = [
  {
    number: "01",
    client: "KZN Machine Tool Solution Centre",
    title: "More than a website. A complete machine management platform.",
    description:
      "An industrial website backed by custom administration software giving the MCSS team control over machines, specifications, availability and imagery.",
    services: ["Web design", "Custom software", "CMS", "Cloud infrastructure"],
    image: mcss,
    url: "https://www.kznmts.co.za",
    year: "2026",
    tone: "mcss",
  },
  {
    number: "02",
    client: "Peter Christie Insurance Brokers",
    title: "A trusted brokerage, reintroduced for the digital age.",
    description:
      "A refined corporate website that turns a complex insurance offering into a clear, credible and straightforward client experience.",
    services: ["Strategy", "Web design", "Development", "SEO"],
    image: pcib,
    url: "https://peterchristieins.co.za",
    year: "2026",
    tone: "pcib",
  },
  {
    number: "03",
    client: "Studio Amberleigh",
    title: "A considered digital home for a creative studio.",
    description:
      "A refined, responsive website built to give Studio Amberleigh’s work the space, clarity and visual confidence it deserves.",
    services: ["Web design", "Development", "Responsive UX"],
    image: sa,
    url: "https://studioamberleigh.co.za",
    year: "2026",
    tone: "amberley",
  },
  {
    number: "04",
    client: "Love to Learn",
    title: "Making learning feel clear, welcoming and accessible.",
    description:
      "A friendly digital experience designed to organise educational information and help families find what they need without friction.",
    services: ["Web design", "Development", "Content structure"],
    image: ltl,
    url: "ltlprivatetutoring.co.za",
    year: "2026",
    tone: "learn",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

function Project({ project, index }) {
  const visual = (
    <div className="portfolio-project__visual">
      <div className="portfolio-project__browser">
        <div className="portfolio-project__bar">
          <i />
          <i />
          <i />
          <span>{project.client}</span>
        </div>
        <img src={project.image} alt={`${project.client} website`} />
      </div>
      <span className="portfolio-project__number">{project.number}</span>
      {project.url && (
        <span className="portfolio-project__view">
          View live <Arrow />
        </span>
      )}
    </div>
  );

  return (
    <Reveal
      as="article"
      className={`portfolio-project portfolio-project--${project.tone} ${index % 2 ? "is-reversed" : ""}`}
    >
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.client}`}
        >
          {visual}
        </a>
      ) : (
        visual
      )}
      <div className="portfolio-project__content">
        <div className="portfolio-project__meta">
          <span>{project.number} / Selected project</span>
          <span>{project.year}</span>
        </div>
        <p className="portfolio-project__client">{project.client}</p>
        <h2>{project.title}</h2>
        <p className="portfolio-project__description">{project.description}</p>
        <ul>
          {project.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        {project.url ? (
          <a
            className="portfolio-project__link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            Visit live project <Arrow />
          </a>
        ) : (
          <span className="portfolio-project__offline">Project showcase</span>
        )}
      </div>
    </Reveal>
  );
}

export function WorkPage() {
  return (
    <>
      <Header />
      <main className="work-page">
        <section className="work-page__hero">
          <Reveal className="work-page__kicker">
            <span>Selected work</span>
            <i />
            {String(projects.length).padStart(2, "0")} projects
          </Reveal>
          <Reveal as="h1" direction="up" delay={70}>
            Real businesses.
            <br />
            <em>Real solutions.</em>
          </Reveal>
          <div className="work-page__hero-bottom">
            <Reveal as="p" delay={140}>
              A growing collection of websites and digital systems created to
              solve real problems for real businesses.
            </Reveal>
            <Reveal className="work-page__manifest" delay={200}>
              <span>Strategy</span>
              <span>Design</span>
              <span>Engineering</span>
              <span>Delivery</span>
            </Reveal>
          </div>
          <div className="about-hero__system" aria-hidden="true">
            <span>V</span>
            <i />
            <i />
            <b>BUILD / SOLVE / IMPROVE</b>
          </div>
        </section>

        <section className="work-page__projects">
          <Reveal className="work-page__section-label">Project archive</Reveal>
          <div className="work-page__project-list">
            {projects.map((project, index) => (
              <Project project={project} index={index} key={project.number} />
            ))}
          </div>
        </section>

        <section className="work-page__more">
          <Reveal className="work-page__section-label">The next project</Reveal>
          <Reveal as="h2" direction="up">
            The archive is growing.
            <br />
            <em>Your project could be next.</em>
          </Reveal>
          <Reveal as="p" delay={100}>
            Every business begins in a different place. We start with the
            problem and build the technology around it.
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
