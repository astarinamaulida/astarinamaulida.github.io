import React from "react";
import { BootstrapButton } from "../../constants";
import "./Project3.css";

export default function Project3() {
  return (
    <div className="project-container">
      <div className="text-container">
        <div className="work-title">HIJABTALE</div>
        <p className="projects-stack">Online Store</p>
      </div>

      <img className="image-frame" src="./hijabtale-product.png" />

      <div className="button-row">
        <BootstrapButton
          sx={{
            marginTop: "30px",
            marginBottom: "30px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          variant="contained"
          disableRipple
          target="_blank"
          href="https://www.hijabtale.com"
        >
          See HIJABTALE Live
        </BootstrapButton>
      </div>

      <div className="text-container">
        <h1 className="sub-title">AT-A-GLANCE</h1>
        <p className="desc">
          While working at Petra International Inc between 2019 and 2021, I set
          up their online store on Shopify and got them started as Amazon
          sellers. This experience inspired me to create my own online hijab
          store in Canada. This was a one-person project, and I took care of
          everything from designing the website to managing operations and
          promoting the store on social media.
        </p>

        <h1 className="sub-title">WORK</h1>
        <div className="work-row">
          <div>
            <p>
              <b>Timeline</b>
            </p>
            <p className="desc">
              3 months <br />
            </p>
          </div>
          <div>
            <p>
              <b>Role</b>
            </p>
            <p className="desc">Shopify designer and developer</p>
          </div>
          <div>
            <p>
              <b>Platform</b>
            </p>
            <p className="desc">
              Shopify <br />
              Figma
            </p>
          </div>
        </div>
      </div>

      <div className="text-container">
        <h1 className="sub-title">PROBLEM</h1>
        <p className="desc">
          In the process of designing the online hijab store in Canada, the main
          issue is tackling the problems customers face when buying hijabs. The
          current options are few, costly, and often come with expensive
          shipping fees.
          <h1 className="sub-title">SOLUTION</h1>
          <p className="desc">
            This project's goal is to find a solution that makes hijabs easier
            to get, more budget-friendly, and presented attractively for
            potential customers. It also aims to create a website that's simple
            and enjoyable to use for online shopping.
          </p>
        </p>

        <h1 className="sub-title">COMPETITORS ANALYSIS</h1>
        <p className="desc">On progress</p>
      </div>
      <div className="text-container">
        <h1 className="sub-title">INSPIRATION & MOOD BOARD</h1>
        <p className="desc"></p>
      </div>
      <img className="image-frame" src="./hijabtale-inspiration.png" />

      <div className="text-container">
        <h1 className="sub-title">COLORS</h1>
        <p className="desc">
          The app primarily used black and brown as its main colors. Different
          shades of gray, light gray, and milk white were added to create a
          sophisticated and cohesive look. Together, these colors effectively
          conveyed the Loreal color theme.
        </p>
      </div>
      <img className="image-frame" src="./hijabtale-color-palette.png" />

      <div className="text-container">
        <h1 className="sub-title">LOGO</h1>
        <p className="desc"></p>
      </div>
      <img className="image-frame" src="./hijabtale-logo.png" />

      <div className="text-container">
        <h1 className="sub-title">PRODUCT SUCCESSES</h1>
        <p className="desc">
          I'm excited about the product branding and user analysis. HIJABTALE
          has created a strong brand identity, especially for young,
          professional women, with its elegant, clean, and sophisticated website
          design. The website's clean design and well-chosen colors truly
          represent the brand. HIJABTALE launched during the COVID era,
          benefiting from increased online activity and e-commerce. In just six
          months, the business achieved remarkable success, ranking among the
          top 10 in sales and experiencing a huge 1000% sales growth.
        </p>
      </div>
      <div className="text-container">
        <h1 className="sub-title">WHAT I LEARNED</h1>
        <p className="desc">
          Managing over 200 different product variations was a big task.
          Creating pages for each product with descriptions took a lot of time.
          So, HIJABTALE decided to focus on selling the products that were
          popular and stop selling the ones that didn't sell well. This helped
          the business work better. I did everything on my own, which was a bit
          hard. I had to manage things like advertising and making sure the
          website was easy to use. But it was a great learning experience. I
          learned a lot about making products, advertising, and making customers
          happy. It was a journey of learning and growing.
        </p>
      </div>
      <div className="button-row">
        <BootstrapButton
          sx={{
            marginTop: "30px",
            marginBottom: "30px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          variant="contained"
          target="_blank"
          disableRipple
          href="/"
        >
          See Other Projects
        </BootstrapButton>
      </div>
    </div>
  );
}
