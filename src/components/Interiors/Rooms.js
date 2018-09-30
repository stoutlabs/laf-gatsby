import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { graphql } from "gatsby";

import SEO from "../SEO";
import IntroPic from "./IntroPic";
import TypeNav from "../GridGallery/TypeNav";
import Layout from "../Layout";

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

const Rooms = props => {
  const locationForTitle = props.data.prismicLocations.data.title.text;

  const seoImage = props.data.prismicLocations.data.intro_image.localFile.childImageSharp.sizes.src;
  const seoData = {
    frontmatter: {
      title: `Leta Austin Foster Interior Design • ${locationForTitle} | Rooms`,
      slug: `${props.pageContext.locuid}/interiors/rooms/`,
      description: `Here we have sorted the photos from our interior design projects into rooms. These are from our ${locationForTitle} office.`
    }
  };
  const rooms = props.data.prismicLocations.data.rooms_list;

  return (
    <Layout location={props.location}>
      <ProjIntroDiv className="proj-intro">
        <SEO postData={seoData} postImage={seoImage} />

        <div className="proj-intro-details">
          <TypeNav />
          <div className={`gallery-info`}>
            <StyledH3>Rooms</StyledH3>

            <StyledUl>
              {rooms.map(({ room }, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={`/${props.data.prismicLocations.uid}/interiors/room/${
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

        <IntroPic intro_image={props.data.prismicLocations.data.intro_image} />
      </ProjIntroDiv>
    </Layout>
  );
};

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
