import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import "./NotFoundPage.css";

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Venture Technologies</title>

        <meta
          name="description"
          content="The page you're looking for could not be found."
        />

        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="not-found">
        <section className="not-found__hero">
          <Reveal className="not-found__status">
            <span>Error / 404</span>
            <i />
            Route not found
          </Reveal>

          <div className="not-found__grid">
            <div className="not-found__content">
              <Reveal as="h1" direction="up" delay={70}>
                Wrong turn.
                <br />
                <em>Let’s get you back.</em>
              </Reveal>

              <Reveal as="p" delay={140}>
                The page you’re looking for doesn’t exist, has moved, or the
                address isn’t quite right.
              </Reveal>

              <Reveal className="not-found__actions" delay={210}>
                <Link to="/" className="not-found__primary">
                  Back to Venture <Arrow />
                </Link>

                <Link to="/contact" className="not-found__secondary">
                  Start a project
                </Link>
              </Reveal>
            </div>

            <Reveal
              className="not-found__visual"
              direction="right"
              delay={100}
            >
              <div className="not-found__visual-head">
                <span>Venture / Navigation system</span>
                <b>404</b>
              </div>

              <div className="not-found__visual-stage">
                <span className="not-found__grid-lines" />

                <div className="not-found__signal">
                  <span>4</span>
                  <i>0</i>
                  <span>4</span>
                </div>

                <div className="not-found__route">
                  <span />
                  <span />
                  <span />
                </div>

                <p>REQUESTED ROUTE / UNKNOWN</p>
              </div>

              <div className="not-found__visual-foot">
                <span>
                  <i />
                  Recovery available
                </span>

                <b>V.404</b>
              </div>
            </Reveal>
          </div>

          <div className="not-found__bottom">
            <span>VENTURE TECHNOLOGIES</span>
            <span>BUILD / SOLVE / IMPROVE</span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}