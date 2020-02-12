import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import posed from "react-pose";
import background from "../../components/Layout/products/images/background.png";
import bottles from "../../components/Layout/products/images/bottles.png";
import Layout from "../../components/Layout/products/productsOne";
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

const ProductsPage = () => {
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
                ZERO
                <Link to="/products/two">
                  <Icon path={mdiChevronRight} size={2} color="white" />
                </Link>
              </Fade>
            </Nav>
            <Fade top>
              <Header>Sugar Free</Header>
            </Fade>
          </TextWrap>
          <BodyWrap>
            <Fade top>
              <Body>
                Vodka Cruiser Sugar Free has enhanced the alcoholic beverage by
                combining genuine triple distilled vodka & Vodka Cruiser famous
                great taste with a sugar free formulation. Available in 3
                exciting flavours, Cruiser Sugar Free is the answer for those
                who look to balance great times with well being. With less than
                100 calories per serving & natural flavours, Cruiser Sugar Free
                is giving women what they want.
              </Body>
            </Fade>
          </BodyWrap>
          <Box>
            <Fade bottom>
              <Bottles src={bottles} alt={bottles} />
            </Fade>
          </Box>
        </Wrap>
      </FadeIn>
    </Layout>
  );
};

export default ProductsPage;

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
  margin: 0 10rem;
  @media (max-width: 820px) {
    margin: 0 5rem;
  }
  @media (max-width: 560px) {
    margin: 0 3rem;
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
