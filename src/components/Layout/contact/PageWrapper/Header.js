import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../images/logo.svg";
import BurgerMenu from "../../../BurgerMenu";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Wrap>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Text style={{ marginLeft: "10rem" }}>About</Text>
        </Link>
        <Link to="/products/one" style={{ textDecoration: "none" }}>
          <Text>Products</Text>
        </Link>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Logo src={logo} alt={logo} />
        </Link>
        <Link to="/promotions/one" style={{ textDecoration: "none" }}>
          <Text>Promotions</Text>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Text style={{ marginRight: "10rem" }}>Contact</Text>
        </Link>
      </Wrap>
      <BurgerWrap>
        <BurgerMenu />
      </BurgerWrap>
    </div>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  top: 0;
  width: 100vw;
  left: 0;
  background-color: white;
  position: fixed;
  z-index: 1;
  @media (max-width: 830px) {
    height: 3rem;
  }
`;

const Text = styled.span`
  color: #006838;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 900;
  font-size: 0.7em;
  line-height: 120%;
  letter-spacing: 0.1em;
  @media (max-width: 860px) {
    display: none;
  }
`;

const BurgerWrap = styled.div`
  @media (min-width: 860px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 8rem;
  @media (max-width: 830px) {
    width: 6rem;
  }
`;
