import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../styles/RoadmapGenerator.css";
import "animate.css";

const suggestedTopics = [
  "React Basics",
  "JavaScript Fundamentals",
  "CSS Grid",
  "Node.js Overview",
  "Machine Learning Concepts",
  "Git and GitHub",
  "REST API Design",
  "TypeScript Introduction",
  "Agile Methodologies",
  "UI/UX Principles",
  "Database Management",
  "Data Structures",
  "Algorithms",
  "Software Testing",
  "DevOps Practices",
  "Cyber Security Basics",
  "Cloud Computing",
  "Mobile App Development",
  "Web Accessibility",
  "E-commerce Development",
  "Game Development",
  "Blockchain Basics",
  "Artificial Intelligence",
  "Networking Concepts",
  "System Design",
  "Big Data Technologies",
  "Digital Marketing",
  "Content Management Systems",
  "Virtual Reality",
  "Augmented Reality",
  "Information Architecture",
  "Product Management",
  "Technical Writing",
  "API Development",
  "Scripting Languages",
  "Version Control Systems",
  "Frontend Frameworks",
];

const RoadmapGenerator = () => {
  const [roadmap, setRoadmap] = useState("");
  const [level, setLevel] = useState("beginner");
  const [recommendation, setRecommendation] = useState("");
  const rowsRef = useRef([]);

  useEffect(() => {
    const handleMouseLeave = () => {};

    const currentRowsRef = rowsRef.current;

    currentRowsRef.forEach((row) => {
      if (row) {
        row.addEventListener("mouseleave", handleMouseLeave);
      }
    });

    return () => {
      currentRowsRef.forEach((row) => {
        if (row) {
          row.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!roadmap) {
      alert("Please fill in the roadmap topic.");
      return;
    }

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_GEMINI_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `create a detailed roadmap for ${roadmap} for ${level}, just suggest the topics in proper format so that I can create a diagram using it, start main heading with (sub1), subheading with (sub2) and sub subheading with (sub3) so that i can identify them while generating diagram`,
                },
              ],
            },
          ],
        },
        { headers: { "Content-Type": "application/json" } }
      );
      const generatedText = response.data.candidates[0].content.parts[0].text;

      setRecommendation(generatedText);
    } catch (error) {
      console.error("Error generating roadmap:", error);
    }
  };

  const formatRoadmap = (text) => {
    const lines = text.split("\n");
    return lines.map((line, index) => {
      const level = line.match(/\(\w+\)/);
      const isSub3 = level && level[0] === "(sub3)";
      const formattedLine = line
        .replace(/\(\w+\)/, "")
        .replace(/[*#]/g, " ")
        .trim();

      let className = "roadmap-item";
      let prefix = "";
      if (isSub3 && index + 1 < lines.length) {
        const nextLine = lines[index + 1].trim();
        if (nextLine && !nextLine.match(/\(\w+\)/)) {
          return (
            <div key={index} className={className}>
              {formattedLine}
            </div>
          );
        }
      }
      if (level) {
        switch (level[0]) {
          case "(sub1)":
            className += " roardmap-main-heading";
            break;
          case "(sub2)":
            className += " roardmap-sub-heading";
            prefix = "└── ";
            break;
          case "(sub3)":
            className += " roardmap-sub-sub-heading";
            prefix = "└── ";
            break;
          default:
            break;
        }
      }

      return (
        <div key={index} className={className}>
          {prefix}
          {formattedLine}
        </div>
      );
    });
  };

  const handleTopicClick = (topic) => {
    setRoadmap(topic);
  };

  return (
    <motion.div
      className="roadmap-generator-container animate__animated animate__fadeIn"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="roadmap-title">Roadmap Generator</h1>
      <form className="roadmap-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Roadmap Topic (e.g. React, Machine Learning)"
            value={roadmap}
            onChange={(e) => setRoadmap(e.target.value)}
            className="roadmap-input"
          />
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="roadmap-select"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          <motion.button
            className="roadmap-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Generate Roadmap
          </motion.button>
        </div>
      </form>

      <h2 className="suggested-topics-heading">
        Select any Topic to generate roadmap
      </h2>

      <div className="suggested-topics-container">
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={`suggested-topics-row ${
              rowIndex % 2 === 0 ? "left" : "right"
            }`}
            ref={(el) => (rowsRef.current[rowIndex] = el)}
          >
            {suggestedTopics
              .slice(rowIndex * 7, rowIndex * 7 + 7)
              .map((topic, index) => (
                <div
                  key={index}
                  className="suggested-topic"
                  onClick={() => handleTopicClick(topic)}
                >
                  {topic}
                </div>
              ))}
            {suggestedTopics
              .slice(rowIndex * 7, rowIndex * 7 + 7)
              .map((topic, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="suggested-topic"
                  onClick={() => handleTopicClick(topic)}
                >
                  {topic}
                </div>
              ))}
          </div>
        ))}
      </div>

      {recommendation && (
        <div className="roadmap-output">
          <h2 className="output-title">Generated Roadmap:</h2>
          <div className="roadmap-content">{formatRoadmap(recommendation)}</div>
        </div>
      )}
    </motion.div>
  );
};

export default RoadmapGenerator;
