import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import posed from "react-pose";
import background from "../../components/Layout/products/images/backgroundThree.png";
import bottles from "../../components/Layout/products/images/bottlesTwo.png";
import Layout from "../../components/Layout/products/productsThree";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";
import FadeIn from "react-fade-in";
import Fade from "react-reveal/Fade";

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
      query ProductsThreeQuery {
        craft {
          entries {
            ... on Craft_productsThree_productsThree_Entry {
              id
              descriptionProductsThree
              title
              headerProductsThree
            }
          }
        }
      }
    `}
    render={({ craft }) => {
      const productsPageThree = craft.entries[5];
      const {
        title,
        descriptionProductsThree,
        headerProductsThree,
      } = productsPageThree;
      return (
        <Layout>
          <FadeIn>
            <Background src={background} alt={background} />
            <Wrap>
              <TextWrap>
                <Nav>
                  <Fade right>
                    <Link to="/products/two">
                      <Icon path={mdiChevronLeft} size={2} color="white" />
                    </Link>
                    {title}
                    <Link to="/products/one">
                      <Icon path={mdiChevronRight} size={2} color="white" />
                    </Link>
                  </Fade>
                </Nav>
                <Fade right>
                  <Header>{headerProductsThree}</Header>
                </Fade>
              </TextWrap>
              <BodyWrap>
                <Fade right>
                  <Body>{descriptionProductsThree}</Body>
                </Fade>
              </BodyWrap>
              <Box>
                <Fade left>
                  <Bottles src={bottles} alt={bottles} />
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
  margin-top: 4rem;
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
  color: #f58220;
  margin-top: 1rem;
`;

const Body = styled.div`
  font-weight: 500;
  font-size: 1em;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffcd67;
`;

const BodyWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10rem;
  @media (max-width: 820px) {
    margin: 0 4rem;
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
