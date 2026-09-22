import Logo from "../../assets/Logo.webp";
import Hero from "../../assets/Venture-Hero.webp";
import "./AboutPage.css";

export function AboutHero() {
  return (
    <div class="about-hero" style={{ backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat" }}>
      <div className="hero-overlay"></div>
      <div className="hero-header" >
            
      <img src={Logo} alt="Logo2" className="logo hero-line" />
      <h1>
        About Venture Technologies
      </h1>
      <p class="hero-line">
        We're a team of designers, developers, and strategists dedicated to creating exceptional digital experiences that drive real business results.
      </p>
      </div>
  </div>
  )
} 