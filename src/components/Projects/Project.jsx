import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Project.css";

export default function Project() {
  return (
    <section id="projects" className="section-projects">
      <div className="main-container">
        <div></div>
        <h1 className="title">WORK</h1>
        <div className="row">
          <div className="project-frame">
            <span className="project-image">
              <a href="https://hijabtale.com">
                <img src="work1.png" alt="hijabtale gif" />
              </a>
            </span>
            <div className="desc-frame">
              <div className="project-header">
                <p className="project-year">2021-2023 - UX Developer</p>
                <h1 className="project-title">L'Oréal</h1>
              </div>
              <p className="projects-stack">Amazon Keyword Planner</p>
              <p className="desc">
                A web app that provides insight of best selling and high growth
                keywords in Amazon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
