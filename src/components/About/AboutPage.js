import React, { Fragment } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import SEO from "../SEO";
import AboutBio from "./AboutBio";
import Layout from "../Layout";

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
          bio_0: props.data.prismicAboutPage.data.bios_ny[0],
          bio_1: props.data.prismicAboutPage.data.bios_ny[1]
        }
      : {
          bio_0: props.data.prismicAboutPage.data.bios_pb[0],
          bio_1: props.data.prismicAboutPage.data.bios_pb[1]
        };

  return (
    <Layout location={props.location}>
      <AboutPageDiv className="about-page">
        {/* <Helmet title={`Leta Austin Foster Interior Design • ${locationForTitle} | About`} /> */}
        <SEO postData={seoData} />

        <Fragment>
          <div className={`leftside`}>
            <AboutBio heading={curBios.bio_0.title.text} content={curBios.bio_0.text.html} />
          </div>

          <div className={`rightside`}>
            <AboutBio heading={curBios.bio_1.title.text} content={curBios.bio_1.text.html} />
          </div>
        </Fragment>
      </AboutPageDiv>
    </Layout>
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
        bios_ny {
          title {
            text
          }
          text {
            html
          }
        }
        bios_pb {
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
