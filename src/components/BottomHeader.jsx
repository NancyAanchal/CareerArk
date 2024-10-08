import React from "react";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";

const BottomHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="bottom-header">
        <nav>
          <ul>
            <li>
              <a href="/comingsoon">All Courses</a>
            </li>
            <li>
              <a href="/counselling1">9th-10th</a>
            </li>
            <li>
              <a href="/comingsoon">11th-12th</a>
            </li>
            <li>
              <a href="/comingsoon">Under Graduate</a>
            </li>
            <li>
              <a href="/comingsoon">Post Graduate</a>
            </li>
            <li>
              <a href="/comingsoon">Study Abroad</a>
            </li>
            <li>
              <button
                onClick={() => navigate("/article", { state: "education" })}
                href=""
              >
                Read Articles
              </button>
            </li>
            <li>
              <a href="/LatestUpdates">Latest Updates</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default BottomHeader;
