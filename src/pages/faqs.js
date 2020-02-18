import React, { useState } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/faqs";
import musicNote from "./images/musicNote.svg";
import headPhones from "./images/headPhones.svg";
import waveTop from "./images/waveTop.svg";
import diamond from "./images/diamond.svg";
import cable from "./images/cable.svg";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FadeIn from "react-fade-in";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginBottom: "5rem",
    position: "relative",
    margin: "0 2rem",
  },
  heading: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "1em",
    lineHeight: "120%",
    letterSpacing: "0.05em",
    color: "#243A76",
  },
  text: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "0.7em",
    lineHeight: "150%",
    letterSpacing: "0.05em",
    color: "#243A76",
  },
}));

export default () => (
  <StaticQuery
    query={graphql`
      query FAQsQuery {
        craft {
          entries {
            ... on Craft_faqs_faqs_Entry {
              id
              dropdownFourBody
              dropdownFourTitle
              dropdownOneBody
              dropdownOneTitle
              dropdownThreeBody
              dropdownThreeTitle
              dropdownTwoBody
              dropdownTwoTitle
              title
            }
          }
        }
      }
    `}
    render={({ craft }) => {
      const faqs = craft.entries[1];
      const {
        dropdownFourBody,
        dropdownFourTitle,
        dropdownOneBody,
        dropdownOneTitle,
        dropdownThreeBody,
        dropdownThreeTitle,
        dropdownTwoBody,
        dropdownTwoTitle,
        faqHeader,
        title,
      } = faqs;

      const classes = useStyles();
      const [expanded, setExpanded] = useState(false);

      const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

      return (
        <Layout>
          <FadeIn>
            <Wrap>
              <Background>
                <MusicIcon src={musicNote} alt={musicNote} />
                <WaveTopIcon src={waveTop} alt={waveTop} />
                <WaveBottomIcon src={waveTop} alt={waveTop} />
                <HeadphonesIcon src={headPhones} alt={headPhones} />
                <CableIcon src={cable} alt={cable} />
                <DiamondIcon src={diamond} alt={diamond} />
                <Header>{title}</Header>
                <HeaderTwo>{faqHeader}</HeaderTwo>
                <div className={classes.root}>
                  <ExpansionPanel
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className={classes.heading}>
                        {dropdownOneTitle}
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className={classes.text}>
                        {dropdownOneBody}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography className={classes.heading}>
                        {dropdownTwoTitle}
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className={classes.text}>
                        {dropdownTwoBody}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography className={classes.heading}>
                        {dropdownThreeTitle}
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className={classes.text}>
                        {dropdownThreeBody}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      <Typography className={classes.heading}>
                        {dropdownFourTitle}
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className={classes.text}>
                        {dropdownFourBody}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </Background>
            </Wrap>
          </FadeIn>
        </Layout>
      );
    }}
  />
);

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: #eeeeee;
  height: 90vh;
  width: 100vw;
`;

const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70vw;
`;

const Header = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 2.75em;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.02rem;
  color: #243a76;
  margin-bottom: 2rem;
  width: 100%;
`;

const HeaderTwo = styled.h2`
  margin: 0 2rem 2rem;
  font-style: normal;
  font-weight: 900;
  font-size: 1.25em;
  line-height: 120%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: left;
  width: 100%;
  color: #243a76;
`;

const MusicIcon = styled.img`
  position: absolute;
  top: 4rem;
  right: 17rem;
  width: 8%;
  @media (max-width: 830px) {
    display: none;
  }
  @media (min-height: 980px) {
    width: 15%;
  }
`;

const HeadphonesIcon = styled.img`
  position: fixed;
  top: 10%;
  left: 14%;
  width: 10%;
  @media (max-width: 830px) {
    display: none;
  }
`;

const WaveTopIcon = styled.img`
  position: fixed;
  top: 6rem;
  right: 3rem;
  width: 15%;
  @media (max-width: 830px) {
    right: 2rem;
  }
`;

const WaveBottomIcon = styled.img`
  position: fixed;
  transform: rotate(180deg);
  bottom: 8rem;
  left: 3rem;
  width: 14%;
  @media (max-width: 830px) {
    left: 2rem;
  }
`;

const CableIcon = styled.img`
  position: fixed;
  bottom: 13%;
  right: 15%;
  width: 15%;
  @media (max-width: 830px) {
    display: none;
  }
`;

const DiamondIcon = styled.img`
  position: fixed;
  bottom: 14rem;
  left: 45%;
  width: 7%;
  @media (max-width: 830px) {
    display: none;
  }
`;
