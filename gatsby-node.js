const path = require("path");

exports.onCreateNode = ({ node }) => {
   //console.log(node.internal.type);
};

exports.createPages = async ({ graphql, boundActionCreators }) => {
   const { createPage } = boundActionCreators;

   const contactPage = await graphql(`
      {
         prismicContactPage {
            data {
               id
            }
         }
      }
   `);

   // const projects = await graphql(`
   //    {
   //       allPrismicProjects {
   //          edges {
   //             node {
   //                id
   //                uid
   //                data {
   //                   location {
   //                      document {
   //                         uid
   //                         data {
   //                            title {
   //                               text
   //                            }
   //                         }
   //                      }
   //                   }
   //                }
   //             }
   //          }
   //       }
   //    }
   // `);

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

   const allLocProjects = await graphql(`
      {
         allPrismicLocations {
            edges {
               node {
                  uid
                  data {
                     locprojects {
                        theproject {
                           __typename
                           ... on theproject {
                              document {
                                 id
                                 uid
                              }
                           }
                           #document {
                           # uid
                           #}
                        }
                     }
                     title {
                        text
                     }
                  }
               }
            }
         }
      }
   `);

   console.log("allLocProjects", JSON.stringify(allLocProjects, null, 4));

   allLocProjects.data.allPrismicLocations.edges.forEach(edge => {
      edge.node.data.locprojects.forEach(item => {
         createPage({
            path: `${edge.node.uid}/interiors/${item.theproject.document[0].uid}`,
            component: path.resolve("./src/components/ViewProject.js"),
            context: {
               id: item.theproject.document[0].id,
               uid: item.theproject.document[0].uid
            }
         });
      });
   });

   // projects.data.allPrismicProjects.edges.forEach(edge => {
   //    createPage({
   //       path: `${
   //          edge.node.data.location.document[0].data.title.text === "New York"
   //             ? "new-york"
   //             : "palm-beach"
   //       }/interiors/${edge.node.uid}`,
   //       //component: pageTemplates[edge.node.template],
   //       component: path.resolve("./src/components/ViewProject.js"),
   //       context: {
   //          id: edge.node.id,
   //          uid: edge.node.uid
   //       }
   //    });
   // });

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

      // individual project pages
      // edge.node.data.projects.forEach(({ project }) => {
      //    createPage({
      //       path: `${edge.node.uid}/interiors/${project.document[0].uid}`,
      //       component: path.resolve("./src/components/ViewProject.js"),
      //       context: {
      //          uid: project.document[0].uid
      //       }
      //    });
      // });
   });
};
