// Doctor.jsx
import React, { useEffect, useState } from "react";
import DoctorDetail from "./DoctorDetail";

function Doctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch data from the provided API
    fetch("https://mocki.io/v1/e2d8c714-c596-41c3-a96a-3181c1752be2")
      .then((response) => response.json())
      .then((data) => setDoctors(data.doctors))
      .catch((error) => console.error("Error fetching doctors data:", error));
  }, []);

  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Highly skilled physiotherapists with diverse expertise</span>
        </h3>

        <p className="dt-description">
          Our physiotherapists have the experience of working at India's Top Hospitals
          and are equipped with cutting-edge technology developed by a team of engineers
          from top institutes like IIT Bombay, BITS Pilani, IIT Madras to provide Total
          Pain Relief to our Patients
        </p>
      </div>

      <div className="dt-cards-content">
        {doctors.map((doctor, index) => (
          <DoctorDetail key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default Doctor;
