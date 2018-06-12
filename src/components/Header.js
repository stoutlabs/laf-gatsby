import Logo from "../assets/logo_top.png";
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
      height: 160px;
   }

   div.logo {
      padding: 0;
      transition: opacity 300ms ease-out 0ms, visibility 0ms linear 0ms;

      @media screen and (min-width: 768px) {
         padding: 0 0 1.2rem;
      }
   }

   &.home {
      div.logo {
         opacity: 0;
         visibility: hidden;
         transition: opacity 300ms ease-out 0ms, visibility 0ms linear 300ms;
      }

      nav {
         opacity: 0;
         visibility: hidden;
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
      this.setState(prevState => {
         return { navActive: true };
      });
   };

   hideNav = () => {
      this.setState(prevState => {
         return { navActive: false };
      });
   };

   render() {
      const loc = this.props.location.pathname.slice(1);
      //const loc = "test";
      const locStyle = loc === "" ? "home" : "";
      return (
         <StyledHeader className={locStyle}>
            <div className="logo">
               <Link to="/">
                  <img src={Logo} alt="LAF - logo" />
               </Link>
            </div>
            <HamburgerBtn showNav={this.showNav} navActive={this.state.navActive} />
            <Nav status={this.state.navActive ? "show" : "hide"} hideNav={this.hideNav} />
            <NavOverlay className={this.state.navActive ? "show" : "hide"} onClick={this.hideNav} />
         </StyledHeader>
      );
   }
}

export default Header;
