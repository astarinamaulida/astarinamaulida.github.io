import React from "react";
import { connect } from "../../portfolio";
import "./Connect.css";

export default function Connect() {
  const { email, github, linkedin } = connect;

  return (
    <section id="connect" className="section-connect">
      <h2 className="connect">Connect</h2>
      <div className="connect-frame">
        <div className="connect-icons">
          <div>
            <span>
              <a href="mailto: astarina.maulida@gmail.com">
                <img
                  className="email-logo-connect"
                  src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/toemail-logo.png?raw=true"
                ></img>
              </a>
            </span>
          </div>
          <div>
            <span>
              <a href="https://github.com/astarinamaulida">
                <img
                  className="github-logo-connect"
                  src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
                ></img>
              </a>
            </span>
          </div>
          <div>
            <span>
              <a href="https://www.linkedin.com/in/astarinamaulida/">
                <img
                  className="linkedin-logo-connect"
                  src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/linkedin-logo.png?raw=true"
                ></img>
              </a>
            </span>
          </div>
        </div>
        <div className="connect-list">
          <div>{email}</div>
          <div>{github}</div>
          <div>{linkedin}</div>
        </div>
      </div>
    </section>
  );
}
