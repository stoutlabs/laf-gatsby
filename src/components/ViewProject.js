import React, { Component } from "react";
import GridGallery from "./GridGallery/GridGallery";

import SEO from "./SEO";

export class ViewProject extends Component {
   state = { hasContent: false, images: [], content: null };

   componentDidMount = () => {
      const project = this.props.data.prismicProjects.data;

      //separating images and content here
      const theContent = { title: project.title.text };
      const theImages = project.pictures.map(({ picture }, index) => {
         return picture.localFile.childImageSharp;
      });
      const theThumbs = project.thumbs.map(({ picture }, index) => {
         return picture.localFile.childImageSharp;
      });

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
      // console.log("props:", this.props);
      // SEO stuff
      const postImage = this.props.data.prismicProjects.data.pictures[0].picture.localFile
         .childImageSharp.sizes.src;
      const pageTitle = `Leta Austin Foster Interior Design | ${
         this.props.data.prismicProjects.data.title.text
      }`;
      const postData = {
         frontmatter: {
            title: pageTitle,
            slug: `${this.props.pathContext.locuid}/interiors/${
               this.props.data.prismicProjects.uid
            }`
         }
      };

      return (
         <div>
            <SEO postData={postData} postImage={postImage} isProjectPage={true} />
            {this.state.content ? (
               <GridGallery
                  images={this.state.images}
                  thumbs={this.state.thumbs}
                  content={this.state.content}
                  label={"Projects"}
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
         uid
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
