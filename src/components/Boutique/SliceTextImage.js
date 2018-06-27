import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledTextWithImage = styled.div`
   margin: 0 0 3rem;
   padding: 3rem 0 0;
   border-top: 1px solid #ddd;

   h3 {
      margin-bottom: 1rem;
   }

   div.slice-inner {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 1rem;

      div.slice-text_content {
         width: 60%;
         margin: 0 1rem 0 0;

         p {
            font-size: 1.15rem;
         }
      }

      div.slice-image {
         width: 40%;
         height: 100%;
      }
   }
`;

export const SliceTextImage = ({ textWithImage }) => {
   return (
      <StyledTextWithImage className="slice-textWithImage" key={textWithImage.heading.text}>
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

export default SliceTextImage;
