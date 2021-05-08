import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Seo from "../../components/Seo";
import IntroContent from "../../components/Boutique/IntroContent";
import SliceTextImage from "../../components/Boutique/SliceTextImage";
import SliceMultiImage from "../../components/Boutique/SliceMultiImage";
import SliceTextOnly from "../../components/Boutique/SliceTextOnly";
import SliceQuotation from "../../components/Boutique/SliceQuotation";
import SliceImageCentered from "../../components/Boutique/SliceImageCentered";

const StyledBoutiquePage = styled.div`
  padding: 2rem;

  h2 {
    border: 3px double #eff2f2;
    border-width: 4px 0;
    color: #333;
    font-size: 1.1rem;
    letter-spacing: 2px;
    line-height: 1.2rem;
    margin: 0.6rem auto 2rem;
    max-width: 360px;
    padding: 10px 4px 4px;
    text-transform: uppercase;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  h3 {
    color: #666;
    font-size: 1.3rem;
  }

  p {
    color: #999;
    font-size: 1.1rem;
    margin: 0 0 1rem;

    strong {
      color: #888;
    }
  }

  ul,
  ol {
    color: #999;
    margin: 1rem 0 1.4rem;
  }

  ol {
    margin-left: 0.8rem;
  }
`;

const SlicesContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const BoutiquePage = props => {
  const content = props.data.prismicPbBoutique.data;
  const { hours, address, google_maps, phone, email } = content;

  // SEO stuff
  const pageTitle = `Leta Austin Foster Interior Design | Palm Beach Boutique`;
  const seoDesc = content.seo_description;
  const seoData = {
    frontmatter: {
      title: pageTitle,
      slug: props.location.pathname.slice(1),
      description: seoDesc
    }
  };

  return (
    <StyledBoutiquePage className="pb-boutique">
      <Seo postData={seoData} />
      <h2>Leta Austin Foster Boutique</h2>
      <IntroContent
        hours={hours}
        address={address}
        google_maps={google_maps}
        phone={phone}
        email={email}
        content={content.intro.html}
      />

      <SlicesContainer className="slices">
        {content.body.map(slice => {
          if ("textWithImage" in slice) {
            return (
              <SliceTextImage
                textWithImage={slice.textWithImage}
                key={slice.textWithImage.heading.text}
              />
            );
          }

          if ("textOnly" in slice) {
            return <SliceTextOnly textOnly={slice.textOnly} key={slice.id} />;
          }

          if ("quotation" in slice) {
            return <SliceQuotation content={slice.quotation} key={slice.id} />;
          }

          if ("imageCentered" in slice) {
            return <SliceImageCentered content={slice.imageCentered} key={slice.id} />;
          }

          if ("multiImages" in slice) {
            return <SliceMultiImage content={slice.multiImages} key={slice.id} />;
          }
          return false;
        })}
      </SlicesContainer>
    </StyledBoutiquePage>
  );
};

export default BoutiquePage;

export const query = graphql`
  query BoutiquePageQuery {
    prismicPbBoutique {
      uid
      data {
        title {
          text
        }

        hours
        address {
          html
        }
        google_maps {
          url
        }
        phone
        email

        intro {
          html
        }

        seo_description

        body {
          ... on PrismicPbBoutiqueBodyTextWithImage {
            id
            textWithImage: primary {
              heading {
                text
              }

              content {
                html
              }

              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 81) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }

          ... on PrismicPbBoutiqueBodyTextOnly {
            id
            textOnly: primary {
              heading {
                text
              }

              content {
                html
              }
            }
          }

          ... on PrismicPbBoutiqueBodyQuotation {
            id
            quotation: primary {
              content {
                html
              }
            }
          }

          ... on PrismicPbBoutiqueBodyImageCentered {
            id
            imageCentered: primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 650, quality: 81) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }

          ... on PrismicPbBoutiqueBodyMultiImage {
            id
            multiImages: items {
              images {
                localFile {
                  id
                  childImageSharp {
                    fluid(maxWidth: 650, quality: 81) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
