import React, { Component } from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
//import { connect } from "react-redux";
//import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import TypeNav from "./GridGallery/TypeNav";
//import tempInteriors from "../utils/tempProjects";

const StyledH3 = styled.h3`
   border: 3px double #eff2f2;
   border-width: 4px 0;
   padding: 10px 4px 4px;
   text-transform: uppercase;
   text-align: center;
   margin: 0.6rem 0;
   font-size: 1.4rem;
   line-height: 1.4rem;
`;

export class Interiors extends Component {
   state = { projects: [], hasContent: false, images: [], content: null };

   componentDidMount = () => {
      console.log("data:", this.props.data.prismicLocations);
      this.setState(() => {
         return { projects: this.props.data.prismicLocations.data.locprojects, hasContent: true };
      });
   };

   render() {
      //console.log("theLocation:", this.props.theLocation);
      return (
         <div className="columns proj-intro">
            {this.state.hasContent ? (
               <div className="column is-one-third has-text-centered">
                  <div className="gallery-info">
                     <TypeNav />
                     <StyledH3>Projects</StyledH3>

                     <ul>
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
                     </ul>
                  </div>
               </div>
            ) : (
               <div className="column">
                  <p>Loading...</p>
               </div>
            )}
            <div className="column is-two-thirds has-text-centered proj-intro-right">
               {/* <Image imageUrl="/leta_w-4palmbeaxh.jpg" alt="" /> */}
            </div>
         </div>
      );
   }
}

// const mapStateToProps = state => {
//    return { theLocation: state.content.theLocation };
// };

//const Interiors = withRouter(connect(mapStateToProps)(ConnectedInteriors));

export default Interiors;

// export const query = graphql`
//    query AllInteriorsListQuery($uid: String!) {
//       allPrismicProjects(filter: { data: { location: { document: { uid: { eq: $uid } } } } }) {
//          edges {
//             node {
//                id
//                uid
//                data {
//                   title {
//                      text
//                   }
//                   location {
//                      document {
//                         uid
//                         data {
//                            title {
//                               text
//                            }
//                         }
//                      }
//                   }
//                }
//             }
//          }
//       }
//    }
// `;

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
         }
      }
   }
`;
