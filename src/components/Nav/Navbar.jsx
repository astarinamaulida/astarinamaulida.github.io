import React from "react";
import { Link, Link as LinkScroll } from "react-scroll";
import { skills, contact } from "../../portfolio";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <LinkScroll
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
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projects
      </LinkScroll>
    </nav>
  );
}
