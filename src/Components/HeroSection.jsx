import React, { useEffect, useState } from "react";
import DoctorImage from "../assets/doctor-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

//   const handleBookAppointmentClick = () => {
//     navigate("/appointment");
//   };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-container dark-theme">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-headline">
          Discover the transformative power of physiotherapy — a path to unlocking your body's potential, restoring mobility, 
          and embracing a life of strength and vitality. Because your well-being deserves extraordinary care
          </p>
          <h2 className="hero-title">
            Schedule Your Consultation Today For Free
          </h2>
        </div>

        <div className="hero-image">
          <img className="hero-doctor-image" src={DoctorImage} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${showScrollButton ? "visible" : ""}`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  );
}

export default Hero;
