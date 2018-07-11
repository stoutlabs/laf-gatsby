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
      flex-wrap: wrap;
      justify-content: center;
    }

    div.award {
      align-items: center;
      border: 1px solid #efefef;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 0 1rem;
      padding: 0;
      width: 100%;

      @media screen and (min-width: 768px) {
        align-items: center;
        margin: 0 1rem 2rem;
        justify-content: space-between;
        width: calc(50% - 2rem);
      }

      div.award-image {
        padding: 1rem;
        width: 250px;
        height: auto;

        @media screen and (min-width: 768px) {
          justify-self: center;
        }
      }

      div.award-text {
        border-top: 1px solid #f0f0f0;
        background: rgba(180, 180, 180, 0.1);
        padding: 1rem;
        margin: 0;
        text-align: center;
        width: 100%;

        p {
          font-size: 0.9rem;
          text-transform: uppercase;
        }
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
                <a
                  href={award.award_link.url}
                  title={`Visit: ${award.award_title}`}
                  rel="noopener nofollow"
                  target="_blank"
                >
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
                </a>
              </div>
              <div className="award-text">
                <p>
                  <a
                    href={award.award_link.url}
                    title={`Visit: ${award.award_title}`}
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    {award.award_title}
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </StyledAwards>
  );
};

export default Awards;
