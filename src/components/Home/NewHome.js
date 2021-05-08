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

  @media screen and (min-width: 768px) {
    width: 750px;
    height: 416px;
    flex-direction: row;
    justify-content: space-between;

    div.homebox {
      width: 250px;
      height: 416px;
    }
  }

  @media screen and (min-width: 960px) {
    width: 882px;
    height: 518px;

    div.homebox {
      width: 312px;
      height: 518px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1100px;
    height: 646px;

    div.homebox {
      width: 392px;
      height: 646px;
    }
  }
`;

const HomeNY = styled.div`
  position: relative;
  order: 3;
  padding: 0 0.6rem;

  @media screen and (min-width: 768px) {
    order: 1;
    padding: 0;
  }
`;

const HomePB = styled.div`
   position: relative;
   order: 2;
   padding: 0 0.6rem;

   @media screen and (min-width: 768px) {
      order: 3;
      padding: 0;
   }

}
`;

const HomeLogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 220px;
  border: 0.6rem solid #dfe5e5;
  padding: 0;
  margin: 0rem;
  order: 1;
  background: #fefefe;

  @media screen and (min-width: 768px) {
    border-width: 0.5rem;
    order: 3;
    margin: 0 0.8rem;
    width: 26%;
    padding: 0 0.8rem;
  }

  img {
    margin: 2rem 0 0;
    max-width: 240px;
    width: 100%;

    @media screen and (min-width: 768px) {
      margin-top: 120px;
      max-width: 200px;
    }
  }

  h4 {
    font-style: italic;
    letter-spacing: 1px;
    justify-self: flex-end;
    margin: 0 0 1rem;
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

        <HomeNY className="homebox ny">
          <Homebox
            image={this.props.content.left_image.localFile.childImageSharp.fluid}
            title="New York"
            url="/new-york/interiors"
            locSlug="new-york"
            handleBoxClick={this.handleBoxClick}
          />
        </HomeNY>

        <HomeLogoBox className="logobox">
          <img src={homeLogo} alt="" />
          <h4>Interior Design</h4>
        </HomeLogoBox>

        <HomePB className="homebox pb">
          <Homebox
            image={this.props.content.right_image.localFile.childImageSharp.fluid}
            title="Palm Beach"
            url="/palm-beach/interiors"
            locSlug="palm-beach"
            handleBoxClick={this.handleBoxClick}
          />
        </HomePB>
      </HomepageDiv>
    );
  }
}

const ConsumedHome = props => (
  <AppConsumer>
    {state => (
      <HomePage
        {...props}
        theLocation={state.location}
        toggleLocation={state.toggleLocation}
      />
    )}
  </AppConsumer>
);

export default ConsumedHome;
