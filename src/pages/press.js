import React, { Fragment } from "react";
import Press from "../components/Press/Press";

const PressPage = props => (
  <Fragment>
    <Press content={props.data.prismicPress.data} history={props.history} />
  </Fragment>
);

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
                sizes(maxWidth: 300, quality: 84) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }

        books {
          book_title
        }

        awards {
          award_title
          award_link {
            url
          }
          award_image {
            localFile {
              childImageSharp {
                sizes(maxWidth: 300, quality: 84) {
                  ...GatsbyImageSharpSizes
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
                sizes(maxWidth: 600, quality: 84) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
