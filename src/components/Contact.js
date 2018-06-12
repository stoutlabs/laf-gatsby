import React, { Fragment } from "react";
import { connect } from "react-redux";
import Img from "gatsby-image";

export const ConnectedContact = props => {
   //console.log(data);
   //console.log("location: ", location.pathname);
   console.log("props ", props);
   const contactContent = props.data.prismicContactPage.data;
   return (
      <div>
         <h2>Contact</h2>

         {props.theLocation === "new-york" ? (
            <Fragment>
               <Img
                  sizes={contactContent.contact_image.localFile.childImageSharp.sizes}
                  //src={props.data.prismicContactPage.data.contact_image.url}
                  alt=""
               />

               <div dangerouslySetInnerHTML={{ __html: contactContent.body.html }} />
            </Fragment>
         ) : (
            <Fragment>
               <Img
                  sizes={contactContent.image_pb.localFile.childImageSharp.sizes}
                  //src={props.data.prismicContactPage.data.image_pb.url}
                  alt=""
               />

               <div
                  dangerouslySetInnerHTML={{
                     __html: contactContent.body_pb.html
                  }}
               />
            </Fragment>
         )}
      </div>
   );
};

const mapStateToProps = state => {
   return { theLocation: state.theLocation };
};

const Contact = connect(mapStateToProps)(ConnectedContact);

export default Contact;

export const query = graphql`
   query ContactContentQuery {
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
