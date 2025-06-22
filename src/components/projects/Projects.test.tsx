import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';

import Projects from './index';
import { projectsData } from '../../data/projects';

describe('Componente Projects - Teste de Integração com Dados Reais', () => {
  it('deve renderizar o título e os projetos sem erros', () => {
    expect(projectsData.length).toBeGreaterThan(0);

    render(<Projects theme="dark" />);

    expect(screen.getByRole('heading', { name: /meus projetos/i })).toBeInTheDocument();

    const projectCards = screen.getAllByTestId(/project-card-/);
    expect(projectCards).toHaveLength(projectsData.length);
  });

  it('deve renderizar o conteúdo corretamente para o primeiro projeto da lista', () => {
    if (projectsData.length === 0) {
      test.skip('Nenhum dado de projeto encontrado para testar o conteúdo do card.');
    }

    render(<Projects theme="dark" />);

    const firstProject = projectsData[0];
    const projectCard = screen.getByTestId(`project-card-${firstProject.title}`);

    expect(within(projectCard).getByText(firstProject.title)).toBeInTheDocument();
    expect(within(projectCard).getByText(firstProject.description)).toBeInTheDocument();
    firstProject.technologies.forEach(tech => {
      expect(within(projectCard).getByText(tech)).toBeInTheDocument();
    });
  });

  it('deve renderizar os botões de GitHub e "Ver Online" para projetos com demoLink', () => {
    const projectsWithDemo = projectsData.filter(p => !!p.demoLink);

    if (projectsWithDemo.length === 0) {
      test.skip("Nenhum projeto com 'demoLink' encontrado para testar.");
    }

    render(<Projects theme="dark" />);

    projectsWithDemo.forEach(project => {
      const card = screen.getByTestId(`project-card-${project.title}`);
      expect(within(card).getByRole('link', { name: /ver online/i })).toBeInTheDocument();
      expect(within(card).getByRole('link', { name: /github/i })).toBeInTheDocument();
    });
  });

  it('deve renderizar apenas o botão do GitHub para projetos sem demoLink', () => {
    const projectsWithoutDemo = projectsData.filter(p => !p.demoLink);

    if (projectsWithoutDemo.length === 0) {
      test.skip("Nenhum projeto sem 'demoLink' encontrado para testar.");
    }

    render(<Projects theme="dark" />);

    projectsWithoutDemo.forEach(project => {
      const card = screen.getByTestId(`project-card-${project.title}`);
      expect(within(card).queryByRole('link', { name: /ver online/i })).not.toBeInTheDocument();
      expect(within(card).getByRole('link', { name: /github/i })).toBeInTheDocument();
    });
  });
});