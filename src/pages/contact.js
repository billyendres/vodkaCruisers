import React, { useState } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/contact";
import facebook from "../components/Layout/contact/images/facebook.svg";
import insta from "../components/Layout/contact/images/insta.svg";
import FadeIn from "react-fade-in";
import Zoom from "react-reveal/Zoom";
import Markdown from "markdown-to-jsx";
import axios from "axios";

export default () => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
        craft {
          entries {
            ... on Craft_contact_contact_Entry {
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
      const contactPage = craft.entries[2];
      const { contactMessage, socials, title, contactBody } = contactPage;
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [query, setQuery] = useState("");
      const [dropdown, setDropdown] = useState("");
      const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
      });

      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg },
        });
        if (ok) {
          form.reset();
        }
      };

      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/d0d27ed4-babe-4dd7-a731-a2469dbbeecb",
          data: new FormData(form),
        })
          .then(r => {
            handleServerResponse(
              true,
              "Thanks for your message - one of the team will get back to you soon",
              form
            );
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };

      const handleSubmit = e => {
        e.preventDefault();
      };

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
                <Message>
                  <Markdown>{contactMessage}</Markdown>
                </Message>
              </Zoom>
              <InputWrap>
                <Zoom bottom>
                  <form onSubmit={handleOnSubmit}>
                    <Input
                      type="text"
                      name="First Name"
                      placeholder="First Name*"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                    <Input
                      type="text"
                      name="Last Name"
                      placeholder="Last Name*"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email*"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <InputLarge
                        name="question"
                        type="text"
                        placeholder="I'd like to..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                      />
                    </div>
                    <Button type="submit" disabled={serverState.submitting}>
                      Send
                    </Button>
                    {serverState.status && (
                      <Response
                        className={!serverState.status.ok ? "errorMsg" : ""}
                      >
                        {serverState.status.msg}
                      </Response>
                    )}
                  </form>
                </Zoom>
              </InputWrap>
              <Zoom bottom>
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
                  <a
                    href="https://www.facebook.com/vodkacruiser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook src={facebook} alt={facebook} />
                  </a>
                  <a
                    href="https://www.instagram.com/vodkacruiser/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Insta src={insta} alt={insta} />
                  </a>
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
  margin-top: 2rem;
  margin-left: 6rem;
  margin-right: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1203px) {
    margin-top: 2rem;
  }
  @media (max-width: 699px) {
    margin-top: 2rem;
  }
`;

const Response = styled.p`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #72bf44;
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
  color: #494b4d;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2px;
  outline: none;
  border: 1px solid #3c3c3c;
  margin-bottom: 1rem;
`;

// const Select = styled.select`
//   font-family: Avenir;
//   padding: 0.5rem 1rem;
//   font-weight: 700;
//   font-size: 1rem;
//   line-height: 150%;
//   letter-spacing: 0.1em;
//   background: #ffffff;
//   color: #c6c6c6;
//   outline: none;
//   width: 13.85rem;
//   height: 2.5rem;
//   margin: 0 1rem;
//   text-transform: uppercase;
//   border: 1px solid #3c3c3c;
//   margin-bottom: 2rem;
//   cursor: pointer;
// `;

// const Option = styled.option``;

const InputLarge = styled.input`
  font-family: Avenir;
  padding: 0.45rem 1rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.1em;
  border-radius: 5px;
  color: #494b4d;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 4rem;
  text-transform: uppercase;
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
  margin-top: 2rem;
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
    margin-top: 2rem;
  }
  @media (max-width: 830px) {
    width: 15rem;
    margin-top: 2rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

const Facebook = styled.img`
  margin-right: 0.5rem;
  @media (min-width: 1800px) {
    width: 1.25rem;
  }
`;

const Insta = styled.img`
  margin-left: 0.5rem;
  @media (min-width: 1800px) {
    width: 2.5rem;
  }
`;
