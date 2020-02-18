import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/contact";
import youtube from "../components/Layout/contact/images/youtube.svg";
import facebook from "../components/Layout/contact/images/facebook.svg";
import insta from "../components/Layout/contact/images/insta.svg";
import FadeIn from "react-fade-in";
import Zoom from "react-reveal/Zoom";

const ContactPage = () => {
  return (
    <Layout>
      <FadeIn>
        <div style={{ minHeight: "90vh" }}>
          <Wrap>
            <TextWrap>
              <Zoom top>
                <Header>Contact Us</Header>
              </Zoom>
              <Zoom top>
                <Body>
                  Want to talk VODKA CRUISER? Great. Us too. There are a few
                  different ways to get in touch with us, depending on what it
                  is you want to know. Have a look at the addresses below to
                  make sure your enquiry ends up in the right inbox.
                </Body>
              </Zoom>
            </TextWrap>
          </Wrap>
          <Zoom bottom>
            <Line />
            <Message>Send Us A Message</Message>
          </Zoom>
          <InputWrap>
            <Zoom bottom>
              <form>
                <Input type="text" name="First Name" value="First Name*" />
                <Input type="text" name="Last Name" value="Last Name*" />
                <Input type="text" name="Your Email" value="Your Email*" />
                <Select>
                  <Option value="Subject">Subject</Option>
                  <Option value="saab">Saab</Option>
                  <Option value="mercedes">Mercedes</Option>
                  <Option value="audi">Audi</Option>
                </Select>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <InputLarge
                    type="text"
                    name="I'd like to..."
                    value="I'd like to..."
                  />
                </div>
              </form>
            </Zoom>
          </InputWrap>
          <Zoom bottom>
            <Button>Send</Button>
            <div style={{ marginTop: "1.5rem" }} />
            <Line />
            <Message>Follow Us</Message>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <img src={facebook} alt={facebook} />
              <img
                style={{ width: "1.75rem", margin: "1rem" }}
                src={youtube}
                alt={youtube}
              />
              <img src={insta} alt={insta} />
            </div>
          </Zoom>
        </div>
      </FadeIn>
    </Layout>
  );
};

export default ContactPage;

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
`;

const Body = styled.div`
  font-size: 0.9em;
  line-height: 150%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #003815;
`;

// const Bolt = styled.img`
//   position: absolute;
//   z-index: 1000;
//   top: 18%;
//   left: 10%;
//   width: 3rem;
//   @media (max-width: 980px) {
//     width: 2rem;
//   }
//   @media (max-width: 630px) {
//     width: 1.5rem;
//   }
// `;

// const BoltTwo = styled.img`
//   position: absolute;
//   z-index: 1000;
//   top: 18%;
//   right: 10%;
//   width: 3rem;
//   @media (max-width: 980px) {
//     width: 2rem;
//   }
//   @media (max-width: 630px) {
//     width: 1.5rem;
//   }
// `;

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

const Option = styled.option`
  /* padding: 1rem 1rem; */
`;

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

  @media (max-width: 1203px) {
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
