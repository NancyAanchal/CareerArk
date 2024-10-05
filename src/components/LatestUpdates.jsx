import React, { useState, useEffect, useRef } from "react";
import "../styles/LatestUpdates.css";
import updatesData from "../data/latestUpdates.json";
import FirecrackerAnimation from "../components/Fireworks";

const LatestUpdates = () => {
    const [updates, setUpdates] = useState([]);
    const [showFireworks, setShowFireworks] = useState(false);
    const buttonRef = useRef(null);
  
    useEffect(() => {
      setUpdates(updatesData);
    }, []);
  
    const handleYeppyClick = (e) => {
      if (e.target.innerText === "Yeppy") {
        setShowFireworks(true);
      }
    };
  
    const handleAnimationEnd = () => {
      setShowFireworks(false);
    };
  
    return (
      <div className="latest-updates-container">
        <h1 className="updates-title">CareerArk Updates</h1>
        <div className="updates-list">
          {updates.map((update, index) => (
            <div
              key={update.id}
              className="update-box"
              style={{ backgroundColor: `hsl(${index * 60 % 360}, 80%, 90%)` }}
            >
              <h2 className="update-title">{update.title}</h2>
              <p className="update-description">{update.description}</p>
              <button
                className="update-button"
                ref={update.buttonText === "Yeppy" ? buttonRef : null}
                onClick={update.buttonText === "Yeppy" ? handleYeppyClick : () => window.location.href = update.link}
              >
                {update.buttonText}
              </button>
            </div>
          ))}
        </div>
  
        {showFireworks && buttonRef.current && (
          <FirecrackerAnimation onAnimationEnd={handleAnimationEnd} buttonRef={buttonRef} />
        )}
      </div>
    );
  };
  
  export default LatestUpdates;