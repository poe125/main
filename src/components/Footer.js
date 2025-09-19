// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          {["Privacy Policy", "Terms of Service", "Careers"].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, "")}`}>{link}</a>
          ))}
        </div>
        <p className="copyright">
          © 2025 ELECTRIC XTRA. All rights reserved. Building tomorrow, today. | Design:{" "}
          <a href="https://templatemo.com" target="_blank" rel="nofollow noopener">TemplateMo</a>
        </p>
      </div>
    </footer>
  );
}
