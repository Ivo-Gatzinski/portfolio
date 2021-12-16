import React from "react";
import pic from "./images/bio_pic.png";

export default function Samples() {
  return (
    <section className="work" id="work">
      <div className="samples">
      <figure className="pets card">
          <div className="h4">
            <h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://healthy-pets-copypaste.herokuapp.com/"
              >
                Healthy Pets: MERN Stack with GraphQL
              </a>
            </h3>
            <p>Easily communicate with your Veterinarian.</p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/elenaliu0415/healthy-pets/"
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
                Magic 8 Ball: JavaScript, MySQL, Handlebars, MDBootstrap
              </a>
            </h3>
            <p>Combat decision fatigue with this easy app!</p>
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
                Adopt a Furry Buddy: JavaScript, Server-Side APIs, CSS, HTML
              </a>
            </h3>
            <p>Find a furry buddy to adopt.</p>
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
      <figure className="books card">
          <div className="h4">
            <h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://book-search-ivg.herokuapp.com/"
              >
                Book Search: MERN Stack with GraphQL
              </a>
            </h3>
            <p>Find and save your favorite books.</p>
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
                Portfolio: React.js, CSS, HTML
              </a>
            </h3>
            <p>Advertise your skills to the world!</p>
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
                Weather Dashboard: JavaScript, Server-Side APIs, Bootstrap
              </a>
            </h3>
            <p>Get the weather for any city.</p>
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
                Work Day Planner: JavaScript, CSS, HTML
              </a>
            </h3>
            <p>Schedule your productive day.</p>
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
                Password Generator: JavaScript
              </a>
            </h3>
            <p>Generate a secure password.</p>
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
        
      </div>
    </section>
  );
}
