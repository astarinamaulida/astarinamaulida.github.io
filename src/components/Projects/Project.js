import React from 'react';
import './Project.css'

export default function Project() {
  return (
    <section id="projects" className="section-projects">
      <h2 className="about-projects">Projects</h2>
      <div className="projects">
        <div className="project-header">
          <h2 className="projects-title">Paykids</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com"></a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>React, PostgreSQL, Node.js, Express, CSS3, Material-UI</p>
        <h3 className="projects-desc">Description</h3>
        <p>
          PayKids is a multi-page React application, that allows children to
          customise their own virtual debit cards and bank account user
          interface.
        </p>

        <div className="project-header">
          <h2 className="projects-title">Cravings</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/cravings"></a>
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

        <div className="project-header">
          <h2 className="projects-title">Interview Scheduler</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/scheduler"></a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>
          React, PostgreSQL,Javascript, Axios, Express.js, Classnames,
          Normalize, Storybook, Jest, Cypress, HTML5, CSS3
        </p>
        <h3 className="projects-desc">Description</h3>
        <p>
          Interview Scheduler is a simple appointment scheduling app. The
          frontend is React and the backend is Node.js. The storybook was built
          for each components and the app is tested by using Jest for its unit
          testing. Cypress is used for automated testing.
        </p>

        <div className="project-header">
          <h2 className="projects-title">Paykids</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com"></a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>React, PostgreSQL, Node.js, Express, CSS3, Material-UI</p>
        <h3 className="projects-desc">Description</h3>
        <p>
          PayKids is a multi-page React application, that allows children to
          customise their own virtual debit cards and bank account user
          interface.
        </p>

        <div className="project-header">
          <h2 className="projects-title">Tweeter</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/tweeter"></a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>Node.js, Express.js,PostgreSQL, jQuery, HTML5, CSS3</p>
        <h3 className="projects-desc">Description</h3>
        <p>Tweeter is a Single Page App (SPA) twitter clone project.</p>

        <div className="project-header">
          <h2 className="projects-title">Jungle Rails</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/tweeter"></a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>
          Ruby on Rails, bcrypt,PostgreSQL, Bootstrap, Rspec,Capybara,
          Poltergeist, HTML5, SCSS
        </p>
        <h3 className="projects-desc">Description</h3>
        <p>
          Jungle rails is an e-commerce platform built with Ruby on Rails. This
          app uses Rspec for the unit testing and Capybara and Poltergeist. For
          the API, this app uses Stripe for the payment.
        </p>

        <div className="project-header">
          <h2 className="projects-title">Tiny App</h2>
        </div>
        <span className="project-image">
          <a href="https://github.com/astarinamaulida/tinyapp"></a>
        </span>
        <h3 className="projects-stack">Stack</h3>
        <p>Node.js, Express.js,EJS, bcrypt, HTML5, CSS3</p>
        <h3 className="projects-desc">Description</h3>
        <p>
          Tinyapp is an app that allows users to shorten long URLs. It is
          similar to bit.ly and TinyURL.
        </p>
      </div>
    </section>
  );
}
