import React from "react";
import pic from "./images/bio_pic.png";

export default function Samples() {
  return (
    <section className="work" id="work">
      <div className="samples">
      <figure className="books card">
          <div className="h4">
            <h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ivo-gatzinski.github.io/book-search/"
              >
                Book Search
              </a>
            </h3>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ivo-Gatzinski/book-search/"
              >
                GitHub <i className="fab fa-github"></i>
              </a>
            </p>
          </div>
        </figure>
        <figure className="portfolio card">
          <div className="h4">
            <h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ivo-gatzinski.github.io/portfolio"
              >
                Ivo's Portfolio
              </a>
            </h3>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ivo-Gatzinski/portfolio"
              >
                GitHub <i className="fab fa-github"></i>
              </a>
            </p>
          </div>
          <figure>
            <img src={pic} alt="Ivo Gatzinski" className="work_pic" />
          </figure>
        </figure>
        <figure className="surf card">
          <div className="h4">
            <h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ivo-gatzinski.github.io/weather-dash"
              >
                Weather Dashboard
              </a>
            </h3>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ivo-Gatzinski/weather-dash"
              >
                GitHub <i className="fab fa-github"></i>
              </a>
            </p>
          </div>
        </figure>
        <figure className="LED card">
          <div className="h4">
            <h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ivo-gatzinski.github.io/workday-planner"
              >
                Work Day Planner
              </a>
            </h3>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ivo-Gatzinski/workday-planner"
              >
                GitHub <i className="fab fa-github"></i>
              </a>
            </p>
          </div>
        </figure>
        <figure className="calc card">
          <div className="h4">
            <h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ivo-gatzinski.github.io/password-generator"
              >
                Password Generator
              </a>
            </h3>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ivo-Gatzinski/password-generator"
              >
                GitHub <i className="fab fa-github"></i>
              </a>
            </p>
          </div>
        </figure>
        <figure className="eight_ball card">
          <div className="h4">
            <h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://magic8-ezi.herokuapp.com/"
              >
                Magic 8 Ball
              </a>
            </h3>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ivo-Gatzinski/magic-8-ball"
              >
                GitHub <i className="fab fa-github"></i>
              </a>
            </p>
          </div>
        </figure>
        <figure className="run card">
          <div className="h4">
            <h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ivo-gatzinski.github.io/adoption-connection"
              >
                Adopt a Furry Buddy
              </a>
            </h3>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ivo-Gatzinski/adoption-connection"
              >
                GitHub <i className="fab fa-github"></i>
              </a>
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}