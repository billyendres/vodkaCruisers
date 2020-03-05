import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout/promotions/promotionsThree";

export default () => {
  return (
    <Layout>
      <Wrap>
        {/* <Background src={img} alt={img} /> */}
        <Button>Enter Now</Button>
      </Wrap>
    </Layout>
  );
};

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
  width: 100vw;
  margin-top: 8vh;
  background-size: cover;
  @media (max-width: 830px) {
    margin-top: 5vh;
  }
`;

const Button = styled.button`
  background: #307dcf;
  color: #ffff;
  text-transform: uppercase;
  padding: 1rem 4rem;
  font-size: 1.5rem;
  position: absolute;
  border: none;
  outline: none;
  bottom: -5vh;
  border-radius: 3rem;
  :hover {
    background: #00f7ff;
  }
  @media (max-width: 830px) {
    font-size: 1rem;
    padding: 0.75rem 3rem;
    bottom: -3vh;
  }
`;
