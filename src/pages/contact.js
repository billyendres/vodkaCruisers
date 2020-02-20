import React, { useState } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/contact";
import youtube from "../components/Layout/contact/images/youtube.svg";
import facebook from "../components/Layout/contact/images/facebook.svg";
import insta from "../components/Layout/contact/images/insta.svg";
import FadeIn from "react-fade-in";
import Zoom from "react-reveal/Zoom";

export default () => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
        craft {
          entries {
            ... on Craft_contact_contact_Entry {
              id
              contactBody
              contactMessage
              socials
              title
            }
          }
        }
      }
    `}
    render={({ craft }) => {
      const contactPage = craft.entries[0];
      const { contactMessage, socials, title, contactBody } = contactPage;

      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [query, setQuery] = useState("");
      const [dropdown, setDropdown] = useState("I am the first!");

      return (
        <Layout>
          <FadeIn>
            <div style={{ minHeight: "90vh" }}>
              <Wrap>
                <TextWrap>
                  <Zoom top>
                    <Header>{title}</Header>
                  </Zoom>
                  <Zoom top>
                    <Body>{contactBody}</Body>
                  </Zoom>
                </TextWrap>
              </Wrap>
              <Zoom bottom>
                <Line />
                <Message>{contactMessage}</Message>
              </Zoom>
              <InputWrap>
                <Zoom bottom>
                  <form>
                    <Input
                      type="text"
                      placeholder="First Name*"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Last Name*"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Your Email*"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <Select>
                      <Option
                        placeholder="Subject"
                        value={dropdown}
                        onChange={e => setDropdown(e.target.value)}
                      >
                        Subject
                      </Option>
                      {console.log(dropdown)}
                      <Option value="saab">One</Option>
                      <Option value="mercedes">Two</Option>
                      <Option value="audi">Three</Option>
                    </Select>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <InputLarge
                        type="text"
                        placeholder="I'd like to..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                      />
                    </div>
                  </form>
                </Zoom>
              </InputWrap>
              <Zoom bottom>
                <Button>Send</Button>
                <div style={{ marginTop: "1.5rem" }} />
                <Line />
                <Message>{socials}</Message>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Facebook src={facebook} alt={facebook} />
                  <Youtube src={youtube} alt={youtube} />
                  <Insta src={insta} alt={insta} />
                </div>
              </Zoom>
            </div>
          </FadeIn>
        </Layout>
      );
    }}
  />
);

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #eeeeee;
  height: 15rem;
  margin: 2rem 3rem;
  @media (max-width: 980px) {
    height: 17rem;
  }
  @media (max-width: 430px) {
    height: 20rem;
  }
  @media (max-width: 830px) {
    margin: 2rem 2rem;
  }
  @media (min-width: 1800px) {
    height: 25rem;
  }
`;

const TextWrap = styled.div`
  width: 80%;
`;

const Header = styled.h1`
  font-size: 2em;
  font-weight: 900;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #006838;
  margin-top: 3.5rem;
  @media (min-width: 1800px) {
    font-size: 2.25em;
  }
`;

const Body = styled.div`
  font-size: 0.9em;
  line-height: 150%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #003815;
`;

const Message = styled.div`
  font-weight: 900;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3c3c3c;
  display: inline-block;
  margin: 0 1.5rem;
  position: relative;
  background: #ffff;
  padding: 0 2rem;
  @media (min-width: 1800px) {
    font-size: 1.5rem;
  }
`;

const Line = styled.div`
  border-bottom: 2px solid black;
  width: 100%;
  margin-top: 0.75rem;
  position: absolute;
`;

const InputWrap = styled.div`
  margin-top: 5.5rem;
  margin-left: 6rem;
  margin-right: 6rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1203px) {
    margin-top: 7.5rem;
  }
  @media (max-width: 699px) {
    margin-top: 11rem;
  }
`;

const Input = styled.input`
  font-family: Avenir;
  padding: 0.45rem 1rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.1em;
  border-radius: 5px;
  text-transform: uppercase;
  color: #c6c6c6;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2px;
  outline: none;
  border: 1px solid #3c3c3c;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  font-family: Avenir;
  padding: 0.5rem 1rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.1em;
  background: #ffffff;
  color: #c6c6c6;
  outline: none;
  width: 13.85rem;
  height: 2.5rem;
  margin: 0 1rem;
  text-transform: uppercase;
  border: 1px solid #3c3c3c;
  margin-bottom: 2rem;
`;

const Option = styled.option``;

const InputLarge = styled.input`
  font-family: Avenir;
  padding: 0.45rem 1rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.1em;
  border-radius: 5px;
  color: #c6c6c6;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 4rem;
  width: 30rem;
  display: block;
  margin-top: 2px;
  outline: none;
  border: 1px solid #3c3c3c;
  @media (max-width: 1200px) {
    height: 5rem;
  }
  @media (max-width: 830px) {
    width: 15rem;
  }
`;

const Button = styled.button`
  background: #72bf44;
  border-radius: 5px;
  color: #ffff;
  width: 32.25rem;
  margin-top: 5.5rem;
  margin-left: 6rem;
  margin-right: 6rem;
  padding: 0.75rem 2rem;
  font-family: Avenir;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  outline: none;
  user-select: none;
  cursor: pointer;
  border: none;

  @media (max-width: 1203px) {
    margin-top: 6.5rem;
  }
  @media (max-width: 830px) {
    width: 15rem;
    margin-top: 10rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

const Facebook = styled.img`
  @media (min-width: 1800px) {
    width: 1.25rem;
  }
`;

const Youtube = styled.img`
  width: 1.75rem;
  margin: 1rem;
  @media (min-width: 1800px) {
    width: 3rem;
  }
`;
const Insta = styled.img`
  @media (min-width: 1800px) {
    width: 2.5rem;
  }
`;
