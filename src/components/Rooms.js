import React, { Component } from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import styled from "styled-components";

import SEO from "./SEO";
import TypeNav from "./GridGallery/TypeNav";

const ProjIntroDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;

   @media screen and (min-width: 768px) {
      flex-direction: row;
   }

   div.proj-intro-details {
      width: 100%;
      text-align: center;
      margin-bottom: 1.4rem;

      @media screen and (min-width: 768px) {
         flex-direction: row;
         width: 360px;
      }
   }

   div.proj-intro-pic {
      width: 100%;
      align-self: center;
      padding: 1rem;

      @media screen and (min-width: 768px) {
         width: 66%;
         ${"" /* margin: 1rem; */};
      }
   }
`;

const StyledH3 = styled.h3`
   border: 3px double #eff2f2;
   border-width: 4px 0;
   padding: 10px 4px 4px;
   text-transform: uppercase;
   text-align: center;
   margin: 0 0 1rem;
   font-size: 1.2rem;
   line-height: 1.2rem;
   letter-spacing: 1px;

   @media screen and (min-width: 768px) {
      margin: 0 0 2rem;
   }
`;

const StyledUl = styled.ul`
   li {
      margin-bottom: 0.3rem;
   }
`;

export class Rooms extends Component {
   state = { rooms: [], hasContent: false, images: [], content: null };

   componentDidMount = () => {
      this.setState(() => {
         return { rooms: this.props.data.prismicLocations.data.rooms_list, hasContent: true };
      });
   };

   render() {
      const locationForTitle = this.props.data.prismicLocations.data.title.text;

      const seoImage = this.props.data.prismicLocations.data.intro_image.localFile.childImageSharp
         .sizes.src;
      const seoData = {
         frontmatter: {
            title: `Leta Austin Foster Interior Design • ${locationForTitle} | Rooms`,
            slug: `${this.props.pathContext.locuid}/interiors/rooms/`,
            description: `Here we have sorted the photos from our interior design projects into rooms. These are from our ${locationForTitle} office.`
         }
      };

      return (
         <ProjIntroDiv className="proj-intro">
            <SEO postData={seoData} postImage={seoImage} />

            {this.state.hasContent ? (
               <div className="proj-intro-details">
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
               <div className="proj-intro-details">
                  <p>Loading...</p>
               </div>
            )}
            <div className="proj-intro-pic">
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
         </ProjIntroDiv>
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
