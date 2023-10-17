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
  backgroundColor: "#000000",
  borderColor: "#000000",
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
    borderColor: "#000000",
    boxShadow: "none",
    color: "#000000",
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
                <h1 className="project-title">Hijabtale</h1>
              </div>
              <p className="projects-stack">Online Shop</p>
              <p className="desc">
                An online store which provides affordable, chic and beautiful
                hijabs and accessories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
