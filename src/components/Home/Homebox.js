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
      console.log("box moused over");
      this.setState(() => {
         return { isOver: true };
      });
   };

   handleBoxOut = () => {
      console.log("box moused out");
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
            onClick={() => this.props.handleBoxClick(this.props.url)}
         >
            <Img sizes={this.props.image} alt="" />
            <HomeInfo title={this.props.title} overClass={overClass} />

            <div className="homebtn" />
         </HomeboxDiv>
      );
   }
}

export default Homebox;
