import React from "react";

import resume from "./resume-gatzinski-ivo.pdf";

export default function Contact() {
  return (
    <div>
      <p className="h3">Skills</p>

      <section id="resume">
        <div>
          <p id="gear">⚙️</p>
        </div>
        <div className="resume">
          <div className="skills">
            <div className="frontend">
              <p className="h2">Front End</p>
              <ul>
                <li>
                  <img
                    alt="react"
                    src="https://img.shields.io/badge/-
                    React.js-navy?style=flat&logo=react"
                  ></img>
                </li>
                <li>
                  <img
                    alt="CSS"
                    src="https://img.shields.io/badge/-CSS-navy?style=flat&logo=css3&logoColor=turquoise"
                  ></img>
                </li>
                <li>
                  <img
                    alt="JavaScript"
                    src="https://img.shields.io/badge/-JavaScript-navy?style=flat&logo=javascript"
                  ></img>
                </li>
                <li>
                  <img
                    alt="Handlebars"
                    src="https://img.shields.io/badge/-Handlebars.js-navy?style=flat&logo=handlebars.js&logoColor=orange"
                  ></img>
                </li>
                <li>
                  <img
                    alt="IndexedDB"
                    src="https://img.shields.io/badge/-IndexedDB-navy?style=flat&logo=bookstack&logoColor=gold"
                  ></img>
                </li>
                <li>
                  <img
                    alt="GraphQL"
                    src="https://img.shields.io/badge/-GraphQL-navy?style=flat&logo=graphql&logoColor=magenta"
                  ></img>
                </li>
              </ul>
            </div>
            <div className="backend">
              <p className="h2">Back End</p>
              <ul>
                <li>
                  <img
                    alt="MySQL"
                    src="https://img.shields.io/badge/-MySQL-navy?style=flat&logo=mysql&logoColor=white"
                  ></img>
                </li>
                <li>
                  <img
                    alt="MongoDB"
                    src="https://img.shields.io/badge/-MongoDB-navy?style=flat&logo=MongoDB&logoColor=brightgreen"
                  ></img>
                </li>
                <li>
                  <img
                    alt="GraphQL"
                    src="https://img.shields.io/badge/-GraphQL-navy?style=flat&logo=graphql&logoColor=magenta"
                  ></img>
                </li>
                <li>
                  <img
                    alt="Apollo"
                    src="https://img.shields.io/badge/-Apollo-navy?style=flat&logo=apollographql&logoColor=red"
                  ></img>
                </li>
                <li>
                  <img
                    alt="Node.js"
                    src="https://img.shields.io/badge/-Node.js-navy?style=flat&logo=node.js&logoColor=yellow"
                  ></img>
                </li>
                <li>
                  <img
                    alt="Express.js"
                    src="https://img.shields.io/badge/-Express.js-navy?style=flat&logo=express"
                  ></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div id="download">
        <p>
          <a
            download="resume-gatzinski-ivo.pdf"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Download My Resume <i className="fas fa-paperclip"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
