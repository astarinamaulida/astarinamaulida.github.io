import React from "react";
import "./Project.css";
import { createMedia } from "@artsy/fresnel";

export default function Project() {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 1025,
    },
  });

  return (
    <section id="projects" className="section-projects">
      <h2 className="about-projects">Projects</h2>
      <div className="project-frame">
        <div className="project-header">
          <h2 className="projects-title">Paykids</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/paykids">
            <MediaContextProvider>
              <Media at="sm">
                <img
                  src="https://github.com/astarinamaulida/paykids/blob/master/docs/01_landing_login_page.gif?raw=true"
                  alt=""
                />
              </Media>
              <Media greaterThanOrEqual="md">
                <img
                  src="https://github.com/astarinamaulida/paykids/blob/master/docs/01_landing_login_page.gif?raw=true"
                  alt=""
                />
              </Media>
            </MediaContextProvider>
          </a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>React, PostgreSQL, Node.js, Express, CSS3, Material-UI</p>
        <h3 className="projects-desc">Description</h3>
        <p>
          PayKids is a multi-page React application, that allows children to
          customise their own virtual debit cards and bank account user
          interface.
        </p>
        <href link="https://github.com/astarinamaulida/paykids" />
      </div>

      <div className="project-frame">
        <div className="project-header">
          <h2 className="projects-title">Cravings</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/cravings">
            <MediaContextProvider>
              <Media at="sm">
                <img src="https://i.ibb.co/VC3Dw9W/gif-cravings.gif" alt="" />
              </Media>
              <Media greaterThanOrEqual="md">
                <img src="https://i.ibb.co/VC3Dw9W/gif-cravings.gif" alt="" />
              </Media>
            </MediaContextProvider>
          </a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>
          Node.js, Express.js, PostgreSQL, Javascript, EJS, jQuery, Bootstrap,
          SCSS
        </p>
        <h3 className="projects-desc">Description</h3>
        <p>
          Cravings is a food pick-up ordering website for a cakery shop. The app
          uses Twilio as our API to implement SMS communication from the website
          to customers and the cakery shop.
        </p>
      </div>

      <div className="project-frame">
        <div className="project-header">
          <h2 className="projects-title">Interview Scheduler</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/scheduler">
            <MediaContextProvider>
              <Media at="sm">
                <img
                  src="https://github.com/astarinamaulida/scheduler/raw/master/public/GIF/scheduler_new_appointment.gif?raw=true"
                  alt=""
                />
              </Media>
              <Media greaterThanOrEqual="md">
                <img
                  src="https://github.com/astarinamaulida/scheduler/raw/master/public/GIF/scheduler_new_appointment.gif?raw=true"
                  alt=""
                />
              </Media>
            </MediaContextProvider>
          </a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>
          React, PostgreSQL, Javascript, Axios, Express.js, Classnames,
          Normalize, Storybook, Jest, Cypress, HTML5, CSS3
        </p>
        <h3 className="projects-desc">Description</h3>
        <p>
          Interview Scheduler is a simple appointment scheduling app. The
          frontend is React and the backend is Node.js. The storybook was built
          for each components and the app is tested by using Jest for its unit
          testing. Cypress is used for automated testing.
        </p>
      </div>

      <div className="project-frame">
        <div className="project-header">
          <h2 className="projects-title">Tweeter</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/tweeter">
            <MediaContextProvider>
              <Media at="sm">
                <img
                  src="https://github.com/astarinamaulida/tweeter/raw/master/docs/tweeter-demo.gif"
                  alt=""
                />
              </Media>
              <Media greaterThanOrEqual="md">
                <img
                  src="https://github.com/astarinamaulida/tweeter/raw/master/docs/tweeter-demo.gif"
                  alt=""
                />
              </Media>
            </MediaContextProvider>
          </a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>Node.js, Express.js, PostgreSQL, jQuery, HTML5, CSS3</p>
        <h3 className="projects-desc">Description</h3>
        <p>Tweeter is a Single Page App (SPA) twitter clone project.</p>
      </div>

      <div className="project-frame">
        <div className="project-header">
          <h2 className="projects-title">Jungle Rails</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/tweeter">
            <MediaContextProvider>
              <Media at="sm">
                <img
                  src="https://github.com/astarinamaulida/jungle-rails/raw/master/public/gif/order.gif?raw=true"
                  alt=""
                />
              </Media>
              <Media greaterThanOrEqual="md">
                <img
                  src="https://github.com/astarinamaulida/jungle-rails/raw/master/public/gif/order.gif?raw=true"
                  alt=""
                />
              </Media>
            </MediaContextProvider>
          </a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>
          Ruby on Rails, bcrypt, PostgreSQL, Bootstrap, Rspec, Capybara,
          Poltergeist, HTML5, SCSS
        </p>
        <h3 className="projects-desc">Description</h3>
        <p>
          Jungle rails is an e-commerce platform built with Ruby on Rails. This
          app uses Rspec for the unit testing and Capybara and Poltergeist. For
          the API, this app uses Stripe for the payment.
        </p>
      </div>

      <div className="project-frame">
        <div className="project-header">
          <h2 className="projects-title">Tiny App</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/tinyapp">
            <MediaContextProvider>
              <Media at="sm">
                <img
                  src="https://github.com/astarinamaulida/tinyapp/raw/master/docs/my-URLs.png"
                  alt=""
                />
              </Media>
              <Media greaterThanOrEqual="md">
                <img
                  src="https://github.com/astarinamaulida/tinyapp/raw/master/docs/my-URLs.png"
                  alt=""
                />
              </Media>
            </MediaContextProvider>
          </a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>Node.js, Express.js, EJS, bcrypt, HTML5, CSS3</p>
        <h3 className="projects-desc">Description</h3>
        <p>
          Tinyapp is an app that allows users to shorten long URLs. It is
          similar to bit.ly and TinyURL.
        </p>
      </div>

      <div className="project-frame">
        <div className="project-header">
          <h2 className="projects-title">HIJABTALE</h2>
        </div>
        <span className="project-image">
          <a href="https://hijabtale.com">
            <MediaContextProvider>
              <Media at="sm">
                <img
                  src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/HIJABTALE.gif?raw=true"
                  alt=""
                />
              </Media>
              <Media greaterThanOrEqual="md">
                <img
                  src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/HIJABTALE.gif?raw=true"
                  alt=""
                />
              </Media>
            </MediaContextProvider>
          </a>
        </span>
        <h3 className="projects-stack">Platform</h3>
        <p>Shopify</p>
        <h3 className="projects-desc">Description</h3>
        <p>
          HIJABTALE is Canada hijab's online store which established and
          designed using Shopify platform. The UX UI follows the brand identity and target market.
        </p>
        <span className="github-logo">
          <img src="https://github.com/astarinamaulida/astarinamaulida.github.io/blob/master/public/GitHub-Emblem.png?raw=true"></img>
        </span>
      </div>
    </section>
  );
}
