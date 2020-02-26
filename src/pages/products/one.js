import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import posed from "react-pose";
import background from "../../components/Layout/products/images/background.png";
import Layout from "../../components/Layout/products/productsOne";
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
      query ProductsPageOneQuery {
        craft {
          entries {
            ... on Craft_productsPages_productsPages_Entry {
              pageOneTitle
              pageOneHeader
              pageOneDescription
              pageOneImage {
                url
              }
            }
          }
        }
      }
    `}
    render={({ craft }) => {
      const productsPageOne = craft.entries[1];
      const {
        pageOneTitle,
        pageOneHeader,
        pageOneDescription,
      } = productsPageOne;
      const image = craft.entries[1].pageOneImage[0];
      const { url } = image;
      return (
        <Layout>
          <FadeIn>
            <Background src={background} alt={background} />
            <Wrap>
              <TextWrap>
                <Nav>
                  <Fade top>
                    <Link to="/products/three">
                      <Icon path={mdiChevronLeft} size={2} color="white" />
                    </Link>
                    {pageOneHeader}
                    <Link to="/products/two">
                      <Icon path={mdiChevronRight} size={2} color="white" />
                    </Link>
                  </Fade>
                </Nav>
                <Fade top>
                  <Header>{pageOneTitle}</Header>
                </Fade>
              </TextWrap>
              <BodyWrap>
                <Fade top>
                  <Body>
                    <Markdown>{pageOneDescription}</Markdown>
                  </Body>
                </Fade>
              </BodyWrap>
              <Box>
                <Fade bottom>
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
  height: 83.5vh;
  margin-top: 3rem;
  position: absolute;
  left: 2%;
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
  color: #44c8f5;
  margin-top: 1rem;
`;

const Body = styled.div`
  font-weight: 500;
  font-size: 1em;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #44c8f5;
`;

const BodyWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 11rem;
  @media (max-width: 820px) {
    margin: 0 4.5rem;
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
  margin-top: 3rem;

  @media (max-width: 820px) {
    width: 20rem;
  }
  @media (min-width: 2280px) {
    width: 35rem;
  }
`;
