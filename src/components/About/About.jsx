import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
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
    <div>
      <div className="about">
        <div className="header">
          <div>
            <RoughNotationGroup show={true}>
              <h1>
                Hello! I am{" "}
                <span className="about-name">
                  <RoughNotation
                    type="underline"
                    color="#fcdcf3"
                    multiline={true}
                    animationDelay={1000}
                    strokeWidth={4}
                  >
                    Asta,
                  </RoughNotation>{" "}
                </span>
                a{" "}
                <RoughNotation
                  type="underline"
                  color="#fdf6a2"
                  multiline={true}
                  animationDelay={1000}
                  strokeWidth={4}
                >
                  software developer
                </RoughNotation>{" "}
                based in Canada
              </h1>
              <span className="about-desc">
                I enjoy coding in stacks like{" "}
                <RoughNotation
                  type="highlight"
                  color="#fdf6a2"
                  multiline={true}
                  padding={[0, 2]}
                  animationDelay={1500}
                  strokeWidth={4}
                >
                  React, PostgreSQL, Express, Node.
                </RoughNotation>{" "}
                I acquired some coding languages both frontend and backend like
                <RoughNotation
                  type="highlight"
                  color="#fcdcf3"
                  multiline={true}
                  padding={[0, 2]}
                  animationDelay={2000}
                  strokeWidth={4}
                >
                  Javascript, Ruby, HTML, CSS
                </RoughNotation>{" "}
                and currently learning new things every day from typescript,
                gatsby, c#, tailwindcss and planning to add React Native to my
                learning list. I love doing the visual creation, editing and
                adjustment with any image editor, like Adobe Photoshop, Canva,
                Adobe Illustrator and Figma.
              </span>
              <span className="about-desc">
                I have unique perspectives as I have{" "}
                <RoughNotation
                  type="highlight"
                  color="#fbdcfc"
                  multiline={true}
                  padding={[0, 2]}
                  animationDelay={2500}
                  strokeWidth={4}
                >
                  web development
                </RoughNotation>{" "}
                skills strengthened by my bachelor's in{" "}
                <RoughNotation
                  type="highlight"
                  color="#c5e2f7"
                  multiline={true}
                  padding={[0, 2]}
                  animationDelay={3000}
                  strokeWidth={5}
                >
                  business management
                </RoughNotation>{" "}
                with finance, which provides logic and business acumen. I
                enhanced my visual and artistic design from a{" "}
                <RoughNotation
                  type="highlight"
                  color="#fdf6a2"
                  multiline={true}
                  padding={[0, 2]}
                  animationDelay={3500}
                  strokeWidth={5}
                >
                  fashion design
                </RoughNotation>{" "}
                diploma from Milan where I learned a lot about colour palette
                trends, proportions, product designs and more.
              </span>
            </RoughNotationGroup>
            <span className="about-desc">
              Apart from coding, I love books and enjoy my weekly library visit.
              I also love to travel and learn new languages, halo! ciao!
              bonjour! hola! kia ora! privet! salaam! anyeong haseyo! ni hao!
              konnichiwa! hello! hallo! namaste! Do not hesitate to reach me to
              have a chit chat in different languages, I love it! ❤️😊
            </span>
            <span className="about-desc">
              Thanks for visiting my portfolio website, I hope you enjoy it!
            </span>
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
          href="https://www.linkedin.com/in/astarinamaulida/"
        >
          View Linkedin
        </BootstrapButton>
        <BootstrapButton
          variant="contained"
          style={{ marginTop: "10px" }}
          disableRipple
          href="https://github.com/astarinamaulida"
        >
          View Github
        </BootstrapButton>
      </div>
    </div>
  );
}
