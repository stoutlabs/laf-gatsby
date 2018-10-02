import React, { Component } from "react";
import { graphql } from "gatsby";

import GridGallery from "../GridGallery/GridGallery";
import SEO from "../SEO";

export class ViewProject extends Component {
  state = { activeItem: this.props.data.prismicProjects.data.uid };

  render() {
    const project = this.props.data.prismicProjects.data;

    //separating images and content here
    const theContent = { title: project.title.text };
    const theImages = project.pictures.map(({ picture }, index) => {
      return picture.localFile.childImageSharp;
    });
    const theThumbs = project.thumbs.map(({ picture }, index) => {
      return picture.localFile.childImageSharp;
    });

    // SEO stuff
    const postImage = this.props.data.prismicProjects.data.pictures[0].picture.localFile
      .childImageSharp.fluid.src;
    const pageTitle = `Leta Austin Foster Interior Design | ${
      this.props.data.prismicProjects.data.title.text
    }`;
    const postData = {
      frontmatter: {
        title: pageTitle,
        slug: `${this.props.pageContext.locuid}/interiors/${this.props.data.prismicProjects.uid}`
      }
    };

    return (
      <div>
        <SEO postData={postData} postImage={postImage} isProjectPage={true} />
        <GridGallery
          images={theImages}
          thumbs={theThumbs}
          content={theContent}
          label={"Projects"}
        />
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

                fluid(maxWidth: 800, quality: 81) {
                  ...GatsbyImageSharpFluid
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
