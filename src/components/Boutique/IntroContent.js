import React from "react";
import styled from "styled-components";

const StyledIntro = styled.div`
   margin: 0 auto;
   padding: 1rem 1rem 3rem;

   p {
      font-size: 1.3rem;
      max-width: 900px;
      text-align: center;
      margin: 0 auto 2.5rem;

      @media screen and (min-width: 768px) {
         text-align: left;
      }
   }

   div.intro-inner {
      display: flex;
      flex-direction: column;
      max-width: 1000px;
      margin: 0 auto;

      @media screen and (min-width: 768px) {
         flex-direction: row;
         align-items: flex-start;
         justify-content: center;
      }

      div.intro-content {
         @media screen and (min-width: 768px) {
            width: 50%;
            padding-right: 1rem;
         }

         @media screen and (min-width: 960px) {
            width: 66%;
            padding-right: 3rem;
         }

         p {
            font-size: 1.3rem;

            @media screen and (min-width: 768px) {
               text-align: left;
            }
            @media screen and (min-width: 960px) {
               font-size: 1.3rem;
            }
         }
      }

      div.intro-info {
         border: 4px double #ddd;
         background: #fbfbfb;
         padding: 1.5rem;

         @media screen and (min-width: 768px) {
            width: 50%;
            padding: 2rem 1.5rem;
         }

         @media screen and (min-width: 960px) {
            width: 33%;
            padding: 2rem;
         }

         p {
            color: #aaa;
            font-size: 1.15rem;
            margin-bottom: 1.5rem;

            &:last-child {
               margin-bottom: 0;
            }

            a {
               font-size: 1rem;

               color: #777;

               &:hover {
                  color: #444;
               }
            }

            @media screen and (min-width: 768px) {
               text-align: center;
            }
            @media screen and (min-width: 960px) {
               font-size: 1.2rem;
               line-height: 1.35;
            }
         }
      }
   }
`;

export const IntroContent = () => {
   return (
      <StyledIntro className="intro">
         <div className="intro-inner">
            <div className="intro-content">
               <p>
                  Static content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a efficitur lacus. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Fusce vel risus mauris.
               </p>
               <p>
                  Duis vel consectetur ex. Phasellus id diam imperdiet, ultrices leo quis,
                  condimentum arcu. Integer id lorem dui. Proin at luctus tellus. Duis in ultricies
                  sem.
               </p>
            </div>

            <div className="intro-info">
               <p className="hours">
                  <b>HOURS:</b>
                  <br />
                  Mon thru Fri, 9am - 4pm
               </p>
               <p className="addy">
                  <b>ADDRESS:</b>
                  <br />
                  64 Via Mizner <br />
                  Palm Beach, Florida 33480 <br />
                  <a
                     href="https://goo.gl/maps/ASVPa6ZZfaK2"
                     rel="noopener noreferrer"
                     title="View on Google Maps"
                     target="_blank"
                  >
                     > View Google Map
                  </a>
               </p>
               <p className="call">561.655.5489</p>
            </div>
         </div>
      </StyledIntro>
   );
};

export default IntroContent;