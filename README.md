# laf-gatsby

Upcoming LetaAustinFoster.com website upgrade to JAMstack tech. I am sharing the full source here in hopes that it can help others looking to create similar websites! I am fully aware that the code is a bit messy (read: dumpster fire-ish) in places, so I apologize in advance.

-  Built with Gatsby, Styled Components, a sprinkling of Bulma, and a tiny bit of redux
-  Features a custom React thumbnail gallery component, which makes use of react-css-transition-replace and gatsby-image. (I couldn't find an existing one that did what I wanted, so I built my own.)
-  Uses Prismic.io to provide content
-  Hosted/deployed via Netlify.com (with continuous integration)

---

### Currently:

-  Working on SEO stuff (Meta tags, OG tags, etc... likely implementing via helmet.)
-  Finalizing continuous integration. (Currently only rebuilds on git push. Prismic webhook purposefully left out until the very end.)

---

#### Sidenote:

-  I will post the Prismic JSON schemas here when everything is finalized.

-  I apologize for the lack of PropTypes. I plan to start implementing them soon, though!

-  _**Confession:** I'm new to the neighborhood. I just recently moved here from the strange/antiquated land of PHP. The land of JS is wonderful, though... and I have no plans to go back!_
