import React from 'react';
import {
  AboutContainer,
  AboutCard,              // O novo "cartão" central
  AboutImageWrapper,      // Container para a imagem/ilustração
  AboutImage,             // A imagem em si
  AboutTextContent,       // O novo container para texto e sociais
  AboutTitle,
  AboutName,              // Para o seu nome
  AboutRole,              // Para o seu cargo/função
  AboutText,
  AboutStack,
  SocialLinksContainer,
  SocialLink,
} from './styles';

import aboutIllustration from '../../assets/images/profile.jpg'; 
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import discordIcon from '../../assets/icons/discord.svg';

const About = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Jvmntr', iconSrc: githubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jvmntr/', iconSrc: linkedinIcon },
    { name: 'Discord', url: 'https://www.linkedin.com/in/jvmntr/', iconSrc: discordIcon },
    { name: 'Instagram', url: 'https://www.linkedin.com/in/jvmntr/', iconSrc: instagramIcon },
  ];

  return (
    <AboutContainer id="sobre-mim">
      <AboutCard>
        <AboutImageWrapper>
          <AboutImage src={aboutIllustration} alt="Jvmntr - Ilustração de Perfil" />
          <SocialLinksContainer>
            {socialLinks.map((link) => (
              <SocialLink key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={link.iconSrc} alt={link.name} style={{ width: '24px', height: '24px', filter: 'var(--icon-filter)' }} />
              </SocialLink>
            ))}
          </SocialLinksContainer>
        </AboutImageWrapper>

        <AboutTextContent>
          <AboutTitle>Sobre Mim</AboutTitle>
          <AboutName>João 'Jvmntr' Victor Monteiro</AboutName> 
          <AboutRole>Fullstack Developer</AboutRole> 

           <AboutText>
            Sou um desenvolvedor Front-end dedicado a criar interfaces de usuário intuitivas e de alta performance. Minha paixão reside em transformar designs complexos em experiências digitais fluidas e impactantes, sempre com foco no usuário.
          </AboutText>
          <AboutStack>
            ReactJS • NodeJs • Typescript
          </AboutStack>
        </AboutTextContent>
      </AboutCard>
    </AboutContainer>
  );
};

export default About;