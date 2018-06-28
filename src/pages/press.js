import React, { Fragment } from "react";
import Press from "../components/Press/Press";

const PressPage = props => (
   <Fragment>
      <Press content={props.data.prismicPress.data} history={props.history} />
   </Fragment>
);

export default PressPage;

export const query = graphql`
   query PressPageQuery {
      prismicPress {
         data {
            title {
               text
            }

            intro {
               html
            }

            press_links {
               title1
               date(formatString: "MMMM Do, YYYY")
               file_link {
                  url
               }
            }
         }
      }
   }
`;
