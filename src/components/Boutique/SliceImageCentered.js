import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledImageCentered = styled.div`
  margin: 0 0 3rem;
  padding: 3rem 0 0;
  border-top: 1px solid #ddd;

  h3 {
    margin-bottom: 1rem;
  }

  div.slice-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    div.slice-text_content {
      margin: 0 1rem 0 0;

      @media screen and (min-width: 768px) {
        width: 60%;
      }

      p {
        font-size: 1.15rem;
      }
    }

    div.slice-image {
      height: 100%;
      margin: 0 auto;

      @media screen and (min-width: 768px) {
        width: 80%;
      }

      div.slice-pic-outer-wrapper {
        height: 100%;
        min-width: 300px;
      }
    }
  }
`;

export const SliceImageCentered = ({ content }) => {
  return (
    <StyledImageCentered className="slice-imageCentered">
      <div className="slice-inner">
        <div className="slice-image">
          <Img
            sizes={content.image.localFile.childImageSharp.sizes}
            outerWrapperClassName={"slice-pic-outer-wrapper"}
            className="slice-pic"
            position="relative"
            // style={{ maxHeight: "70vh", height: "100%" }}
            // imgStyle={{
            //   maxWidth: "100%",
            //   width: "100%",
            //   height: "100%",
            //   objectFit: "contain"
            // }}
            alt=""
          />
        </div>
      </div>
    </StyledImageCentered>
  );
};

export default SliceImageCentered;
