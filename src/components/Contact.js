import React from "react";
import Header from "./Header";
import Background from "./Background";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      <Background />
      <Header />
      <div className="cards-container-hori">
        <div className="card">
          <h1 className="card-title">Contact Me</h1>
          <div className="line"></div>
          <p className="card-des-two">
            Fresh Graduate of Information Technology with specialization of Web
            Development, full-stack developer, cyber security, and software
            development.
          </p>
        </div>
      </div>
      <div className="cards-container-hori">
        <div className="card-one">
          <FontAwesomeIcon icon={faLocationDot} size="2x" />
          <h2 className="card-title"> Address </h2>
          <p className="card-des"> Marikina, Philippines. </p>
        </div>
        <div className="card-one">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <h2 className="card-title"> Email </h2>
          <p className="card-des"> isaiah.habitan@gmail.com </p>
        </div>
        <div className="card-one">
          <FontAwesomeIcon icon={faMobileScreenButton} size="2x" />
          <h2 className="card-title"> Phone Number </h2>
          <p className="card-des"> +639696051271 </p>
        </div>
        <div className="card-one">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <h2 className="card-title"> Linkedin </h2>
          <p className="card-des">
            https://www.linkedin.com/in/isaiah-exechiel-habitan-ice123{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
