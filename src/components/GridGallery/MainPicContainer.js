import React, { Component } from "react";
import Img from "gatsby-image";
import ReactCSSTransitionReplace from "react-css-transition-replace";

export class MainPicContainer extends Component {
   render() {
      const item = this.props.item;

      return (
         <div id="mainpic">
            <ReactCSSTransitionReplace
               className="fader"
               transitionName="mainpicfade"
               //transitionAppear={true}
               transitionEnterTimeout={1300}
               transitionLeaveTimeout={600}
            >
               <Img
                  sizes={item.sizes}
                  //srcSet={item.sizes.srcSet}
                  //src={item.sizes.src}
                  //className="the-pic"
                  //outerWrapperClassName="pic-outer"
                  position="absolute"
                  key={item.id}
                  style={{ maxHeight: "70vh" }}
                  imgStyle={{
                     //maxHeight: "70vh",
                     maxWidth: "100%",
                     width: "100%",
                     objectFit: "contain"
                  }}
                  alt=""
                  className="gallery-mainpic-pic"
                  onClick={() => console.log("test")}
               />
            </ReactCSSTransitionReplace>
         </div>
      );
   }
}

export default MainPicContainer;
