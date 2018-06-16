import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import HomeInfo from "./HomeInfo";

const HomeboxDiv = styled.div`
   height: 100%;
   cursor: pointer;

   div.homebtn {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
   }
`;

export class Homebox extends Component {
   state = { isOver: false };

   handleBoxOver = () => {
      this.setState(() => {
         return { isOver: true };
      });
   };

   handleBoxOut = () => {
      this.setState(() => {
         return { isOver: false };
      });
   };

   render() {
      let overClass = this.state.isOver ? "over" : "";

      return (
         <HomeboxDiv
            className="homebox"
            onMouseEnter={this.handleBoxOver}
            onMouseLeave={this.handleBoxOut}
            onClick={() => this.props.handleBoxClick(this.props.url, this.props.locSlug)}
         >
            <Img
               sizes={this.props.image}
               outerWrapperClassName={"homebox-pic-outer-wrapper"}
               style={{ height: "100%" }}
               imgStyle={{
                  objectFit: "cover",
                  width: "100%"
               }}
               alt=""
            />
            <HomeInfo title={this.props.title} overClass={overClass} />

            <div className="homebtn" />
         </HomeboxDiv>
      );
   }
}

export default Homebox;
