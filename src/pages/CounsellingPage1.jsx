import React, { useState } from 'react';
import '../styles/CounsellingPage1.css';
import counsellingImage from '../assets/images/counselling1.png';

const CounsellingPage1 = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to toggle the form visibility
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Function to toggle form visibility
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Here, you can add the logic to store data to a backend or use APIs in the future.

    // Close the form after submission
    setIsFormOpen(false);
  };

  return (
    <div className="counselling-container1">
      <div className="counselling-image">
        <img src={counsellingImage} alt="Career Counseling" />
      </div>
      <div className="counselling-content">
        <h1>Career & Subject Assessment | Personalised Guidance | Subject & Career Mapping</h1>
        <div className="counselling-details">
          <h2>Explore Careers</h2>
          <p>Discover a wide range of career options based on your skills, interests, and personality. Our expert team will guide you towards making informed decisions about your future.</p>
          
          <h2>Subject Selection Guidance</h2>
          <p>Understand which subjects align best with your career aspirations. Get personalized advice to choose the right subjects that open doors to your desired profession.</p>
          
          <h2>Career Mapping</h2>
          <p>We provide tailored recommendations, helping you connect your academic journey with your long-term career goals. Set yourself up for success with our personalized career roadmap.</p>
        </div>
        <button className="btn book-btn" onClick={toggleForm}>Book Your Session</button>
      </div>

      {/* Floating Form */}
      {isFormOpen && (
        <div className="floating-form-overlay">
          <div className="floating-form">
            <button className="close-btn" onClick={toggleForm}>X</button>
            <h2>Leave us a Message and we will call you</h2>
            <form onSubmit={handleSubmit}>
              <label>Please Enter Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label>Please Enter Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Please Enter Your Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default CounsellingPage1;
