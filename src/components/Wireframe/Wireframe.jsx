import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Wireframe.css";

export default function Wireframe() {
  return (
    <section id="wireframes" className="section-wireframes">
      <h2 className="about-title">Wireframes</h2>
      <Carousel
        autoPlay={true}
        swipe={true}
        animation="slide"
        interval={2000}
        timeout={500}
        height={1150}
      >
        <div className="wireframe-frame">
          <div className="wireframe-header">
            <h2 className="wireframes-title">APP PROTOTYPE</h2>
          </div>
          <span className="wireframe-image">
            <a href="https://www.figma.com/file/6M12w0o07aTMHvLLgEfGmQ/MLOPS-Institite-Prototype">
              <img src="../figma-mlops.png" alt="" />
              <img
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/figma-cravings1.png?raw=true"
                alt="figma cravings"
              />
              <img
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/figma-cravings2.png?raw=true"
                alt="figma cravings"
              />
            </a>
          </span>
          <h3 className="wireframes-stack">Platform</h3>
          <p className="desc">Figma</p>
          <h3 className="wireframes-desc">Description</h3>
          <p className="desc">
            Prototype for Cravings app using Figma and Canva for mobile and
            website.
          </p>
          <span>
            <a href="https://www.figma.com/file/LkfKmik1daxPvro2vLtDSf/Prototyping-in-Figma?node-id=0%3A1">
              <img
                alt="github logo"
                className="github-logo"
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/figma-logo.png?raw=true"
              />
            </a>
          </span>
        </div>
      </Carousel>
    </section>
  );
}
