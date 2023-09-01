import React from "react";
import Header from "./components/Header";
import Background from "./components/Background";
import "./components/typewriter.css";
import TypewriterText from "./components/TypewriterText"; // Adjust the path to match your file structure
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <div className="center-container">
        <TypewriterText
          texts={[
            "Welcome to My Website.",
            "Hi, I'm Ice.",
            "I Love to Develop.",
            "Check Me on Socials.",
            "Social Media Down Below.",
          ]}
        />
      </div>
      <div className="social-buttons">
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/isaiah-exechiel-habitan-ice123/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon1"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/iceiceice24"
            target="_blank"
            rel="noopener noreferrer"
            className="icon1"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://discord.com/users/597454331738062859"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
