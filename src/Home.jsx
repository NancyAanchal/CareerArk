import React, { useEffect } from "react";
import "./styles/styles.css"
import logo from "./assets/images/logo3.png";
import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import img4 from "./assets/images/img4.png";
import aiAssistant from "./assets/images/AIassistent.jpg";
import freeCareerTest from "./assets/images/test.jpg";
import resumeScanner from "./assets/images/resume.jpg";
import reviewCollege from "./assets/images/ReviewCollege.jpg";
import schoolLife from "./assets/images/SchoolLife.jpg";
import collegeLife from "./assets/images/CollegeLife.jpeg";
import studentStories from "./assets/images/StudentStories.jpg";
import studyAbroad from "./assets/images/Studyabroad.jpg";
import campusNews from "./assets/images/CampusNews.jpg";
import interviewPrep from "./assets/images/Interview.jpg";
import activeCompanies from "./assets/images/ActiveCompanies.jpg";
import internships from "./assets/images/Internships.jpg"
import logo1 from "./assets/images/newlogo-nobg.png"

const Home = () => {
  
    
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
      <header className="top-header">
        <div className="logo">
          <img src={logo} alt="Your Career Guide Logo" width="140" height="50" />
        </div>
        <div className="home-button">
          <a href="/comingsoon">Home</a>
        </div>
        <div className="search-container">
          <form id="search-form">
            <input type="text" placeholder="Search for colleges, Exams, Courses and More..." />
            <button type="submit" href="/comingsoon">Search</button>
          </form>
        </div>
        <div className="notification">
          <a href="/comingsoon">Notification</a>
        </div>
        <div className="login-signup">
          <a href="/login">Login/Signup</a>
        </div>
        <div className="contact-button">
          <a href="/comingsoon">Contact</a>
        </div>
      </header>

      <header className="bottom-header">
        <nav>
          <ul>
            <li><a href="/comingsoon">All Courses</a></li>
            <li><a href="/comingsoon">9th-10th</a></li>
            <li><a href="/comingsoon">11th-12th</a></li>
            <li><a href="/comingsoon">Graduate</a></li>
            <li><a href="/comingsoon">Professional</a></li>
            <li><a href="/comingsoon">Job Alert</a></li>
            <li><a href="/comingsoon">Latest Updates</a></li>
          </ul>
        </nav>
      </header>

      <section className="section-heading">
        <h1 className="main-heading">Shape Your Tomorrow</h1>
        <div className="sub-heading-box">
          <h2 className="sub-heading">Start building the future you want today</h2>
        </div>
      </section>

      <section className="rotating-hero">
        <div className="hero-content">
          <img src={img1} alt="Image 1" />
          <div className="hero-text">
            <h1>Welcome to Your Career Guide</h1>
            <p>Your personal AI assistant to help you choose the right career path.<br />Explore a world of opportunities and find your dream career with our guidance.</p>
            <br />
            <button className="button-64" role="button"><span className="text">Take the Career Test</span></button>
          </div>
        </div>
        <div className="hero-content">
          <img src={img4} alt="Image 2" />
          <div className="hero-text">
            <h1>Unlock Your Potential</h1>
            <p>Assess your capabilities with our free career test.<br />Discover your strengths and interests to excel in your chosen field.</p>
            <br />
            <button className="button-64" role="button"><span className="text">Upload Resume</span></button>
          </div>
        </div>
        <div className="hero-content">
          <img src={img2} alt="Image 3" />
          <div className="hero-text">
            <h1>Explore Your Options</h1>
            <p>Read and write reviews about colleges and universities.<br />Find the perfect educational institution for your future success.</p>
            <br />
            <button className="button-64" role="button"><span className="text">Review College</span></button>
          </div>
        </div>
      </section>

      <main className="wrapper">
        <section className="breweries" id="breweries">
          <ul>
            <li>
              <figure>
                <img src={aiAssistant} alt="AI Assistant" />
                <figcaption><h3>AI Assistant</h3></figcaption>
              </figure>
              <p>An intelligent virtual assistant that provides personalized career guidance and recommendations based on an individual's skills, interests, and goals.</p>
              <a href="/chatbot">Chat with AI</a>
            </li>
            <li>
              <figure>
                <img src={freeCareerTest} alt="Free Career Test" />
                <figcaption><h3>Free Career Test</h3></figcaption>
              </figure>
              <p>A tool that assesses an individual's aptitudes, interests, and strengths to help them identify suitable career paths and make informed educational and professional choices.</p>
              <a href="./quiz/index.html">Start Test</a>
            </li>
            <li>
              <figure>
                <img src={resumeScanner} alt="Resume Scanner" />
                <figcaption><h3>Resume Scanner</h3></figcaption>
              </figure>
              <p>Allows users to submit their resumes for personalized career advice and suggestions based on their qualifications and experiences.</p>
              <a id="uploadBtn" href= 'https://resumescanner-p7to3payetuzsdzyvqrzsi.streamlit.app/' target="_blank">Upload Resume</a>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </li>
          </ul>
          <ul>
            <li>
              <figure>
                <img src={reviewCollege} alt="Review Your College" />
                <figcaption><h3>Review Your College</h3></figcaption>
              </figure>
              <p>Allows students and alumni to submit and read reviews of the college, providing insights into campus life, academics, and overall experience.</p>
              <a href="/Form" target="_blank">Review College</a>
            </li>
            <li>
              <figure>
                <img src={freeCareerTest} alt="Read Articles" />
                <figcaption><h3>Read Articles</h3></figcaption>
              </figure>
              <p>Provides access to a library of articles covering various topics, including academics, career advice, campus events, and student achievements.</p>
              <a href="/comingsoon">Read Articles</a>
            </li>
            <li>
              <figure>
                <img src={reviewCollege} alt="Need Counselling" />
                <figcaption><h3>Need Counselling</h3></figcaption>
              </figure>
              <p>Offers counseling services for students to seek guidance on academic, personal, or career-related issues, promoting their well-being and success.</p>
              <a href="/comingsoon">Search Counselor</a>
            </li>
          </ul>
        </section>
      </main>

      <section className="top-articles">
        <h2>Top Articles</h2>
        <div className="article-container">
          <div className="article">
            <img src={schoolLife} alt="School Life" />
            <div className="article-content">
              <h3>School Life</h3>
              <p>Explore the unforgettable memories and challenges of your school days as we delve into the joys and tribulations of growing up.</p>
            </div>
          </div>
          <div className="article">
            <img src={collegeLife} alt="College Life" />
            <div className="article-content">
              <h3>College Life</h3>
              <p>Dive into the exciting world of college life, where new adventures, friendships, and opportunities await at every corner of the campus.</p>
            </div>
          </div>
          <div className="article">
            <img src={studentStories} alt="Student Stories" />
            <div className="article-content">
              <h3>Student Stories</h3>
              <p>Get inspired by the real-life journeys and experiences of students who overcame obstacles and achieved their dreams against all odds.</p>
            </div>
          </div>
          <div className="article">
            <img src={studyAbroad} alt="Study Abroad" />
            <div className="article-content">
              <h3>Study Abroad</h3>
              <p>Discover the excitement and challenges of studying in a foreign country as we guide you through the essential steps to prepare for this life-changing adventure.</p>
            </div>
          </div>
          <div className="article">
            <img src={campusNews} alt="Campus News" />
            <div className="article-content">
              <h3>Campus News</h3>
              <p>Stay up-to-date with the latest happenings on your college campus, from student achievements to upcoming events and new initiatives.</p>
            </div>
          </div>
          <div className="article">
            <img src={interviewPrep} alt="Interview Preparation" />
            <div className="article-content">
              <h3>Interview Preparation</h3>
              <p>Prepare yourself for the challenges of job interviews with expert tips, practice questions, and strategies to help you stand out from the competition.</p>
            </div>
          </div>
          <div className="article">
            <img src={activeCompanies} alt="Active Companies" />
            <div className="article-content">
              <h3>Active Companies</h3>
              <p>Discover leading companies that are actively recruiting and providing exciting career opportunities for young professionals.</p>
            </div>
          </div>
          <div className="article">
                <img src={internships} alt="College Life"/>
                <div className="article-content">
                    <h3>Internship</h3>
                    <p>Navigate the world of internships and gain practical experience in your field, setting the stage for a promising career ahead.</p>
                </div>
            </div>
        </div>
      </section>
      <section className="career-guidance">
        <div className="text">
            <h2>How career guidance can help you?</h2>
            <p>Most of the students find difficulty in choosing the right stream, course, college, or country to study. Career Counseling brings the clarity to choose the right career path.</p>
            <p>An expert Career Counselor guides you with their professional experience, having a strong understanding of industry trends and thinking with a long-term approach which suits you the best.</p>
            <button>Connect to a Counselor</button>
        </div>
        <div className="image">
            <img src="https://i0.wp.com/www.mindgroom.com/wp-content/uploads/2021/02/Mindgroom_career_counselling_1..gif?resize=426%2C300&ssl=1" alt="Career Guidance Image"/>
        </div>
    </section>
    <footer>
    
        <div className="row">
            <div className="col">
                <img src={logo1} className="footer_logo"/>
                <p className="footer_about">Welcome to CareerArk, your personalized career guide powered by cutting-edge AI technology. Discover your ideal career path through insightful assessments that analyze your personality, skills, and interests. Explore comprehensive career profiles, educational opportunities, and job market insights to make informed decisions about your future.
                </p>
            </div>
            <div className="col">
                <h3>Get in Touch <div className="bottom_line"><span></span></div></h3>
                <p>TechZone 2, Greater Noida</p>
                <p>Uttar Pradesh, 201310</p>
                <p className="footer_email">sharshitsingh007@gamil.com</p>
                <h4>+91 6394441778</h4>
            </div>
            <div className="col">
                <h3>Links <div className="bottom_line"><span></span></div></h3>
                
                    <ul><a href="/comingsoon">HOME</a></ul>
                    <ul><a href="/comingsoon">ABOUT</a></ul>
                    <ul><a href="/comingsoon">SERVICE</a></ul>
                    <ul><a href="/comingsoon">CONTACT US</a></ul>
                
            </div>
            <div className="col">
                <h3>Newsletter <div className="bottom_line"><span></span></div></h3>
                <form>
                <i className="button__icon fas fa-envelope" ></i>
                    <input type="email" placeholder="   Enter your email" required/>
                    <button type="submit"><ion-icon className="icon_right" name="arrow-round-forward"></ion-icon></button>
                </form>
                <div className="social_icons">
                <i className="fa-brands fa-facebook" ></i>
                <i className="fa-brands fa-twitter" ></i>
                <i className="fa-brands fa-whatsapp" ></i>
                <i className="fa-brands fa-instagram" ></i>
                </div>
            </div>
        </div>
        
        <p className="copyright">CareerArk Ⓒ 2024 - All Rights Reserved</p>
     
    </footer>

    
    </>
  );
};

export default Home;
