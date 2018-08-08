import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
//import ReactCSSTransitionReplace from "react-css-transition-replace";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "./index.scss";
import "./app.scss";
import favicon from "./favicon.ico";
import appleTouchIcon from "./apple-touch-icon.png";

const Layout = props => {
  // dirty hack to make location props work in 'build' compiles (worked fine in development...*shakes fist lovingly at Gatsby*)
  const { children, location, data } = props;
  const renderedChildren = typeof window === "undefined" ? children({ location }) : children();

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
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
      <main className={location.pathname === "/" ? "homepage" : ""}>
        {/* <ReactCSSTransitionReplace
            transitionName="mainfader"
            transitionEnterTimeout={1200}
            transitionLeaveTimeout={500}
         > */}
        <div className="inner" key={location.pathname}>
          {renderedChildren}
        </div>
        {/* </ReactCSSTransitionReplace> */}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
