require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const aboutSchema = require("./src/schemas/about.json");
const contactSchema = require("./src/schemas/contact.json");
const homepageSchema = require("./src/schemas/home.json");
const locationSchema = require("./src/schemas/locations.json");
const pbBoutiqueSchema = require("./src/schemas/pbboutique.json");
const pressSchema = require("./src/schemas/press.json");
const projectSchema = require("./src/schemas/projects.json");
const roomSchema = require("./src/schemas/room.json");

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.letaaustinfoster.com`,
    title: "Leta Austin Foster and Associates • Interior Design | New York - Palm Beach"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`)
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "stoutlabs-sandbox",
        accessToken: `${process.env.API_KEY}`,
        schemas: {
          home_page: homepageSchema,
          about_page: aboutSchema,
          contact_page: contactSchema,
          locations: locationSchema,
          pb_boutique: pbBoutiqueSchema,
          press: pressSchema,
          projects: projectSchema,
          room: roomSchema,
        },
        // eslint-disable-next-line
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },
        fetchLinks: [
          // Your list of links
        ],
        // eslint-disable-next-line
        htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {
          // Your HTML serializer
        },
        lang: "*",
        // eslint-disable-next-line
        // shouldNormalizeImage: ({ node, key, value }) => true,
        shouldDownloadImage: ({ node, key, value }) => true,
        typePathsFilenamePrefix: "prismic-typepaths-laf",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1076375-35`,
        // Puts tracking script in the head instead of the body
        head: true
        // Setting this parameter is optional
        //anonymize: true,
        // Setting this parameter is also optional
        //respectDNT: true,
        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
      }
    },
    `gatsby-plugin-netlify`
  ]
};
