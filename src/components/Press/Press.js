import React, { Fragment } from "react";
import styled from "styled-components";

import SEO from "../SEO";
import Articles from "./Articles";
import Awards from "./Awards";
import Books from "./Books";
import SeenIn from "./SeenIn";

const PressDiv = styled.div`
  padding: 0.5rem;
  margin: 0 auto 1rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 1.4rem;
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
    margin: 1rem auto 4rem;
    font-size: 1.4rem;
    color: #999;
    text-align: center;

    p {
      margin-bottom: 2rem;
    }
  }
`;

export const Press = props => {
  const pressData = props.content;
  //console.log("pressData", pressData);
  //const locationForTitle = props.theLocation === "new-york" ? "New York" : "Palm Beach";
  const seoDesc = `Links to various published articles, books, and press releases about Leta Austin Foster & Associates.`;
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

      <SeenIn items={pressData.as_seen_in} />
      <Articles articles={pressData.articles} />
      <Books books={pressData.books} />
      <Awards awards={pressData.awards} />
    </PressDiv>
  );
};

export default Press;
