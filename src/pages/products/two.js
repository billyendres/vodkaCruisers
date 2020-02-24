import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import posed from "react-pose";
import background from "../../components/Layout/products/images/backgroundTwo.png";
import Layout from "../../components/Layout/products/productsTwo";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";
import FadeIn from "react-fade-in";
import Fade from "react-reveal/Fade";
import Markdown from "markdown-to-jsx";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  press: {
    scale: 1.1,
  },
});

export default () => (
  <StaticQuery
    query={graphql`
      query ProductsTwoQuery {
        craft {
          entries {
            ... on Craft_productsTwo_productsTwo_Entry {
              id
              descriptionProductsTwo
              title
              headerProductsTwo
              bottleImgTwo {
                url
              }
            }
          }
        }
      }
    `}
    render={({ craft }) => {
      const productsPageTwo = craft.entries[6];
      const {
        title,
        descriptionProductsTwo,
        headerProductsTwo,
      } = productsPageTwo;
      const image = craft.entries[6].bottleImgTwo[0];
      const { url } = image;
      return (
        <Layout>
          <FadeIn>
            <Background src={background} alt={background} />
            <Wrap>
              <TextWrap>
                <Nav>
                  <Fade left>
                    <Link to="/products/one">
                      <Icon path={mdiChevronLeft} size={2} color="white" />
                    </Link>
                    {title}
                    <Link to="/products/three">
                      <Icon path={mdiChevronRight} size={2} color="white" />
                    </Link>
                  </Fade>
                </Nav>
                <Fade left>
                  <Header>{headerProductsTwo}</Header>
                </Fade>
              </TextWrap>
              <BodyWrap>
                <Fade left>
                  <Body>
                    <Markdown>{descriptionProductsTwo}</Markdown>
                  </Body>
                </Fade>
              </BodyWrap>
              <Box>
                <Fade right>
                  <Bottles src={url} alt={url} />
                </Fade>
              </Box>
            </Wrap>
          </FadeIn>
        </Layout>
      );
    }}
  />
);

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
  position: relative;
`;

const Background = styled.img`
  width: 100%;
  height: 94vh;
  margin-top: 3rem;
  position: absolute;
  left: 2%;
  top: -7vh;
  @media (max-width: 680px) {
    display: none;
  }
`;

const TextWrap = styled.div`
  width: 15rem;
  @media (min-width: 1480px) {
    width: 30rem;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.25em;
  line-height: 120%;
  color: #ffff;
  margin-top: 6rem;
  letter-spacing: 6px;
`;

const Header = styled.h1`
  font-weight: 800;
  font-size: 2.5em;
  line-height: 120%;
  color: #cbdb2a;
  margin-top: 1rem;
`;

const Body = styled.div`
  font-weight: 500;
  font-size: 1em;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #72bf44;
`;

const BodyWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 12rem;
  @media (max-width: 1000px) {
    margin: 0 8rem;
  }
  @media (max-width: 680px) {
    margin: 0;
  }
  @media (min-width: 2080px) {
    margin: 0 17rem;
  }
`;

const Bottles = styled.img`
  width: 28rem;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 820px) {
    width: 20rem;
  }
  @media (min-width: 2280px) {
    width: 35rem;
  }
`;
