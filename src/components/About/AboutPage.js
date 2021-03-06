import React, { Fragment } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Seo from "../Seo";
import AboutBio from "./AboutBio";

const AboutPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media screen and (min-width: 960px) {
    flex-direction: row;
    min-height: 550px;
  }

  div.leftside,
  div.rightside {
    padding: 1rem;

    @media screen and (min-width: 960px) {
      width: 50%;
    }

    p {
      margin: 0 0 1.5rem;
      line-height: 1.7;
    }
  }

  div.leftside {
    @media screen and (min-width: 960px) {
      border-right: 1px solid #eff2f2;
    }
  }
`;

const AboutPage = props => {
  const urlLoc = props.location.pathname.split("/")[1];

  const locationForTitle = urlLoc === "new-york" ? "New York" : "Palm Beach";
  const seoDesc = `Learn more about the backgrounds of Leta Austin Foster and her associates: Sallie Giordano, Alexandra Wernink, and India Foster.`;
  const seoData = {
    frontmatter: {
      title: `Leta Austin Foster Interior Design • ${locationForTitle} | About`,
      slug: `${urlLoc}/about`,
      description: seoDesc
    }
  };

  const curBios =
    urlLoc === "new-york"
      ? {
          bio_0: props.data.prismicAboutPage.data.biosny[0],
          bio_1: props.data.prismicAboutPage.data.biosny[1]
        }
      : {
          bio_0: props.data.prismicAboutPage.data.biospb[0],
          bio_1: props.data.prismicAboutPage.data.biospb[1]
        };

  return (
    <AboutPageDiv className="about-page">
      {/* <Helmet title={`Leta Austin Foster Interior Design • ${locationForTitle} | About`} /> */}
      <Seo postData={seoData} />

      <Fragment>
        <div className={`leftside`}>
          <AboutBio heading={curBios.bio_0.title.text} content={curBios.bio_0.text.html} />
        </div>

        <div className={`rightside`}>
          <AboutBio heading={curBios.bio_1.title.text} content={curBios.bio_1.text.html} />
        </div>
      </Fragment>
    </AboutPageDiv>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutContentQuery {
    prismicAboutPage {
      data {
        title {
          text
        }
        biosny {
          title {
            text
          }
          text {
            html
          }
        }
        biospb {
          title {
            text
          }
          text {
            html
          }
        }
      }
    }
  }
`;
