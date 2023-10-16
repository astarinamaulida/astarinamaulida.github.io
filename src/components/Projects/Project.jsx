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
            <div>
            <div className="project-header">
              <h2 className="projects-title">HIJABTALE</h2>
            </div>
            <h3 className="projects-stack">Platform</h3>
            <p className="desc">Shopify</p>
            <h3 className="projects-desc">Description</h3>
            <p className="desc">
              HIJABTALE is Canada hijab's online store which established and
              designed using Shopify platform. The UX UI follows the brand
              identity and target market.
            </p>
            <span>
              <a href="https://hijabtale.com">
                <img
                  alt="github logo"
                  className="github-logo"
                  src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
                ></img>
              </a>
            </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
