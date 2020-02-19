import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../Layout/BurgerMenu";

const Menu = ({ open }) => {
  return (
    <Layout>
      <StyledMenu open={open}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Text>Home</Text>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Text>About</Text>
        </Link>
        <Link to="/products/one" style={{ textDecoration: "none" }}>
          <Text>Products</Text>
        </Link>
        <Link to="/promotions/one" style={{ textDecoration: "none" }}>
          <Text>Promotions</Text>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Text>Contact</Text>
        </Link>
      </StyledMenu>
    </Layout>
  );
};

export default Menu;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ffff;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  min-height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  text-decoration: none;
`;

const Text = styled.div`
  font-size: 1.5em;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: black;
  text-decoration: none;
  transition: color 0.3s linear;
  text-align: center;
  font-family: "Avenir" sans-serif;
  border: none;
`;
