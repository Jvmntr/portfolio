import React from "react";
import { NavbarContainer, NavName, NavButtonContainer, NavButtonText, NavLinks, NavLinksWrapper } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavName>Jvmntr</NavName>
      <NavLinksWrapper>
        <NavLinks>Sobre mim</NavLinks>
        <NavLinks>Experiências</NavLinks>
        <NavLinks>Projetos</NavLinks>
        <NavLinks>Habilidades</NavLinks>
        <NavLinks>Entre em contato</NavLinks>
      </NavLinksWrapper>

      <NavButtonContainer>
        <NavButtonText> Baixar CV </NavButtonText>
      </NavButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
