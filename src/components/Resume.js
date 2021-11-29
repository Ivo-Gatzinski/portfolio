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
              <ol>
                <li>
                  <img
                    alt="react"
                    src="https://img.shields.io/badge/-React.js-navy?style=for-the-badge&logo=react"
                  ></img>
                </li>
                <li>
                  <img
                    alt="CSS"
                    src="https://img.shields.io/badge/-CSS-navy?style=for-the-badge&logo=css3&logoColor=turquoise"
                  ></img>
                </li>
                <li>
                  <img
                    alt="JavaScript"
                    src="https://img.shields.io/badge/-JavaScript-navy?style=for-the-badge&logo=javascript"
                  ></img>
                </li>
                <li>
                  <img
                    alt="Handlebars"
                    src="https://img.shields.io/badge/-Handlebars.js-navy?style=for-the-badge&logo=handlebars.js&logoColor=orange"
                  ></img>
                </li>
                <li>
                  <img
                    alt="IndexedDB"
                    src="https://img.shields.io/badge/-IndexedDB-navy?style=for-the-badge&logo=bookstack&logoColor=gold"
                  ></img>
                </li>
                <li>
                  <img
                    alt="GraphQL"
                    src="https://img.shields.io/badge/-GraphQL-navy?style=for-the-badge&logo=graphql&logoColor=magenta"
                  ></img>
                </li>
              </ol>
            </div>
            <div className="backend">
              <p className="h2">Back End</p>
              <ol>
                <li><img
                    alt="MySQL"
                    src="https://img.shields.io/badge/-MySQL-navy?style=for-the-badge&logo=mysql&logoColor=white"
                  ></img></li>
                <li><img
                    alt="MongoDB"
                    src="https://img.shields.io/badge/-MongoDB-navy?style=for-the-badge&logo=MongoDB&logoColor=brightgreen"
                  ></img></li>
                <li><img
                    alt="GraphQL"
                    src="https://img.shields.io/badge/-GraphQL-navy?style=for-the-badge&logo=graphql&logoColor=magenta"
                  ></img></li>
                <li><img
                    alt="Apollo"
                    src="https://img.shields.io/badge/-Apollo-navy?style=for-the-badge&logo=apollographql&logoColor=red"
                  ></img></li>
                <li><img
                    alt="Node.js"
                    src="https://img.shields.io/badge/-Node.js-navy?style=for-the-badge&logo=node.js&logoColor=yellow"
                  ></img></li>
                <li><img
                    alt="Express.js"
                    src="https://img.shields.io/badge/-Express.js-navy?style=for-the-badge&logo=express"
                  ></img></li>
              </ol>
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
                  Download My Resume <i class="fas fa-paperclip"></i>
                </a>
              </p>
          </div>
    </div>
  );
}
