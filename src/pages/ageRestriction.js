import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import logo from "./images/logo.svg";
import moment from "moment";

const AgeRestriction = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const age = moment().format("YYYY") - year;

  console.log(moment().format("YYYY"));

  const handleDayChange = e => {
    if (day < 0 || day > 31) {
      setDay(0);
    } else {
      setDay(e.target.value);
    }
  };

  const handleMonthChange = e => {
    if (month < 0 || month > 12) {
      setMonth(0);
    } else {
      setMonth(e.target.value);
    }
  };

  const handleYearChange = e => {
    if (year < 0 || year > 2030) {
      setYear(0);
    } else {
      setYear(e.target.value);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <Logo src={logo} alt={logo} />
        <Header>Please verify your age</Header>
        <form>
          <BoxWrap>
            <Input
              type="number"
              value={day}
              placeholder="DD"
              onChange={handleDayChange}
            />
          </BoxWrap>
          <BoxWrap>
            <Input
              type="number"
              value={month}
              placeholder="MM"
              onChange={handleMonthChange}
            />
          </BoxWrap>
          <BoxWrap>
            <Input
              type="number"
              value={year}
              placeholder="YYYY"
              onChange={handleYearChange}
            />
          </BoxWrap>
        </form>
        {age >= 18 ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Button>Enter</Button>
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button>Enter</Button>
          </div>
        )}
      </Wrap>
    </>
  );
};

export default AgeRestriction;

const Wrap = styled.div`
  margin-top: 5%;
`;

const Logo = styled.img``;

const Header = styled.h2`
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 120%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
`;

const BoxWrap = styled.div`
  background: #ffff;
  border: 8px solid #44c8f5;
  display: inline-block;
  padding: 2rem 0;
  margin: 1rem 1rem;
`;

const Input = styled.input`
  font-style: normal;
  font-weight: 900;
  font-size: 2rem;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: grey;
  outline: none;
  border: none;
  text-align: center;
`;

const Button = styled.button`
  background: #44c8f5;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 2rem 8rem;
  margin-top: 1rem;
  margin-bottom: 4rem;
  display: block;
  outline: none;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html, body {
    background: linear-gradient(to left, #000428, #004e92);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    height: 100vh;
    font-size: 1rem;
    font-family: Avenir;
    text-align: center;
  }
  `;
