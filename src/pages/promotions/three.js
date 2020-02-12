import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import FadeIn from "react-fade-in";
import Layout from "../../components/Layout/promotions/promotionsPurple";
import backgroundPurple from "../../components/Layout/promotions/images/backgroundPurple.png";
import LightSpeed from "react-reveal/LightSpeed";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";

const PromotionsPage = () => {
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
                Cruiser Indies Summer
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
                <BlockHeader>Promotion Period</BlockHeader>
                <BlockBody>9.00am 01/9/19 - 11:59pm 30/11/19</BlockBody>
              </LightSpeed>
            </Block>
            <Block>
              <LightSpeed>
                <BlockHeader>Relevant States</BlockHeader>
                <BlockBody>NSW, ACT, SA, NT, QLD, VIC, TAS, WA</BlockBody>
              </LightSpeed>
            </Block>
            <OverFlow>
              <LightSpeed right>
                <OverflowText>
                  Entrants/Claimants: Entry to the Promotion is open only to
                  Australian residents during the Promotion Period, aged 18
                  years + and who fulfil the claim requirements. <p />
                  Entry Restrictions: Must be aged 18 years + Directors,
                  management, employees, officers and contractors (and their
                  immediate families) of the Promoter, of any Participating
                  Store or of the agencies or companies associated with this
                  Promotion are ineligible. <p />
                  “Immediate families” means spouse, partner, parent, natural or
                  adopted child, and sibling (whether natural or adopted by a
                  parent), whether or not they live in the same household as the
                  director, manager, employee, officer or contractor.
                  Participating Stores: Bottle –O, IGA Liquor, Cellarbrations
                  and Big Bargain in the Relevant States
                </OverflowText>
              </LightSpeed>
            </OverFlow>
          </TextWrap>
        </Wrap>
      </FadeIn>
    </Layout>
  );
};

export default PromotionsPage;

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
