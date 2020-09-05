const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        react: path.resolve("./node_modules/react"),
      },
    },
  });
};

exports.onCreateNode = ({ node }) => {
  //console.log(node.internal.type);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
                  document {
                    ... on PrismicProjects {
                      id
                      uid
                    }
                  }
                }
              }

              rooms_list {
                room {
                  __typename
                  document {
                    ... on PrismicRoom {
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

  //console.log("allLocs", JSON.stringify(allLocs, null, 4));

  // make all the pages
  allLocs.data.allPrismicLocations.edges.forEach(edge => {
    //interiors index/lists
    createPage({
      path: `${edge.node.uid}/interiors`,
      component: path.resolve("./src/components/Interiors/Interiors.js"),
      context: {
        id: edge.node.id,
        uid: edge.node.uid,
        locuid: edge.node.uid
      }
    });

    //rooms index/lists
    createPage({
      path: `${edge.node.uid}/interiors/rooms`,
      component: path.resolve("./src/components/Interiors/Rooms.js"),
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
        path: `${edge.node.uid}/interiors/${item.theproject.document.uid}`,
        component: path.resolve("./src/components/Interiors/ViewProject.js"),
        context: {
          id: item.theproject.document.id,
          uid: item.theproject.document.uid,
          locuid: edge.node.uid
        }
      });
    });

    // each room page
    edge.node.data.rooms_list.forEach(item => {
      createPage({
        path: `${edge.node.uid}/interiors/room/${item.room.document.uid}`,
        component: path.resolve("./src/components/Interiors/ViewRoom.js"),
        context: {
          id: item.room.document.id,
          uid: item.room.document.uid,
          locuid: edge.node.uid
        }
      });
    });
  });
};
