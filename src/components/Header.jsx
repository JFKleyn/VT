import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.webp";
import "./Header.css";

const links = [
  ["Services", "/services"],
  ["Projects", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M7 5h8v8" />
  </svg>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link
          className="site-header__brand"
          to="/"
          aria-label="Venture home"
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt="Venture" />
        </Link>
        <nav className="site-header__nav" aria-label="Main navigation">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `site-header__link${isActive ? " is-active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="site-header__cta" to="/contact">
          Start a project <Arrow />
        </Link>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <nav
          aria-label="Mobile navigation"
          onClick={(event) => event.stopPropagation()}
        >
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <Link
            className="mobile-menu__cta"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Start a project <Arrow />
          </Link>
        </nav>
        <div className="mobile-menu__footer">
          <span>Durban, South Africa</span>
          <span>Working worldwide</span>
        </div>
      </div>
    </header>
  );
}
