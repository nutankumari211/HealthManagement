import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import BookingForm from "../Components/BookingForm";
import Testimonial from "../Components/Testimonial";
import Doctor from "../Components/Doctor";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <HeroSection />
      <About />
      <Testimonial />
      <Doctor />
      <Footer />
    </div>
  );
}

export default Home;