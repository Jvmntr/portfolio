import styled, { keyframes } from "styled-components";

const accentGreen = "#2ecc71";
const darkBackground = "#282c34";
const lightText = "#a0a8b3";
const whiteText = "#ffffff";
const invertedText = "#282c34";

const textGlitch = keyframes`
  0% {
    text-shadow: 0 0 ${accentGreen}, 0 0 ${accentGreen};
    transform: translateX(0);
  }
  20% {
    text-shadow: 1px 0 ${accentGreen}, -1px 0 ${accentGreen};
    transform: translateX(-1px);
  }
  40% {
    text-shadow: -1px 0 ${accentGreen}, 1px 0 ${accentGreen};
    transform: translateX(1px);
  }
  60% {
    text-shadow: 2px 0 ${accentGreen}, -2px 0 ${accentGreen};
    transform: translateX(-2px);
  }
  80% {
    text-shadow: -2px 0 ${accentGreen}, 2px 0 ${accentGreen};
    transform: translateX(2px);
  }
  100% {
    text-shadow: 0 0 ${accentGreen}, 0 0 ${accentGreen};
    transform: translateX(0);
  }
`;

const textColorShift = keyframes`
  0%, 100% { color: ${accentGreen}; }
  50% { color: ${whiteText}; }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 5rem;
  background-color: ${darkBackground};
  padding: 0 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const NavName = styled.h1`
  font-family: "Fira Code", monospace;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${accentGreen};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    animation: ${textGlitch} 0.4s infinite alternate, ${textColorShift} 0.8s infinite alternate;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const NavLinksWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  list-style: none; 
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.a` 
  color: ${lightText};
  font-family: "Fira Code", monospace;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  text-decoration: none; 
  padding: 0.5rem 0; 
  display: inline-block; 


  &:hover {
    color: ${whiteText};
  }

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${accentGreen};
    border-radius: 4px;
    opacity: 0;
    transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    width: calc(100% + 16px);
    opacity: 0.1;
  }
`;

export const NavButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 150px;
  border: 2px solid ${accentGreen};
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    background-color: ${accentGreen};
    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavButtonText = styled.span`
  font-family: "Fira Code", monospace;
  font-size: 1rem;
  font-weight: 600;
  color: ${accentGreen};
  transition: color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 8px;

  ${NavButtonContainer}:hover & {
    color: ${invertedText};
  }
`;

export const DownloadIcon = styled.img`
  width: 18px;
  height: 18px;
  filter: invert(50%) sepia(85%) saturate(1469%) hue-rotate(94deg) brightness(97%) contrast(89%);

  ${NavButtonContainer}:hover & {
    filter: invert(10%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(0%);
  }
`;

export const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${darkBackground};
  border: 1px solid ${accentGreen};
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 0;
  min-width: 120px;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform-origin: top center;
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-50%) scaleY(1)' : 'translateX(-50%) scaleY(0.9)')};
`;

export const LanguageOption = styled.a`
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  color: ${lightText};
  padding: 0.8rem 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  text-align: center;

  &:hover {
    background-color: ${accentGreen};
    color: ${invertedText};
  }
`;

export const MobileIcon = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: relative;

    span {
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${whiteText};
      border-radius: 2px;
      transition: all 0.3s ease-in-out;

      &:nth-child(1) {
        top: ${({ isOpen }) => (isOpen ? '50%' : '0')};
        transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
      }

      &:nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
        top: 50%;
        transform: translateY(-50%);
      }

      &:nth-child(3) {
        bottom: ${({ isOpen }) => (isOpen ? '50%' : '0')};
        transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
      }
    }
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  background-color: ${darkBackground};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  padding: 1rem 0;
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileLink = styled.a`
  color: ${whiteText};
  font-family: "Fira Code", monospace;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.8rem 2rem;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${darkBackground};
  }
`;

export const MobileButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: calc(100% - 4rem);
  margin: 1rem 2rem;
  border: 2px solid ${accentGreen};
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${accentGreen};
    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
  }
`;

export const MobileButtonText = styled.span`
  font-family: "Fira Code", monospace;
  font-size: 1rem;
  font-weight: 600;
  color: ${accentGreen};
  transition: color 0.3s ease-in-out;

  ${MobileButtonContainer}:hover & {
    color: ${invertedText};
  }
`;