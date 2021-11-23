import React from "react";

export default function Header() {
  return (
    <div>
      <section className="space-fill-1"></section>
      <section className="subheader">
        <div className="h1">
          <h1>Ivo Gatzinski</h1>
        </div>
        <div className="h2">
          <h2>Full Stack Web Developer</h2>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Work</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
            <li>
              <button>Resume</button>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
