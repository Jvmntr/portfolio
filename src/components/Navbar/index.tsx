import { useState, useRef, useEffect } from "react";
import Download from "../../assets/icons/download.svg";

import {
  NavbarContainer,
  NavName,
  NavButtonContainer,
  NavButtonText,
  NavLinks,
  NavLinksWrapper,
  MobileIcon,
  MobileMenu,
  MobileLink,
  MobileButtonContainer,
  DownloadIcon,
  LanguageDropdown,
  LanguageOption
} from "./styles";

const navItems = [
  { name: "Sobre mim", href: "#sobre-mim" },
  { name: "Experiências", href: "#experiencias" },
  { name: "Projetos", href: "#projetos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Entre em contato", href: "#contato" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleDownloadCV = (lang: 'pt-br' | 'en') => {
  const fileName = lang === 'pt-br' 
  ? 'portfolio/resume/resume_pt-br.pdf' 
  : 'portfolio/resume/resume_en.pdf';     
  
  const filePath = `/${fileName}`; 

  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName; 

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);

  setIsDropdownOpen(false);
};

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <NavbarContainer>
      <NavName href="#hero">
        Jvmntr
      </NavName>

      <NavLinksWrapper>
        {navItems.map((item) => (
          <NavLinks key={item.name} href={item.href}>
            <span>{item.name}</span>
          </NavLinks>
        ))}
      </NavLinksWrapper>

      <div ref={dropdownRef}>
        <NavButtonContainer onClick={toggleDropdown}>
          <NavButtonText>
            Baixar CV <DownloadIcon src={Download} alt="Download Icon" />
          </NavButtonText>
          <LanguageDropdown isOpen={isDropdownOpen}>
            <LanguageOption onClick={() => handleDownloadCV('pt-br')} href="#">PT-BR</LanguageOption>
            <LanguageOption onClick={() => handleDownloadCV('en')} href="#">EN</LanguageOption>
          </LanguageDropdown>
        </NavButtonContainer>
      </div>

      <MobileIcon onClick={toggleMenu} isOpen={isMenuOpen}>
        <span />
        <span />
        <span />
      </MobileIcon>

      <MobileMenu isOpen={isMenuOpen}>
        {navItems.map((item) => (
          <MobileLink key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.name}
          </MobileLink>
        ))}
        <MobileButtonContainer onClick={toggleDropdown}>
          <NavButtonText>
            Baixar CV <DownloadIcon src={Download} alt="Download Icon" />
          </NavButtonText>
          <LanguageDropdown isOpen={isDropdownOpen}>
            <LanguageOption onClick={() => handleDownloadCV('pt-br')} href="#">PT-BR</LanguageOption>
            <LanguageOption onClick={() => handleDownloadCV('en')} href="#">EN</LanguageOption>
          </LanguageDropdown>
        </MobileButtonContainer>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;