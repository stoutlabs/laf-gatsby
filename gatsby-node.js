const path = require("path");

exports.onCreateNode = ({ node }) => {
   console.log(node.internal.type);
};

exports.createPages = async ({ graphql, boundActionCreators }) => {
   const { createPage } = boundActionCreators;

   const contactPage = await graphql(`
      {
         prismicContactPage {
            data {
               body {
                  html
                  text
               }
               contact_image {
                  url
               }
            }
         }
      }
   `);

   const projects = await graphql(`
      {
         allPrismicProjects {
            edges {
               node {
                  id
                  uid
                  data {
                     location {
                        document {
                           uid
                           data {
                              title {
                                 text
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   `);

   const locations = await graphql(`
      {
         allPrismicLocations {
            edges {
               node {
                  id
                  uid
                  data {
                     title {
                        text
                     }
                  }
               }
            }
         }
      }
   `);

   projects.data.allPrismicProjects.edges.forEach(edge => {
      createPage({
         path: `${
            edge.node.data.location.document[0].data.title.text === "New York"
               ? "new-york"
               : "palm-beach"
         }/interiors/${edge.node.uid}`,
         //component: pageTemplates[edge.node.template],
         component: path.resolve("./src/components/ViewProject.js"),
         context: {
            id: edge.node.id,
            uid: edge.node.uid
         }
      });
   });

   locations.data.allPrismicLocations.edges.forEach(edge => {
      //interiors index/lists
      createPage({
         path: `${edge.node.uid}/interiors`,
         component: path.resolve("./src/components/Interiors.js"),
         context: {
            id: edge.node.id,
            uid: edge.node.uid
         }
      });

      //contact pages
      createPage({
         path: `${edge.node.uid}/contact`,
         component: path.resolve("./src/components/Contact/ContactPage.js"),
         context: {
            // id: edge.node.id,
            location: edge.node.uid
         }
      });

      //about pages
      createPage({
         path: `${edge.node.uid}/about`,
         component: path.resolve("./src/components/About/AboutPage.js"),
         context: {
            // id: edge.node.id,
            location: edge.node.uid
         }
      });
   });

   // const pageTemplates = {
   //    Light: path.resolve("./src/templates/light.js"),
   //    Dark: path.resolve("./src/templates/dark.js")
   // };

   // contactPage.data.prismicContactPage.edges.forEach(edge => {
   //    createPage({
   //       path: `/${edge.node.uid}`,
   //       //component: pageTemplates[edge.node.template],
   //       component: path.resolve("./src/templates/some-template.js"),
   //       context: {
   //          id: edge.node.id
   //       }
   //    });
   // });
};
