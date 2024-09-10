import React from "react";
import "../styles/style.css";
import logo1 from "../assets/images/newlogo-nobg.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col">
            <img src={logo1} alt="logo footer" className="footer_logo" />
            <p className="footer_about">
              Welcome to CareerArk, your personalized career guide powered by
              cutting-edge AI technology. Discover your ideal career path
              through insightful assessments that analyze your personality,
              skills, and interests. Explore comprehensive career profiles,
              educational opportunities, and job market insights to make
              informed decisions about your future.
            </p>
          </div>
          <div className="col">
            <h3>
              Get in Touch{" "}
              <div className="bottom_line">
                <span></span>
              </div>
            </h3>
            <p>TechZone 2, Greater Noida</p>
            <p>Uttar Pradesh, 201310</p>
            <p className="footer_email">sharshitsingh007@gamil.com</p>
            <h4>+91 6394441778</h4>
          </div>
          <div className="col">
            <h3>
              Links{" "}
              <div className="bottom_line">
                <span></span>
              </div>
            </h3>

            <ul>
              <a href="/comingsoon">HOME</a>
            </ul>
            <ul>
              <a href="/comingsoon">ABOUT</a>
            </ul>
            <ul>
              <a href="/comingsoon">SERVICE</a>
            </ul>
            <ul>
              <a href="/comingsoon">CONTACT US</a>
            </ul>
          </div>
          <div className="col">
            <h3>
              Newsletter{" "}
              <div className="bottom_line">
                <span></span>
              </div>
            </h3>
            <form>
              <i className="button__icon fas fa-envelope"></i>
              <input type="email" placeholder="   Enter your email" required />
              <button type="submit">
                <ion-icon
                  className="icon_right"
                  name="arrow-round-forward"
                ></ion-icon>
              </button>
            </form>
            <div className="social_icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>

        <p className="copyright">CareerArk Ⓒ 2024 - All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
