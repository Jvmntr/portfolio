import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import Modal from '.';

describe('Componente Modal', () => {
  const mockOnClose = jest.fn();
  const baseProps = {
    isOpen: true,
    onClose: mockOnClose,
    message: 'Esta é uma mensagem de teste.',
  };

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('não deve renderizar nada quando a prop isOpen for false', () => {
    const { container } = render(<Modal {...baseProps} isOpen={false} type="success" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('deve renderizar o conteúdo correto para o tipo "success"', () => {
    render(<Modal {...baseProps} type="success" />);
    expect(screen.getByRole('heading', { name: /sucesso!/i })).toBeInTheDocument();
    expect(screen.getByText(baseProps.message)).toBeInTheDocument();
  });

  describe('Interações do Usuário', () => {
    it('deve chamar a função onClose quando o botão de fechar é clicado', () => {
      render(<Modal {...baseProps} type="success" />);
      fireEvent.click(screen.getByRole('button', { name: /×/i }));
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('NÃO deve chamar a função onClose quando o conteúdo do modal é clicado', () => {
      render(<Modal {...baseProps} type="success" />);
      const modalContent = screen.getByRole('dialog');
      fireEvent.click(modalContent);
      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe('Testes de Estilo', () => {
    it('deve aplicar o estilo de borda correto para o tipo "success"', () => {
      render(<Modal {...baseProps} type="success" />);
      const modalContent = screen.getByRole('dialog');
      expect(modalContent).toHaveStyleRule('border-top', '5px solid var(--accent-color)');
    });
    
    it('deve aplicar o estilo de borda correto para o tipo "error"', () => {
      render(<Modal {...baseProps} type="error" />);
      const modalContent = screen.getByRole('dialog');
      expect(modalContent).toHaveStyleRule('border-top', '5px solid var(--accent-shadow)');
    });

    it('deve aplicar o estilo de hover no botão de fechar', () => {
      render(<Modal {...baseProps} type="success" />);
      const closeButton = screen.getByRole('button', { name: /×/i });
      expect(closeButton).toHaveStyleRule('color', 'var(--text-primary)', {
        modifier: ':hover'
      });
    });
  });
});