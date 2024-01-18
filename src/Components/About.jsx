import React from "react";
import FixHealthTeamImage from "../assets/doctorpatient.jpg";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Dedicated to Enhancing Lives Through Pain-Free Solutions</h2>
          <p className="about-mission">
            Discover the transformative power of physiotherapy — a path to unlocking your body's potential, restoring mobility, and embracing a life of strength and vitality. Because your well-being deserves extraordinary care.
          </p>
        </div>
         
        <div className="about-image">
          <img src={FixHealthTeamImage} alt="Fix Health Team" />
        </div>
      </div>

      <div className="highlights-section">
        <div className="highlight-item">
          <h3>Over 100,000 Sessions</h3>
          <p>Providing convenient and effective care to our patients.</p>
        </div>

        <div className="highlight-item">
          <h3>100+ Cities Reached</h3>
          <p>Serving patients across the country.</p>
        </div>

        <div className="highlight-item">
          <h3>Patient Satisfaction</h3>
          <p>Outstanding feedback with a rating of 3.8/4 from our patients.</p>
        </div>
      </div>

      <div className="team-section">
        <div className="team-info">
          <div className="team-member">
            <h3>Qualifications & Experience</h3>
            <p>Our team includes gold medalists in physiotherapy with 30+ years of combined experience.</p>
          </div>

          <div className="team-member">
            <h3>Professional Background</h3>
            <p>Our professionals have extensive experience with renowned institutions like AIIMS, Fortis, CMC Vellore, etc.</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Call: 1800-890-2102</p>
        <p>WhatsApp: +91-960-778-8208</p>
        <p>Available from 8 AM - 9 PM, 7 days a week.</p>
      </div>

      <div className="join-section">
        <h2>Join Our Mission</h2>
        <p>If you're passionate about physiotherapy, join us in our mission to make lives pain-free.</p>
      </div>
    </div>
  );
}

export default About;
