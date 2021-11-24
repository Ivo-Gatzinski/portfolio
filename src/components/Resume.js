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
            We don’t serve their kind here! What? Your droids. They’ll have to
            wait outside. We don’t want them here. Listen, why don’t you wait
            out by the speeder. We don’t want any trouble. I heartily agree with
            you sir. Negola dewaghi wooldugger?!? He doesn’t like you. I’m
            sorry. I don’t like you either You just watch yourself. We’re wanted
            men. I have the death sentence in twelve systems. I’ll be careful
            than. You’ll be dead. This little one isn’t worth the effort. Come
            let me buy you something…
          </p>
          <p className="h3">Skills</p>
          <div className="skills">
            <div className="frontend">
              <p className="h2">Front End</p>
          <ol>
            <li>We don’t serve their kind here! What? </li>
            <li>Your droids.</li>
            <li>They’ll have to wait outside. </li>
            <li>
              We don’t want them here. Listen, why don’t you wait out by the
              speeder.
            </li>
            <li>We don’t want any trouble.</li>
            </ol>
            </div>
            <div className="backend">
            <p className="h2">Back End</p>
          <ol>
            <li>We don’t serve their kind here! What? </li>
            <li>Your droids.</li>
            <li>They’ll have to wait outside. </li>
            <li>
              We don’t want them here. Listen, why don’t you wait out by the
              speeder.
            </li>
            <li>We don’t want any trouble.</li>
            </ol>
            </div>
            </div>
            <p id="download">
              <a  href="../resume-gatzinski-ivo.pdf" download >
              📎 Download My Resume
              </a>
            </p>
        </div>
      </section>
    </div>
  );
}
