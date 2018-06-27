import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import SEO from "../../components/SEO";
import IntroContent from "../../components/Boutique/IntroContent";
import SliceTextImage from "../../components/Boutique/SliceTextImage";
import SliceTextOnly from "../../components/Boutique/SliceTextOnly";

const StyledBoutiquePage = styled.div`
   padding: 1.4rem;

   h2 {
      border: 3px double #eff2f2;
      border-width: 4px 0;
      color: #333;
      font-size: 1.1rem;
      letter-spacing: 2px;
      line-height: 1.2rem;
      margin: 0.6rem auto 2rem;
      max-width: 300px;
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

export const BoutiquePage = props => {
   const content = props.data.prismicPbBoutique.data;

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
         <SEO postData={seoData} />
         <h2>{content.title.text}</h2>
         <IntroContent />

         <SlicesContainer className="slices">
            {content.body.map(slice => {
               if ("textWithImage" in slice) {
                  return <SliceTextImage textWithImage={slice.textWithImage} />;
               }

               if ("textOnly" in slice) {
                  return <SliceTextOnly textOnly={slice.textOnly} />;
               }
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
                              sizes(maxWidth: 450, quality: 79) {
                                 ...GatsbyImageSharpSizes
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
            }
         }
      }
   }
`;
