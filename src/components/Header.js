import Logo from "../assets/laf_logo_2018.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Nav from "./Nav";
import HamburgerBtn from "./HamburgerBtn";

const StyledHeader = styled.header`
   padding: 0;
   text-align: center;

   @media screen and (min-width: 768px) {
      padding: 0.7rem 0 0;
      height: 140px;
   }

   div.logo {
      margin: 0 auto;
      padding: 0;
      transition: opacity 300ms ease-out 0ms, visibility 0ms linear 0ms, display 0ms linear 0ms;
      max-width: 210px;

      &.a {
         display: block;
      }
   }

   &.home {
      height: auto;

      @media screen and (min-width: 768px) {
         padding: 0;
         height: 140px;
      }

      div.logo {
         opacity: 0;
         visibility: hidden;
         display: none;
         transition: opacity 300ms ease-out 0ms, visibility 0ms linear 300ms,
            display 0ms linear 300ms;

         @media screen and (min-width: 768px) {
            display: block;
            transition: opacity 300ms ease-out 0ms, visibility 0ms linear 300ms;
         }
      }

      nav {
         opacity: 0;
         visibility: hidden;
         display: none;
         transition: opacity 300ms ease-out 0ms, visibility 0ms linear 300ms;
      }
   }
`;

const NavOverlay = styled.div`
   width: 100vw;
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 90;
   background-color: #333;
   visibility: hidden;
   opacity: 0.01;
   transition: visibility 0ms linear 300ms, opacity 250ms ease-in;

   &.show {
      visibility: visible;
      opacity: 0.7;
      transition-delay: 0ms;
   }
`;

export class Header extends Component {
   state = { navActive: false };

   showNav = () => {
      this.setState(() => {
         return { navActive: true };
      });
   };

   hideNav = () => {
      this.setState(() => {
         return { navActive: false };
      });
   };

   render() {
      const loc = this.props.location.pathname.slice(1);
      const locStyle = loc === "" ? "home" : "";

      return (
         <StyledHeader className={locStyle}>
            <div className="logo">
               <Link to="/">
                  <img src={Logo} alt="LAF - logo" />
               </Link>
            </div>
            <HamburgerBtn
               showNav={this.showNav}
               navActive={this.state.navActive}
               location={this.props.location}
            />
            <Nav status={this.state.navActive ? "show" : "hide"} hideNav={this.hideNav} />
            <NavOverlay className={this.state.navActive ? "show" : "hide"} onClick={this.hideNav} />
         </StyledHeader>
      );
   }
}

export default Header;
