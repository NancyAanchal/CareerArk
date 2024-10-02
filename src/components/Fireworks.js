import React, { useEffect, useState } from 'react';
import '../styles/Fireworks.css';

const FirecrackerAnimation = ({ onAnimationEnd, buttonRef }) => {
    const [isActive, setIsActive] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsActive(false);
        onAnimationEnd();
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [onAnimationEnd]);
  
    if (!buttonRef.current) return null;
  
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const sparkles = Array.from({ length: 20 }).map((_, index) => {
        const angle = (Math.PI * 2 * index) / 20;
        const dx = Math.cos(angle);
        const dy = Math.sin(angle);
        return (
          <div
            key={index}
            className="spark"
            style={{ '--dx': dx, '--dy': dy }}
          />
        );
      });
  
    return (
      <div
        className={`firecracker-container ${isActive ? 'active' : ''}`}
        style={{
          position: 'absolute',
          top: buttonRect.top + window.scrollY + buttonRect.height / 2,
          left: buttonRect.left + window.scrollX + buttonRect.width / 2,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Emoji Bursts */}
        <span role="img" aria-label="🎉" className="emoji emoji1">&#x1F389;</span>
        <span role="img" aria-label="🎊" className="emoji emoji2">&#x1F38A;</span>
        <span role="img" aria-label="✨" className="emoji emoji3">&#x2728;</span>
        <span role="img" aria-label="💥" className="emoji emoji4">&#x1F4A5;</span>
  
        {/* Sparkles */}
        {sparkles}
      </div>
    );
  };
  
  export default FirecrackerAnimation;