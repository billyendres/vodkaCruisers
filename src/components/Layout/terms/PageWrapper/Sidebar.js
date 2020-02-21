import React from "react";
import styled from "styled-components";
import facebook from "./images/facebook.svg";
import insta from "./images/insta.svg";

const Sidebar = () => {
  return (
    <div>
      <SidebarLeft>
        <a
          href="https://www.facebook.com/vodkacruiser"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon src={facebook} alt={facebook} />
        </a>
        <a
          href="https://www.instagram.com/vodkacruiser/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstaIcon src={insta} alt={insta} />
        </a>
      </SidebarLeft>
      <SidebarRight />
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
  width: 3.5rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  @media (max-width: 830px) {
    width: 2.25rem;
  }
`;

const SidebarRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: scroll;
  width: 3.5rem;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: white;
  overflow-x: hidden;
  @media (max-width: 830px) {
    width: 2.25rem;
  }
`;

const FacebookIcon = styled.img`
  width: 2.5rem;
  @media (max-width: 830px) {
    width: 1.75rem;
  }
`;

const InstaIcon = styled.img`
  width: 2.9rem;
  @media (max-width: 830px) {
    width: 2.05rem;
  }
`;
