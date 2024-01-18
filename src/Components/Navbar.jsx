import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate  } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  const [nav, setNav] = useState(false);
  

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          FixHealth <span className="navbar-sign"></span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#testimonial" className="navbar-links">
            Testimonial
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>
        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
           Book Appointment
        </button>
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#testimonial">
              Testimonial
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
          <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
           Book Appointment
        </button>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;