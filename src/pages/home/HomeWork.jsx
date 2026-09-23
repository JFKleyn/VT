import mcssDesktop from "../../assets/work/mcss-desktop.png";
import mcssMobile from "../../assets/work/mcss-mobile.png";
import pcibDesktop from "../../assets/work/pcib-desktop.png";
import pcibMobile from "../../assets/work/pcib-mobile.png";
import { Reveal } from "../../components/Reveal";
import "./HomeWork.css";

const projects = [
  {
    number: "01",
    client: "KZN Machine Tool Solution Centre",
    title: "More than a website. A complete machine management platform.",
    description:
      "A high-performance industrial website backed by a custom administration system giving the MCSS team complete control over machines, specifications, availability and imagery.",
    services: ["Web design", "Custom software", "CMS", "Cloud infrastructure"],
    desktop: mcssDesktop,
    mobile: mcssMobile,
    url: "https://www.kznmts.co.za",
    theme: "mcss",
  },
  {
    number: "02",
    client: "Peter Christie Insurance Brokers",
    title: "A trusted brokerage, reintroduced for the digital age.",
    description:
      "A refined corporate website that turns a complex insurance offering into a clear, credible experience built around responsive design, structured services and straightforward client journeys.",
    services: ["Strategy", "Web design", "Development", "SEO"],
    desktop: pcibDesktop,
    mobile: pcibMobile,
    url: "https://peterchristieins.co.za",
    theme: "pcib",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

function ProjectShowcase({ project }) {
  return (
    <Reveal as="article" className={`work-project work-project--${project.theme}`}>
      <div className="work-project__details">
        <div className="work-project__meta">
          <span>{project.number}</span>
          <span>Selected project</span>
        </div>

        <p className="work-project__client">{project.client}</p>
        <h3>{project.title}</h3>
        <p className="work-project__description">{project.description}</p>

        <ul className="work-project__services" aria-label="Project services">
          {project.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>

        <a
          className="work-project__link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          Visit live project <ArrowIcon />
        </a>
      </div>

      <a
        className="work-project__visual"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit the ${project.client} website`}
      >
        <div className="work-project__browser">
          <div className="work-project__browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <small>{project.url.replace("https://", "")}</small>
          </div>
          <img src={project.desktop} alt={`${project.client} desktop website`} />
        </div>

        <div className="work-project__phone">
          <span className="work-project__phone-speaker" />
          <img src={project.mobile} alt={`${project.client} mobile website`} />
        </div>

        <span className="work-project__view">
          View project <ArrowIcon />
        </span>
      </a>
    </Reveal>
  );
}

export function HomeWork() {
  return (
    <section className="home-work" id="selected-work">
      <div className="home-work__intro">
        <Reveal className="home-work__label">
          Selected work
        </Reveal>

        <Reveal as="h2" direction="up" delay={80}>
          Built for the
          <br />
          <em>real world.</em>
        </Reveal>

        <Reveal as="p" delay={150}>
          Good technology should do more than look impressive. It should make a
          business clearer, faster and easier to run.
        </Reveal>
      </div>

      <div className="home-work__projects">
        {projects.map((project) => (
          <ProjectShowcase key={project.number} project={project} />
        ))}
      </div>

      <Reveal className="home-work__footer">
        <span>Two businesses. Two very different problems.</span>
        <strong>One approach: build what works.</strong>
      </Reveal>
    </section>
  );
}
