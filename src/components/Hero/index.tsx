import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  HeroButton,
  HeroButtonOutline,
} from "./styles";

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroContent>
        <HeroTitle>Olá, eu sou Jvmntr</HeroTitle>
        <HeroSubtitle>
          Desenvolvedor Front-end apaixonado por criar experiências web incríveis.
        </HeroSubtitle>
        <HeroButtons>
          <HeroButton href="#projetos">Meus Projetos</HeroButton>
          <HeroButtonOutline href="#contato">Entre em Contato</HeroButtonOutline>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;