import React from "react";
import "../styles/style.css";

const Counsellor = () => {
    return(
    <>
      <section className="career-guidance">
        <div className="text">
          <h2>How career guidance can help you?</h2>
          <p>
            Most of the students find difficulty in choosing the right stream,
            course, college, or country to study. Career Counseling brings the
            clarity to choose the right career path.
          </p>
          <p>
            An expert Career Counselor guides you with their professional
            experience, having a strong understanding of industry trends and
            thinking with a long-term approach which suits you the best.
          </p>
          <button>Connect to a Counselor</button>
        </div>
        <div className="image">
          <img
            src="https://i0.wp.com/www.mindgroom.com/wp-content/uploads/2021/02/Mindgroom_career_counselling_1..gif?resize=426%2C300&ssl=1"
            alt="Career Guidance"
          />
        </div>
      </section>
    </>
  );
};

export default Counsellor;
