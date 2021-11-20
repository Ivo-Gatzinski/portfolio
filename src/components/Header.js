import React from 'react';


export default function Header() {
    return (<div><section className="space-fill-1"></section>
    <section className="subheader">
      <div className="h1">
        <h1>Ivo Gatzinski</h1>
      </div>
      <div className="h2">
        <h2>Full Stack Web Developer</h2>
      </div>
      <nav className="nav">
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
