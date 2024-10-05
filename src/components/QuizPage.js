import React, { useState, useEffect } from "react";
import "../styles/QuizPage.css";
import quizzesData from "../data/quizzes.json";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setQuizzes(quizzesData);
  }, []);

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <div className="overlay"></div> {/* Dark overlay */}
        <div className="header-content">
          <h1>Unlock Your Potential</h1>
          <h2>Take the first step towards your ideal career</h2>
          <button className="btn request-btn">Request a Career Test</button>
        </div>
      </div>

      <div className="quiz-list">
        {quizzes.map((quiz, index) => (
          <div className="quiz-box" key={index}>
            <img src={quiz.image} alt={quiz.title} className="quiz-image" />
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            <div className="quiz-details">
              <div>
                <i className="book-icon"></i> {quiz.questions} Questions
              </div>
              <div>
                <i className="clock-icon"></i> {quiz.duration} mins
              </div>
              <div>
                <i className="money-icon"></i> <del>₹1000</del> ₹0
              </div>
            </div>
            <button
              className="btn schedule-btn"
              onClick={() =>
                navigate("/test", { state: { title: quiz.title } })
              }
            >
              Take Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
