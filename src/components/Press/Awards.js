import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledAwards = styled.div`
  margin: 0 0 4rem;

  div.awards-list {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    div.award {
      border-bottom: 1px solid #eee;
      display: flex;
      flex-direction: column;
      margin: 0 0 1rem;
      padding: 0 0 1rem;
      width: 100%;

      @media screen and (min-width: 768px) {
        align-items: center;
        width: calc(50% - 1.5rem);
      }

      div.award-image {
        width: 150px;
        height: auto;

        @media screen and (min-width: 768px) {
          align-items: center;
          width: 200px;
        }
      }

      div.award-text {
        padding: 1rem;
        text-align: center;
      }
    }
  }
`;

export const Awards = ({ awards }) => {
  return (
    <StyledAwards className="awards">
      <h3>Awards &amp; Recognition</h3>

      <div className="awards-list">
        {awards.map(award => {
          return (
            <div className="award" key={award.award_title}>
              <div className="award-image">
                <Img
                  sizes={award.award_image.localFile.childImageSharp.sizes}
                  outerWrapperClassName={"award-pic-outer-wrapper"}
                  className="award-pic-wrapper"
                  position="relative"
                  style={{ padding: "1rem" }}
                  imgStyle={{
                    maxWidth: "100%",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }}
                  alt=""
                />
              </div>
              <div className="award-text">
                <p>{award.award_title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </StyledAwards>
  );
};

export default Awards;
