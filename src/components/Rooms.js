import React, { Component } from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import styled from "styled-components";

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

export class Rooms extends Component {
   state = { rooms: [], hasContent: false, images: [], content: null };

   componentDidMount = () => {
      //console.log("data:", this.props.data.prismicLocations);
      this.setState(() => {
         return { rooms: this.props.data.prismicLocations.data.rooms_list, hasContent: true };
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
                     <StyledH3>Rooms</StyledH3>

                     <StyledUl>
                        {this.state.rooms.map(({ room }, index) => {
                           return (
                              <li key={index}>
                                 <Link
                                    to={`/${this.props.data.prismicLocations.uid}/interiors/room/${
                                       room.document[0].uid
                                    }`}
                                 >
                                    {room.document[0].data.title.text}
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

export default Rooms;

export const query = graphql`
   query AllRoomsListQuery($uid: String!) {
      prismicLocations(uid: { eq: $uid }) {
         uid
         data {
            rooms_list {
               room {
                  __typename
                  ... on room_2 {
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
