import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import About from '.';

describe('Componente About', () => {

  it('deve renderizar todo o conteúdo de texto principal', () => {
    render(<About />);

    expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /joão 'jvmntr' victor monteiro/i })).toBeInTheDocument();
  });

  it('deve renderizar a imagem de perfil com o alt text correto', () => {
    render(<About />);

    const profileImage = screen.getByAltText(/jvmntr - ilustração de perfil/i);
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src');
  });

  it('deve renderizar os links de redes sociais com os atributos href e target corretos', () => {
    render(<About />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Jvmntr');
  });

  describe('Testes de Estilo', () => {
    it('deve aplicar a cor de destaque (accent-color) ao título da seção', () => {
      render(<About />);

      const title = screen.getByRole('heading', { name: /sobre mim/i });
      expect(title).toHaveStyleRule('color', 'var(--accent-color)');
    });

    it('deve aplicar o efeito hover no link social', () => {
      render(<About />);
      const socialLink = screen.getByRole('link', { name: /github/i });

      fireEvent.mouseEnter(socialLink);

      expect(socialLink).toHaveStyleRule('background-color', 'var(--accent-shadow)', {
        modifier: ':hover'
      });
    });
  });
});