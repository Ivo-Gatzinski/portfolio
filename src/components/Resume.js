import React from "react";

import resume from "./resume-gatzinski-ivo.pdf";

export default function Resume() {
  return (
    <div>
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
