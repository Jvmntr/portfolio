import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import Footer from '.';

describe('Componente Footer', () => {
  const MOCK_YEAR = 2025;
  const originalDate = global.Date;

  beforeAll(() => {
    const mockDate = new Date(MOCK_YEAR, 0, 1); 
    //@ts-ignore
    global.Date = class extends originalDate {
      constructor() {
        super();
        return mockDate;
      }
    };
  });

  afterAll(() => {
    global.Date = originalDate;
  });

  it('deve exibir o ano atual dinamicamente no texto de copyright', () => {
    render(<Footer />);

    const copyrightText = screen.getByText(`@${MOCK_YEAR} Jvmntr. Todos os direitos reservados.`);
    expect(copyrightText).toBeInTheDocument();
  });

  it('deve renderizar a mensagem de "Feito com..." corretamente', () => {
    render(<Footer />);

    const devMessage = screen.getByText(/feito com/i);
    const authorName = screen.getByText(/por joão/i);
    const nickname = screen.getByText(/'Jvmntr'/i);
    const restOfMessage = screen.getByText(/monteiro/i);

    expect(devMessage).toBeInTheDocument();
    expect(authorName).toBeInTheDocument();
    expect(nickname).toBeInTheDocument();
    expect(restOfMessage).toBeInTheDocument();
  });

  it('deve aplicar a cor de destaque ao nickname', () => {
    render(<Footer />);

    const nicknameSpan = screen.getByText(/'Jvmntr'/i);
    
    expect(nicknameSpan).toHaveClass('nickname');

    expect(nicknameSpan).toHaveStyle({
      color: 'var(--accent-color)',
    });
  });

  it('deve ter uma borda superior com a cor de destaque', () => {
    render(<Footer />);
    const footerContainer = screen.getByTestId('footer-container');
    expect(footerContainer).toHaveStyleRule('border-top', '1px solid var(--accent-color)');
  });
});