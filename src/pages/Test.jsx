import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import testData from "../data/aptitudeTest.json";
import "../styles/test.css";
import { MdTimer } from "react-icons/md";

const TestComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState("");
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const handleAnswer = (answer) => {
    const currentCategory = testData[currentQuestion].category;

    if (!categories.includes(currentCategory)) {
      setCategories((prevCategories) => [...prevCategories, currentCategory]);
    }

    const currentQ = testData[currentQuestion];
    setUserAnswers({
      ...userAnswers,
      [currentQ.question]: answer,
    });
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < testData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate("/test-result", {
        state: { userAnswers: userAnswers, categories: categories },
      });
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(30);
  }, [currentQuestion]);

  return (
    <div style={{ background: "#fff4e6", padding: "10px" }}>
      <div className="test-container">
        <div className="timer">
          <div style={{ fontSize: 24 }}>
            <MdTimer />
          </div>
          <div>{timeLeft}s</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>{testData[currentQuestion].question}</h2>
        </div>
        <div className="options">
          {testData[currentQuestion].options.map((option, index) => (
            <button
              className="option"
              key={index}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="question-status">
          {currentQuestion + 1} of {testData.length}
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
