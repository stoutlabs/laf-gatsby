import React, { Fragment } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { connect } from "react-redux";

import SEO from "../SEO";
import AboutBio from "./AboutBio";

const AboutPageDiv = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1rem;

   @media screen and (min-width: 960px) {
      flex-direction: row;
      min-height: 550px;
   }

   div.leftside,
   div.rightside {
      padding: 1rem;

      @media screen and (min-width: 960px) {
         width: 50%;
      }

      p {
         margin: 0 0 1.5rem;
         line-height: 1.7;
      }
   }

   div.leftside {
      @media screen and (min-width: 960px) {
         border-right: 1px solid #eff2f2;
      }
   }
`;

export const ConnectedAboutPage = props => {
   //console.log("postData", postData);
   const locationForTitle = props.theLocation === "new-york" ? "New York" : "Palm Beach";
   const seoDesc = `Learn more about the backgrounds of Leta Austin Foster and her associates: Sallie Giordano, Alexandra Wernink, and India Foster.`;
   const seoData = {
      frontmatter: {
         title: `Leta Austin Foster Interior Design • ${locationForTitle} | About`,
         slug: `${props.theLocation}/about`,
         description: seoDesc
      }
   };

   return (
      <AboutPageDiv className="about-page">
         {/* <Helmet title={`Leta Austin Foster Interior Design • ${locationForTitle} | About`} /> */}
         <SEO postData={seoData} />
         {props.theLocation === "new-york" ? (
            <Fragment>
               <div className="leftside">
                  <AboutBio
                     heading={props.data.prismicAboutPage.data.bios_ny[0].title.text}
                     content={props.data.prismicAboutPage.data.bios_ny[0].text.html}
                  />
               </div>

               <div className="rightside">
                  <AboutBio
                     heading={props.data.prismicAboutPage.data.bios_ny[1].title.text}
                     content={props.data.prismicAboutPage.data.bios_ny[1].text.html}
                  />
               </div>
            </Fragment>
         ) : (
            <Fragment>
               <div className="leftside">
                  <AboutBio
                     heading={props.data.prismicAboutPage.data.bios_pb[0].title.text}
                     content={props.data.prismicAboutPage.data.bios_pb[0].text.html}
                  />
               </div>

               <div className="rightside">
                  <AboutBio
                     heading={props.data.prismicAboutPage.data.bios_pb[1].title.text}
                     content={props.data.prismicAboutPage.data.bios_pb[1].text.html}
                  />
               </div>
            </Fragment>
         )}
      </AboutPageDiv>
   );
};

const mapStateToProps = state => {
   return { theLocation: state.theLocation };
};

const AboutPage = connect(mapStateToProps)(ConnectedAboutPage);

export default AboutPage;

export const query = graphql`
   query AboutContentQuery {
      prismicAboutPage {
         data {
            title {
               text
            }
            bios_ny {
               title {
                  text
               }
               text {
                  html
               }
            }
            bios_pb {
               title {
                  text
               }
               text {
                  html
               }
            }
         }
      }
   }
`;
