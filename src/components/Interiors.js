import React, { Component } from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import styled from "styled-components";

import SEO from "./SEO";
import TypeNav from "./GridGallery/TypeNav";

const StyledH3 = styled.h3`
   border: 3px double #eff2f2;
   border-width: 4px 0;
   padding: 10px 4px 4px;
   text-transform: uppercase;
   text-align: center;
   margin: 0 0 1.8rem;
   font-size: 1.3rem;
   line-height: 1.4rem;
   letter-spacing: 2px;
`;

const StyledUl = styled.ul`
   li {
      margin-bottom: 0.3rem;
   }
`;

export class Interiors extends Component {
   state = { projects: [], hasContent: false, images: [], content: null };

   componentDidMount = () => {
      //console.log("data:", this.props.data.prismicLocations);
      this.setState(() => {
         return { projects: this.props.data.prismicLocations.data.locprojects, hasContent: true };
      });
   };

   render() {
      //console.log("theLocation:", this.props.theLocation);
      const locationForTitle = this.props.data.prismicLocations.data.title.text;
      const seoImage = this.props.data.prismicLocations.data.intro_image.localFile.childImageSharp
         .sizes.src;
      const seoData = {
         frontmatter: {
            title: `Leta Austin Foster Interior Design • ${locationForTitle} | Interiors`,
            slug: `${this.props.pathContext.locuid}/interiors/projects/`,
            description: `Have a look at all of the interior design projects via our ${locationForTitle} office.`
         }
      };

      return (
         <div className="columns proj-intro">
            <SEO postData={seoData} postImage={seoImage} />
            {this.state.hasContent ? (
               <div className="column is-one-third has-text-centered">
                  <div className="gallery-info">
                     <TypeNav />
                     <StyledH3>Projects</StyledH3>

                     <StyledUl>
                        {this.state.projects.map((project, index) => {
                           return (
                              <li key={index}>
                                 <Link
                                    to={`/${this.props.data.prismicLocations.uid}/interiors/${
                                       project.theproject.document[0].uid
                                    }`}
                                 >
                                    {project.theproject.document[0].data.title.text}
                                 </Link>
                              </li>
                           );
                        })}
                     </StyledUl>
                  </div>
               </div>
            ) : (
               <div className="column">
                  <p>Loading...</p>
               </div>
            )}
            <div className="column is-two-thirds has-text-centered proj-intro-right">
               <Img
                  sizes={
                     this.props.data.prismicLocations.data.intro_image.localFile.childImageSharp
                        .sizes
                  }
                  position="absolute"
                  style={{ maxHeight: "70vh" }}
                  imgStyle={{
                     maxWidth: "100%",
                     width: "100%",
                     objectFit: "contain"
                  }}
                  alt=""
               />
            </div>
         </div>
      );
   }
}

export default Interiors;

export const query = graphql`
   query AllInteriorsListQuery($uid: String!) {
      prismicLocations(uid: { eq: $uid }) {
         uid
         data {
            locprojects {
               theproject {
                  __typename
                  ... on theproject_2 {
                     document {
                        uid
                        data {
                           title {
                              text
                           }
                        }
                     }
                  }
               }
            }
            title {
               text
            }
            intro_image {
               localFile {
                  childImageSharp {
                     id
                     sizes(maxWidth: 800, quality: 77) {
                        ...GatsbyImageSharpSizes
                     }
                  }
               }
            }
         }
      }
   }
`;
