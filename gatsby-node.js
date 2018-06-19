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

   // const locations = await graphql(`
   //    {
   //       allPrismicLocations {
   //          edges {
   //             node {
   //                id
   //                uid

   //                data {
   //                   title {
   //                      text
   //                   }
   //                }
   //             }
   //          }
   //       }
   //    }
   // `);

   const allLocs = await graphql(`
      {
         allPrismicLocations {
            edges {
               node {
                  id
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
                        }
                     }

                     rooms_list {
                        room {
                           __typename
                           ... on room {
                              document {
                                 id
                                 uid
                              }
                           }
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

   //console.log("allLocProjects", JSON.stringify(allLocProjects, null, 4));

   // make all the pages
   allLocs.data.allPrismicLocations.edges.forEach(edge => {
      //interiors index/lists
      createPage({
         path: `${edge.node.uid}/interiors`,
         component: path.resolve("./src/components/Interiors.js"),
         context: {
            id: edge.node.id,
            uid: edge.node.uid,
            locuid: edge.node.uid
         }
      });

      //rooms index/lists
      createPage({
         path: `${edge.node.uid}/interiors/rooms`,
         component: path.resolve("./src/components/Rooms.js"),
         context: {
            id: edge.node.id,
            uid: edge.node.uid,
            locuid: edge.node.uid
         }
      });

      //contact pages
      createPage({
         path: `${edge.node.uid}/contact`,
         component: path.resolve("./src/components/Contact/ContactPage.js"),
         context: {
            // id: edge.node.id,
            locationtitle: edge.node.data.title.text,
            locuid: edge.node.uid
         }
      });

      //about pages
      createPage({
         path: `${edge.node.uid}/about`,
         component: path.resolve("./src/components/About/AboutPage.js"),
         context: {
            // id: edge.node.id,
            locationtitle: edge.node.data.title.text,
            locuid: edge.node.uid
         }
      });

      // each project page
      edge.node.data.locprojects.forEach(item => {
         createPage({
            path: `${edge.node.uid}/interiors/${item.theproject.document[0].uid}`,
            component: path.resolve("./src/components/ViewProject.js"),
            context: {
               id: item.theproject.document[0].id,
               uid: item.theproject.document[0].uid,
               locuid: edge.node.uid
            }
         });
      });

      // each room page
      edge.node.data.rooms_list.forEach(item => {
         createPage({
            path: `${edge.node.uid}/interiors/room/${item.room.document[0].uid}`,
            component: path.resolve("./src/components/ViewRoom.js"),
            context: {
               id: item.room.document[0].id,
               uid: item.room.document[0].uid,
               locuid: edge.node.uid
            }
         });
      });
   });

   // These make all the location-specific pages (NY and Palm Beach)
   // locations.data.allPrismicLocations.edges.forEach(edge => {
   //    //interiors index/lists
   //    createPage({
   //       path: `${edge.node.uid}/interiors`,
   //       component: path.resolve("./src/components/Interiors.js"),
   //       context: {
   //          id: edge.node.id,
   //          uid: edge.node.uid,
   //          locuid: edge.node.uid
   //       }
   //    });

   //    //rooms index/lists
   //    createPage({
   //       path: `${edge.node.uid}/interiors/rooms`,
   //       component: path.resolve("./src/components/Rooms.js"),
   //       context: {
   //          id: edge.node.id,
   //          uid: edge.node.uid,
   //          locuid: edge.node.uid
   //       }
   //    });

   //    //contact pages
   //    createPage({
   //       path: `${edge.node.uid}/contact`,
   //       component: path.resolve("./src/components/Contact/ContactPage.js"),
   //       context: {
   //          // id: edge.node.id,
   //          location: edge.node.uid,
   //          locuid: edge.node.uid
   //       }
   //    });

   //    //about pages
   //    createPage({
   //       path: `${edge.node.uid}/about`,
   //       component: path.resolve("./src/components/About/AboutPage.js"),
   //       context: {
   //          // id: edge.node.id,
   //          location: edge.node.uid,
   //          locuid: edge.node.uid
   //       }
   //    });
   // });
};
