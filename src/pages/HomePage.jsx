import React, { useEffect } from "react";
import "../styles/style.css";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img4 from "../assets/images/img4.png";


const HomePage = () => {
  useEffect(() => {
    const heroContents = document.querySelectorAll(".hero-content");
    let currentIndex = 0;

    function showHeroContent(index) {
      heroContents.forEach((content, i) => {
        if (i === index) {
          content.style.opacity = "1";
        } else {
          content.style.opacity = "0";
        }
      });
    }

    function rotateHeroContents() {
      showHeroContent(currentIndex);
      currentIndex = (currentIndex + 1) % heroContents.length;
    }

    // Initially, show the first hero content for 3 seconds
    setTimeout(function () {
      rotateHeroContents();
      // Then continue rotating every 4 seconds
      setInterval(rotateHeroContents, 4000);
    }, 1000);
  }, []);

  return (
    <>
      <section className="section-heading">
        <h1 className="main-heading">Shape Your Tomorrow</h1>
        <div className="sub-heading-box">
          <h2 className="sub-heading">
            Start building the future you want today
          </h2>
        </div>
      </section>

      <section className="rotating-hero">
        <div className="hero-content">
          <img src={img1} alt="" />
          <div className="hero-text">
            <h1>Welcome to Your Career Guide</h1>
            <p>
              Your personal AI assistant to help you choose the right career
              path.
              <br />
              Explore a world of opportunities and find your dream career with
              our guidance.
            </p>
            <br />
            <button className="button-64">
              <span className="text">Take the Career Test</span>
            </button>
          </div>
        </div>
        <div className="hero-content">
          <img src={img4} alt="think" />
          <div className="hero-text">
            <h1>Unlock Your Potential</h1>
            <p>
              Assess your capabilities with our free career test.
              <br />
              Discover your strengths and interests to excel in your chosen
              field.
            </p>
            <br />
            <button className="button-64">
              <span className="text">Upload Resume</span>
            </button>
          </div>
        </div>
        <div className="hero-content">
          <img src={img2} alt="Exploring options" />
          <div className="hero-text">
            <h1>Explore Your Options</h1>
            <p>
              Read and write reviews about colleges and universities.
              <br />
              Find the perfect educational institution for your future success.
            </p>
            <br />
            <button className="button-64">
              <span className="text">Review College</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
