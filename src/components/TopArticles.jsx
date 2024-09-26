import React from "react";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import schoolLife from "../assets/images/SchoolLife.jpg";
import collegeLife from "../assets/images/CollegeLife.jpeg";
import studentStories from "../assets/images/StudentStories.jpg";
import studyAbroad from "../assets/images/Studyabroad.jpg";
import campusNews from "../assets/images/CampusNews.jpg";
import interviewPrep from "../assets/images/Interview.jpg";
import activeCompanies from "../assets/images/ActiveCompanies.jpg";
import internships from "../assets/images/Internships.jpg";

const TopArticles = () => {
  const navigate = useNavigate();

  const handleArticleClick = (topic) => {
    navigate("/article", { state: topic });
  };

  return (
    <>
      <section className="top-articles">
        <h2>Top Articles</h2>
        <div className="article-container">
          <div className="article">
            <img src={schoolLife} alt="School kids" />
            <div
              className="article-content"
              onClick={() => handleArticleClick("school")}
            >
              <h3>School Life</h3>
              <p>
                Explore the unforgettable memories and challenges of your school
                days as we delve into the joys and tribulations of growing up.
              </p>
            </div>
          </div>
          <div className="article">
            <img src={collegeLife} alt="College kids" />
            <div
              className="article-content"
              onClick={() => handleArticleClick("college")}
            >
              <h3>College Life</h3>
              <p>
                Dive into the exciting world of college life, where new
                adventures, friendships, and opportunities await at every corner
                of the campus.
              </p>
            </div>
          </div>
          <div className="article">
            <img src={studentStories} alt="Students" />
            <div
              className="article-content"
              onClick={() => handleArticleClick("students")}
            >
              <h3>Student Stories</h3>
              <p>
                Get inspired by the real-life journeys and experiences of
                students who overcame obstacles and achieved their dreams
                against all odds.
              </p>
            </div>
          </div>
          <div className="article">
            <img src={studyAbroad} alt="Abroad universities" />
            <div
              className="article-content"
              onClick={() => handleArticleClick("abroad")}
            >
              <h3>Study Abroad</h3>
              <p>
                Discover the excitement and challenges of studying in a foreign
                country as we guide you through the essential steps to prepare
                for this life-changing adventure.
              </p>
            </div>
          </div>
          <div className="article">
            <img src={campusNews} alt="Campuses" />
            <div
              className="article-content"
              onClick={() => handleArticleClick("education")}
            >
              <h3>Campus News</h3>
              <p>
                Stay up-to-date with the latest happenings on your college
                campus, from student achievements to upcoming events and new
                initiatives.
              </p>
            </div>
          </div>
          <div className="article">
            <img src={interviewPrep} alt="big interview" />
            <div
              className="article-content"
              onClick={() => handleArticleClick("interview")}
            >
              <h3>Interview Preparation</h3>
              <p>
                Prepare yourself for the challenges of job interviews with
                expert tips, practice questions, and strategies to help you
                stand out from the competition.
              </p>
            </div>
          </div>
          <div className="article">
            <img src={activeCompanies} alt="big Companies" />
            <div
              className="article-content"
              onClick={() => handleArticleClick("company")}
            >
              <h3>Active Companies</h3>
              <p>
                Discover leading companies that are actively recruiting and
                providing exciting career opportunities for young professionals.
              </p>
            </div>
          </div>
          <div className="article">
            <img src={internships} alt="big interns" />
            <div
              className="article-content"
              onClick={() => handleArticleClick("internship")}
            >
              <h3>Internship</h3>
              <p>
                Navigate the world of internships and gain practical experience
                in your field, setting the stage for a promising career ahead.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopArticles;
