import React from "react";
import styled from "styled-components";

const BioDiv = styled.div`
   @media screen and (min-width: 960px) {
      padding: 0 1rem 1rem;
   }

   h2 {
      border: 3px double #eff2f2;
      border-width: 4px 0;
      color: #333;
      font-size: 1.1rem;
      letter-spacing: 2px;
      line-height: 1.2rem;
      margin: 0.6rem 0 1.5rem;
      padding: 10px 4px 4px;
      text-transform: uppercase;
      text-align: center;

      @media screen and (min-width: 769px) {
         font-size: 1.2rem;
      }
   }

   p {
      color: #999;
      font-size: 0.9rem;
      @media screen and (min-width: 769px) {
         font-size: 1rem;
      }
   }
`;

export const AboutBio = props => {
   return (
      <BioDiv className="bio">
         <h2>{props.heading}</h2>
         <div dangerouslySetInnerHTML={{ __html: props.content }} />

         {props.children}
      </BioDiv>
   );
};

export default AboutBio;
