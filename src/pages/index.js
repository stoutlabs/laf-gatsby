import React from "react";
import Home from "../components/Home/Home";

const IndexPage = props => (
   <div>
      <Home content={props.data.prismicHomePage.data} history={props.history} />
   </div>
);

export default IndexPage;

export const query = graphql`
   query HomeContentQuery {
      prismicHomePage {
         data {
            left_image {
               localFile {
                  childImageSharp {
                     id
                     sizes(maxHeight: 650, quality: 79) {
                        ...GatsbyImageSharpSizes_withWebp
                     }
                  }
               }
            }

            right_image {
               localFile {
                  childImageSharp {
                     id
                     sizes(maxHeight: 650, quality: 79) {
                        ...GatsbyImageSharpSizes_withWebp
                     }
                  }
               }
            }
         }
      }
   }
`;
