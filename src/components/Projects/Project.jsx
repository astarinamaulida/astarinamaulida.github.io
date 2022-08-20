import React from "react";
import "./Project.css";

export default function Project() {
  return (
    <section id="projects" className="section-projects">
      <h2 className="about-projects">Projects</h2>
      <div className="row">
        <div className="project-frame">
          <div className="project-header">
            <h2 className="projects-title">MLOPS Institute</h2>
          </div>
          <span className="project-image">
            <a href="https://mlopsinstitute.net">
              <img src="../mlops.gif" alt="" />
            </a>
          </span>
          <h3 className="projects-stack">Stack</h3>
          <p className="desc">React, CSS3, Chakra-UI</p>
          <h3 className="projects-desc">Description</h3>
          <p className="desc">
            MLOPS Institute is a multi-page React application which allows user
            to gain information about MLOPS Institute and certification program.
          </p>
          <span>
            <a>
              <img
                className="github-logo"
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
              ></img>
            </a>
          </span>
        </div>

        <div className="project-frame">
          <div className="project-header">
            <h2 className="projects-title">Paykids</h2>
          </div>
          <span className="project-image">
            <a href="https://github.com/astarinamaulida/paykids">
              <img
                src="https://github.com/astarinamaulida/paykids/blob/master/docs/01_landing_login_page.gif?raw=true"
                alt=""
              />
            </a>
          </span>
          <h3 className="projects-stack">Stack</h3>
          <p className="desc">
            React, PostgreSQL, Node.js, Express, CSS3, Material-UI
          </p>
          <h3 className="projects-desc">Description</h3>
          <p className="desc">
            PayKids is a multi-page React application, that allows children to
            customise their own virtual debit cards and bank account user
            interface.
          </p>
          <span>
            <a href="https://github.com/astarinamaulida/paykids">
              <img
                className="github-logo"
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
              ></img>
            </a>
          </span>
        </div>

        <div className="project-frame">
          <div className="project-header">
            <h2 className="projects-title">Cravings</h2>
          </div>
          <span className="project-image">
            <a href="https://github.com/astarinamaulida/cravings">
              <img src="https://i.ibb.co/VC3Dw9W/gif-cravings.gif" alt="" />
            </a>
          </span>
          <h3 className="projects-stack">Stack</h3>
          <p className="desc">
            Node.js, Express.js, PostgreSQL, Javascript, EJS, jQuery, Bootstrap,
            SCSS
          </p>
          <h3 className="projects-desc">Description</h3>
          <p className="desc">
            Cravings is a food pick-up ordering website for a cakery shop. The
            app uses Twilio as our API to implement SMS communication from the
            website to customers and the cakery shop.
          </p>
          <span>
            <a href="https://github.com/astarinamaulida/cravings">
              <img
                className="github-logo"
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
              ></img>
            </a>
          </span>
        </div>
      </div>

      <div className="row">
        <div className="project-frame">
          <div className="project-header">
            <h2 className="projects-title">Interview Scheduler</h2>
          </div>
          <span className="project-image">
            <a href="https://github.com/astarinamaulida/scheduler">
              <img
                src="https://github.com/astarinamaulida/scheduler/raw/master/public/GIF/scheduler_new_appointment.gif?raw=true"
                alt=""
              />
            </a>
          </span>
          <h3 className="projects-stack">Stack</h3>
          <p className="desc">
            React, PostgreSQL, Javascript, Axios, Express.js, Classnames,
            Normalize, Storybook, Jest, Cypress, HTML5, CSS3
          </p>
          <h3 className="projects-desc">Description</h3>
          <p className="desc">
            Interview Scheduler is a simple appointment scheduling app. The
            frontend is React and the backend is Node.js. The storybook was
            built for each components and the app is tested by using Jest for
            its unit testing. Cypress is used for automated testing.
          </p>
          <span>
            <a href="https://github.com/astarinamaulida/scheduler">
              <img
                className="github-logo"
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
              ></img>
            </a>
          </span>
        </div>

        <div className="project-frame">
          <div className="project-header">
            <h2 className="projects-title">Tweeter</h2>
          </div>
          <span className="project-image">
            <a href="https://github.com/astarinamaulida/tweeter">
              <img
                src="https://github.com/astarinamaulida/tweeter/raw/master/docs/tweeter-demo.gif"
                alt=""
              />
            </a>
          </span>
          <h3 className="projects-stack">Stack</h3>
          <p className="desc">
            Node.js, Express.js, PostgreSQL, jQuery, HTML5, CSS3
          </p>
          <h3 className="projects-desc">Description</h3>
          <p className="desc">
            Tweeter is a Single Page App (SPA) twitter clone project.
          </p>
          <span>
            <a href="https://github.com/astarinamaulida/tweeter">
              <img
                className="github-logo"
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
              ></img>
            </a>
          </span>
        </div>

        <div className="project-frame">
          <div className="project-header">
            <h2 className="projects-title">Jungle Rails</h2>
          </div>
          <span className="project-image">
            <a href="https://github.com/astarinamaulida/jungle-rails">
              <img
                src="https://github.com/astarinamaulida/jungle-rails/raw/master/public/gif/order.gif?raw=true"
                alt=""
              />
            </a>
          </span>
          <h3 className="projects-stack">Stack</h3>
          <p className="desc">
            Ruby on Rails, bcrypt, PostgreSQL, Bootstrap, Rspec, Capybara,
            Poltergeist, HTML5, SCSS
          </p>
          <h3 className="projects-desc">Description</h3>
          <p className="desc">
            Jungle rails is an e-commerce platform built with Ruby on Rails.
            This app uses Rspec for the unit testing and Capybara and
            Poltergeist. For the API, this app uses Stripe for the payment.
          </p>
          <span>
            <a href="https://github.com/astarinamaulida/jungle-rails">
              <img
                className="github-logo"
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
              ></img>
            </a>
          </span>
        </div>
      </div>

      <div className="row">
        <div className="project-frame">
          <div className="project-header">
            <h2 className="projects-title">Tiny App</h2>
          </div>
          <span className="project-image">
            <a href="https://github.com/astarinamaulida/tinyapp">
              <img
                src="https://github.com/astarinamaulida/tinyapp/raw/master/docs/my-URLs.png"
                alt=""
              />
            </a>
          </span>
          <h3 className="projects-stack">Stack</h3>
          <p className="desc">Node.js, Express.js, EJS, bcrypt, HTML5, CSS3</p>
          <h3 className="projects-desc">Description</h3>
          <p className="desc">
            Tinyapp is an app that allows users to shorten long URLs. It is
            similar to bit.ly and TinyURL.
          </p>
          <span>
            <a href="https://github.com/astarinamaulida/tinyapp">
              <img
                className="github-logo"
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
              ></img>
            </a>
          </span>
        </div>

        <div className="project-frame">
          <div className="project-header">
            <h2 className="projects-title">HIJABTALE</h2>
          </div>
          <span className="project-image">
            <a href="https://hijabtale.com">
              <img
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/HIJABTALE.gif?raw=true"
                alt=""
              />
            </a>
          </span>
          <h3 className="projects-stack">Platform</h3>
          <p className="desc">Shopify</p>
          <h3 className="projects-desc">Description</h3>
          <p className="desc">
            HIJABTALE is Canada hijab's online store which established and
            designed using Shopify platform. The UX UI follows the brand
            identity and target market.
          </p>
          <span>
            <a href="https://hijabtale.com">
              <img
                className="github-logo"
                src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/github-logo.png?raw=true"
              ></img>
            </a>
          </span>
        </div>
      </div>

      <div className="project-frame">
        <div className="project-header">
          <h2 className="projects-title">APP PROTOTYPE</h2>
        </div>
        <span className="project-image">
          <a href="https://www.figma.com/file/6M12w0o07aTMHvLLgEfGmQ/MLOPS-Institite-Prototype">
            <img src="../figma-mlops.png" alt="" />
            <img
              src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/figma-cravings1.png?raw=true"
              alt=""
            />
            <img
              src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/figma-cravings2.png?raw=true"
              alt=""
            />
          </a>
        </span>
        <h3 className="projects-stack">Platform</h3>
        <p>Figma</p>
        <h3 className="projects-desc">Description</h3>
        <p>
          Prototype for Cravings app using Figma and Canva for mobile and
          website.
        </p>
        <span>
          <a href="https://www.figma.com/file/LkfKmik1daxPvro2vLtDSf/Prototyping-in-Figma?node-id=0%3A1">
            <img
              className="github-logo"
              src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/figma-logo.png?raw=true"
            />
          </a>
        </span>
      </div>
    </section>
  );
}
