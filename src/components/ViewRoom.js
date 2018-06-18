import React, { Component } from "react";
import GridGallery from "./GridGallery/GridGallery";
import SEO from "./SEO";

export class ViewRoom extends Component {
   state = { hasContent: false, images: [], content: null };

   componentDidMount = () => {
      const room = this.props.data.prismicRoom.data;

      //separating images and content here
      const theContent = { title: room.title.text };
      const theImages = room.photos.map(({ photo }, index) => {
         return photo.localFile.childImageSharp;
      });
      const theThumbs = room.thumbs.map(({ photo }, index) => {
         return photo.localFile.childImageSharp;
      });

      this.setState(() => {
         return {
            images: theImages,
            thumbs: theThumbs,
            content: theContent,
            activeItem: room.uid
         };
      });
   };

   render() {
      // SEO stuff
      const seoImage = this.props.data.prismicRoom.data.photos[0].photo.localFile.childImageSharp
         .sizes.src;
      const seoData = {
         frontmatter: {
            title: `Leta Austin Foster Interior Design | Room: ${
               this.state.content ? this.state.content.title : ""
            }`,
            slug: `${this.props.pathContext.locuid}/interiors/room/${
               this.props.data.prismicRoom.uid
            }`
         }
      };

      return (
         <div>
            <SEO postData={seoData} postImage={seoImage} isProjectPage={true} />
            {this.state.content ? (
               <GridGallery
                  images={this.state.images}
                  thumbs={this.state.thumbs}
                  content={this.state.content}
                  label={"Rooms"}
               />
            ) : (
               <div>
                  <p>Loading...</p>
               </div>
            )}
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
                        sizes(maxWidth: 800, quality: 81) {
                           ...GatsbyImageSharpSizes
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
                        resolutions(width: 100, height: 100) {
                           ...GatsbyImageSharpResolutions
                        }
                     }
                  }
               }
            }
         }
      }
   }
`;
