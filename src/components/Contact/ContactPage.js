import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { connect } from "react-redux";

import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import SEO from "../SEO";

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

export const ConnectedContactPage = props => {
   const contactContent = props.data.prismicContactPage.data;

   const contactInfo =
      props.theLocation === "new-york"
         ? {
              sizes: contactContent.contact_image.localFile.childImageSharp.sizes,
              title: contactContent.label_ny.text,
              address: contactContent.address_ny.html,
              phone: contactContent.phone_ny,
              fax: contactContent.fax_ny,
              email: contactContent.email_ny
           }
         : {
              sizes: contactContent.image_pb.localFile.childImageSharp.sizes,
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
         slug: `${props.theLocation}/contact`
      }
   };

   return (
      <ContactPageDiv className="contact-page">
         <SEO postData={seoData} />
         <ContactLeft sizes={contactInfo.sizes} />
         <ContactRight contactInfo={contactInfo} />
      </ContactPageDiv>
   );
};

const mapStateToProps = state => {
   return { theLocation: state.theLocation };
};

const ContactPage = connect(mapStateToProps)(ConnectedContactPage);
export default ContactPage;

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
                     sizes(maxWidth: 800, quality: 79) {
                        ...GatsbyImageSharpSizes
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
                     sizes(maxWidth: 800, quality: 79) {
                        ...GatsbyImageSharpSizes
                     }
                  }
               }
            }
         }
      }
   }
`;
