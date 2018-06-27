import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setLocation } from "../../actions";

import Homebox from "./Homebox";
import SEO from "../SEO";
import homeLogo from "../../assets/laf_logo_2018.png";

const HomepageDiv = styled.div`
   display: flex;
   flex-direction: column;

   div.homebox {
      width: 100%;
      &:first-child {
         margin-bottom: 0.5rem;
      }
   }

   @media screen and (min-width: 768px) {
      width: 750px;
      height: 416px;
      flex-direction: row;
      justify-content: space-between;
      &:first-child {
         margin-bottom: 0;
      }

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
   order: 2;
`;

const HomePB = styled.div`
   position: relative;
   order: 4;
`;

const HomeLogoBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   min-width: 220px;
   border: 0.8rem solid #dfe5e5;
   padding: 0 0.8rem;
   margin: 0.8rem;
   order: 1;

   @media screen and (min-width: 768px) {
      order: 3;
      margin: 0 0.8rem;
      width: 26%;
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

export class ConnectedHomePage extends Component {
   handleBoxClick = (loc, locSlug) => {
      this.props.setLocation(locSlug);
      this.props.history.push(loc);
   };

   render() {
      const seoData = {
         frontmatter: {
            title: `Leta Austin Foster & Associates • Interior Design | New York | Palm Beach`,
            slug: ``
         }
      };

      return (
         <HomepageDiv>
            <SEO postData={seoData} />

            <HomeNY className="homebox ny">
               <Homebox
                  image={this.props.content.left_image.localFile.childImageSharp.sizes}
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
                  image={this.props.content.right_image.localFile.childImageSharp.sizes}
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

const mapStateToProps = state => {
   return { theLocation: state.theLocation };
};

const mapDispatchToProps = dispatch => {
   return {
      setLocation: theLocation => dispatch(setLocation(theLocation))
   };
};

const HomePage = connect(
   mapStateToProps,
   mapDispatchToProps
)(ConnectedHomePage);

export default HomePage;
