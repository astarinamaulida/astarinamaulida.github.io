import React from "react";
import { contacts } from "../../portfolio";
import "./Contacts.css";

export default function Contacts() {
  const { email, github, linkedin } = contacts;

  return (
    <section id="contacts" className="section-contacts">
      <h2 className="contacts">Contacts</h2>
      <div className="contacts-frame">
        <div className="contacts-header">
          <div className="header">
            <div>email: {email}</div>
            
            <div>
            <span>
          <a href="https://github.com/astarinamaulida">
            <img
              className="github-logo-contacts"
              src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
            ></img>
          </a>
        </span>{github}</div>
            <div>linkedin: {linkedin}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
