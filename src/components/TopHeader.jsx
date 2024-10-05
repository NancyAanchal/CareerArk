import React, { useState } from "react";
import "../styles/style.css";
import logo from "../assets/images/logo3.png";

const TopHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="top-header">
        <a href="/" className="logo">
          <img src={logo} alt="Footer logo" width="140" height="50" />
        </a>
        <div className="home-button">
          <a href="/">Dashboard</a>
        </div>
        <div className="search-container">
          <form id="search-form">
            <input
              type="text"
              placeholder="Search for colleges, Exams, Courses and More..."
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="notification">
          <a href="/comingsoon">Notification</a>
        </div>
        <div className="contact-button">
          <a href="/Contact">Contact</a>
        </div>
        <div className="login-signup">
          <a href="/login">Login</a>
        </div>
      </header>

      <nav id="hamburger-nav">
        <div className="nav-container">
          <a href="/" className="logo">
            <img src={logo} alt="Footer logo" width="70" height="35" />
          </a>
          <div className="search-container">
            <form id="search-form">
              <input
                type="text"
                placeholder="Search for colleges, Exams, Courses and More..."
              />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="hamburger-icon-container">
            <div
              className="hamburger-icon"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div
          className="menu-links-container"
          style={{ display: menuOpen ? "flex" : "none" }}
        >
          <div className="menu-links">
            <div className="notification">
              <a href="/comingsoon">Notification</a>
            </div>
            <div className="contact-button">
              <a href="/Contact">Contact</a>
            </div>
            <div className="login-signup">
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopHeader;
