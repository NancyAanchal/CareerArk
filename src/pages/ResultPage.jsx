import React from "react";
import { useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import testData from "../data/aptitudeTest.json";

Chart.register(...registerables);

const ResultPage = () => {
  const location = useLocation();
  const { userAnswers, categories } = location.state;
  const calculateScore = (categories, userAnswers) => {
    const score = {};

    categories.forEach((category) => {
      score[category] = 0;
    });

    testData.forEach((question) => {
      const userAnswer = userAnswers[question.question]; // Access user answer using the question text
      if (userAnswer === question.correctAnswer) {
        score[question.category] += 1;
      }
    });

    return score;
  };

  const score = calculateScore(categories, userAnswers);
  const data = {
    labels: categories,
    datasets: [
      {
        label: "Aptitude Scores",
        data: categories.map((category) => score[category]), // Get scores dynamically
        backgroundColor: "#ff6a00",
        borderColor: "#ff6a00",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  const downloadReport = () => {
    const input = document.querySelector(".result-container");
    const downloadButton = document.querySelector(".test-button");

    downloadButton.style.display = "none";

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);

      pdf.save("AptitudeTestReport.pdf");

      downloadButton.style.display = "block";
    });
  };

  return (
    <div style={{ background: "#fff4e6", padding: "10px" }}>
      <div className="result-container">
        <div style={{ marginBottom: "5px" }}>
          <h2>Your Test Results</h2>
        </div>

        {categories.map((category, index) => (
          <p key={index}>
            {category.replace("_", " ").toUpperCase()}: {score[category]}
          </p>
        ))}

        <Bar data={data} options={options} />

        <button className="test-button" onClick={downloadReport}>
          Download Report
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
