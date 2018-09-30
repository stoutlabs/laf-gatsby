import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Link from "gatsby-link";

import HomeInfo from "./HomeInfo";

const HomeboxDiv = styled.div`
  background: #fefefe;
  border: 1px solid #ddd;
  border-width: 1px 0 1px 0;
  cursor: pointer;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row-reverse;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    margin-bottom: 0.6rem;
  }

  @media screen and (min-width: 768px) {
    height: 100%;
    border: none;
    padding: 0;

    &:first-child {
      margin-bottom: 0;
    }
  }

  div.pic-container {
    width: 250px;

    @media screen and (min-width: 768px) {
      height: 100%;
      width: 100%;
    }
  }

  div.homebox-pic-outer-wrapper {
    @media screen and (min-width: 768px) {
      height: 100%;
    }
  }

  div.homebtn {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;

    a {
      display: block;
      overflow: hidden;
      text-indent: -400px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
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
        onMouseEnter={this.handleBoxOver}
        onMouseLeave={this.handleBoxOut}
        onClick={() => this.props.handleBoxClick(this.props.locSlug, this.props.url)}
      >
        <div className="pic-container">
          <Img
            sizes={this.props.image}
            outerWrapperClassName={"homebox-pic-outer-wrapper"}
            style={{ height: "100%" }}
            imgStyle={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }}
            alt=""
          />
        </div>
        <HomeInfo title={this.props.title} overClass={overClass} />

        <div className="homebtn">
          <Link to={this.props.url}>{this.props.title}</Link>
        </div>
      </HomeboxDiv>
    );
  }
}

export default Homebox;
