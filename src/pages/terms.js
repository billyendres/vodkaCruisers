import React from "react";
import Layout from "../components/Layout/terms";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import Flip from "react-reveal/Flip";

const TermsAndConditions = () => {
  return (
    <Layout>
      <FadeIn>
        <Wrap>
          <Flip top>
            <Header>Website Terms of Use</Header>
          </Flip>
          <Flip top>
            <Body>
              <p>
                These Terms of Use set out the terms on which you use the
                website of Asahi Premium Beverages or the Asahi Australia Group
                (the “Site”).
              </p>
              By accessing and using the Site, you accept that all of these
              Terms of Use apply.
              <p>
                If you do not agree and accept that all of these Terms of Use
                apply to your use of the Site, please exit the Site immediately
                and refrain from using the Site in the future. These Terms of
                Use should be read together with our Privacy Policy, which
                explains how we collect, use, disclose and manage your personal
                information.
              </p>
              1. Some useful definitions In these Terms of Use: Including means
              “including, but not limited to” Asahi Premium Beverages means
              Asahi Premium Beverages Pty Ltd ACN 077 568 480 of Level 4, 99
              Coventry Street, South Melbourne VIC 3205 Australia Asahi
              Australia Group means any direct or indirect parent, subsidiary,
              or sponsor or an “Associated Entity” of Asahi Premium Beverages
              (as that term is defined under the Corporations Act 2001 (Cth) 2.
              Your use of the Site
            </Body>
          </Flip>
        </Wrap>
      </FadeIn>
    </Layout>
  );
};

export default TermsAndConditions;

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
  margin-bottom: 0;
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
