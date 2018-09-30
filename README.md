# LetaAustinFoster.com - Gatsby Website

Source code for the 2018 update of LetaAustinFoster.com. I am sharing the full source here in hopes that it might help others looking to create similar websites!

- Built with [GatsbyJS v2](http://www.gatsbyjs.org), Styled Components, a sprinkling of Bulma, and a tiny usage of the React Context API
- Features a custom thumbnail gallery component, which makes use of react-css-transition-replace and gatsby-image. (I couldn't find an existing one that did what I wanted, so I built my own.)
- Uses [react-pose](https://popmotion.io/pose/) for page transitions. (I'll probably swap over the transitions in the gallery to use Pose as well.)
- Uses [Prismic.io](https://prismic.io/) to provide content as a headless CMS
- Hosted/deployed via [Netlify.com](https://netlify.com/) (with continuous integration and branch previews!)

---

#### To-Do List:

- Use Kyle Mathew's [typefaces](https://github.com/KyleAMathews/typefaces) library to load font(s) locally... which should shave more load time off
- Possibly creating a Gatsby plugin/npm package from the 'thumbnail gallery' component I have built

---

#### Prismic JSON Schemas

I will post these soon! (Once the site goes live.)
