// src/components/Navbar.js
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      const scrollPos = window.pageYOffset + 100;
      sections.forEach((sec) => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          setActiveSection(sec.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="logo-link">ELECTRIC XTRA</a>
        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          {["home", "features", "about"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${activeSection === id ? "active" : ""}`}
                onClick={() => setMenuActive(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className={`menu-toggle ${menuActive ? "active" : ""}`} onClick={() => setMenuActive(!menuActive)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}
