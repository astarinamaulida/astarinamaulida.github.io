import React from "react";
import { Link as LinkScroll } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <LinkScroll
        className="nav-link nav-about"
        activeClass="active"
        to="about"
        spy="true"
        smooth="true"
        offset={-70}
        duration={500}
      >
        About
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
        Projects
      </LinkScroll>
      <LinkScroll
        className="nav-link nav-skills"
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Skills
      </LinkScroll>
      <LinkScroll
        className="nav-link nav-connect"
        activeClass="active"
        to="connect"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Connect
      </LinkScroll>
      <LinkScroll
        className="nav-link nav-resume"
        activeClass="active"
        to="resume"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Resume
      </LinkScroll>
    </nav>
  );
}
