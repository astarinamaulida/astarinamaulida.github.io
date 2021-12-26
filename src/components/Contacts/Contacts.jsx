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
            <div>{email}</div>
            <div>{github}</div>
            <div>{linkedin}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
