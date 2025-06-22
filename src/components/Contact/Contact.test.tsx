import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { useForm } from '@formspree/react';
import Contact from '.';

jest.mock('@formspree/react');
jest.mock('../ModalMessage', () => {
  return jest.fn(() => null);
});

const mockUseForm = useForm as jest.Mock;

describe('Componente Contact', () => {
  const OLD_ENV = process.env;
  const mockHandleSubmit = jest.fn((e) => e.preventDefault());
  const mockReset = jest.fn();

  beforeEach(() => {
    mockUseForm.mockClear();
    mockHandleSubmit.mockClear();
    mockReset.mockClear();
    process.env = { ...OLD_ENV, REACT_APP_FORMSPREE_ID: 'test-id' };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('deve renderizar o formulário com todos os campos', () => {
    mockUseForm.mockReturnValue([
      { submitting: false, succeeded: false, errors: null },
      mockHandleSubmit,
      mockReset,
    ]);

    render(<Contact />);
    expect(screen.getByRole('heading', { name: /entre em contato/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/assunto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar mensagem/i })).toBeInTheDocument();
  });

  it('deve renderizar uma mensagem de erro se a ID do Formspree não estiver configurada', () => {
    delete process.env.REACT_APP_FORMSPREE_ID;
    mockUseForm.mockReturnValue([
      { submitting: false, succeeded: false, errors: null },
      mockHandleSubmit,
      mockReset,
    ]);

    render(<Contact />);
    expect(screen.getByRole('heading', { name: /erro de configuração/i })).toBeInTheDocument();
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
  });
  
  it('deve chamar handleSubmit ao submeter o formulário', () => {
    mockUseForm.mockReturnValue([
      { submitting: false, succeeded: false, errors: null },
      mockHandleSubmit,
      mockReset,
    ]);
    render(<Contact />);
    fireEvent.submit(screen.getByTestId('contact-form'));
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });

  it('deve desabilitar o botão e aplicar o estilo correto durante a submissão', () => {
    mockUseForm.mockReturnValue([
      { submitting: true, succeeded: false, errors: null },
      mockHandleSubmit,
      mockReset,
    ]);

    render(<Contact />);
    const button = screen.getByRole('button', { name: /enviando.../i });
    expect(button).toBeDisabled();
    expect(button).toHaveStyleRule('opacity', '0.6', { modifier: ':disabled' });
  });
});