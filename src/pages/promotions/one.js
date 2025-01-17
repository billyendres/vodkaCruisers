import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout/promotions/promotionsThree";
import backgroundIcons from "../../components/Layout/promotions/images/backgroundIcons.png";
import FadeIn from "react-fade-in";
import Fade from "react-reveal/Fade";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";

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
      query PromotionsPageOneQuery {
        craft {
          entries {
            ... on Craft_promotionsPages_promotionsPages_Entry {
              pageOneContentBlockOne
              pageOneContentBlockTwo
              pageOneContentBlockThree
              pageOneImageOne {
                url
              }
              pageOneImageTwo {
                url
              }
              pageOneImageThree {
                url
              }
            }
          }
        }
      }
    `}
    render={({ craft }) => {
      const promotionsPageOne = craft.entries[0];
      const {
        pageOneContentBlockOne,
        pageOneContentBlockTwo,
        pageOneContentBlockThree,
      } = promotionsPageOne;
      return (
        <Layout>
          <FadeIn>
            <Background src={backgroundIcons} alt={backgroundIcons} />
            <Wrap>
              <div style={{ position: "absolute", top: "50%", left: "-1rem" }}>
                <Link to="/promotions/three">
                  <Icon path={mdiChevronLeft} size={4} color="white" />
                </Link>
              </div>
              <ImageWrap>
                <Link to="/promotions/three">
                  <Box style={{ display: "inline-block" }}>
                    <Fade left>
                      <BottleWrapOne>
                        <BottlesOne
                          src={craft.entries[0].pageOneImageOne[0].url}
                          alt={craft.entries[0].pageOneImageOne[0].url}
                        />
                        <BottleText>{pageOneContentBlockOne}</BottleText>
                      </BottleWrapOne>
                    </Fade>
                  </Box>
                </Link>
                <Link to="/promotions/two">
                  <Box style={{ display: "inline-block" }}>
                    <Fade bottom>
                      <BottleWrapTwo>
                        <BottlesTwo
                          src={craft.entries[0].pageOneImageTwo[0].url}
                          alt={craft.entries[0].pageOneImageTwo[0].url}
                        />
                        <BottleText>{pageOneContentBlockTwo}</BottleText>
                      </BottleWrapTwo>
                    </Fade>
                  </Box>
                </Link>
                <Link to="/promotions/four">
                  <Box style={{ display: "inline-block" }}>
                    <Fade right>
                      <BottleWrapThree>
                        <BottlesThree
                          src={craft.entries[0].pageOneImageThree[0].url}
                          alt={craft.entries[0].pageOneImageThree[0].url}
                        />
                        <BottleText>{pageOneContentBlockThree}</BottleText>
                      </BottleWrapThree>
                    </Fade>
                  </Box>
                </Link>
              </ImageWrap>
              <div style={{ position: "absolute", top: "50%", right: "-1rem" }}>
                <Link to="/promotions/two">
                  <Icon path={mdiChevronRight} size={4} color="white" />
                </Link>
              </div>
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
  @media (max-width: 860px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

const Background = styled.img`
  width: 100%;
  height: 83.5vh;
  margin-top: 3rem;
  position: absolute;
  left: 0;
`;

const ImageWrap = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
  margin-left: 4rem;
  margin-right: 4rem;
  @media (max-width: 860px) {
    margin-top: 5rem;
  }
`;

const BottleText = styled.div`
  font-weight: 900;
  font-size: 1.75rem;
  margin-top: 2rem;
  padding: 0 1rem;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffff;
  @media (max-width: 860px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1880px) {
    font-size: 2.25rem;
  }
`;

const BottleWrapOne = styled.div`
  width: 18rem;
  height: 28rem;
  background: #72bf44;
  margin: 1.5rem 0;
  border: 10px solid #ffff;
  @media (max-width: 860px) {
    width: 15rem;
    height: 21rem;
    border: 5px solid #ffff;
  }
  @media (min-width: 1880px) {
    width: 25rem;
    height: 40rem;
  }
`;

const BottleWrapTwo = styled.div`
  width: 18rem;
  height: 28rem;
  margin: 1rem 1.5rem;
  background: #8f499c;
  border: 10px solid #ffff;
  @media (max-width: 860px) {
    width: 15rem;
    height: 21rem;
    border: 5px solid #ffff;
  }
  @media (min-width: 1880px) {
    width: 25rem;
    height: 40rem;
  }
`;

const BottleWrapThree = styled.div`
  width: 18rem;
  height: 28rem;
  background: #0082c6;
  margin: 1.5rem 0;
  border: 10px solid #ffff;
  @media (max-width: 860px) {
    width: 15rem;
    height: 21rem;
    border: 5px solid #ffff;
  }
  @media (min-width: 1880px) {
    width: 25rem;
    height: 40rem;
  }
`;

const BottlesOne = styled.img`
  width: 8rem;
  margin-top: 30%;
  @media (max-width: 860px) {
    width: 6rem;
    margin-top: 20%;
  }
  @media (min-width: 1880px) {
    width: 12rem;
  }
`;

const BottlesTwo = styled.img`
  width: 8rem;
  margin-top: 30%;
  @media (max-width: 860px) {
    width: 6rem;
    margin-top: 20%;
  }
  @media (min-width: 1880px) {
    width: 12rem;
  }
`;

const BottlesThree = styled.img`
  width: 8rem;
  margin-top: 30%;
  @media (max-width: 860px) {
    width: 6rem;
    margin-top: 20%;
  }
  @media (min-width: 1880px) {
    width: 12rem;
  }
`;
