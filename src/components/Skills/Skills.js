import React from "react";
import { skills } from "../../portfolio";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="Skills" className="section-contacts">
      <h2 className="skills">Skills</h2>
      <div className="skills-frame">
        <div className="contacts-header">
          <div className="header">
            {skills}
          </div>
        </div>
      </div>
    </section>
  );
}
