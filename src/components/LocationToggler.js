import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setLocation } from "../actions/index";

const StyledToggler = styled.div`
   margin: -10px 0 0.4rem;
   padding: 0;
   display: block;

   a {
      display: inline-block;
      font-size: 0.75rem;
      font-family: "Vollkorn", serif;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 2px;

      color: #999;

      &.active {
         color: #333;
      }

      &:first-child {
         margin-right: 1rem;
      }
   }
`;

const handleLocationClick = (locProps, locSlug) => {
   const curUrl = locProps.location.pathname;
   let urlArr = curUrl.split("/");
   urlArr[1] = locSlug;

   // if on 'interiors' pages (or on the boutique page), just go back to list page on loc change.
   // otherwise just swap out the location in the url and go there.
   const newUrl =
      urlArr[2] === "interiors" || urlArr[2] === "palm-beach-boutique"
         ? `/${locSlug}/interiors`
         : urlArr.join("/");

   if (curUrl !== newUrl) {
      locProps.setLocation(locSlug);
      locProps.history.push(newUrl);
   }
};

export const ConnectedLocationToggler = props => {
   // This (dirty hack) sets the correct location in redux if refreshing the page, or coming from an outside link.
   // (Sorry, feel free to show me a better way!)
   console.log("propshere:", props);
   let curLoc = "";
   if (props.theLocation === undefined) {
      curLoc = props.location.pathname.split("/")[1];
      curLoc = curLoc === "palm-beach" ? "palm-beach" : "new-york";
      //curLoc = "new-york"; //just defaulting to NY on undefined (404 errors) - fixes nav bug on bad paths
      props.setLocation(curLoc);
   }

   return (
      <StyledToggler className="location-toggler">
         <a
            onClick={() => {
               if (props.locProps.location.pathname !== "/press") {
                  handleLocationClick(props.locProps, "new-york");
                  props.hideNav();
               }
            }}
            className={props.theLocation === "new-york" ? "active" : ""}
         >
            New York
         </a>
         <a
            onClick={() => {
               if (props.locProps.location.pathname !== "/press") {
                  handleLocationClick(props.locProps, "palm-beach");
                  props.hideNav();
               }
            }}
            className={props.theLocation === "palm-beach" ? "active" : ""}
         >
            Palm Beach
         </a>
      </StyledToggler>
   );
};

const mapStateToProps = state => {
   return { theLocation: state.theLocation };
};

const mapDispatchToProps = dispatch => {
   return {
      setLocation: theLocation => dispatch(setLocation(theLocation))
   };
};

const LocationToggler = connect(
   mapStateToProps,
   mapDispatchToProps
)(ConnectedLocationToggler);

export default LocationToggler;
