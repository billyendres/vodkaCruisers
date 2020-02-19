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
          <TextWrap>
            <Fade top>
              <Header>Vodka Cruiser</Header>
            </Fade>
            <Fade bottom>
              <Text>Stay Colourful</Text>
            </Fade>
          </TextWrap>
          <Background src={background} alt={background} />
        </Wrap>
      </FadeIn>
    </Layout>
  );
};

export default HomePage;

const Wrap = styled.div`
  background-color: #243a76;
  position: relative;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Background = styled.img`
  top: 1rem;
  width: 100vw;
  height: 100vh;
  position: absolute;
  @media (max-width: 480px) {
    display: none;
  }
`;

const TextWrap = styled.div`
  margin-top: 40vh;
  position: absolute;
  z-index: 1;
`;

const Header = styled.h1`
  font-weight: 900;
  font-size: 3.5em;
  line-height: 120%;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 7rem;
  @media (min-width: 1750px) {
    font-size: 5em;
  }
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
  @media (min-width: 1750px) {
    font-size: 3em;
  }
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
