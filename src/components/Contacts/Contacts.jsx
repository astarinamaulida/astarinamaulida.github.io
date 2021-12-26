import React from "react";
import { contacts } from "../../portfolio";
import "./Contacts.css";

export default function Contacts() {
  const { email, github, linkedin } = contacts;

  return (
    <div className="contacts">
      <div className="header">
      email: {email}
      <br/>
      github: {github}
      <br/>
     linkedin: {linkedin}
    </div>
    </div>
  );
}
