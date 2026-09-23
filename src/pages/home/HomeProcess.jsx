import { Reveal } from "../../components/Reveal";
import "./HomeProcess.css";

const stages = [
  { number: "01", title: "Discover", eyebrow: "Find the real problem", description: "We start with your business, your people and what is getting in the way. No technical brief required.", outputs: ["Goals", "Users", "Pain points"] },
  { number: "02", title: "Define", eyebrow: "Shape the right solution", description: "We turn what we learn into a focused plan, what to build, how it should work and what success looks like.", outputs: ["Scope", "Roadmap", "Architecture"] },
  { number: "03", title: "Design & build", eyebrow: "Make it useful", description: "Design and engineering move together, creating a polished product that is intuitive, reliable and built to grow.", outputs: ["UX & UI", "Development", "Testing"] },
  { number: "04", title: "Launch & improve", eyebrow: "Put it to work", description: "We launch carefully, watch how the solution performs and keep improving it as your business moves forward.", outputs: ["Deployment", "Support", "Iteration"] },
];

function StageSignal({ number }) {
  return <div className="process-stage__signal" aria-hidden="true"><span>{number}</span><i /><b>V</b></div>;
}

export function HomeProcess() {
  return (
    <section className="home-process" id="process">
      <div className="home-process__intro">
        <Reveal className="home-process__label">How we work</Reveal>
        <Reveal as="h2" direction="up" delay={80}>From uncertainty<br /><em>to something useful.</em></Reveal>
        <Reveal as="p" delay={150}>A clear, collaborative process that keeps the work focused and keeps you involved from the first conversation to launch.</Reveal>
        <Reveal className="home-process__status" delay={220}><i />One process. Built around the problem.</Reveal>
      </div>

      <div className="home-process__stages">
        <div className="home-process__rail" aria-hidden="true"><span /></div>
        {stages.map((stage, index) => (
          <Reveal as="article" className="process-stage" key={stage.number} direction="up" delay={index * 70}>
            <StageSignal number={stage.number} />
            <div className="process-stage__content">
              <span className="process-stage__eyebrow">{stage.eyebrow}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <ul>{stage.outputs.map((output) => <li key={output}>{output}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="home-process__footer" delay={120}>
        <span>Venture / Delivery system</span><strong>Clear at every stage.</strong><span>Strategy · Design · Engineering</span>
      </Reveal>
    </section>
  );
}
