import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import logo from "./images/logo.svg";
import moment from "moment";
import Avenir from "../components/Layout/fonts/AvenirLTStd.otf";
import dayImg from "./images/day.svg";
import monthImg from "./images/month.svg";
import yearImg from "./images/year.svg";

const AgeRestriction = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [dayDisplay, setDayDisplay] = useState(true);
  const [monthDisplay, setMonthDisplay] = useState(true);
  const [yearDisplay, setYearDisplay] = useState(true);

  const age = moment().format("YYYY") - year;

  console.log(parseFloat(moment().format("YYYY")));

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
        <div style={{ width: "100%" }}>
          <Logo src={logo} alt={logo} />
        </div>
        <div style={{ display: "block" }}>
          <Header>Please verify your age</Header>
        </div>
        <form style={{ width: "100%" }}>
          <BoxWrap onClick={() => setDayDisplay(false)}>
            <Day
              src={dayImg}
              alt={dayImg}
              style={{ display: dayDisplay ? "" : "none" }}
            />
            <Input
              type="number"
              value={day}
              placeholder={dayDisplay ? "" : "DD"}
              onChange={handleDayChange}
            />
          </BoxWrap>
          <BoxWrap onClick={() => setMonthDisplay(false)}>
            <Month
              src={monthImg}
              alt={monthImg}
              style={{ display: monthDisplay ? "" : "none" }}
            />
            <Input
              type="number"
              value={month}
              placeholder={monthDisplay ? "" : "MM"}
              onChange={handleMonthChange}
            />
          </BoxWrap>
          <BoxWrap onClick={() => setYearDisplay(false)}>
            <Year
              src={yearImg}
              alt={yearImg}
              style={{ display: yearDisplay ? "" : "none" }}
            />
            <Input
              type="number"
              value={year}
              placeholder={yearDisplay ? "" : "YYYY"}
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
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10vh;
`;

const Day = styled.img`
  width: 14.5rem;
  position: absolute;
  padding-left: 8.5rem;
  z-index: 1000;
  :hover {
    width: 15rem;
  }
  @media (max-width: 620px) {
    width: 8rem;
    padding-left: 4.5rem;
    :hover {
      width: 8.25rem;
    }
  }
  @media (min-width: 1800px) {
    width: 21rem;
    padding-left: 12rem;
    :hover {
      width: 22rem;
    }
  }
`;

const Month = styled.img`
  width: 14.5rem;
  position: absolute;
  padding-left: 8.5rem;
  z-index: 1000;
  :hover {
    width: 15rem;
  }
  @media (max-width: 620px) {
    width: 8rem;
    padding-left: 4.5rem;
    :hover {
      width: 8.25rem;
    }
  }
  @media (min-width: 1800px) {
    width: 21rem;
    padding-left: 12rem;
    :hover {
      width: 22rem;
    }
  }
`;

const Year = styled.img`
  width: 20rem;
  position: absolute;
  padding-left: 5rem;
  z-index: 1000;
  :hover {
    width: 21rem;
  }
  @media (max-width: 620px) {
    width: 10rem;
    padding-left: 2.5rem;
    :hover {
      width: 10.25rem;
    }
  }
  @media (min-width: 1800px) {
    width: 29rem;
    padding-left: 9rem;
    :hover {
      width: 30rem;
    }
  }
`;

const Logo = styled.img`
  @media (max-width: 620px) {
    width: 6rem;
  }
  @media (min-width: 1800px) {
    width: 12rem;
  }
`;

const Header = styled.h2`
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 120%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  @media (max-width: 620px) {
    font-size: 1rem;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;

const BoxWrap = styled.div`
  background: #ffff;
  border: 8px solid #44c8f5;
  display: inline-block;
  padding: 2rem 0;
  padding-bottom: 2.5rem;
  margin: 1rem 1rem;
  @media (max-width: 620px) {
    padding: 1rem 0;
    margin: 0.5rem 1rem;
    border: 4px solid #44c8f5;
  }
  @media (min-width: 1800px) {
    border: 10px solid #44c8f5;
    margin: 1.5rem 1.5rem;
  }
`;

const Input = styled.input`
  font-style: normal;
  font-weight: 900;
  font-size: 2rem;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  color: grey;
  outline: none;
  border: none;
  text-align: center;
  @media (max-width: 620px) {
    font-size: 1rem;
  }
  @media (min-width: 1800px) {
    font-size: 3rem;
  }
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
  @media (max-width: 620px) {
    font-size: 1rem;
    padding: 1rem 4rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
  @media (min-width: 1800px) {
    padding: 3rem 10rem;
    margin-top: 2rem;
    font-size: 2rem;
  }
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
    text-align: center;
    font-family: 'Avenir';
    @font-face {
      font-family: 'Avenir';
      src: url(${Avenir});
    }
  }
`;
