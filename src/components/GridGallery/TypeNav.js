import React from "react";
import { connect } from "react-redux";
import Link from "gatsby-link";

export const ConnectedTypeNav = props => {
   return (
      <div className="type-toggler">
         <Link to={`/${props.theLocation}/interiors`}>View Projects</Link>
         {" / "}
         <Link to={`/${props.theLocation}/interiors/rooms/`}>View Rooms</Link>
      </div>
   );
};

const mapStateToProps = state => {
   return { theLocation: state.theLocation };
};

const TypeNav = connect(mapStateToProps)(ConnectedTypeNav);

export default TypeNav;
