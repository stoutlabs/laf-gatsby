import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledSeens = styled.div`
  margin: 0 0 5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;

  div.seen-in-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (min-width: 500px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  div.item {
    width: 180px;
    height: auto;
    text-align: center;
    padding: 1rem;

    @media screen and (min-width: 960px) {
      width: 260px;
    }
  }
`;

export const AsSeenIn = ({ items }) => {
  return (
    <StyledSeens className="seen-in">
      <h3>As Seen In:</h3>
      <div className="seen-in-list">
        {items.map(item => {
          if (item.logo_image.localFile.childImageSharp !== null) {
            return (
              <div className="item" key={item.logo_image.localFile.id}>
                <Img
                  fluid={item.logo_image.localFile.childImageSharp.fluid}
                  outerWrapperClassName={"logo-pic-outer-wrapper"}
                  className="logo-pic"
                  position="relative"
                  style={{ height: "auto", width: "auto" }}
                  imgStyle={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain"
                  }}
                  alt=""
                />
              </div>
            );
          }
          return false;
        })}
      </div>
    </StyledSeens>
  );
};

export default AsSeenIn;
