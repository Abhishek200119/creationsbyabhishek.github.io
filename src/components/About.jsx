import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page-container">
      <div className="about-page">
        <div className="left-section">
          <img src="./profile.jpg" alt="Profile" className="profile-picture" />
          <h1>Abhishek Rajput</h1>
          <p>UI/UX Designer</p>
          <p className="summary">
            Passionate UI and front-end designer with a keen interest in enhancing 
            developer tooling and solving complex problems. Specializes in product design, web design, 
            illustration, wireframing, motion design, and user research.
          </p>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Phone: </strong> +91-6006210353</p>
            <p><strong>Email: </strong> <a href="mailto:rajputabhi192001@gmail.com">rajputabhi192001@gmail.com</a></p>
            <p><strong>Location: </strong> Bengaluru, India</p>
            <p><strong>LinkedIn: </strong> <a href="https://linkedin.com/in/abhishek-rajput-b65228261" target="_blank" rel="noopener noreferrer">linkedin.com/in/abhishek-rajput</a></p>
          </div>
        </div>
        <div className="right-section">
          <div className="section">
            <h2>Professional Experience</h2>
            <div className="experience-item">
              <h3>Nuts And Delish Pvt Ltd. – Product Designer and UI Designer</h3>
              <p>Bengaluru, India | Aug 2024 - Present</p>
              <ul>
                <li>Designed and developed creative packaging solutions for all products, enhancing brand identity and market presence.</li>
                <li>Created visually appealing graphics and layouts for social media campaigns, ensuring cohesive branding across platforms.</li>
                <li>Collaborated with internal teams to conceptualize and execute designs that met marketing and production needs.</li>
                <li>Maintained brand consistency across packaging, promotional materials, and social media visuals.</li>
              </ul>
            </div>
            <br/>
            <div className="experience-item">
              <h3>ANZ Bank – Graduate Technical Intern</h3>
              <p>Bengaluru, India | Dec 2023 - Aug 2024</p>
              <ul>
                <li>Monitored user logs and security administrators for the Singapore branch.</li>
                <li>Aggregated and analyzed data using Excel, generating detailed reports for senior management.</li>
                <li>Collaborated with the Risk Management team to refine risk assessment criteria and supported audits and strategic planning.</li>
              </ul>
            </div>
          </div>
          <div className="section">
            <h2>Technical Skills</h2>
            <ul>
              <li><strong>Design:</strong> Product Design, UI Design, Web Design, Illustration, Wireframing, Motion Design, User Research</li>
              <li><strong>Tools:</strong> Figma, Adobe Creative Studios, CorelDRAW</li>
              <li><strong>Development:</strong> HTML, CSS, JavaScript, ReactJS</li>
            </ul>
          </div> 
          <div className="section">
            <h2>Education</h2>
            <p><strong>Bachelor of Engineering in Information Science</strong></p>
            <p>BMS Institute of Technology and Management, Bengaluru | May 2024</p>
          </div>

          <div className="section">
            <h2>Certifications and Achievements</h2>
            <ul>
              <li>Salesforce Design Days 2023 Challenge, Bengaluru, 2023</li>
              <li>UI/UX Design Certificate, Accenture, 2023</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;