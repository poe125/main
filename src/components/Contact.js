// src/components/Contact.js
import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {["name", "email", "subject", "message"].map((field) => (
              <div className="form-group" key={field}>
                <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                {field === "message" ? (
                  <textarea id={field} name={field} required />
                ) : (
                  <input type={field === "email" ? "email" : "text"} id={field} name={field} required />
                )}
              </div>
            ))}
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Connect With Me</h3>
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-details">
              <h4>Email</h4>
              <p>cguh1034@mail4.doshisha.ac.jp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
