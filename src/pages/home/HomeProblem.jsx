import { Link } from "react-router-dom";
import { Reveal } from "../../components/Reveal";
import "./HomeProblem.css";

const problems = [
  "Manual processes",
  "Disconnected systems",
  "An idea without a product",
  "A website that no longer works",
];

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" /></svg>;
}

export function HomeProblem() {
  return (
    <section className="home-problem">
      <div className="home-problem__top">
        <Reveal className="home-problem__label">
          <span>04</span>
          The Venture approach
        </Reveal>

        <Reveal as="p" delay={100}>
          You don’t need to arrive with a technical specification. Start with
          what is slowing you down, getting in the way or keeping you awake.
        </Reveal>
      </div>

      <Reveal className="home-problem__statement">
        <span>Bring us the</span>
        <strong>problem.</strong>
        <span>We’ll build what</span>
        <em>comes next.</em>
      </Reveal>

      <Reveal className="problem-engine" delay={120}>
        <div className="problem-engine__input">
          <span className="problem-engine__caption">Input / What isn’t working</span>
          <div className="problem-engine__problems">
            {problems.map((problem, index) => (
              <span key={problem} style={{ "--item": index }}>
                <small>0{index + 1}</small>
                {problem}
              </span>
            ))}
          </div>
        </div>

        <div className="problem-engine__core" aria-hidden="true">
          <span className="problem-engine__ring problem-engine__ring--outer" />
          <span className="problem-engine__ring problem-engine__ring--inner" />
          <div className="problem-engine__v">
            <b style={{ fontWeight: 500, transform: "rotate(-45deg)" }}>V</b>
          </div>
          <span className="problem-engine__beam problem-engine__beam--in" />
          <span className="problem-engine__beam problem-engine__beam--out" />
        </div>

        <div className="problem-engine__output">
          <span className="problem-engine__caption">Output / Built around you</span>
          <div className="problem-engine__solution">
            <span>Clearer operations</span>
            <span>Connected technology</span>
            <span>Room to grow</span>
            <strong>One useful solution.</strong>
          </div>
        </div>
      </Reveal>

      <Reveal className="home-problem__bottom" delay={120}>
        <div>
          <span>Not sure what you need?</span>
          <p>That’s usually the best place to start.</p>
        </div>
        <Link to="/contact">
          Talk through your problem <Arrow />
        </Link>
      </Reveal>

      <div className="home-problem__marquee" aria-hidden="true">
        <div>
          <span>STRATEGY</span><i /> <span>DESIGN</span><i />
          <span>ENGINEERING</span><i /> <span>DELIVERY</span><i />
          <span>STRATEGY</span><i /> <span>DESIGN</span><i />
          <span>ENGINEERING</span><i /> <span>DELIVERY</span><i />
          <span>STRATEGY</span><i /> <span>DESIGN</span><i />
          <span>ENGINEERING</span><i /> <span>DELIVERY</span><i />
          <span>STRATEGY</span><i /> <span>DESIGN</span><i />
          <span>ENGINEERING</span><i /> <span>DELIVERY</span><i />
        </div>
      </div>
    </section>
  );
}
