import React from "react";
import styled from "styled-components";
import facebook from "./images/facebook.svg";
import youtube from "./images/youtube.svg";
import insta from "./images/insta.svg";
import en from "./images/en.svg";

const Sidebar = () => {
  return (
    <div>
      <SidebarLeft>
        <FacebookIcon src={facebook} alt={facebook} />
        <YoutubeIcon src={youtube} alt={youtube} />
        <InstaIcon src={insta} alt={insta} />
      </SidebarLeft>
      <SidebarRight>
        <EnIcon src={en} alt={en} />
      </SidebarRight>
    </div>
  );
};

export default Sidebar;

const SidebarLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: scroll;
  width: 3rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  @media (max-width: 830px) {
    width: 2rem;
  }
`;

const SidebarRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: scroll;
  width: 3rem;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: white;
  overflow-x: hidden;
  @media (max-width: 830px) {
    width: 2rem;
  }
`;

const FacebookIcon = styled.img`
  width: 2.5rem;
  @media (max-width: 830px) {
    width: 1.75rem;
  }
`;

const YoutubeIcon = styled.img`
  width: 2.5rem;
  margin: 1rem 0;
  @media (max-width: 830px) {
    width: 1.75rem;
    margin: 0.75rem 0;
  }
`;

const InstaIcon = styled.img`
  width: 2.5rem;
  @media (max-width: 830px) {
    width: 1.75rem;
  }
`;

const EnIcon = styled.img`
  width: 2.5rem;
  @media (max-width: 830px) {
    width: 1.75rem;
  }
`;
