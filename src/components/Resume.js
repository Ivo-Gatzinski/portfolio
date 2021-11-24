import React from "react";
// import Skills from "./images/skills.svg";

export default function Contact() {
  return (
    <div>
      {/* <div className="res_title h3">Resume</div> */}
      <section id="resume">
        <div className="skills">
          <p id="gear">⚙️</p>
          {/* <img src={Skills} alt="Technologies" className="skills" /> */}
        </div>

        <div className="resume">
          <p className="bio">
            Collaborative, attentive, and
            compassionate listener that meets concrete needs of diverse
            viewpoints. Sensitive to others’ perspectives, having lived in six
            countries on four continents. Fluent in Bulgarian and Russian;
            moderately competent in French; basic skills in Japanese.
          </p>
          <p className="h3">Skills</p>
          <div className="skills">
            <div className="frontend">
              <p className="h2">Front End</p>
              <ol>
                <li>React.js</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>
                  Handlebars.js
                </li>
                <li>IndexDB</li>
              </ol>
            </div>
            <div className="backend">
              <p className="h2">Back End</p>
              <ol>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
                <li>
                  Node.js
                </li>
                <li>Express.js</li>
              </ol>
            </div>
          </div>
          <p id="download">
            <a href="../resume-gatzinski-ivo.pdf" download>
              📎 Download My Resume
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
