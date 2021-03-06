import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledIntroPic = styled.div`
  width: 100%;
  align-self: center;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    width: 66%;
  }
`;
const IntroPic = props => {
  return (
    <StyledIntroPic className="proj-intro-pic">
      <Img
        fluid={props.intro_image.localFile.childImageSharp.fluid}
        position="absolute"
        style={{ maxHeight: "70vh", height: "100%" }}
        imgStyle={{
          maxWidth: "100%",
          width: "100%",
          objectFit: "contain"
        }}
        alt=""
      />
    </StyledIntroPic>
  );
};

export default IntroPic;