import React from "react";
import { skills } from "../../portfolio";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="Skills" className="section-contacts">
      <h2 className="skills">Skills</h2>
      <div className="skills-frame">{skills}</div>
    </section>
  );
}
