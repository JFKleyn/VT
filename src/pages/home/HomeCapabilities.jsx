import { useState } from "react";
import { Reveal } from "../../components/Reveal";
import "./HomeCapabilities.css";

const capabilities = [
  {
    number: "01",
    title: "Websites",
    label: "Digital presence",
    description:
      "Strategic, high-performance websites that make the right first impression and turn attention into meaningful action.",
    outputs: ["Company websites", "E-commerce", "Portals", "Landing pages"],
    visual: "browser",
  },
  {
    number: "02",
    title: "Custom software",
    label: "Business systems",
    description:
      "Purpose-built systems that replace spreadsheets, manual processes and software that no longer fits the way your business works.",
    outputs: ["Admin systems", "Client portals", "Dashboards", "Internal tools"],
    visual: "system",
  },
  {
    number: "03",
    title: "Mobile applications",
    label: "Products in your pocket",
    description:
      "Focused mobile experiences designed around the people who actually use them—whether they are customers, teams or people in the field.",
    outputs: ["Business apps", "Customer apps", "Field tools", "MVPs"],
    visual: "mobile",
  },
  {
    number: "04",
    title: "Automations",
    label: "Less repetition",
    description:
      "Connected workflows that move information between your systems, remove repetitive work and keep customers and teams informed.",
    outputs: ["Integrations", "Notifications", "Data flows", "AI workflows"],
    visual: "automation",
  },
];

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" /></svg>;
}

function CapabilityVisual({ type, number }) {
  return (
    <div className={`capability-visual capability-visual--${type}`} aria-hidden="true">
      <div className="capability-visual__top">
        <span>Venture / Capability</span><strong>{number}</strong>
      </div>
      <div className="capability-visual__stage">
        {type === "browser" && <><div className="visual-browser"><i/><i/><i/><span/><span/><b/></div><div className="visual-cursor">↗</div></>}
        {type === "system" && <><div className="visual-panel visual-panel--one"><span/><span/><span/></div><div className="visual-panel visual-panel--two"><i/><i/><i/><i/></div><svg className="visual-chart" viewBox="0 0 260 100"><path d="M5 83 C45 76,54 41,92 57 S150 83,180 40 S225 20,255 10"/></svg></>}
        {type === "mobile" && <><div className="visual-phone"><i/><span/><span/><b/></div><div className="visual-notification"><i/>Ready to launch</div></>}
        {type === "automation" && <><div className="visual-node visual-node--one">01</div><div className="visual-node visual-node--two">02</div><div className="visual-node visual-node--three">03</div><svg className="visual-flow" viewBox="0 0 400 250"><path d="M80 65 C175 65 125 185 220 185 S285 75 340 75"/></svg></>}
      </div>
      <div className="capability-visual__status"><i/>System ready <span>V.01</span></div>
    </div>
  );
}

export function HomeCapabilities() {
  const [active, setActive] = useState(0);
  const selected = capabilities[active];

  return (
    <section className="home-capabilities" id="capabilities">
      <div className="home-capabilities__heading">
        <Reveal className="home-capabilities__label"><span>03</span>What we build</Reveal>
        <Reveal as="h2" direction="up" delay={80}>Different problems.<br/><em>The right tools.</em></Reveal>
        <Reveal as="p" delay={150}>We choose the technology around the problem, not the other way around.</Reveal>
      </div>

      <div className="home-capabilities__body">
        <div className="capability-list">
          {capabilities.map((capability, index) => (
            <Reveal
              as="button"
              type="button"
              key={capability.number}
              className={`capability-row ${active === index ? "is-active" : ""}`}
              delay={index * 65}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-expanded={active === index}
            >
              <span className="capability-row__number">{capability.number}</span>
              <span className="capability-row__main">
                <small>{capability.label}</small>
                <strong>{capability.title}</strong>
                <span className="capability-row__mobile-copy">{capability.description}</span>
              </span>
              <span className="capability-row__arrow"><Arrow /></span>
            </Reveal>
          ))}
        </div>

        <Reveal className="home-capabilities__display" direction="right" delay={160}>
          <CapabilityVisual type={selected.visual} number={selected.number} />
          <div className="home-capabilities__copy" key={selected.number}>
            <p>{selected.description}</p>
            <ul>{selected.outputs.map((output) => <li key={output}>{output}</li>)}</ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
