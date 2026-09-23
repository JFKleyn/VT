import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import Logo from "../assets/Logo.webp";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/venturetechnologies.co/", icon: faInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/venture-technologies-co/?viewAsMember=true", icon: faLinkedinIn },
  { label: "Facebook", href: "https://www.facebook.com/share/18wJcobAmZ/?mibextid=wwXIfr", icon: faFacebookF },
  { label: "WhatsApp", href: "https://wa.me/27814605994", icon: faWhatsapp },
];

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" /></svg>;
}

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <Link to="/" aria-label="Venture Technologies home">
            <img src={Logo} alt="Venture Technologies" />
          </Link>
          <p>
            A South African technology company building websites, software,
            applications and automations for businesses everywhere.
          </p>
          <span className="site-footer__status"><i />Available for selected projects</span>
        </div>

        <div className="site-footer__column">
          <span className="site-footer__heading">Explore</span>
          <nav aria-label="Footer navigation">
            {navigation.map((item, index) => (
              <Link to={item.to} key={item.label}>
                <small>0{index + 1}</small>
                <span>{item.label}</span>
                <Arrow />
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__column site-footer__contact">
          <span className="site-footer__heading">Start a conversation</span>
          <a className="site-footer__email" href="mailto:johan@venturetechnologies.co">
            johan@venturetechnologies.co <Arrow />
          </a>
          <a className="site-footer__phone" href="tel:+27814605994">+27 81 460 5994</a>

          <div className="site-footer__socials">
            {socialLinks.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.label}>
                <span className="site-footer__social-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span>{item.label}</span>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Venture Technologies. All rights reserved.</span>
        <span>South Africa / Worldwide</span>
        <button type="button" onClick={scrollToTop}>Back to top <span>↑</span></button>
      </div>
    </footer>
  );
}
