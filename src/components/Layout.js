import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";
import Transition from "./Transition";

import "../assets/styles/index.scss";
import "../assets/styles/app.scss";
import favicon from "../assets/favicon.ico";
import appleTouchIcon from "../assets/apple-touch-icon.png";

const Layout = ({ data, children, location }) => (
  <Fragment>
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
      <Transition location={location}>
        <div className="inner">{children}</div>
      </Transition>
    </main>

    <Footer />
  </Fragment>
);

const LayoutWithQuery = props => {
  //const { children } = props;
  // dirty hack to make location props work in 'build' compiles (worked fine in development...*shakes fist lovingly at Gatsby*)
  // const renderedChildren = typeof window === "undefined" ? children({ location }) : children();
  //const location = { pathname: "new-york" };
  // console.log("location:", location);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <Layout data={data} {...props} />}
    />
  );
};

export default LayoutWithQuery;
