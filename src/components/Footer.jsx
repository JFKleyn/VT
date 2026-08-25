import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import Logo from "../assets/Logo.webp";

export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-content2">
            <img src={Logo} alt="Logo2" className="logo" />
            <p>Building premium digital experiences for forward-thinking businesses. Strategic. Scalable. Built to last.</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/18wJcobAmZ/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
              </a>

              <a href="https://www.instagram.com/venturetechnologies.co/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
              </a>

              <a href="https://www.linkedin.com/company/venture-technologies-co/?viewAsMember=true" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="footer-icon" icon={faLinkedin} />
              </a>

              <a
                href="https://wa.me/27814605994"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="footer-icon" icon={faWhatsapp} />
              </a>
            </div>
          </div>
          <div className="footer-content">
            <h4>Quick Links</h4>
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className="footer-content">
            <h4>Contact</h4>
            <div className="contact-item">
              <FontAwesomeIcon className="footer-icon" icon={faPhone} />
              <span>+27 81 460 5994</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
              <span>johan@venturetechnologies.co</span>
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="company">
            <small>
              © 2026 Venture Technologies | All right
              reserved
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
