// src/components/Card.js
import React from "react";

export default function Card({ label, url }) {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="card">
        {label}
      </a>
    );
  }
  return <div className="card">{label}</div>;
}
