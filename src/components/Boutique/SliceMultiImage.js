import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledMultiImage = styled.div`
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
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: center;
    }

    div.slice-image {
      height: 100%;
      margin: 0 1rem;

      @media screen and (min-width: 768px) {
        width: calc(50% - 2rem);
      }

      @media screen and (min-width: 1024px) {
        width: calc(33% - 2rem);
      }

      div.slice-pic-outer-wrapper {
        height: 100%;
        ${"" /* min-width: 300px; */};
      }
    }
  }
`;

export const SliceMultiImage = ({ content }) => {
  console.log(content);
  return (
    <StyledMultiImage className="slice-multiImage">
      <div className="slice-inner">
        {content.map(({ images: image }) => {
          return (
            <div className="slice-image" key={image.localFile.id}>
              <Img
                sizes={image.localFile.childImageSharp.sizes}
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
          );
        })}
      </div>
    </StyledMultiImage>
  );
};

export default SliceMultiImage;
