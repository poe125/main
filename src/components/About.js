// src/components/About.js
import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>

      {/* 技術・研究のブロック */}
      <div className="about-content">
        <div className="about-text">
          <h2>Pioneering the Digital Frontier</h2>
          <p>
            I am currently conducting research in drone technologies, focusing on networks, IoT, and UAV systems. My goal is to push the boundaries of innovation and apply my skills to real-world challenges.
          </p>
          <p>
            Combining technical expertise with creative problem-solving is at the core of my approach.
          </p>
        </div>
        <div className="about-visual">
          <div className="about-graphic"></div>
        </div>
      </div>

      {/* ボランティア・人とのつながり */}
      <div className="about-content" style={{ marginTop: "80px" }}>
        <div className="about-visual">
          <div className="about-graphic-alt">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
          </div>
        </div>
        <div className="about-text">
          <h2>Value of Human Connections</h2>
          <p>
            I have been actively involved in numerous volunteer activities, supporting university students and children with disabilities. These experiences have strengthened my belief in the importance of helping others and fostering strong human connections.
          </p>
          <p>
            Studying abroad and working in collaborative environments has shown me that personal growth and achievements are built upon the support and connections with others.
          </p>
        </div>
      </div>
    </section>
  );
}
