// DoctorDetail.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function DoctorDetail({ doctor }) {
  return (
    <div className="dt-card">
      <img src={doctor.image} alt={doctor.name} className="dt-card-img" />
      <p className="dt-card-name">{doctor.name}</p>
      <p className="dt-card-details">
        <span>Experience: {doctor.experience_years}Years</span><br/>
        <span>Expertise: {doctor.expertise}</span><br/>
        <span>Certifications: {doctor.certifications.join(", ")}</span>
      </p>
    </div>
  );
}

export default DoctorDetail;
