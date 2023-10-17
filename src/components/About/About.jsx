import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="main-container">
      <div className="about-container">
        <div className="desc-container">
          <p className="about-desc">
            Thank you for visiting my portfolio website!
            <br />
            My name is Asta, and I'm a fusion of two worlds: design and development. <br />I firmly believe that these realms complement and empower each other. ✨
            <br />
          </p>
          <p>
          <h1 className="project-title">FUN FACT</h1>
            <ul className="about-desc">
              <li>An avid reader, so much so that I even read when I eat.</li>
              <li>An ambivert, loving the company of people and cherishing my alone time equally.</li>
              <li>A romantic at heart, seeing the world with all its colors and butterflies.</li>
              <li>A dreamer and a dream chaser, forever lifelong learner ✨</li>
            </ul>
          </p>
        </div>
        <div className="profile-pic-container">
          <img className="profile-pic" src="./profilepic.JPG" alt="My Profile Pic" />
        </div>
      </div>
    </div>
  );
}
