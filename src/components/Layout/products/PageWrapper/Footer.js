import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrap>
      <Text style={{ marginLeft: "3rem", fontWeight: "500" }}>
        ©2020 Vodka Cruiser. All Rights reserved.
      </Text>
      <div>
        <Link to="terms" style={{ textDecoration: "none" }}>
          <Text>Terms & Conditions</Text>
        </Link>

        <Link to="faqs" style={{ textDecoration: "none" }}>
          <Text style={{ marginLeft: "0.5rem", marginRight: "3rem" }}>
            FAQS
          </Text>
        </Link>
      </div>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  width: 100vw;
  background-color: white;
  @media (max-width: 830px) {
    height: 2rem;
  }
`;

const Text = styled.span`
  color: #3c3c3c;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 900;
  font-size: 0.7em;
  line-height: 120%;
  letter-spacing: 0.1em;
  @media (max-width: 720px) {
    font-size: 0.5rem;
  }
  @media (max-width: 580px) {
    font-size: 0.25rem;
  }
`;
