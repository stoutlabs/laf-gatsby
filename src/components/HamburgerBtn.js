import React from "react";
import styled from "styled-components";

const HamburgerDiv = styled.div`
   position: absolute;
   top: 0.5rem;
   right: 0.5rem;
   z-index: 60;

   @media screen and (min-width: 769px) {
      visibility: hidden;
   }

   &.hide {
      visibility: hidden;
   }
   #nav-btn {
      width: 30px;
      height: 45px;
      position: relative;
      margin: 10px auto;
      transform: rotate(0deg);
      transition: 0.5s ease-in-out;
      cursor: pointer;
   }

   #nav-btn span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: #666;
      border-radius: 4px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
   }

   #nav-btn span:nth-child(1) {
      top: 0px;
      transform-origin: left center;
   }

   #nav-btn span:nth-child(2) {
      top: 8px;
      transform-origin: left center;
   }

   #nav-btn span:nth-child(3) {
      top: 16px;
      transform-origin: left center;
   }

   #nav-btn.open span:nth-child(1) {
      transform: rotate(45deg);
      top: -3px;
      left: 8px;
   }

   #nav-btn.open span:nth-child(2) {
      width: 0%;
      opacity: 0;
   }

   #nav-btn.open span:nth-child(3) {
      transform: rotate(-45deg);
      top: 18px;
      left: 8px;
   }
`;

export const HamburgerBtn = props => {
   const hide = props.location.pathname === "/" ? "hide" : "";

   return (
      <HamburgerDiv className={`nav-toggle ${hide}`}>
         <div id="nav-btn" onClick={props.showNav} className={props.navActive ? "open" : ""}>
            <span />
            <span />
            <span />
         </div>
      </HamburgerDiv>
   );
};

export default HamburgerBtn;
