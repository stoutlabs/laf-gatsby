import React, { Fragment } from "react";
import styled from "styled-components";

import SEO from "../SEO";

const PressDiv = styled.div`
   padding: 1.4rem;
   margin: 0 auto 1rem;
   text-align: center;

   @media screen and (min-width: 768px) {
      max-width: 950px;
      text-align: left;
   }

   h2 {
      border: 3px double #eff2f2;
      border-width: 4px 0;
      color: #333;
      font-size: 1.1rem;
      letter-spacing: 2px;
      line-height: 1.2rem;
      margin: 0.6rem auto 3rem;
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
      font-size: 1.4rem;
      margin: 0 0 2rem;
      text-align: center;
   }

   div.press-intro {
      margin: 0 auto 3rem;
      font-size: 1.3rem;
      color: #999;

      p {
         margin-bottom: 2rem;
      }
   }

   div.press-list {
      max-width: 760px;
      margin: 0 auto 2rem;

      div.press-link {
         position: relative;
         margin: 0 0 1px;

         a {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            font-size: 1.3rem;

            padding: 1.5rem 0.5rem 1.5rem 1rem;
            border-bottom: 1px solid #eee;
            border-left: 6px solid #ddd;

            div.over {
               background-color: #aaaaaa;
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               opacity: 0;
               transition: opacity 200ms ease-out;
            }

            &:hover {
               div.over {
                  opacity: 0.1;
               }
            }
         }

         span {
            font-size: 1.05rem;
            padding: 0 1rem;
         }
      }
   }
`;

export const Press = props => {
   const pressData = props.content;
   console.log("pressData", pressData);
   //const locationForTitle = props.theLocation === "new-york" ? "New York" : "Palm Beach";
   const seoDesc = `Links to various published articles and press releases about our interior design work.`;
   const seoData = {
      frontmatter: {
         title: `Leta Austin Foster Interior Design | Press`,
         slug: `press`,
         description: seoDesc
      }
   };

   return (
      <PressDiv className="press-page">
         {/* <Helmet title={`Leta Austin Foster Interior Design • ${locationForTitle} | About`} /> */}
         <SEO postData={seoData} />

         <div className="press-intro">
            <h2>{pressData.title.text}</h2>

            <div
               dangerouslySetInnerHTML={{ __html: pressData.intro.html }}
               className="press-intro-content"
            />
         </div>

         <div className="press-list">
            <h3>Clickable Press Items:</h3>
            {pressData.press_links.map(item => {
               return (
                  <div className="press-link" key={item.title1}>
                     <a
                        href={item.file_link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={item.title1}
                     >
                        <h4>{item.title1}</h4>

                        <span className="press-date">{item.date}</span>
                        <div className="over" />
                     </a>
                  </div>
               );
            })}
         </div>
      </PressDiv>
   );
};

export default Press;
