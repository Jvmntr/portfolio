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
        <HeroTitle>
          <span className="desktop-title-wrapper">
            <span className="background-name">Jvmntr</span>
            <span className="foreground-title">DESENVOLVEDOR FULLSTACK</span>
          </span>
        </HeroTitle>
        <HeroSubtitle as={Typing} text="Desenvolvedor Web Fullstack apaixonado em criar experiências incríveis!" typingSpeed={60} startDelay={500} />
        <HeroButtons>
          <HeroButton href="#projetos">Meus Projetos</HeroButton>
          <HeroButtonOutline href="#contato">Entre em Contato</HeroButtonOutline>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;