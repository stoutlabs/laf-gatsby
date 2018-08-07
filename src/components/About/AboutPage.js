import React, { Fragment, Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { connect } from "react-redux";

import SEO from "../SEO";
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
    opacity: 0;
    transition: opacity 400ms ease-in 150ms;

    @media screen and (min-width: 960px) {
      width: 50%;
    }

    &.ready {
      opacity: 1;
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

export class ConnectedAboutPage extends Component {
  //console.log("postData", postData);

  state = { hasContent: false };

  componentDidMount = () => {
    this.setState(() => {
      return { hasContent: true };
    });
  };

  render() {
    const locationForTitle = this.props.theLocation === "new-york" ? "New York" : "Palm Beach";
    const seoDesc = `Learn more about the backgrounds of Leta Austin Foster and her associates: Sallie Giordano, Alexandra Wernink, and India Foster.`;
    const seoData = {
      frontmatter: {
        title: `Leta Austin Foster Interior Design • ${locationForTitle} | About`,
        slug: `${this.props.theLocation}/about`,
        description: seoDesc
      }
    };

    const curBios =
      this.props.theLocation === "new-york"
        ? {
            bio_0: this.props.data.prismicAboutPage.data.bios_ny[0],
            bio_1: this.props.data.prismicAboutPage.data.bios_ny[1]
          }
        : {
            bio_0: this.props.data.prismicAboutPage.data.bios_pb[0],
            bio_1: this.props.data.prismicAboutPage.data.bios_pb[1]
          };

    return (
      <AboutPageDiv className="about-page">
        {/* <Helmet title={`Leta Austin Foster Interior Design • ${locationForTitle} | About`} /> */}
        <SEO postData={seoData} />

        <Fragment>
          <div className={`leftside ${this.state.hasContent ? "ready" : ""}`}>
            <AboutBio heading={curBios.bio_0.title.text} content={curBios.bio_0.text.html} />
          </div>

          <div className={`rightside ${this.state.hasContent ? "ready" : ""}`}>
            <AboutBio heading={curBios.bio_1.title.text} content={curBios.bio_1.text.html} />
          </div>
        </Fragment>
      </AboutPageDiv>
    );
  }
}

const mapStateToProps = state => {
  return { theLocation: state.theLocation };
};

const AboutPage = connect(mapStateToProps)(ConnectedAboutPage);

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
