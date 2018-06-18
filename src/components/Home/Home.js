import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { connect } from "react-redux";

import { setLocation } from "../../actions";

import Homebox from "./Homebox";
import SEO from "../SEO";
import homeLogo from "../../assets/home_logo.png";

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

   @media screen and (min-width: 769px) {
      width: 50%;
   }
`;

const HomeLogoBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   min-width: 330px;
   border: 0.8rem solid #dfe5e5;
   padding: 0 0.8rem;
   margin: 0.8rem;
   order: 1;

   img {
      margin: 2rem 0 0;
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
      }
   }
`;

export class ConnectedHomePage extends Component {
   handleBoxClick = (loc, locSlug) => {
      console.log("box clicked");
      console.log("props", this.props);
      this.props.setLocation(locSlug);
      this.props.history.push(loc);
   };

   render() {
      const postData = {
         frontmatter: {
            title: `Leta Austin Foster and Associates • Interior Design | New York - Palm Beach`,
            slug: ``
         }
      };
      return (
         <HomepageDiv className="home-page">
            <SEO postData={postData} />
            <HomeNY>
               <Homebox
                  image={this.props.content.left_image.localFile.childImageSharp.sizes}
                  title="New York"
                  url="/new-york/interiors"
                  locSlug="new-york"
                  handleBoxClick={this.handleBoxClick}
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
