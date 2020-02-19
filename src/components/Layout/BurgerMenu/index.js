import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Avenir from "../fonts/AvenirLTStd.otf";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div>{children}</div>
    </>
  );
};

export default Layout;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
    *:before,
    *:after {
    box-sizing: border-box;
  }
  
  html, body {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    font-family: 'Avenir', sans-serif;
    @font-face {
    font-family: 'Avenir';
    src: url(${Avenir});
  }
}`;
