import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState(queryParams.get('city') || "");
  const [company, setCompany] = useState("");
  const [complaints, setComplaints] = useState("");
  const [experience, setExperience] = useState("");
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [noDoctorsAvailable, setNoDoctorsAvailable] = useState(false);

  const fetchDoctors = async () => {
    try {
      let apiUrl = 'https://mocki.io/v1/e2d8c714-c596-41c3-a96a-3181c1752be2';

      // Check if there is a 'city' parameter in the URL
      const urlSearchParams = new URLSearchParams(window.location.search);
      const cityParam = urlSearchParams.get('city');

      if (cityParam) {
        apiUrl += `?city=${cityParam}`;
        setCity(cityParam);
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      const filteredDoctors = data.doctors.filter(doctor => doctor.city.toLowerCase() === city.toLowerCase());

      if (filteredDoctors.length > 0) {
        setAvailableDoctors(filteredDoctors);
        setNoDoctorsAvailable(false);
      } else {
        setAvailableDoctors([]);
        setNoDoctorsAvailable(true);
      }

    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Required";
    } else if (patientName.trim().length < 5) {
      errors.patientName = "Patient name must be at least 5 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (!age.trim()) {
      errors.age = "Required";
    } else if (parseInt(age, 10) < 0 || parseInt(age, 10) > 150) {
      errors.age = "Invalid age";
    }

    if (!city.trim()) {
      errors.city = "Required";
    }

    if (!complaints.trim()) {
      errors.complaints = "Required";
    }

    if (parseInt(age, 10) >= 40 && !experience.trim()) {
      errors.experience = "Required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setAge("");
    setCity("");
    setCompany("");
    setComplaints("");
    setExperience("");
    setFormErrors({});
    setIsSubmitted(true);

  };

  useEffect(() => {
    if (isSubmitted) {
      // Delay the navigation for 3 seconds to display the success message
      const timeoutId = setTimeout(() => {
        navigate('/');
      }, 3000);
  
      // Clear the timeout if the component is unmounted before the timeout completes
      return () => clearTimeout(timeoutId);
    }
  }, [isSubmitted, navigate]);
  

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-title">
          <span>Appointment Form </span>
        </h2>
        <p className="appointment-message" style={{ display: isSubmitted ? "block" : "none" }}>
            Appointment has been done. Thank You
          </p>
        <form className="form-details" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            {formErrors.age && <p className="error-message">{formErrors.age}</p>}
          </label>

          <br />
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              disabled={queryParams.has('city')}
            />
            {formErrors.city && <p className="error-message">{formErrors.city}</p>}
          </label>

          <br />
          <label>
            Company:
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>

          <br />
          <label>
            Chief Complaints:
            <textarea
              value={complaints}
              onChange={(e) => setComplaints(e.target.value)}
              required
            ></textarea>
            {formErrors.complaints && <p className="error-message">{formErrors.complaints}</p>}
          </label>

          <br />
          {parseInt(age, 10) >= 40 && (
            <label>
              Previous Experience with Physiotherapy:
              <textarea
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              ></textarea>
              {formErrors.experience && <p className="error-message">{formErrors.experience}</p>}
            </label>
          )}

          <br />  
          <label>
            Available Doctors for Your City:
            {noDoctorsAvailable ? (
              <p>No doctors available for your city.</p>
            ) : (
              <ul>
                {availableDoctors.map((doctor, index) => (
                  <li key={index}>
                    {doctor.name} - {doctor.expertise} - {doctor.city}
                  </li>
                ))}
              </ul>
            )}
          </label>

          <br />
          <button type="submit" className="appointment-btn">
            Confirm Your Appointment
          </button>

          
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
