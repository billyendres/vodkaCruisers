import React from "react";
import Layout from "../components/Layout/about";
import styled from "styled-components";
import deck from "./images/deck.png";
import FadeIn from "react-fade-in";
import Bounce from "react-reveal/Bounce";

const AboutPage = () => {
  return (
    <Layout>
      <FadeIn>
        <Wrap>
          <Bounce top>
            <Header>About Us</Header>
          </Bounce>
          <Bounce top>
            <Paragraph>
              Vodka Cruiser has eight flavours within its core range, Wild
              Raspberry, Pure Pineapple, Lush Guava, Zesty Lemon-Line, Sunny
              Orange Passion fruit, Bold Berry Blend, Ripe Strawberry and Juicy
              Watermelon – the fruit inspired colours indicate their strong
              flavour credentials. Vodka Cruiser’s range contains less sugar
              than previous ranges whilst maintaining the same level of quality
              of taste. Vodka Cruisers recent packaging update showcases clean,
              modern and transparent labels denoting each flavours ‘character’
              description, unique flavour symbol and the “Premium Triple
              Distilled Vodka” signature. Vodka Cruiser “The flavour Of Life”!
            </Paragraph>
          </Bounce>
          <Bounce bottom>
            <Image src={deck} alt={deck} />
          </Bounce>
        </Wrap>
      </FadeIn>
    </Layout>
  );
};

export default AboutPage;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  background: #eeeeee;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
`;

const Header = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 2.75em;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.02rem;
  color: #5c2d91;
  margin-top: 7rem;
  margin-bottom: 0;
`;

const Paragraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  line-height: 150%;
  letter-spacing: 0.05em;
  color: #2c004b;
  padding-left: 3em;
  padding-right: 3em;

  @media (max-width: 830px) {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
  @media (max-width: 630px) {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

const Image = styled.img`
  height: 8em;
  margin-bottom: 2rem;
`;
