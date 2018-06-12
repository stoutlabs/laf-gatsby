import React from "react";
import Img from "gatsby-image";

export default ({ data }) => {
   console.log(data);
   const project = data.prismicProjects.data;
   return (
      <div>
         <h2>{project.title.text}</h2>
         <h3>Location: {project.location.document[0].data.title.text}</h3>
         <h4>Gallery:</h4>
         {project.pictures.map(({ picture }) => (
            <div key={picture.localFile.childImageSharp.id}>
               <Img sizes={picture.localFile.childImageSharp.sizes} alt="" />
            </div>
         ))}
      </div>
   );
};

/* eslint no-undef: "off" */
export const query = graphql`
   query projectQuery($id: String!) {
      prismicProjects(id: { eq: $id }) {
         data {
            location {
               document {
                  data {
                     title {
                        text
                     }
                  }
               }
            }
            title {
               html
               text
            }

            pictures {
               picture {
                  localFile {
                     childImageSharp {
                        id
                        sizes(maxWidth: 800, quality: 85) {
                           ...GatsbyImageSharpSizes_withWebp
                        }
                     }
                  }
               }
            }
         }
      }
   }
`;
