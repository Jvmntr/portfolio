import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ExperienceItem } from '../../data/experiences';
import ExperienceItemComponent from '.';

const mockFullExperience: ExperienceItem = {
  title: 'Desenvolvedor Fullstack',
  companyOrInstitution: 'Empresa Fictícia',
  period: 'Jan 2022 - Presente',
  location: 'São Paulo, SP',
  summary: 'Este é um resumo detalhado da minha experiência de trabalho.',
  description: [
    'Desenvolvi e mantive aplicações web complexas.',
    'Colaborei com equipes multifuncionais para entregar novos recursos.'
  ],
  technologies: ['React', 'Node.js', 'TypeScript']
};

const mockMinimalExperience: ExperienceItem = {
  title: 'Estágio em Desenvolvimento',
  companyOrInstitution: 'Outra Empresa',
  period: 'Jan 2021 - Dez 2021',
  location: 'Remoto',
  summary: 'undefined', 
  description: ['Aprendi a base do desenvolvimento web.'],
  technologies: [] 
};

describe('Componente ExperienceItemComponent', () => {
  it('deve renderizar todos os detalhes quando os dados estão completos', () => {
    render(<ExperienceItemComponent item={mockFullExperience} />);

    expect(screen.getByRole('heading', { name: /desenvolvedor fullstack/i })).toBeInTheDocument();
    expect(screen.getByText('Empresa Fictícia')).toBeInTheDocument();
    expect(screen.getByText('Jan 2022 - Presente')).toBeInTheDocument();
    expect(screen.getByText('São Paulo, SP')).toBeInTheDocument();
    
    expect(screen.getByText(/resumo detalhado da minha experiência/i)).toBeInTheDocument();

    expect(screen.getByText('Desenvolvi e mantive aplicações web complexas.')).toBeInTheDocument();
    expect(screen.getByText(/colaborei com equipes multifuncionais/i)).toBeInTheDocument();

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('não deve renderizar o sumário e as tecnologias se não forem fornecidos', () => {
    render(<ExperienceItemComponent item={mockMinimalExperience} />);

    expect(screen.queryByText(/resumo detalhado/i)).not.toBeInTheDocument();
    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });
  
  it('deve aplicar a className fornecida ao container principal', () => {
    render(<ExperienceItemComponent item={mockMinimalExperience} className="minha-classe" />);
    
    const container = screen.getByTestId('experience-item');
    expect(container).toHaveClass('minha-classe');
  });

  describe('Testes de Estilo', () => {
    it('deve aplicar o estilo do pseudo-elemento ::before na descrição', () => {
      render(<ExperienceItemComponent item={mockFullExperience} />);

      const descriptionItem = screen.getByText('Desenvolvi e mantive aplicações web complexas.');
      
      expect(descriptionItem).toHaveStyleRule('content', "'•'", {
        modifier: '::before',
      });
      expect(descriptionItem).toHaveStyleRule('color', 'var(--accent-color)', {
        modifier: '::before',
      });
    });

    it('deve aplicar os estilos de hover no card', () => {
      render(<ExperienceItemComponent item={mockFullExperience} />);

      const card = screen.getByTestId('experience-item');

      fireEvent.mouseEnter(card);
      expect(card).toHaveStyleRule('transform', 'translateY(-5px)', {
        modifier: ':hover',
      });
      expect(card).toHaveStyleRule('box-shadow', '0 8px 16px var(--box-shadow-medium)', {
        modifier: ':hover',
      });
    });
  });
});