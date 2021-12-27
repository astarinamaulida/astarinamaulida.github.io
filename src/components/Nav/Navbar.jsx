import React from "react";
import { Link as LinkScroll } from "react-scroll";
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
      <LinkScroll
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
        activeClass="active"
        to="contacts"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contacts
      </LinkScroll>
    </nav>
  );
}
