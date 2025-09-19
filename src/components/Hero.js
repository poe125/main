// src/components/Hero.js
import React, { useEffect, useState } from "react";

export default function Hero() {
  const textSets = [
    { title: "Airi Kokuryo", subtitle: "Doshisha University NISLab, Senior Student" }
    // { title: "BEYOND LIMITS", subtitle: "Where technology meets infinite possibilities" },
    // { title: "ELECTRIC DREAMS", subtitle: "Powering tomorrow's digital revolution today" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="glitch-text">{textSets[currentIndex].title}</h1>
        <p className="subtitle">{textSets[currentIndex].subtitle}</p>
      </div>
      <div className="cta-container">
        <a href="#features" className="cta-button cta-primary">背景</a>
        <a href="#about" className="cta-button cta-secondary">About Me</a>
      </div>
    </section>
  );
}
