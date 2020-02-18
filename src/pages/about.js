import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/about";
import styled from "styled-components";
import deck from "./images/deck.png";
import FadeIn from "react-fade-in";
import Bounce from "react-reveal/Bounce";

export default () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        craft {
          entries {
            ... on Craft_about_about_Entry {
              id
              aboutPageContent
              title
            }
          }
        }
      }
    `}
    render={({ craft }) => {
      // console.log(craft.entries[0]);
      const aboutPage = craft.entries[1];
      const { title, aboutPageContent } = aboutPage;
      return (
        <Layout>
          <FadeIn>
            <Wrap>
              <Bounce top>
                <Header>{title}</Header>
              </Bounce>
              <Bounce top>
                <Paragraph>{aboutPageContent}</Paragraph>
              </Bounce>
              <Bounce bottom>
                <Image src={deck} alt={deck} />
              </Bounce>
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
