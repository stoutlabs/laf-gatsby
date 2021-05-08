import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledTextWithImage = styled.div`
  margin: 0 0 3rem;
  padding: 3rem 0 0;
  border-top: 1px solid #ddd;

  div.slice-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    text-align: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      text-align: left;
    }

    div.slice-text_content {
      margin: 0 0 1.5rem 0;

      @media screen and (min-width: 768px) {
        width: 60%;
        margin: 0 2rem 0 0;
      }

      p {
        font-size: 1.2rem;
        line-height: 1.6;
      }
    }

    div.slice-image {
      height: 100%;

      @media screen and (min-width: 768px) {
        width: 40%;
      }

      div.slice-pic-outer-wrapper {
        height: 100%;
        min-width: 300px;
      }
    }
  }
`;

export const SliceTextImage = ({ textWithImage }) => {
  return (
    <StyledTextWithImage className="slice-textWithImage">
      <div className="slice-inner">
        <div className="slice-text_content">
          <div dangerouslySetInnerHTML={{ __html: textWithImage.content.html }} />
        </div>

        <div className="slice-image">
          <Img
            fluid={textWithImage.image.localFile.childImageSharp.fluid}
            outerWrapperClassName={"slice-pic-outer-wrapper"}
            className="slice-pic"
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
        </div>
      </div>
    </StyledTextWithImage>
  );
};

export default SliceTextImage;
