import React from "react";
import Header from "./Header";
import Background from "./Background";
import "./about.css";
import "./ProgressLine.css";
import ProgressLine from "./ProgressLine";

const Skilled = () => {
  return (
    <div>
      <Background />
      <Header />
      <div className="cards-container-hori">
        <div className="card-four">
          <h1 className="card-title">Skills</h1>
          <div className="line"></div>
          <p className="card-des-three">
            I prioritize straightforward content organization, well-structured
            design patterns, and considerate user interactions.
          </p>
          <div className="Inside-card">
            <p className="card-des-two">
              Proficient in front-end tools HTML, CSS, and JavaScript, excelling
              in dynamic interfaces with React.js. Experienced in backend tech
              like Ruby on Rails, SQL, and Postgres for robust server-side work.
              Skilled in API testing using Postman, and familiar with Java and
              PHP languages.
            </p>
          </div>

          <ProgressLine
            label="Html/CSS"
            backgroundColor="lightblue"
            visualParts={[
              {
                percentage: "95%",
                color: "#ed2939",
              },
            ]}
          />
          <ProgressLine
            label="JavaScript"
            backgroundColor="lightblue"
            visualParts={[
              {
                percentage: "60%",
                color: "#ed2939",
              },
            ]}
          />
          <ProgressLine
            label="React.js"
            backgroundColor="lightblue"
            visualParts={[
              {
                percentage: "30%",
                color: "#ed2939",
              },
            ]}
          />
          <ProgressLine
            label="Ruby on Rails"
            backgroundColor="lightblue"
            visualParts={[
              {
                percentage: "70%",
                color: "#ed2939",
              },
            ]}
          />
          <ProgressLine
            label="PostgreSQL"
            backgroundColor="lightblue"
            visualParts={[
              {
                percentage: "60%",
                color: "#ed2939",
              },
            ]}
          />
          <ProgressLine
            label="MySql"
            backgroundColor="lightblue"
            visualParts={[
              {
                percentage: "50%",
                color: "#ed2939",
              },
            ]}
          />
          <ProgressLine
            label="Java"
            backgroundColor="lightblue"
            visualParts={[
              {
                percentage: "90%",
                color: "#ed2939",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Skilled;
