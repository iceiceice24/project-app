import React from "react";
import "./Background.css"; // Import your CSS file

const Background = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop id="video-bg">
        <source src="/web.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
