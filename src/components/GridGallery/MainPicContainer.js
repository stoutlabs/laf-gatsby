import React, { Component } from "react";
import Img from "gatsby-image";
import ReactCSSTransitionReplace from "react-css-transition-replace";

export const MainPicContainer = ({ item }) => {
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
          position="absolute"
          key={item.id}
          style={{ maxHeight: "70vh" }}
          imgStyle={{
            maxWidth: "100%",
            width: "100%",
            objectFit: "contain"
          }}
          alt=""
          className="gallery-mainpic-pic"
        />
      </ReactCSSTransitionReplace>
    </div>
  );
};

export default MainPicContainer;
