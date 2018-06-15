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

//const Layout = ({ children, data }, ...props) => (
const Layout = props => {
   // dirty hack to make location props work in 'build' compiles (worked fine in development...*shakes fist lovingly at Gatsby*)
   const { children, location, data } = props;
   const renderedChildren = typeof window === "undefined" ? children({ location }) : children();

   return (
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
               {renderedChildren}
            </div>
            {/* </ReactCSSTransitionReplace> */}
         </main>
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
