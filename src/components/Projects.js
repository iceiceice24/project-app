// Projects.js
import React from "react";
import Header from "./Header";
import Background from "./Background";
import "./about.css";

const Projects = () => {
  return (
    <div>
      <Background />
      <Header />
      <div className="cards-container-hori">
        <div className="card-one">
          <h1 className="card-title"> Projects </h1>
          <div className="line"></div>
          <p className="card-des">
            {" "}
            The image is clickable to view the entire website image. (P.S. This
            is not an exhaustive list of my projects.){" "}
          </p>
        </div>
      </div>
      <div className="cards-container-hori">
        <div className="card-one">
          <a
            href="Website-Guide-ArchCeu.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="66.png"
              alt="Software Development"
              className="card-image"
            />
          </a>
          <h2 className="card-title">ArchCEU - Ruby on Rails - 2023</h2>
        </div>
        <div className="card-one">
          <a href="5.png" target="_blank" rel="noopener noreferrer">
            <img
              src="4.png"
              alt="Software Development"
              className="card-image"
            />
          </a>
          <h2 className="card-title">ToyApp - Ruby on Rails - 2023</h2>
        </div>
        <div className="card-one">
          <a href="shiks123.png" target="_blank" rel="noopener noreferrer">
            <img
              src="123.png"
              alt="Software Development"
              className="card-image"
            />
          </a>
          <h2 className="card-title">Shiks Restobar - 2022</h2>
        </div>
        <div className="card-one">
          <a href="CinemaUna.mp4" target="_blank" rel="noopener noreferrer">
            <img
              src="3.png"
              alt="Software Development"
              className="card-image"
            />
          </a>
          <h2 className="card-title">Cinema Una - Php - 2022</h2>
        </div>
        <div className="card-one">
          <a href="1234566.png" target="_blank" rel="noopener noreferrer">
            <img
              src="school.png"
              alt="Software Development"
              className="card-image"
            />
          </a>
          <h2 className="card-title">University Page - 2022</h2>
        </div>

        <div className="card-one">
          <a href="cmatch.png" target="_blank" rel="noopener noreferrer">
            <img
              src="cmatch.png"
              alt="Software Development"
              className="card-image"
            />
          </a>
          <h2 className="card-title">Match - Javascript - 2021</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
