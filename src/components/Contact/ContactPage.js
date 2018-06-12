import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const ContactPageDiv = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1rem;
   text-align: center;

   @media screen and (min-width: 960px) {
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
              body: contactContent.body.html
           }
         : {
              sizes: contactContent.image_pb.localFile.childImageSharp.sizes,
              body: contactContent.body_pb.html
           };
   return (
      <ContactPageDiv className="contact-page">
         <ContactLeft sizes={contactInfo.sizes} />
         <ContactRight contactInfo={contactInfo.body} />
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
            body {
               html
            }
            contact_image {
               localFile {
                  childImageSharp {
                     id
                     sizes(maxHeight: 650, quality: 79) {
                        ...GatsbyImageSharpSizes_withWebp
                     }
                  }
               }
               # url
               # dimensions {
               # width
               # height
               # }
            }
            body_pb {
               html
            }
            image_pb {
               localFile {
                  childImageSharp {
                     id
                     sizes(maxHeight: 650, quality: 79) {
                        ...GatsbyImageSharpSizes_withWebp
                     }
                  }
               }
            }
         }
      }
   }
`;
