import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/terms";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import Flip from "react-reveal/Flip";

export default () => (
  <StaticQuery
    query={graphql`
      query TermsQuery {
        craft {
          entries {
            ... on Craft_term_terms_Entry {
              id
              title
              termsPageContent
            }
          }
        }
      }
    `}
    render={({ craft }) => {
      const termsPage = craft.entries[8];
      const { title, termsPageContent } = termsPage;
      return (
        <Layout>
          <FadeIn>
            <Wrap>
              <Flip top>
                <Header>{title}</Header>
              </Flip>
              <Flip top>
                <Body>{termsPageContent}</Body>
              </Flip>
            </Wrap>
          </FadeIn>
        </Layout>
      );
    }}
  />
);

const Wrap = styled.div`
  min-height: 91vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background: #eeeeee;
  margin: 0 6rem;
  @media (max-width: 980px) {
    margin: 3rem 5rem;
  }
`;

const Header = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 3em;
  line-height: 120%;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
  color: #f15a22;
`;

const Body = styled.div`
  text-align: left;
  font-weight: 500;
  font-size: 1em;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #790000;
`;
