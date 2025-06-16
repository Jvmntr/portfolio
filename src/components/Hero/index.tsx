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
import Typing from '../Typing/index';

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroContent>
        <HeroTitle>Olá, eu sou o Jvmntr</HeroTitle>
        <HeroSubtitle as={Typing} text="Desenvolvedor Front-end apaixonado por criar experiências web incríveis." typingSpeed={60} startDelay={500} />
        <HeroButtons>
          <HeroButton href="#projetos">Meus Projetos</HeroButton>
          <HeroButtonOutline href="#contato">Entre em Contato</HeroButtonOutline>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;