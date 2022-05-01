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
        <p>
            Multilingual, multicultural, multidisciplinary Full Stack Web
            Developer with three years of experience. 
            Recently earned Certificate in Full Stack Web Design at UCSD with a grade of A. 
            Enhanced my skills in responsive web design using MERN stack with GraphQL by leading an agile team of developers.
            Collaborative, attentive, and compassionate listener who
            meets concrete needs of diverse viewpoints. Sensitive to others'
            perspectives, having lived in six countries on four continents.
            Fluent in Bulgarian and Russian; moderate French; basic Japanese. 
            My professional background in both technology and education, combined with a passion to solve problems, would make me a strong addition to any organization.
          </p>
      </div>
    </section>
  );
}
