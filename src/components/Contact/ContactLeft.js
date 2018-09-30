import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledLeftDiv = styled.div`
  /* padding: 1rem; */

  div.gatsby-image-outer-wrapper {
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    visibility: hidden;
    display: none;
  }
`;

export const ContactLeft = props => {
  return (
    <StyledLeftDiv className="contact-left">
      <Img
        fluid={props.fluid}
        position="absolute"
        style={{ maxHeight: "70vh", height: "100%" }}
        imgStyle={{
          maxWidth: "100%",
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }}
        alt=""
      />
    </StyledLeftDiv>
  );
};

export default ContactLeft;
