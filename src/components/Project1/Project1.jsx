import React from "react";
import "./Project1.css";

export default function Project1() {
  return (
    <div className="project-container">
      <div className="text-container">
        <div className="work-title">L'Oréal Canada</div>
        <p className="projects-stack">Amazon Keyword Planner</p>
      </div>

      <img className="image-frame" src="./loreal-product.png" />

      <div className="text-container">
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
      <img className="image-frame" src="./loreal-design-process.png" />
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
        <h1 className="sub-title">DESIGN</h1>
        <p className="desc">
          After speaking with the Marketing team and the leader of L'Oréal Data
          Lab, I gathered the information I needed and began working on my
          wireframes. You can see the detailed wireframes I created below.
          Because the client is a large organization with a specific hierarchy
          and internal systems, I opted for a simple design that doesn't have
          the typical web app appearance. My goal was to make it resemble an
          office application to convey a sense of reliability.
        </p>
      </div>
      <img className="image-frame" src="./loreal-wireframe-highfid.png" />

      <div className="text-container">
        <h1 className="sub-title">INSPIRATION & MOOD BOARD</h1>
        <p className="desc">
          I decided to use L'Oréal's colors and font styling because I think it
          would make the app fit better with their brand, as this app will be
          used for internal L'Oréal marketing division. I created a mood board
          as the app branding inspiration.
        </p>
      </div>
      <img className="image-frame" src="./loreal-inspiration.png" />

      <div className="text-container">
        <h1 className="sub-title">LOGO</h1>
        <p className="desc">
          I created two logos for this project. The first logo was specifically
          designed for L'Oréal Data Lab, which was my debut project with L'Oréal
          Canada. To represent the interconnected nature of data, I used a
          design featuring a sphere with lines. For the font, I opted for styles
          similar to L'Oréal's, and I included a gold maple leaf to signify its
          Canadian origin, aligning with L'Oréal's brand colors.
          <br />
          <br />
          The second logo was created for the Amazon Keyword Planner app. It
          features a combination of a magnifying glass and a key, clearly
          indicating its purpose for keyword searching. The font I chose
          resembles the style used by L'Oréal, striking a balance between
          simplicity and a tech-savvy, powerful appearance.
        </p>
      </div>
      <img className="image-frame" src="./loreal-logo.png" />

      <div className="text-container">
        <h1 className="sub-title">COLORS</h1>
        <p className="desc">
          The app primarily used black and brown as its main colors. Different
          shades of gray, light gray, and milk white were added to create a
          sophisticated and cohesive look. Together, these colors effectively
          conveyed the Loreal color theme.
        </p>
      </div>
      <img className="image-frame" src="./loreal-color-palette.png" />
      <div className="text-container">
        <h1 className="sub-title">PRODUCT SUCCESSES</h1>
        <p className="desc">
          The web app I designed for L'Oréal Canada's Marketing team was a huge
          hit. It led to a tenfold increase in users within a year and made
          their work much easier by simplifying tasks and saving a lot of time.
          In fact, it reduced their workload by 97% and boosted their Amazon
          sales by 30%.
          <br />
          Users loved the app's user-friendly and neat interface, which
          highlighted the importance of creating designs that truly meet their
          needs. It also showed how teamwork and sticking to the company's
          consistent style, even for internal tools, can lead to outstanding
          results. In a nutshell, this project taught me the value of focusing
          on users, working together effectively, and maintaining brand identity
          to create a successful solution.
        </p>
      </div>
      <div className="text-container">
        <h1 className="sub-title">WHAT I LEARNED</h1>
        <p className="desc">
          Looking back at this project, it taught me that understanding user
          needs and teamwork can lead to better results. We created a solution
          that made working with lots of data easier and improved the app's
          usability. I also learned that sticking to the company's design style
          for internal apps is important. When I started this project as the
          only UX designer at L'Oréal Canada, I was a bit nervous about whether
          my design would be liked. However I realized that focusing on
          delivering the best and listening to users was the key. I'm happy that
          users loved my work, especially since this was my first professional
          project.
        </p>
      </div>
    </div>
  );
}
