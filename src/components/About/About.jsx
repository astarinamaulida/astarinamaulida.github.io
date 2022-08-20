import React from "react";
import { about } from "../../portfolio";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "./About.css";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "6px 30px",
  border: "1px solid",
  lineHeight: 1.5,
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
    color: "#000000"
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
  const { name, role, description, description2, description3, description4 } =
    about;

  return (
    <div>
      <div className="about">
        <div className="header">
          <div>
            <h1>
              Hello! I am <span className="about-name">{name}, </span>
              {role}
            </h1>
            <p className="about-desc">{description}</p>
            <p className="about-desc">{description2}</p>
            <p className="about-desc">{description3}</p>
            <p className="about-desc">{description4}</p>
          </div>
          <img
            className="profile-pic"
            alt="profile pic"
            src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/profilepic.png?raw=true"
          />
        </div>
      </div>
      <div className="button-row">
        <BootstrapButton
          sx={{ marginRight: "20px" }}
          variant="contained"
          disableRipple
        >
          View Linkedin
        </BootstrapButton>
        <BootstrapButton variant="contained" disableRipple>
          View Github
        </BootstrapButton>
      </div>
    </div>
  );
}
