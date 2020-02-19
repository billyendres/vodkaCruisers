import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import Layout from "../components/Layout/home";
import background from "../components/Layout/home/images/background.png";
import Fade from "react-reveal/Fade";

const HomePage = () => {
  return (
    <Layout>
      <FadeIn>
        <Wrap>
          <div>
            <Fade top>
              <Header>Vodka Cruiser</Header>
            </Fade>
            <Fade bottom>
              <Text>Stay Colourful</Text>
            </Fade>
          </div>
          <Background src={background} alt={background} />
        </Wrap>
        <BottomWrap />
      </FadeIn>
    </Layout>
  );
};

export default HomePage;

const Wrap = styled.div`
  background-color: #243a76;
  position: relative;
  height: 94vh;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Background = styled.img`
  top: 4rem;
  width: 94%;
  height: 94%;
  position: absolute;
  @media (max-width: 830px) {
    top: 3rem;
  }
  @media (max-width: 680px) {
    display: none;
  }
`;

const Header = styled.h1`
  font-weight: 900;
  font-size: 3.5em;
  line-height: 120%;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 7rem;
  @media (max-width: 1350px) {
    font-size: 3em;
  }
  @media (max-width: 1160px) {
    font-size: 2.5em;
  }
  @media (max-width: 820px) {
    font-size: 2em;
  }
  @media (max-width: 680px) {
    font-size: 1.5em;
  }
`;

const Text = styled.h2`
  font-weight: 500;
  font-size: 2em;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffcb05;
  margin-top: -2rem;
  @media (max-width: 1350px) {
    font-size: 1.7em;
  }
  @media (max-width: 1160px) {
    font-size: 1.5em;
    margin-top: -1rem;
  }
  @media (max-width: 680px) {
    font-size: 1.25em;
  }
`;

const BottomWrap = styled.div`
  background: #ffff;
  position: fixed;
  height: 20vh;
  width: 100%;
`;
