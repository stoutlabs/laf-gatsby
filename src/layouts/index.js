import React, { Fragment } from "react";
import Helmet from "react-helmet";
//import { StaticQuery, graphql } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Transition from "../components/Transition";

import "../assets/styles/index.scss";
import "../assets/styles/app.scss";
import favicon from "../assets/favicon.ico";
import appleTouchIcon from "../assets/apple-touch-icon.png";

const TemplateWrapper = ({ data, children, location }) => (
  <Fragment>
    <Helmet
      title="Leta Austin Foster and Associates • Interior Design | New York - Palm Beach"
      meta={[
        {
          name: "description",
          content: `Leta Austin Foster & Associates, Inc. is an established and well-known East coast interior design firm with office locations in Palm Beach and New York.`
        },
        {
          name: "keywords",
          content:
            "leta austin foster, interior design, designer, east coast, new york, palm beach, southampton, hobe sound, manhattan"
        }
      ]}
    >
      <link rel="shortcut icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
    </Helmet>

    <Header location={location} />
    <Transition location={location}>
      <main className={location.pathname === "/" ? "homepage" : ""}>
        <div className="inner">{children}</div>
      </main>
    </Transition>

    <Footer />
  </Fragment>
);

export default TemplateWrapper;
