import React from "react";
import "./Homepage.css";
import { BootstrapButton } from "../../constants";

export default function Homepage() {
  return (
    <div>
      {/* <img className="background" src="/intro.png"/> */}
      <div className="main-container">
        <div className="about">
          <h1 className="title">HELLO 👋✨</h1>
          <div className="big-title">
            I'm Asta, a UX designer and developer based in Toronto 🇨🇦
            <br />I am a bit of a 🦄 with business, design and web development
            background. <br />I enjoy making user-friendly solutions with clean,
            practical designs.
          </div>
          <div className="button-row">
            <BootstrapButton
              sx={{ marginRight: "20px", width: "100px" }}
              target="_blank"
              variant="contained"
              disableRipple
              href="https://www.linkedin.com/in/astarinamaulida/"
            >
              LinkedIn
            </BootstrapButton>
            <BootstrapButton
              sx={{ marginRight: "20px", width: "100px" }}
              target="_blank"
              variant="contained"
              disableRipple
              href="https://github.com/astarinamaulida"
            >
              Github
            </BootstrapButton>
            <BootstrapButton
              sx={{ width: "100px" }}
              target="_blank"
              variant="contained"
              disableRipple
              href="mailto:astarina.maulida@gmail.com"
            >
              Email
            </BootstrapButton>
          </div>
        </div>
      </div>
      <section id="projects" className="section-projects">
        <div className="main-container">
          <h1 className="title">WORK</h1>
          <a href="/loreal-project" style={{ textDecoration: "none" }}>
            <div className="project-frame">
              <span className="project-image">
                <img src="work1.png" alt="hijabtale gif" />
              </span>
              <div className="desc-frame">
                <div className="project-header">
                  <p className="project-year">
                    2021-2023 - UX designer & developer
                  </p>
                  <h1 className="project-title">L'Oréal Canada</h1>
                </div>
                <p className="projects-stack">Amazon Keyword Planner</p>
                <p className="desc">
                  A web app that provides insight of best selling and high
                  growth keywords in Amazon.
                </p>
              </div>
            </div>
          </a>

          <a href="/pulsar-project" style={{ textDecoration: "none" }}>
            <div className="project-frame">
              <span className="project-image">
                <img src="work2.png" alt="pulsar mockup" />
              </span>
              <div className="desc-frame">
                <div className="project-header">
                  <p className="project-year">2022 - UX designer & developer</p>
                  <h1 className="project-title">PulsarML</h1>
                </div>
                <p className="projects-stack">Company Website</p>
                <p className="desc">
                  A company website to showcase the product and services.
                </p>
              </div>
            </div>
          </a>

          <a href="/hijabtale-project" style={{ textDecoration: "none" }}>
            <div className="project-frame">
              <span className="project-image">
                <img src="work3.png" alt="hijabtale pics" />
              </span>
              <div className="desc-frame">
                <div className="project-header">
                  <p className="project-year">
                    2020-2021 - Shopify designer & developer
                  </p>
                  <h1 className="project-title">Hijabtale</h1>
                </div>
                <p className="projects-stack">Online Shop</p>
                <p className="desc">
                  An online store which provides affordable, chic and beautiful
                  hijabs and accessories.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
