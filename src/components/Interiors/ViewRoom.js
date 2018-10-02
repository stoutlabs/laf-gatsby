import React, { Component } from "react";
import { graphql } from "gatsby";

import GridGallery from "../GridGallery/GridGallery";
import SEO from "../SEO";

export class ViewRoom extends Component {
  state = { activeItem: this.props.data.prismicRoom.data.uid };

  render() {
    const room = this.props.data.prismicRoom.data;

    //separating images and content here
    const theContent = { title: room.title.text };
    const theImages = room.photos.map(({ photo }, index) => {
      return photo.localFile.childImageSharp;
    });
    const theThumbs = room.thumbs.map(({ photo }, index) => {
      return photo.localFile.childImageSharp;
    });

    // SEO stuff
    const seoImage = this.props.data.prismicRoom.data.photos[0].photo.localFile.childImageSharp
      .fluid.src;
    const pageTitle = `Leta Austin Foster Interior Design | ${
      this.props.data.prismicRoom.data.title.text
    }`;
    const seoData = {
      frontmatter: {
        title: pageTitle,
        slug: `${this.props.pageContext.locuid}/interiors/room/${this.props.data.prismicRoom.uid}`
      }
    };

    return (
      <div>
        <SEO postData={seoData} postImage={seoImage} isProjectPage={true} />
        <GridGallery images={theImages} thumbs={theThumbs} content={theContent} label={"Rooms"} />
      </div>
    );
  }
}

export default ViewRoom;

export const query = graphql`
  query ViewRoomQuery($id: String!) {
    prismicRoom(id: { eq: $id }) {
      data {
        title {
          text
        }

        photos {
          photo {
            localFile {
              childImageSharp {
                id

                fluid(maxWidth: 800, quality: 81) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        thumbs: photos {
          photo {
            localFile {
              childImageSharp {
                id
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
