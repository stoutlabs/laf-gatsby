import React from "react";
import { graphql } from "gatsby";

import Home from "../components/Home/NewHome";

const IndexPage = props => (
  <Home content={props.data.prismicHomePage.data} history={props.history} />
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
