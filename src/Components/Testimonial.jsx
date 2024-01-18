import React, { useState } from 'react';
import Logo from "../assets/person.jpg"

const testimonialsData = [
  {
    name: 'Atishay Jain',
    rating: 5,
    review: 'The service was good. The physiotherapist made me comfortable and guided through the exercise.',
    date: 'October 19, 2023',
  },
  {
    name: 'Swati Dokania',
    rating: 5,
    review: 'Amazing physiotherapy service with a great support team. I had booked treatment for my mother - who suffers from bilateral knee osteoarthritis The sessions were guided by Dr. Sheetal Mundhada - who was polite & listened to our concerns patiently . Treatment was started in graded manner for her as her knee movements were restricted - when we started but now she is able to walk pain free , able to use stairs - just after 4 weeks of session !! Kudos to the support team - which is always available to help my mother with any technological glitch during the sessions!',
    date: 'May 04, 2023',
  },

  {
    name: 'Mahaditya Kaushik',
    rating: 5,
    review: 'I consulted Fix Health for my ankle pain. Initially I was not sure how treatment will go but overall the whole experience exceeded my expectations Doctors are really competent, experienced and friendly.'
  ,
    date: 'June 30, 2023',
  },
  {
    name: 'Sejal Chandak',
    rating: 5,
    review: 'Fix Health provides really convenient online Physiotherapy consultation as well as sessions according to the time acceptable to you. Since the sessions are online, you are able to do the exercises anytime, anywhere, which saved a lot of travel time. All the physiotherapists are well trained, they give you proper time, understand your problems and device a personalized plan for you. ',
    date: 'November 01, 2022',
  },
  {
    name: 'Ashhar Akhlaque',
    rating: 5,
    review: 'I took sessions for shoulder pain here. Not only did I get relief from the pain, I also learnt how to set up my ergonomics correctly and what basic exercises I should continue doing on my own',
    date: 'May 04, 2023',
  },
  {
    name: 'Mahaditya Kaushik',
    rating: 5,
    review: 'I consulted Fix Health for my ankle pain. Initially I was not sure how treatment will go but overall the whole experience exceeded my expectations Doctors are really competent, experienced and friendly.'
  ,
    date: 'June 30, 2023',
  },
  {
    name: 'Ashhar Akhlaque',
    rating: 5,
    review: 'I took sessions for shoulder pain here. Not only did I get relief from the pain, I also learnt how to set up my ergonomics correctly and what basic exercises I should continue doing on my own',
    date: 'May 04, 2023',
  },
  {
    name: 'Mahaditya Kaushik',
    rating: 5,
    review: 'I consulted Fix Health for my ankle pain. Initially I was not sure how treatment will go but overall the whole experience exceeded my expectations Doctors are really competent, experienced and friendly.'
  ,
    date: 'June 30, 2023',
  },
  {
    name: 'Ashhar Akhlaque',
    rating: 5,
    review: 'I took sessions for shoulder pain here. Not only did I get relief from the pain, I also learnt how to set up my ergonomics correctly and what basic exercises I should continue doing on my own',
    date: 'May 04, 2023',
  },
  
];

const Testimonial = () => {
  const [review, setReview] = useState(0);

  const backBtnClick = () => {
    setReview((prevReview) => (prevReview <= 0 ? testimonialsData.length - 1 : prevReview - 1));
  };

  const frontBtnClick = () => {
    setReview((prevReview) => (prevReview >= testimonialsData.length - 1 ? 0 : prevReview + 1));
  };

  const getCurrentReview = () => {
    return testimonialsData[review];
  };

  const currentReview = getCurrentReview();

  return (
    <div className="testimonial-section" id="testimonial">
      <div className="testimonial-container">
      <h2>Testimonials</h2>
        <div className="testimonial">
          <div className="testimonial-content">
        
            <img className="testimonial-image" src={Logo} alt={`${currentReview.name}'s Image`} />
            <div className="testimonial-details">
              <h3>{currentReview.name}</h3>
              <p>Rated {currentReview.rating} out of 5 stars</p>
              <p>{currentReview.review}</p>
              <p>Date of experience: {currentReview.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-buttons">
        <button className="testimonial-nav-btn" onClick={backBtnClick}>
          <span className="arrow">&larr;</span> Prev
        </button>
        <button className="testimonial-nav-btn" onClick={frontBtnClick}>
          Next <span className="arrow">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;