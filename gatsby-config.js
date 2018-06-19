require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
   siteMetadata: {
      siteUrl: `https://www.letaaustinfoster.com`,
      title: "Leta Austin Foster and Associates • Interior Design | New York - Palm Beach"
   },
   plugins: [
      `gatsby-plugin-react-next`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-sitemap`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: "gatsby-source-prismic",
         options: {
            repositoryName: "stoutlabs-sandbox",
            accessToken: `${process.env.API_KEY}`,
            linkResolver: ({ node, key, value }) => doc => {
               //console.log("doc:", doc);
               // Your link resolver
               //if (doc.type === "theproject") return "/project/" + doc.uid;
               //if (doc.type === "page") return "/" + doc.uid;
               // Fallback for other types, in case new custom types get created
               return "/doc/" + doc.id;
            },
            htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {
               //  switch (type) {
               //    // Add a class to paragraph elements
               //    case Elements.paragraph:
               //      return '<p class="paragraph-class">' + children.join('') + '</p>'
               //    // Don't wrap images in a <p> tag
               //    case Elements.image:
               //      return '<img src="' + element.url + '" alt="' + element.alt + '">'
               //    // Add a class to hyperlinks
               //    case Elements.hyperlink:
               //      var target = element.data.target
               //        ? 'target="' + element.data.target + '" rel="noopener"'
               //        : ''
               //      var linkUrl = PrismicDOM.Link.url(element.data, linkResolver)
               //      return (
               //        '<a class="some-link"' +
               //        target +
               //        ' href="' +
               //        linkUrl +
               //        '">' +
               //        content +
               //        '</a>'
               //      )
               //    // Return null to stick with the default behavior for all other elements
               //    default:
               //      return null
               //  }
            }
         }
      },
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            trackingId: `UA-1076375-35`,
            // Puts tracking script in the head instead of the body
            head: false
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
