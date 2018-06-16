import React from "react";
import styled from "styled-components";

import TypeNav from "./TypeNav";

const StyledH3 = styled.h3`
   border: 3px double #eff2f2;
   border-width: 4px 0;
   padding: 10px 4px 4px;
   text-transform: uppercase;
   text-align: center;
   margin: 0 0 1rem;
   font-size: 1.2rem;
   line-height: 1.2rem;
   letter-spacing: 1px;

   @media screen and (min-width: 960px) {
      margin: 0 0 2rem;
   }
`;

export const InfoPanel = ({ title, label }) => {
   return (
      <div className="gallery-info">
         <TypeNav />
         <StyledH3>{label}</StyledH3>
         <h4>{title ? title : "Loading..."}</h4>
      </div>
   );
};

export default InfoPanel;
