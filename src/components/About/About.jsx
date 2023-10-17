import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="main-container">
      <div className="about-container">
        <div className="desc-container">
          <h1 className="about-title">I'm Asta!</h1>
          <p className="about-desc">
            I'm a fusion of two worlds: design and development. <br />I firmly
            believe that these realms complement and empower each other. ✨
            <br />
          </p>
          <h1 className="about-title">My career so far</h1>
          <p className="about-desc">
            I have a business, design and web development background and
            experience in implementing user-centered design and design thinking.
            <br />
            This background allows me to excel in understanding the user's needs
            and crafting visual and creative branding, supported by great
            business acumen.
          </p>
          <div className="row">
            <p className="skillset">
              UX Design <br />
              UI Design <br />
              User Research <br />
            </p>
            <p className="skillset">
              Wireframing <br />
              Prototyping <br />
              Usability Testing
            </p>
            <p className="skillset">
              Web Development <br />
              Frontend Development <br />
            </p>
          </div>
        </div>
        <div className="profile-pic-container">
          <img
            className="profile-pic"
            src="./profilepic.JPG"
            alt="My Profile Pic"
          />
        </div>
      </div>
      <h1 className="about-title">Fun Facts, I am..</h1>
          <ul className="about-desc">
            <li>An avid reader, so much so that I even read when I eat.</li>
            <li>
              An ambivert, loving the company of people and cherishing my alone
              time equally.
            </li>
            <li>
              A romantic and positive person. I like to romanticizing things,
              seeing the world with all its colors and butterflies.
            </li>
            <li>A dreamer and a dream chaser, forever lifelong learner ✨</li>
          </ul>
    </div>
  );
}
