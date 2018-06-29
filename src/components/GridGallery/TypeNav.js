import React from "react";
import { connect } from "react-redux";
import Link from "gatsby-link";
import styled from "styled-components";

const TypeToggler = styled.div`
   margin: 2.5rem 0 2rem;
   font-style: italic;
   color: #999;
   font-size: 0.9rem;

   a {
      color: #999;
      a.active {
         font-weight: bold;
      }
   }
`;

export const ConnectedTypeNav = props => {
   return (
      <TypeToggler>
         <Link to={`/${props.theLocation}/interiors`}>View Projects</Link>
         {" / "}
         <Link to={`/${props.theLocation}/interiors/rooms/`}>View Rooms</Link>
      </TypeToggler>
   );
};

const mapStateToProps = state => {
   return { theLocation: state.theLocation };
};

const TypeNav = connect(mapStateToProps)(ConnectedTypeNav);

export default TypeNav;
