import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from './index'; 

import { ExperienceItem } from '../../data/experiences';

jest.mock('../Experience', () => ({
  __esModule: true,
  default: () => <div />, 
}));

test('deve renderizar o componente sem erros', () => {
  const mockProfessionalExperiences: ExperienceItem[] = [];
  const mockAcademicExperiences: ExperienceItem[] = [];

  render(
    <Experience
      professionalExperiences={mockProfessionalExperiences}
      academicExperiences={mockAcademicExperiences}
    />
  );

  const titleElement = screen.getByText('Experiência Profissional');
  expect(titleElement).toBeInTheDocument();
});

test('deve renderizar o título da formação acadêmica', () => {
  const mockProfessionalExperiences: ExperienceItem[] = [];
  const mockAcademicExperiences: ExperienceItem[] = [];
  
  render(
    <Experience
      professionalExperiences={mockProfessionalExperiences}
      academicExperiences={mockAcademicExperiences}
    />
  );
  
  const titleElement = screen.getByText('Formação Acadêmica');
  expect(titleElement).toBeInTheDocument();
});