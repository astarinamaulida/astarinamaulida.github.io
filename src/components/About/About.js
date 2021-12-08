import React from 'react'
import { about } from "../../portfolio";
import './About.css'

export default function About() {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about">
      <h1>
        Hi, I am <span className="about-name">{name}.</span>
      </h1>
      
      <h2 className="about-role">{role}</h2>
      <p className="about-desc">{description}</p>
    </div>
  );
}
