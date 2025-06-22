import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonalModal, { PersonalModalProps } from './index';
import { PersonalData } from '../../data/personal';

const mockData: PersonalData = {
  name: 'João Victor',
  summary: 'Este é um resumo sobre a pessoa.',
  interests: ['Leitura', 'Música', 'Games'],
  links: {
    instagram: 'https://instagram.com',
    spotify: 'https://spotify.com',
  },
  linksImage: {
    instagram: 'instagram.svg',
    spotify: 'spotify.svg',
  },
};

const mockOnClose = jest.fn();

const defaultProps: PersonalModalProps = {
  isOpen: true,
  onClose: mockOnClose,
  data: mockData,
};

describe('PersonalModal Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('não deve renderizar nada quando isOpen for false', () => {
    render(<PersonalModal {...defaultProps} isOpen={false} />);
    const titleElement = screen.queryByText(`Quem é ${mockData.name}?`);
    expect(titleElement).toBeNull();
  });

  test('deve renderizar o conteúdo do modal corretamente quando isOpen for true', () => {
    render(<PersonalModal {...defaultProps} />);

    expect(screen.getByText(`Quem é ${mockData.name}?`)).toBeInTheDocument();
    expect(screen.getByText(mockData.summary)).toBeInTheDocument();
    expect(screen.getByText('Outros Interesses')).toBeInTheDocument();

    mockData.interests.forEach(interest => {
      expect(screen.getByText(interest)).toBeInTheDocument();
    });

    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('Spotify')).toBeInTheDocument();
  });

  describe('Funcionalidades de Fechamento', () => {
    test('deve chamar onClose ao clicar no botão de fechar', () => {
      render(<PersonalModal {...defaultProps} />);
      const closeButton = screen.getByRole('button');
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    test('deve chamar onClose ao clicar no overlay (fundo)', () => {
      render(<PersonalModal {...defaultProps} />);

      const overlay = screen.getByTestId('modal-overlay');
      fireEvent.click(overlay);
      
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    test('NÃO deve chamar onClose ao clicar no conteúdo do modal', () => {
      render(<PersonalModal {...defaultProps} />);
      const contentText = screen.getByText(mockData.summary);
      fireEvent.click(contentText);
      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });
});