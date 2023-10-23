import React from "react";
import "./Homepage.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 12,
  padding: "6px 30px",
  border: "1px solid",
  lineHeight: 1.5,
  borderRadius: 0,
  backgroundColor: "#121212",
  borderColor: "#121212",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#ffffff",
    borderColor: "#121212",
    boxShadow: "none",
    color: "#121212",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function Homepage() {
  return (
    <div>
      <div className="main-container">
        <div className="about">
          <h1 className="title">HELLO</h1>
          <div className="big-title">
            I'm Asta, a seasoned UX developer and designer with a diverse
            background spanning business, design, and web development.
            <br />I enjoy making user-friendly solutions with clean, practical
            designs.
          </div>
          <div className="button-row">
            <BootstrapButton
              sx={{ marginRight: "20px" }}
              variant="contained"
              disableRipple
              href="https://www.linkedin.com/in/astarinamaulida/"
            >
              LinkedIn
            </BootstrapButton>
            <BootstrapButton
              variant="contained"
              disableRipple
              href="https://github.com/astarinamaulida"
            >
              Github
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
                <img src="work3.png" alt="hijabtale gif" />
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
