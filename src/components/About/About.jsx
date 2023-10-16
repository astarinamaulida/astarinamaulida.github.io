import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import "./About.css";

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

export default function About() {
  return (
    <div className="main-container">
      <div className="about">
        <h1 className="title">Howdy!</h1>
        <div className="about-desc">
          I am Asta, a UX developer and designer who loves to design and build
          clean and aesthetic products that solve users' problems.
        </div>
        <div className="button-row">
          <BootstrapButton
            sx={{ marginRight: "20px" }}
            variant="contained"
            disableRipple
            href="https://www.linkedin.com/in/astarinamaulida/"
          >
            View Linkedin
          </BootstrapButton>
          <BootstrapButton
            variant="contained"
            disableRipple
            href="https://github.com/astarinamaulida"
          >
            View Github
          </BootstrapButton>
        </div>
      </div>
    </div>
  );
}
