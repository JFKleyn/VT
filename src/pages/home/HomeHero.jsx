
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/Logo.webp";
import "./HomeHero.css";



export function HomeHero() {


  return (
    <>
      <Header />
      <div className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-header">
          <img src={logoWhite} alt="Logo" className="logoWhite hero-line" />

          <h1 className="hero-line">
            Premium Web Design &<br />
            Web Development That<br />
            <span>Converts</span>
          </h1>

          <p className="hero-line">
            We design and develop premium custom websites for businesses in Durban and across South Africa, combining strategy, modern technology, and exceptional design.
          </p>

          <div className="hero-buttons">
            <Link to="/contact">
              <button>
                <p style={}>Book a Consultation</p>
              </button>
              
            </Link>

            <Link to="/services">
              <button className="product-button">
                <p>Our Services</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="hero-container">
    <h1>
      <span className="hero-line">Premium Web Design &</span>
      <span className="hero-line">Web Development That</span>
      <span className="hero-line accent">Converts</span>
    </h1>
    <p className="hero-line">
      We design and develop premium custom websites for businesses in Durban and across South Africa, combining strategy, modern technology, and exceptional design.
    </p>
    <small className="hero-line">
      Based in South Africa • Working Globally 
    </small>
    <div className="btn-container">
      <div className="hero-line hero-btn-wrap">
    <a href="contact/index.html" className="btn">
      Book a Consultation
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
      </svg>
    </a>
  </div>
       <button className="btn odd hero-line"> 
         View Our Work 
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.<path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg> 
       </button> 
    </div> */}
    {/* <div className="diamond one"></div>
    <div className="diamond two"></div>
  </div> */}
    </>
  );
}