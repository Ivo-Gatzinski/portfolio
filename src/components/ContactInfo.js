import React from "react";
import aphorisms from "../utils/aphorisms.json";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="info">
        <div className="info-item">
          <a rel="noreferrer" href="tel:6193520538">
            Phone <i className="fas fa-phone-square"></i>
          </a>
        </div>
        <div className="info-item">
          <a href="mailto:ivo.gatzinski@outlook.com">
            Email <i className="fas fa-envelope-open-text"></i>
          </a>
        </div>
        <div className="info-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Ivo-Gatzinski"
          >
            GitHub <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="info-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ivo-gatzinski/"
          >
            LinkedIn <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="info-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/IvoGatzinski"
          >
            Twitter <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="info-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://toad.social/@IvoGatzinski"
          >
            Mastodon <i className="fab fa-mastodon"></i>
          </a>
        </div>
      </div>
      <div className="aphorisms" id="aphorisms" style={{padding: "10px"}}><p>{aphorisms[Math.floor(Math.random() * aphorisms.length)]}</p><p><a className="fripp" href="https://www.dgmlive.com/" target="_blank" rel="noreferrer">- Robert Fripp</a></p></div>
    </section>
  );
}
