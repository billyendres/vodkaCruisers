import React from "react";
import styled from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";
import FadeIn from "react-fade-in";
import Layout from "../../components/Layout/promotions/promotionsPurple";
import backgroundPurple from "../../components/Layout/promotions/images/backgroundPurple.png";
import LightSpeed from "react-reveal/LightSpeed";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";

export default () => (
  <StaticQuery
    query={graphql`
      query PromotionsThreeQuery {
        craft {
          entries {
            ... on Craft_promotionsThree_promotionsThree_Entry {
              id
              blockOneText
              blockOneTitle
              blockTwoText
              blockTwoTitle
              title
              promotionsThreeContent
            }
          }
        }
      }
    `}
    render={({ craft }) => {
      const promotionsPageThree = craft.entries[1];
      const {
        blockOneText,
        blockOneTitle,
        blockTwoText,
        blockTwoTitle,
        title,
        promotionsThreeContent,
      } = promotionsPageThree;
      return (
        <Layout>
          <FadeIn>
            <Wrap>
              <Background src={backgroundPurple} alt={backgroundPurple} />
              <TextWrap>
                <LightSpeed left>
                  <Header>
                    <Link to="/promotions/two">
                      <Icon
                        path={mdiChevronLeft}
                        size={2}
                        color="white"
                        style={{ marginTop: "0.5rem" }}
                      />
                    </Link>
                    {title}
                    <Link to="/promotions/one">
                      <Icon
                        path={mdiChevronRight}
                        size={2}
                        color="white"
                        style={{ marginTop: "0.5rem" }}
                      />
                    </Link>
                  </Header>
                </LightSpeed>
                <Block>
                  <LightSpeed>
                    <BlockHeader>{blockOneTitle}</BlockHeader>
                    <BlockBody>{blockOneText}</BlockBody>
                  </LightSpeed>
                </Block>
                <Block>
                  <LightSpeed>
                    <BlockHeader>{blockTwoTitle}</BlockHeader>
                    <BlockBody>{blockTwoText}</BlockBody>
                  </LightSpeed>
                </Block>
                <OverFlow>
                  <LightSpeed right>
                    <OverflowText>{promotionsThreeContent}</OverflowText>
                  </LightSpeed>
                </OverFlow>
              </TextWrap>
            </Wrap>
          </FadeIn>
        </Layout>
      );
    }}
  />
);

const Wrap = styled.div`
  display: flex;
`;

const Background = styled.img`
  width: 47%;
  height: 84.5vh;
  margin-top: 4rem;
  @media (max-width: 980px) {
    display: none;
  }
`;

const TextWrap = styled.div`
  width: 100%;
  margin-right: 8rem;
  @media (max-width: 980px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }
`;

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  font-weight: 900;
  font-size: 2em;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #ffffff;
  @media (min-width: 2480px) {
    font-size: 5rem;
  }
`;

const Block = styled.div`
  background: #5c2d91;
  display: inline-block;
  align-items: center;
  margin: 0.5rem 0.5rem;
  padding: 0.5rem 1rem;
`;

const BlockHeader = styled.h3`
  font-weight: 800;
  font-size: 0.8em;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin: 0;
  margin-bottom: 0.25rem;
  @media (min-width: 2480px) {
    font-size: 1.5rem;
  }
`;

const BlockBody = styled.h4`
  font-weight: 500;
  font-size: 0.6em;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
`;

const OverFlow = styled.div`
  overflow: auto;
  max-height: 40%;
  position: fixed;
  margin-right: 10%;
  padding-top: 1rem;
`;

const OverflowText = styled.div`
  padding: 1rem;
  color: #ffff;
  text-align: left;
  @media (min-width: 2480px) {
    font-size: 1.5rem;
  }
`;
