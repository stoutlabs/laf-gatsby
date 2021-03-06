import React, { Component } from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";

import Homebox from "./Homebox";
import Seo from "../Seo";
import AppConsumer from "../../store/consumer";
import homeLogo from "../../assets/laf_logo_2018.png";

const HomepageDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    min-height: 560px;
  }
`;

const HomeNY = styled.div`
  position: relative;
  order: 2;

  @media screen and (min-width: 960px) {
    width: 50%;
  }
`;

const HomePB = styled.div`
  position: relative;
  order: 4;

  @media screen and (min-width: 960px) {
    width: 50%;
  }
`;

const HomeLogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
  border: 0.8rem solid #dfe5e5;
  padding: 0 0.8rem;
  margin: 0.8rem;
  order: 1;

  img {
    margin: 2rem 0 0;
    max-width: 240px;
  }

  h4 {
    font-style: italic;
    letter-spacing: 1px;
    justify-self: flex-end;
    margin: 0 0 2rem;
  }

  @media screen and (min-width: 960px) {
    order: 3;
    margin: 0 0.8rem;

    img {
      margin-top: 120px;
      max-width: 210px;
    }
  }
`;

export class HomePage extends Component {
  handleBoxClick = (locSlug, locUrl) => {
    this.props.toggleLocation(locSlug);
    navigate(locUrl);
  };

  render() {
    const seoData = {
      frontmatter: {
        title: `Leta Austin Foster & Associates • Interior Design | New York | Palm Beach`,
        slug: ``
      }
    };
    return (
      <HomepageDiv className="home-page">
        <Seo postData={seoData} />
        <HomeNY>
          <Homebox
            image={this.props.content.left_image.localFile.childImageSharp.sizes}
            title="New York"
            url="/new-york/interiors"
            locSlug="new-york"
            handleBoxClick={() => this.handleBoxClick("new-york", "/new-york/interiors")}
          />
        </HomeNY>

        <HomeLogoBox>
          <img src={homeLogo} alt="" />
          <h4>Interior Design</h4>
        </HomeLogoBox>

        <HomePB>
          <Homebox
            image={this.props.content.right_image.localFile.childImageSharp.sizes}
            title="Palm Beach"
            url="/palm-beach/interiors"
            locSlug="palm-beach"
            handleBoxClick={() => this.handleBoxClick("palm-beach", "/palm-beach/interiors")}
          />
        </HomePB>
      </HomepageDiv>
    );
  }
}

export default props => (
  <AppConsumer>
    {state => (
      <HomePage {...props} theLocation={state.location} toggleLocation={state.toggleLocation} />
    )}
  </AppConsumer>
);
