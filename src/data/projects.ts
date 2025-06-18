export interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  imageUrlLight?: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

export const projectsData: ProjectItem[] = [
  {
    title: 'Portfolio Pessoal',
    description:
      'Um portfolio moderno e responsivo para exibir meus projetos e habilidades. Construído do zero com foco em performance e design limpo.',
    imageUrl: 'portfolio.png',
    imageUrlLight: "portfolio-light.png",
    technologies: ['React', 'TypeScript', 'Styled-Components'],
    githubLink: 'https://github.com/jvmntr/portfolio'
    
  },
  {
    title: 'Card pessoal',
    description:
      'Um pequeno projeto feito em ReactJS e styled-components com o foco de trazer uma apresentação profissional rápida, contendo um pouco das minhas tecnologias e especialidades.',
    imageUrl: 'personalCard.png',
    technologies: ['React', 'JavaScript', 'Styled-components'],
    githubLink: 'https://github.com/Jvmntr/personal-card',
    demoLink: 'https://jvmntr.github.io/personal-card/',
  },
  {
    title: 'Teclado musical',
    description:
      'Um teclado musical feito apenas com HTML, CSS e JS.',
    imageUrl: 'tecladoJs.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Jvmntr/Teclado-JS'
  },
];

export {};