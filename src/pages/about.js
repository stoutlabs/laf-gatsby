import React from "react";

export default ({ data }) => {
   console.log(data);
   return (
      <div>
         <h2>{data.prismicContactPage.data.heading.text}</h2>

         <img src={data.prismicContactPage.data.contact_image.url} alt="" />
         <div dangerouslySetInnerHTML={{ __html: data.prismicContactPage.data.body.html }} />
      </div>
   );
};

export const query = graphql`
   query AboutPageQuery {
      prismicContactPage {
         id
         data {
            heading {
               text
            }
            body {
               html
            }
            contact_image {
               url
               dimensions {
                  width
                  height
               }
            }
         }
      }
   }
`;
