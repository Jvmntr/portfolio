import React from 'react';
import { projectsData, ProjectItem } from '../../data/projects'; 

import {
  ProjectsContainer, 
  SectionTitle,
  ProjectsGrid, 
  ProjectCard,
  ProjectImage,
  CardContent,
  ProjectTitle, 
  ProjectTechs,
  ProjectDescription,
  TechnologiesContainer,
  ButtonsContainer,
  ProjectButton,
} from './styles';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => { 
  return (
    <ProjectsContainer id="projetos">
      <SectionTitle>Meus Projetos</SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project: ProjectItem, index: number) => ( 
          <ProjectCard key={index}>
            <ProjectImage
              src={
                project.title === 'Portfolio Pessoal' && theme === 'light' && project.imageUrlLight
                  ? require(`../../assets/images/projects/${project.imageUrlLight}`)
                  : require(`../../assets/images/projects/${project.imageUrl}`)
              }
              alt={`Imagem do projeto ${project.title}`}
            />
            <CardContent>
              <ProjectTitle>{project.title}</ProjectTitle> 
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechnologiesContainer>
                {project.technologies.map((tech: string) => ( 
                  <ProjectTechs key={tech}>{tech}</ProjectTechs> 
                ))}
              </TechnologiesContainer>
              <ButtonsContainer>
                <ProjectButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </ProjectButton>

                {project.demoLink && (
                  <ProjectButton
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    primary
                  >
                    Ver Online
                  </ProjectButton>
                )}
              </ButtonsContainer>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;