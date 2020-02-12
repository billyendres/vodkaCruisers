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
    background: #eeeeee;
    position: relative;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-size: 1rem;
    font-family: Avenir;

    @media (min-width: 2000px) {
      font-size: 1.6rem;
    }
    @media (max-width: 1800px) {
      font-size: 1.3rem;
    }
     @media (max-width: 1480px) {
      font-size: 1.1rem;
    } 
    @media (max-width: 980px) {
      font-size: 0.9rem;
    }
    @media (max-width: 830px) {
        font-size: 0.8rem;
    }
    @media (max-width: 630px) {
        font-size: 0.7rem;
    }
    @media (max-width: 480px) {
        font-size: 0.65rem;
    }
    @media (max-width: 420px) {
        font-size: 0.60rem;
    }
}`;

const Wrap = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 3rem;
`;
