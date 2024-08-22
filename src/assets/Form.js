import React, { useState } from 'react';
import './Form.css'; // Import the CSS for the form

function Form() {
  const [rating, setRating] = useState(null);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="form-container">
    <div className="container">
      <h1>Student Feedback</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="institute">Institute Name:</label>
        <input type="text" id="institute" name="institute" placeholder="College/School name" required />

        <label htmlFor="comment">Feedback (100-200 words):</label>
        <textarea id="comment" name="comment" required rows="6"></textarea>

        <div className="rate-institute">
          <label htmlFor="rating">Rate Your Institute:</label>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <React.Fragment key={value}>
                <input
                  type="radio"
                  id={`star${value}`}
                  name="rating"
                  value={value}
                  checked={rating === value}
                  onChange={() => handleStarClick(value)}
                />
                <label
                  htmlFor={`star${value}`}
                  className={`star ${rating >= value ? 'checked' : ''}`}
                  onClick={() => handleStarClick(value)}
                >
                  &#9733;
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Form;
