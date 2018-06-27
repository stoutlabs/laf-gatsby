import React, { Fragment } from "react";
import Home from "../components/Home/NewHome";

const IndexPage = props => (
   <Fragment>
      <Home content={props.data.prismicHomePage.data} history={props.history} />
   </Fragment>
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
                     sizes(maxWidth: 550, quality: 83) {
                        ...GatsbyImageSharpSizes
                     }
                  }
               }
            }

            right_image {
               localFile {
                  childImageSharp {
                     id
                     sizes(maxWidth: 550, quality: 83) {
                        ...GatsbyImageSharpSizes
                     }
                  }
               }
            }
         }
      }
   }
`;
