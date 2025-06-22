import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './index';

jest.mock('../../assets/icons/download.svg', () => 'download-icon.svg');

describe('Navbar Component - Testes Simples de Renderização', () => {

  test('deve renderizar o nome da marca corretamente', () => {
    render(<Navbar />);
    
    const brandNameElement = screen.getByText('Jvmntr');
    expect(brandNameElement).toBeInTheDocument();
  });

  test('deve renderizar todos os links de navegação', () => {
    render(<Navbar />);
    
    const navLinks = ["Sobre mim", "Experiências", "Projetos", "Habilidades", "Entre em contato"];

    navLinks.forEach(linkText => {
      const linkElements = screen.getAllByText(linkText);
      expect(linkElements.length).toBeGreaterThan(0);
    });
  });

  test('deve renderizar o botão de "Baixar CV"', () => {
    render(<Navbar />);
    
    const downloadButtons = screen.getAllByText(/baixar cv/i);
    expect(downloadButtons.length).toBeGreaterThanOrEqual(1);
  });

  test('não deve exibir as opções de idioma do CV inicialmente', () => {
    render(<Navbar />);
    
    const optionsPtBr = screen.getAllByText('PT-BR');
    const optionsEn = screen.getAllByText('EN');

    optionsPtBr.forEach(option => {
      expect(option).not.toBeVisible();
    });
    
    optionsEn.forEach(option => {
      expect(option).not.toBeVisible();
    });
  });
});