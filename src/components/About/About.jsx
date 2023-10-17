import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
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
        <h1 className="title">HELLO</h1>
        <div className="big-title">
          I'm Asta, a UX developer and designer 
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
  );
}
