import React from "react";
import "./Project1.css";

export default function Project1() {
  return (
    <div className="project-container">
      <div className="text-container">
        <div className="work-title">L'Oréal Canada</div>
        <p className="projects-stack">Amazon Keyword Planner</p>
        <h1 className="sub-title">AT-A-GLANCE</h1>
        <p className="desc">
          I worked as a UX designer and front-end developer for Rocket Science
          from 2021 to 2023. Rocket Science was L'Oréal Data Lab's partner.
          L'Oréal Data Lab is a division inside L'Oréal Canada that builds
          products using data automation for different divisions in L'Oréal
          Canada to enhance business processes.
          <br />
          <br />
          In this project, I designed and developed a web application for
          L'Oréal Canada's Marketing team. The application was designed to
          provide weekly data of high-search and high-sales keywords on Amazon.
        </p>

        <h1 className="sub-title">WORK</h1>
        <div className="work-row">
          <div>
            <p>
              <b>Timeline</b>
            </p>
            <p className="desc">
              4 months <br />
            </p>
          </div>
          <div>
            <p>
              <b>Role</b>
            </p>
            <p className="desc">
              Sole UX Designer <br />
              Frontend Engineer
            </p>
          </div>
          <div>
            <p>
              <b>Collaboration</b>
            </p>
            <p className="desc">
              1 PM
              <br />
              1 Machine Learning Engineer
              <br />
              1 Backend Engineer
              <br />
            </p>
          </div>
          <div>
            <p>
              <b>Platform</b>
            </p>
            <p className="desc">Figma</p>
          </div>
        </div>
      </div>
      <img className="loreal-branding" src="./design-process.png" />
      <div className="text-container">
        <h1 className="sub-title">PROBLEM</h1>
        <p className="desc">
          The L'Oréal Canada Marketing team used to collect data from Amazon
          Seller Central every week to find popular keywords with high sales.
          They needed this data to create L'Oréal products' title on Amazon and
          create effective ads. However, dealing with the large amount of data
          was time-consuming and prone to mistakes.
        </p>
        <h1 className="sub-title">SOLUTION</h1>
        <p className="desc">
          Create a web app for L'Oréal's marketing team where they can quickly
          get the data of popular and high-selling keywords.
        </p>
        <h1 className="sub-title">USER INTERVIEW </h1>
        <p className="desc">
          I conducted remote user interviews to deeply understand user needs and
          pain points in using a data-intensive web app. These insights guided
          project direction, leading to the refinement of user stories and
          feature prioritization based on user feedback and needs, ensuring an
          enhanced user experience.
          <ul>
            <li>
              <p className="desc">
                <b>Streamlined Data Access: </b>Ensuring that users can access
                and retrieve extensive data efficiently and intuitively. This
                involved optimizing data retrieval processes and simplifying the
                interface.
              </p>
            </li>
            <li>
              <p className="desc">
                <b>User-Centric Data Visualization: </b>Creating interactive and
                user-friendly data visualization tools that empower users to
                comprehend and analyze complex data sets effectively. This
                included implementing features such as customizable charts,
                graphs, and dashboards.
              </p>
            </li>
            <li>
              <p className="desc">
                <b>Data Filtering and Search:</b> Enabling users to filter,
                search, and query data to find the information they need
                swiftly. This involved developing advanced search algorithms and
                filter options to cater to diverse user requirements.
              </p>
            </li>
            <li>
              <p className="desc">
                <b>User Guidance and Support:</b> Implementing on-screen
                guidance and tooltips to assist users in navigating the
                application and making the most of its features. User onboarding
                and in-app support were integral to ensuring a positive user
                experience.
              </p>
            </li>
          </ul>
        </p>
      </div>
      <div className="text-container">
        <h1 className="sub-title">INSPIRATION & MOOD BOARD</h1>
        <p className="desc">
          I started my design process by looking at L'Oréal's colors and style.
          To decide how my app should look, I did research and put together a
          mood board. Since this app was for L'Oréal's internal use, I used
          their style to make it fit better with their brand.
        </p>
      </div>
      <img className="loreal-branding" src="./loreal-inspiration.png" />
      <div className="text-container">
        <h1 className="sub-title">LOGO</h1>
        <p className="desc">
          I created two logos for this project. As it was my first project with
          L'Oréal Canada, I created the first logo for L'Oréal Data Lab. For the
          L'Oréal Data Lab logo, I used a design with a sphere and lines to show
          data connections. I used fonts similar to what L'Oréal uses and added
          a maple leaf in gold colors to show it's from Canada, like L'Oréal.
          <br />
          <br />
          The second logo was for the Amazon Keyword Planner app. It shows a
          magnifying glass and a key, to tell people it's for finding keywords.
          I used a font like what L'Oréal uses, which looks simple but also
          techy and powerful.
        </p>
      </div>

      <img className="loreal-branding" src="./loreal-logo.png" />
      <div className="text-container">
        <h1 className="sub-title">COLORS</h1>
        <p className="desc">
          The app primarily used black and brown as its main colors. Different
          shades of gray, light gray, and milk white were added to create a
          sophisticated and cohesive look. Together, these colors effectively
          conveyed the Loreal color theme.
        </p>
      </div>
      <img className="loreal-branding" src="./loreal-color-palette.png" />
      <div className="text-container">
        <h1 className="sub-title">PRODUCT SUCCESSES</h1>
        <p className="desc">
          The web application I created for L'Oréal Canada's Marketing team was
          a big hit with a 10x users increase within a year. The app made their work much easier by helping them gather
          important data about popular keywords on Amazon. This saved them time
          and made their job less complicated by 97%. <br/><br/>I received much positive praise
          from the users for how easy and clean the UI was. This success
          highlighted the importance of making designs that truly understand and
          meet the users' needs. It also showed how working together and keeping
          the company's style consistent, even for internal tools, can lead to
          excellent results. In short, this project taught me the importance of
          considering the users, collaborating effectively, and maintaining
          brand identity to create a successful solution.
        </p>
      </div>
      <div className="text-container">
        <h1 className="sub-title">WHAT I LEARNED</h1>
        <p className="desc">
          Looking back, this project showed how focusing on what users really
          need and working together can make things better. We made a solution
          that made working with a lot of data easier and improved how people
          use the app. We also learned that keeping the company's style, even
          for apps used inside, is important. This project was a good example of
          how being thoughtful in design and making technology work well can
          save time and help people work better.
        </p>
      </div>
    </div>
  );
}
