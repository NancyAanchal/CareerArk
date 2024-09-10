import React from "react";
import "../styles/style.css";
import logo from "../assets/images/logo3.png";

const TopHeader = () => {

  return (
    <>
      <header className="top-header">
        <a href="/" className="logo">
          <img src={logo} alt="Footer logo" width="140" height="50" />
        </a>
        <div className="home-button">
          <a href="/comingsoon">Dashboard</a>
        </div>
        <div className="search-container">
          <form id="search-form">
            <input
              type="text"
              placeholder="Search for colleges, Exams, Courses and More..."
            />
            <button type="submit" href="/comingsoon">
              Search
            </button>
          </form>
        </div>
        <div className="notification">
          <a href="/comingsoon">Notification</a>
        </div>
        <div className="contact-button">
          <a href="/comingsoon">Contact</a>
        </div>
        <div className="login-signup">
          <a href="/login">Login</a>
        </div>
      </header>
    </>
  );
};

export default TopHeader;
