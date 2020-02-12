import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./PageWrapper/Header";
import Footer from "./PageWrapper/Footer";
import SideBar from "./PageWrapper/Sidebar";

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <GlobalStyle />
      <SideBar />
      <div>{children}</div>
      <Footer />
    </Wrap>
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
    background: #FFFF;
    position: relative;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    font-size: 1rem;
    font-family: Avenir;
}`;

const Wrap = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 3rem;
`;
