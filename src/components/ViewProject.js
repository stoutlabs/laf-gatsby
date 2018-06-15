import React, { Component } from "react";
import GridGallery from "./GridGallery/GridGallery";

export class ViewProject extends Component {
   state = { hasContent: false, images: [], content: null };

   componentDidMount = () => {
      const project = this.props.data.prismicProjects.data;

      //separating images and content here
      const theContent = { title: project.title.text };
      const theImages = project.pictures;
      const theThumbs = project.thumbs;

      this.setState(() => {
         return {
            images: theImages,
            thumbs: theThumbs,
            content: theContent,
            activeItem: project.uid
         };
      });
   };

   render() {
      return (
         <div>
            {this.state.content ? (
               <GridGallery
                  images={this.state.images}
                  thumbs={this.state.thumbs}
                  content={this.state.content}
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

export default ViewProject;

export const query = graphql`
   query ViewProjectQuery($id: String!) {
      prismicProjects(id: { eq: $id }) {
         data {
            title {
               html
               text
            }

            pictures {
               picture {
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

            thumbs: pictures {
               picture {
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
