import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import SEO from "../SEO";
import AppConsumer from "../../store/consumer";

const ContactPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    min-height: 550px;
  }
`;

const ContactPage = props => {
  const urlLoc = props.location.pathname.split("/")[1];
  const contactContent = props.data.prismicContactPage.data;

  const contactInfo =
    urlLoc === "new-york"
      ? {
          fluid: contactContent.contact_image.localFile.childImageSharp.fluid,
          title: contactContent.label_ny.text,
          address: contactContent.address_ny.html,
          phone: contactContent.phone_ny,
          fax: contactContent.fax_ny,
          email: contactContent.email_ny
        }
      : {
          fluid: contactContent.image_pb.localFile.childImageSharp.fluid,
          title: contactContent.label_pb.text,
          address: contactContent.address_pb.html,
          phone: contactContent.phone_pb,
          fax: contactContent.fax_pb,
          email: contactContent.email_pb
        };

  // For SEO stuff
  const seoData = {
    frontmatter: {
      title: `Leta Austin Foster Interior Design • ${contactInfo.title} | Contact`,
      slug: `${urlLoc}/contact`
    }
  };
  return (
    <ContactPageDiv className={`contact-page`}>
      <SEO postData={seoData} />
      <ContactLeft fluid={contactInfo.fluid} />
      <ContactRight contactInfo={contactInfo} />
    </ContactPageDiv>
  );
};

export default props => <AppConsumer>{state => <ContactPage {...props} />}</AppConsumer>;

export const query = graphql`
  query ContactContentsQuery {
    prismicContactPage {
      id
      data {
        address_ny {
          html
        }
        label_ny {
          text
        }
        phone_ny
        fax_ny
        email_ny
        contact_image {
          localFile {
            childImageSharp {
              id
              fluid(maxWidth: 800, quality: 79) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        address_pb {
          html
        }
        label_pb {
          text
        }
        phone_pb
        fax_pb
        email_pb
        image_pb {
          localFile {
            childImageSharp {
              id
              fluid(maxWidth: 800, quality: 79) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
