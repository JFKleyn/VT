import "./HomeProcess.css";

export function HomeProcess() {
  return (
    <div className="our-process">
      <div className="header-process reveal">
        <h2>Our Process</h2>
        <p>A proven methodology for delivering exceptional results</p>
      </div>

      <div className="process-container">
        <div className="process reveal">
          <div className="num">01</div>
          <h3>Discover</h3>
          <p>Understanding your goals and audience</p>
        </div>

        <div className="process reveal">
          <div className="num">02</div>
          <h3>Design</h3>
          <p>Crafting the perfect user experience</p>
        </div>

        <div className="process reveal">
          <div className="num">03</div>
          <h3>Build</h3>
          <p>Developing with precision and care</p>
        </div>

        <div className="process reveal">
          <div className="num">04</div>
          <h3>Launch</h3>
          <p>Deploying your solution seamlessly</p>
        </div>

        <div className="process reveal">
          <div className="num">05</div>
          <h3>Support</h3>
          <p>Ongoing optimization and maintenance</p>
        </div>
      </div>

      <div className="diamond three"></div>
      <div className="diamond four"></div>
      <div className="diamond five"></div>
    </div>
  );
}
