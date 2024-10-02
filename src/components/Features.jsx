import React from "react";
// import { useNavigate } from 'react-router-dom';
import "../styles/style.css";
import aiAssistant from "../assets/images/AIassistent.jpg";
import freeCareerTest from "../assets/images/test.jpg";
import resumeScanner from "../assets/images/resume.jpg";
import reviewCollege from "../assets/images/ReviewCollege.jpg";
import counsellor from "../assets/images/Counsellor.jpg";
import jobSearch from "../assets/images/jobSearch.jpeg";

const Features = () => {
  return (
    <>
      <main className="wrapper">
        <section className="breweries" id="breweries">
          <ul>
            <li>
              <figure>
                <img src={aiAssistant} alt="A robot" />
                <figcaption>
                  <h3>AI Assistant</h3>
                </figcaption>
              </figure>
              <p>
                An intelligent virtual assistant that provides personalized
                career guidance and recommendations based on an individual's
                skills, interests, and goals.
              </p>
              <a href="/chatbot">Chat with AI</a>
            </li>
            <li>
              <figure>
                <img src={freeCareerTest} alt="A girl staring at the screen" />
                <figcaption>
                  <h3>Free Career Test</h3>
                </figcaption>
              </figure>
              <p>
                A tool that assesses an individual's aptitudes, interests, and
                strengths to help them identify suitable career paths and make
                informed educational and professional choices.
              </p>
              <a href="/QuizPage">Career Test</a>
            </li>
            <li>
              <figure>
                <img src={resumeScanner} alt="Resume on screen" />
                <figcaption>
                  <h3>Resume Scanner</h3>
                </figcaption>
              </figure>
              <p>
                Allows users to submit their resumes for personalized career
                advice and suggestions based on their qualifications and
                experiences.
              </p>
              <a
                id="uploadBtn"
                href="https://resumescanner-p7to3payetuzsdzyvqrzsi.streamlit.app/"
                rel="noreferrer"
                target="_blank"
              >
                Upload Resume
              </a>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </li>
          </ul>
          <ul>
            <li>
              <figure>
                <img src={reviewCollege} alt="Colleges" />
                <figcaption>
                  <h3>Review Your College</h3>
                </figcaption>
              </figure>
              <p>
                Allows students and alumni to submit and read reviews of the
                college, providing insights into campus life, academics, and
                overall experience.
              </p>
              <a href="/Form" target="_blank">
                Review College
              </a>
            </li>
            <li>
              <figure>
                <img src={jobSearch} alt="Articles online" />
                <figcaption>
                  <h3>Job Portal</h3>
                </figcaption>
              </figure>
              <p>
                Enables users to search and apply for job opportunities across
                15 countries worldwide, helping job seekers find positions
                tailored to their skills and preferred locations.
              </p>
              <a href="/jobs">Search Jobs</a>
            </li>
            <li>
              <figure>
                <img src={counsellor} alt="A counsellor" />
                <figcaption>
                  <h3>Need Counselling</h3>
                </figcaption>
              </figure>
              <p>
                Offers counseling services for students to seek guidance on
                academic, personal, or career-related issues, promoting their
                well-being and success.
              </p>
              <a href="/comingsoon">Search Counselor</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Features;
