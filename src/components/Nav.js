import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Link from "gatsby-link";
import styled from "styled-components";

import { setLocation } from "../actions";
import LocationToggler from "./LocationToggler";

const StyledNav = styled.nav`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   transition: opacity 300ms ease-out 0ms, visibility 0ms linear 0ms;
`;

const StyledUl = styled.ul`
   display: flex;
   align-items: flex-end;
   list-style: none;
   justify-content: flex-start;

   @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
      height: auto;
      margin-bottom: 0.3rem;
   }

   @media screen and (max-width: 767px) {
      flex-direction: column;
      background-color: #dee4e5;
      height: 100vh;
      left: 0;
      position: fixed;
      top: 0;
      transform: translateX(-200px);
      transition: transform 150ms ease-out;
      width: 200px;
      z-index: 100;
      padding-top: 2.8rem;

      &.show {
         transform: translateX(0px);
      }
   }

   li {
      margin: 0 1rem 1rem 0;
      padding: 0 10px;

      @media screen and (min-width: 768px) {
         border-right: 1px solid #ccc;
         margin: 0 0.3rem 0 0;

         &:last-child {
            border-right: none;
         }
      }

      a {
         font-size: 0.8rem;
         font-family: "Vollkorn", serif;
         text-transform: uppercase;
         text-decoration: none;
         letter-spacing: 3px;
         height: 50px;
         color: #999;

         &.active {
            color: #333;
         }
      }
   }
`;

//custom 'isActive' function for 'interiors' pages
const isInterior = (match, location) => {
   //console.log("match:", match);

   let locArray = null;
   if (!match && !location) {
      return false;
   }

   if (location) {
      locArray = location.pathname.split("/");
   } else {
      locArray = match.path.split("/");
   }

   if (locArray[2] === "interiors") {
      return true;
   }

   return false;
};

export const ConnectedNav = props => {
   return (
      <StyledNav>
         <LocationToggler
            theLocation={props.theLocation}
            locProps={props}
            hideNav={props.hideNav}
            location={props.location}
         />

         <StyledUl className={props.status}>
            <li>
               <Link to="/" onClick={props.hideNav}>
                  Home
               </Link>
            </li>

            <li>
               <Link
                  exact
                  to={`/${props.theLocation}/interiors`}
                  onClick={props.hideNav}
                  isActive={isInterior}
               >
                  Interiors
               </Link>
            </li>

            <li>
               <Link exact to={`/${props.theLocation}/about`} onClick={props.hideNav}>
                  About
               </Link>
            </li>

            <li>
               <Link exact to={`/press`} onClick={props.hideNav}>
                  Press
               </Link>
            </li>

            <li>
               <Link exact to={`/${props.theLocation}/contact`} onClick={props.hideNav}>
                  Contact
               </Link>
            </li>

            <li>
               <Link
                  exact
                  to={`/palm-beach/palm-beach-boutique`}
                  onClick={() => {
                     props.hideNav();
                     props.setLocation("palm-beach");
                  }}
               >
                  Boutique
               </Link>
            </li>
         </StyledUl>
      </StyledNav>
   );
};

const mapDispatchToProps = dispatch => {
   return {
      setLocation: theLocation => dispatch(setLocation(theLocation))
   };
};

const mapStateToProps = state => {
   return { theLocation: state.theLocation };
};

const Nav = withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(ConnectedNav)
);

export default Nav;
