import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <section id="projects" className="section-projects">
      <div className="main-container">
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
                <h1 className="project-title">L'Oréal Canada</h1>
              </div>
              <p className="projects-stack">Amazon Keyword Planner</p>
              <p className="desc">
                A web app that provides insight of best selling and high growth
                keywords in Amazon.
              </p>
            </div>
          </div>

          <div className="project-frame">
            <span className="project-image">
              <a href="https://hijabtale.com">
                <img src="work2.png" alt="hijabtale gif" />
              </a>
            </span>
            <div className="desc-frame">
              <div className="project-header">
                <p className="project-year">
                  2020-2021 - Shopify Design & Developer
                </p>
                <h1 className="project-title">HIJABTALE</h1>
              </div>
              <p className="projects-stack">Online Shop</p>
              <p className="desc">
                An online store which provides affordable, chic and beautiful hijabs and accessories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
