// src/components/Navbar/styles.ts
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  height: 5rem;
  background-color: #654597;
  display: flex;
`;

export const NavName = styled.h1`
  
  font-family: "Fira Code", monospace;
  font-size: 1.3rem;
  font-weight: 500;
  color: #ffffff;

  align-content: center;
  margin-left: 2rem;
`;

export const NavLinksWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  
  align-self: center;
  list-style: none;

`;

export const NavLinks = styled.li `
  color: #000000;
  font-family: "Fira Code", monospace;
  font-size: 1.3rem;
  font-weight: 500;

  &:hover {
      color: #ffffff;
  }
`;

export const NavButtonContainer = styled.button`
  
  display: flex;
  align-self: center;
  height: 60%;
  width: 200px; 
  justify-content: center;

  margin-right: 5rem;

  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const NavButtonText = styled.h1`
  
  font-family: "Fira Code", monospace;
  font-size: 1.3rem;
  font-weight: 500;

  align-self: center;
  
`;

