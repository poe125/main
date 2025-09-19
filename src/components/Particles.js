// src/components/Particles.js
import React, { useEffect, useRef } from "react";
import "../assets/templatemo-electric-xtra.css"; // CSS読み込み

export default function Particles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const particlesContainer = containerRef.current;
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 15 + "s";
      particle.style.animationDuration = (Math.random() * 10 + 15) + "s";
      particle.style.background = Math.random() > 0.5 ? "#00B2FF" : "#FF5E00";
      particlesContainer.appendChild(particle);
    }
  }, []);

  return <div id="particles" ref={containerRef}></div>;
}
