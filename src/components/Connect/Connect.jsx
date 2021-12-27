import React from "react";
import { connect } from "../../portfolio";
import "./Connect.css";

export default function Connect() {
  const { email, github, linkedin, instagram } = connect;

  return (
    <section id="connect" className="section-connect">
      <h2 className="connect">Connect</h2>
      <div className="connect-frame">
        <div className="connect-header">
        <span>
          <a href="https://hijabtale.com">
            <img
              className="github-logo"
              src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
            ></img>
          </a>
        </span>
          <div className="connect-list">
            <div>{email}</div>
            <div>{github}</div>
            <div>{linkedin}</div>
            <div>{instagram}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
