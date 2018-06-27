import React from "react";
import styled from "styled-components";

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

export const LocationToggler = props => {
   console.log("props here:", props);
   return (
      <StyledToggler className="location-toggler">
         <a
            onClick={() => {
               props.handleClick(props.locProps, "new-york");
               props.hideNav();
            }}
            className={props.theLocation === "new-york" ? "active" : ""}
         >
            New York
         </a>
         <a
            onClick={() => {
               props.handleClick(props.locProps, "palm-beach");
               props.hideNav();
            }}
            className={props.theLocation === "palm-beach" ? "active" : ""}
         >
            Palm Beach
         </a>
      </StyledToggler>
   );
};

export default LocationToggler;
