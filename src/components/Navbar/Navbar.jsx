import React from "react";
import { Link as LinkScroll } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="main-container">
    <nav className="nav-wrapper">
      <div className="name">ASTARINA MAULIDA</div>
      <div className="nav">
        <LinkScroll
          className="nav-link nav-about"
          activeClass="active"
          to="about"
          spy="true"
          smooth="true"
          offset={-70}
          duration={500}
        >
          Home
        </LinkScroll>
        <LinkScroll
          className="nav-link nav-about"
          activeClass="active"
          to="about"
          spy="true"
          smooth="true"
          offset={-70}
          duration={500}
        >
          Work
        </LinkScroll>
        <LinkScroll
          className="nav-link nav-projects"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </LinkScroll>
      </div>
    </nav>
    </div>
  );
}
