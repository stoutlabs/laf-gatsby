import React from "react";
import styled from "styled-components";

const HomeInfoDiv = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;

   padding: 1.5rem;
   color: #fff;
   text-align: center;

   h3 {
      position: relative;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      z-index: 11;
   }

   div.greybox {
      background: #111;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      opacity: 0.3;
      transition: opacity 300ms ease-in-out;
   }

   &.over {
      div.greybox {
         opacity: 0.5;
      }
   }
`;

export const HomeInfo = props => {
   return (
      <HomeInfoDiv className={`home-info ${props.overClass}`}>
         <h3>{props.title}</h3>
         <div className="greybox" />
      </HomeInfoDiv>
   );
};

export default HomeInfo;
