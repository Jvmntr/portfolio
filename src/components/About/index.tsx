import {
  AboutContainer,
  AboutCard,              
  AboutImageWrapper,      
  AboutImage,             
  AboutTextContent,       
  AboutTitle,
  AboutName,              
  AboutRole,              
  AboutText,
  AboutStack,
  SocialLinksContainer,
  SocialLink,
} from './styles';

import aboutIllustration from '../../assets/images/profile.jpg'; 
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

const About = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Jvmntr', iconSrc: githubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jvmntr/', iconSrc: linkedinIcon }
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
            Desenvolvedor fullstack com 3 anos de experiência, criando soluções web completas com foco em performance e boas práticas. Atuo do front ao back, unindo design funcional e código eficiente.  
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