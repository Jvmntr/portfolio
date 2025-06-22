import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import Hero from '.';

jest.mock('../Typing/index', () => {
  return (props: any) => (
    <div data-testid="mock-typing">
      {JSON.stringify(props)}
    </div>
  );
});

describe('Componente Hero', () => {
  it('deve renderizar o título principal', () => {
    render(<Hero />);
    expect(screen.getByText('DESENVOLVEDOR FULLSTACK')).toBeInTheDocument();
    expect(screen.getByText('Jvmntr')).toBeInTheDocument();
  });

  it('deve renderizar o subtítulo e passar as props corretas para o componente Typing', () => {
    render(<Hero />);

    const subtitleMock = screen.getByTestId('mock-typing');
    expect(subtitleMock).toBeInTheDocument();

    const expectedText = "Desenvolvedor Web Fullstack apaixonado em criar experiências incríveis!";
    expect(subtitleMock.textContent).toContain(expectedText);
    expect(subtitleMock.textContent).toContain('"typingSpeed":60');
    expect(subtitleMock.textContent).toContain('"startDelay":500');
  });

  it('deve renderizar os botões de ação com os links corretos', () => {
    render(<Hero />);
    const projectsButton = screen.getByRole('link', { name: /meus projetos/i });
    const contactButton = screen.getByRole('link', { name: /entre em contato/i });

    expect(projectsButton).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
    expect(projectsButton).toHaveAttribute('href', '#projetos');
    expect(contactButton).toHaveAttribute('href', '#contato');
  });

  describe('Testes de Estilo', () => {
    it('deve aplicar os estilos de hover ao botão principal (HeroButton)', () => {
      render(<Hero />);
      const projectsButton = screen.getByRole('link', { name: /meus projetos/i });
      expect(projectsButton).toHaveStyleRule('transform', 'translateY(-2px)', { modifier: ':hover' });
    });

    it('deve aplicar os estilos de hover ao botão de contorno (HeroButtonOutline)', () => {
      render(<Hero />);
      const contactButton = screen.getByRole('link', { name: /entre em contato/i });
      expect(contactButton).toHaveStyleRule('background-color', 'var(--accent-color)', { modifier: ':hover' });
    });
  });
});