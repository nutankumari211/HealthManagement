import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#team">Our Team</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-social">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <p>&copy; 2024 FixHealth. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
