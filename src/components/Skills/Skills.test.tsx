import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Skills from './index';
import { skillsData } from '../../data/skills';

describe('Componente Skills - Teste de Integração com Dados Reais', () => {
  it('deve renderizar o título, categorias, ícones e placeholders corretamente', () => {
    if (skillsData.length === 0) {
      test.skip('Nenhum dado de habilidade encontrado para renderizar.');
      return; 
    }

    render(<Skills />);

    expect(screen.getByRole('heading', { name: /habilidades/i })).toBeInTheDocument();
    skillsData.forEach(category => {
      expect(screen.getByRole('heading', { name: category.title })).toBeInTheDocument();
      category.skills.forEach(skill => {
        expect(screen.getByAltText(`${skill.name} icon`)).toBeInTheDocument();
      });
    });
    const placeholders = screen.getAllByText('Selecione uma tecnologia para ver a descrição.');
    expect(placeholders).toHaveLength(skillsData.length);
  });

  it('deve exibir a descrição da habilidade ao clicar em um ícone', async () => {
    const firstSkill = skillsData[0]?.skills[0];
    if (!firstSkill) {
      test.skip('Nenhuma habilidade encontrada nos dados reais para testar o clique.');
      return; 
    }

    render(<Skills />);

    const categoryTitle = skillsData[0].title;
    const quadrant = screen.getByTestId(`quadrant-${categoryTitle}`);
    
    expect(within(quadrant).getByText(/selecione uma tecnologia/i)).toBeInTheDocument();

    const skillIcon = within(quadrant).getByAltText(`${firstSkill.name} icon`);
    await userEvent.click(skillIcon);

    expect(within(quadrant).queryByText(/selecione uma tecnologia/i)).not.toBeInTheDocument();
    expect(within(quadrant).getByText(firstSkill.name)).toBeInTheDocument();
    expect(within(quadrant).getByText(firstSkill.description)).toBeInTheDocument();
  });

  it('deve atualizar a descrição ao selecionar outra habilidade na mesma categoria', async () => {
    const testableCategory = skillsData.find(cat => cat.skills.length >= 2);
    if (!testableCategory) {
      test.skip('Nenhuma categoria com 2+ habilidades encontrada para testar a atualização.');
      return; 
    }

    render(<Skills />);

    const firstSkill = testableCategory.skills[0];
    const secondSkill = testableCategory.skills[1];
    const quadrant = screen.getByTestId(`quadrant-${testableCategory.title}`);

    await userEvent.click(within(quadrant).getByAltText(`${firstSkill.name} icon`));
    expect(within(quadrant).getByText(firstSkill.description)).toBeInTheDocument();
    
    await userEvent.click(within(quadrant).getByAltText(`${secondSkill.name} icon`));
    
    expect(within(quadrant).queryByText(firstSkill.description)).not.toBeInTheDocument();
    expect(within(quadrant).getByText(secondSkill.description)).toBeInTheDocument();
  });

  it('deve manter as seleções de categorias independentes', async () => {
    const testableCategories = skillsData.filter(cat => cat.skills.length > 0);
    if (testableCategories.length < 2) {
      test.skip('Menos de duas categorias com habilidades encontradas para testar a independência.');
      return; 
    }
    
    render(<Skills />);
    
    const firstCategory = testableCategories[0];
    const secondCategory = testableCategories[1];
    const firstSkill = firstCategory.skills[0];
    const secondSkill = secondCategory.skills[0];

    await userEvent.click(screen.getByAltText(`${firstSkill.name} icon`));
    await userEvent.click(screen.getByAltText(`${secondSkill.name} icon`));

    expect(screen.getByText(firstSkill.description)).toBeInTheDocument();
    expect(screen.getByText(secondSkill.description)).toBeInTheDocument();
  });
});