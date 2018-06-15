import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Link from "gatsby-link";
import styled from "styled-components";

import { setLocation } from "../actions";

const StyledNav = styled.nav`
   width: 100%;
   display: flex;
   flex-direction: row;
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
      background-color: #ccc;
      height: 100vh;
      left: 0;
      position: fixed;
      top: 0;
      transform: translateX(-200px);
      transition: transform 150ms ease-out;
      width: 200px;
      z-index: 100;

      &.show {
         transform: translateX(0px);
      }
   }

   li {
      margin: 0 1rem 1rem 0;
      padding: 0 10px;

      @media screen and (min-width: 768px) {
         border-right: 1px solid #ccc;
         margin: 0 0.4rem 0 0;

         &:last-child {
            border-right: none;
         }
      }

      a {
         font-size: 0.85rem;
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

const handleLocationClick = (props, locSlug) => {
   //console.log("location:", props.location);
   const curUrl = props.location.pathname;
   let urlArr = curUrl.split("/");
   urlArr[1] = locSlug;

   // if on 'interiors' pages, just go back to list page on loc change. otherwise just swap out the location in the url and go there.
   const newUrl = urlArr[2] === "interiors" ? `/${locSlug}/interiors` : urlArr.join("/");

   if (curUrl !== newUrl) {
      props.setLocation(locSlug);
      props.history.push(newUrl);
   }
};

export const ConnectedNav = props => {
   // this sets the location (in redux) if refreshing the page, or coming from an outside link
   if (props.theLocation === undefined) {
      const curLoc = props.location.pathname.split("/")[1];
      props.setLocation(curLoc);
   }

   return (
      <StyledNav>
         <StyledUl className={props.status}>
            <li>
               <a
                  onClick={() => handleLocationClick(props, "new-york")}
                  className={props.theLocation === "new-york" ? "active" : ""}
               >
                  New York
               </a>
            </li>
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
               <Link exact to={`/${props.theLocation}/contact`} onClick={props.hideNav}>
                  Contact
               </Link>
            </li>
            <li>
               <a
                  onClick={() => handleLocationClick(props, "palm-beach")}
                  className={props.theLocation === "palm-beach" ? "active" : ""}
               >
                  Palm Beach
               </a>
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
