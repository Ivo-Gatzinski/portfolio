import React from 'react';
import "./style.css";

export default function Display() {
    return (<div><section class="space-fill-1"></section>
    <section class="subheader">
      <div class="h1">
        <h1>Ivo Gatzinski</h1>
      </div>
      <div class="h2">
        <h2>Full Stack Web Developer</h2>
      </div>
      <nav class="nav">
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a target="_blank" href="./assets/resume-gatzinski-ivo.pdf"
              >Resume</a
            >
          </li>
        </ul>
      </nav>
    </section></div>);
}
