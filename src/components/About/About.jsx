import React from "react";
import { about } from "../../portfolio";
import "./About.css";

export default function About() {
  const { name, role, description, description2, description3 } = about;

  return (
    <div className="about">
      <div className="header">
        <h1>Hi, I am <span className="about-name">{name}.</span>
        <br/>
        {role}</h1>
        <img
          className="profile-pic" alt="profile pic" src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/profilepic.png?raw=true"
        />
      </div>
      <p className="about-desc">{description}</p>
      <p className="about-desc">{description2}</p>
      <p className="about-desc">{description3}</p>
    </div>
  );
}
