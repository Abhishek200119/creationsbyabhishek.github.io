import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page-container">
      <div className="contact-page-content">
        <div className="contact-header">
          <h1>Let's Connect!</h1>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
        </div>
        <div className="contact-info">
          {/* Phone */}
          <div className="contact-card">
            <i className="fas fa-phone-alt"></i>
            <h3>Phone</h3>
            <p>+91 6006210353</p>
          </div>
          {/* Email */}
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <a href="mailto:rajputabhi192001@gmail.com">rajputabhi192001@gmail.com</a>
          </div>
          {/* LinkedIn */}
          <div className="contact-card">
            <i className="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/abhishek-rajput-b65228261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abhishek Rajput
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;