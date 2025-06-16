import React, { useState, useRef, useEffect } from "react";
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleDownloadCV = (lang: 'pt-br' | 'en') => {
    alert(`Baixando CV em ${lang.toUpperCase()}...`);
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
      <NavName>Jvmntr</NavName>

      <NavLinksWrapper>
        <NavLinks href="#sobre-mim">Sobre mim</NavLinks>
        <NavLinks href="#experiencias">Experiências</NavLinks>
        <NavLinks href="#projetos">Projetos</NavLinks>
        <NavLinks href="#habilidades">Habilidades</NavLinks>
        <NavLinks href="#contato">Entre em contato</NavLinks>
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
        <MobileLink onClick={() => setIsMenuOpen(false)} href="#sobre-mim">Sobre mim</MobileLink>
        <MobileLink onClick={() => setIsMenuOpen(false)} href="#experiencias">Experiências</MobileLink>
        <MobileLink onClick={() => setIsMenuOpen(false)} href="#projetos">Projetos</MobileLink>
        <MobileLink onClick={() => setIsMenuOpen(false)} href="#habilidades">Habilidades</MobileLink>
        <MobileLink onClick={() => setIsMenuOpen(false)} href="#contato">Entre em contato</MobileLink>
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