import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Logo.webp";
import "./Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className={`header ${scrolled ? "scrolled" : ""}`}>
        <img src={logo} alt="Logo" className="logo" />
        <div className="navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="header-buttons">
          <Link to="/contact">
            <button>GET A QUOTE</button>
          </Link>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="FontawesomeIcon"
          id="bar"
          onClick={toggleMenu}
        />
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <FontAwesomeIcon icon={faXmark} onClick={closeMenu} id="xmark" />

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}
