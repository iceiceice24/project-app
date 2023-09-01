import React from "react";
import Header from "./Header";
import Background from "./Background";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHive,
  faFortAwesome,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faClock,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <Background />
      <Header />
      <div className="cards-container">
        <div className="card">
          <h1 className="card-title">What I do</h1>
          <div className="line"></div>
          <p className="card-des-two">
            In my present capacity, I am actively engaged in a multi-faceted
            role that encompasses several key domains within the tech landscape.
            As a Web and Software Developer, my focus revolves around the
            design, creation, and optimization of diverse websites and software
            solutions. In this role, I seamlessly blend aesthetics and
            functionality to deliver exceptional user experiences.
            Simultaneously, I take on the responsibilities of a Full-Stack
            Developer, orchestrating the entire technology stack of web
            applications and software projects. Furthermore, my role as a UI/UX
            Designer ensures a user-centric approach to crafting engaging
            digital experiences, complemented by my software development
            expertise that ensures these experiences are not only visually
            appealing but also technically robust.
          </p>
        </div>
        <div className="cards-container-hori">
          <div className="card-one">
            <FontAwesomeIcon icon={faBriefcase} size="2x" />
            <h2 className="card-title"> Hard Working </h2>
            <div className="line"></div>
            <p className="card-des">
              {" "}
              Always believe in hard-work in my profession.{" "}
            </p>
          </div>
          <div className="card-one">
            <FontAwesomeIcon icon={faClock} size="2x" />
            <h2 className="card-title"> Time management </h2>
            <div className="line"></div>
            <p className="card-des">
              {" "}
              Optimize tasks for efficient productivity within given deadlines.{" "}
            </p>
          </div>
          <div className="card-one">
            <FontAwesomeIcon icon={faJs} size="2x" />
            <h2 className="card-title"> Web Development </h2>
            <div className="line"></div>
            <p className="card-des">
              {" "}
              Created websites with aesthetic design and functional user
              experiences.{" "}
            </p>
          </div>
          <div className="card-one">
            <FontAwesomeIcon icon={faComputer} size="2x" />
            <h2 className="card-title"> Software Development </h2>
            <div className="line"></div>
            <p className="card-des">
              {" "}
              Designed and build software solutions to meet diverse needs.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="cards-container-hori">
        <div className="card-two">
          <img src="Ice2.png" alt="Ice" className="Ice"></img>
        </div>
        <div className="card-three">
          <h1 className="card-title-one"> Hello! This is Ice </h1>
          <div className="line"></div>
          <p className="card-des-two">
            I am a skilled IT graduate with a remarkable background originating
            from Marikina City, Philippines. My expertise spans various domains,
            including software development, database management, network
            administration, web development, and cybersecurity. I've
            meticulously refined these proficiencies through practical
            engagement, skillfully translating abstract theories into tangible
            applications. Flourishing within collaborative team dynamics, I
            harness advanced technology to devise inventive solutions. My
            initial intrigue in website design has metamorphosed into an abiding
            passion, as I've ventured into consulting, teaching, and contract
            work, refining my acumen in problem-solving. Anchored in my existing
            knowledge, I approach new challenges in the ever-evolving IT realm
            with assuredness, propelled by an unswerving dedication to learn and
            make positive contributions. In pursuit of novel prospects, I aim to
            channel my skills within a growth-centric organization, catalyzing
            teamwork and propelling the trajectory of technological progress.
          </p>
          <div class="button-container">
            <a
              href="Isaiah-Exechiel-Habitan-CV-Resume.pdf"
              target="_blank"
              class="resume-button"
            >
              See Resume
            </a>
            <a
              href="mailto:isaiah.habitan@gmail.com?subject=Hiring Inquiry"
              class="hire-button"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
