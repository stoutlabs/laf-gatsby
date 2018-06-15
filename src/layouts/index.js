import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
//import ReactCSSTransitionReplace from "react-css-transition-replace";

import Header from "../components/Header";
import "./index.scss";
import "./app.scss";

class TransitionHandler extends React.Component {
   // shouldComponentUpdate(nextProps, nextState) {
   //    return this.props.location.pathname === window.location.pathname;
   // }

   render() {
      const { children } = this.props;
      return <div className="transition-container">{children}</div>;
   }
}

const Layout = ({ children, data }) => (
   <div>
      <Helmet
         title={data.site.siteMetadata.title}
         meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
         ]}
      />
      <Header location={location} />
      <main>
         {/* <ReactCSSTransitionReplace
            transitionName="mainfader"
            transitionEnterTimeout={1200}
            transitionLeaveTimeout={500}
         > */}
         <div className="inner" key={location.pathname}>
            {children()}
         </div>
         {/* </ReactCSSTransitionReplace> */}
      </main>
   </div>
);

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
