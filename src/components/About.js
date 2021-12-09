import React from "react";
import pic from "./images/bio_pic.png";

export default function About() {
  return (
    <section className="about" id="about">
      {/* <div className="h3">About Me</div> */}
      <div className="bio">
        <figure>
          
          <img src={pic} alt="Ivo Gatzinski" className="bio_pic" />
        </figure>
        <p className="bio">
            Multilingual, multicultural, multidisciplinary Full Stack Web
            Developer with three years of experience. Collaborative, attentive, and compassionate listener who
            meets concrete needs of diverse viewpoints. Sensitive to others’
            perspectives, having lived in six countries on four continents.
            Fluent in Bulgarian and Russian; moderate French; basic Japanese. Certified in Full Stack Web Design by UCSD with a grade of A.
          </p>
      </div>
    </section>
  );
}
