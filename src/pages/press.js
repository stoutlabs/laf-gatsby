import React from "react";
import { graphql } from "gatsby";

import Press from "../components/Press/Press";

const PressPage = props => <Press content={props.data.prismicPress.data} history={props.history} />;

export default PressPage;

export const query = graphql`
  query PressPageQuery {
    prismicPress {
      data {
        title {
          text
        }

        intro {
          html
        }

        as_seen_in {
          logo_image {
            localFile {
              id
              childImageSharp {
                fluid(maxWidth: 300, quality: 84) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        books {
          book_title
          book_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 450, quality: 81) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        awards {
          award_title
          award_link {
            url
          }
          award_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 300, quality: 84) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        articles {
          article_title
          article_link {
            url
          }
          cover_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, quality: 84) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
