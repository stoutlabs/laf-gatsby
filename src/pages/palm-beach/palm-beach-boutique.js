import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import SEO from "../../components/SEO";
import { SSL_OP_CIPHER_SERVER_PREFERENCE } from "constants";

const StyledBoutiquePage = styled.div`
   padding: 1.4rem;

   h2 {
      border: 3px double #eff2f2;
      border-width: 4px 0;
      color: #333;
      font-size: 1.1rem;
      letter-spacing: 2px;
      line-height: 1.2rem;
      margin: 0.6rem 0 1.5rem;
      padding: 10px 4px 4px;
      text-transform: uppercase;
      text-align: center;

      @media screen and (min-width: 769px) {
         font-size: 1.2rem;
      }
   }

   h3 {
      color: #666;
      font-size: 1rem;
   }

   p {
      color: #999;
      font-size: 0.9rem;
      margin: 0 0 1rem;

      strong {
         color: #888;
      }

      @media screen and (min-width: 769px) {
         font-size: 1rem;
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

const StyledTextWithImage = styled.div`
   margin: 0 0 4rem;

   h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
   }

   div.slice-inner {
      display: flex;
      flex-direction: row;

      div.slice-text_content {
         width: 60%;
         margin: 0 1rem 0 0;
      }

      div.slice-image {
         width: 40%;
         height: 100%;
      }
   }
`;

const StyledTextOnly = styled.div`
   margin: 0 0 4rem;

   h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
   }
`;

const renderTextWithImage = ({ textWithImage }) => {
   return (
      <StyledTextWithImage className="slice-textWithImage">
         <div className="slice-inner">
            <div className="slice-text_content">
               <h3>{textWithImage.heading.text}</h3>
               <div dangerouslySetInnerHTML={{ __html: textWithImage.content.html }} />
            </div>

            <div className="slice-image">
               <Img
                  sizes={textWithImage.image.localFile.childImageSharp.sizes}
                  outerWrapperClassName={"slice-pic-outer-wrapper"}
                  className="slice-pic"
                  position="absolute"
                  style={{ maxHeight: "70vh", height: "100%" }}
                  imgStyle={{
                     maxWidth: "100%",
                     width: "100%",
                     height: "100%",
                     objectFit: "contain"
                  }}
                  alt=""
               />
            </div>
         </div>
      </StyledTextWithImage>
   );
};

const renderTextOnlySlice = ({ textOnly }) => {
   return (
      <StyledTextOnly className="slice-textOnly">
         <h3>{textOnly.heading.text}</h3>

         <div
            dangerouslySetInnerHTML={{ __html: textOnly.content.html }}
            className="slice_twi_content"
         />
      </StyledTextOnly>
   );
};

export const BoutiquePage = props => {
   const content = props.data.prismicPbBoutique.data;
   console.log("content", content);

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

         {content.body.map(slice => {
            if ("textWithImage" in slice) {
               return renderTextWithImage(slice);
            }

            if ("textOnly" in slice) {
               return renderTextOnlySlice(slice);
            }
         })}
         {/* <div dangerouslySetInnerHTML={{ __html: content.body.html }} /> */}
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
