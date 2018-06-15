import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledLeftDiv = styled.div`
   /* padding: 1rem; */

   @media screen and (min-width: 960px) {
      width: 50%;
   }

   @media screen and (max-width: 960px) {
      visibility: hidden;
      display: none;
   }
`;

export const ContactLeft = props => {
   return (
      <StyledLeftDiv className="contact-left">
         <Img
            sizes={props.sizes}
            position="absolute"
            style={{ maxHeight: "70vh" }}
            imgStyle={{
               maxWidth: "100%",
               width: "100%",
               objectFit: "contain"
            }}
            alt=""
         />
      </StyledLeftDiv>
   );
};

export default ContactLeft;
