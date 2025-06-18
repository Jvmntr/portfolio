export interface ISkill {
  name: string;
  icon: string;
  description: string;
}

export interface ICategory {
  title: string;
  skills: ISkill[];
}

export const skillsData: ICategory[] = [
  {
    title: 'Front-end',
    skills: [
      {
        name: 'React',
        icon: 'react.svg',
        description: 'Biblioteca para construir interfaces de usuário interativas e componentizadas com alta performance.',
      },
      {
        name: 'TypeScript',
        icon: 'ts.svg',
        description: 'Superset do JavaScript que adiciona tipagem estática, aumentando a robustez e manutenibilidade do código.',
      },
      {
        name: 'Styled Components',
        icon: 'styled.svg',
        description: 'Biblioteca para estilização de componentes React, permitindo CSS-in-JS com escopo local.',
      },
      {
        name: 'TailwindCSS',
        icon: 'tailwind.svg',
        description: 'Framework CSS utility-first para criar designs customizados de forma rápida e eficiente.',
      }
    ],
  },
  {
    title: 'Back-end',
    skills: [
      {
        name: 'Node.js',
        icon: 'nodejs.svg',
        description: 'Ambiente de execução JavaScript no servidor, ideal para construir APIs rápidas e escaláveis.',
      },
      {
        name: 'Python',
        icon: 'python.svg',
        description: 'Linguagem versátil usada em desenvolvimento web, ciência de dados e automação.',
      },
      {
        name: 'PostgreSQL',
        icon: 'postgresql.svg',
        description: 'Sistema de gerenciamento de banco de dados relacional, conhecido por sua robustez e extensibilidade.',
      },
      {
        name: 'MongoDB',
        icon: 'mongodb.svg',
        description: 'Banco de dados NoSQL orientado a documentos, conhecido por sua flexibilidade e escalabilidade.',
      }
    ],
  },
  {
    title: 'Cloud',
    skills: [
      {
        name: 'AWS',
        icon: 'aws.svg',
        description: 'Plataforma de computação em nuvem da Amazon, oferecendo uma vasta gama de serviços globais.',
      },
      {
        name: 'Azure',
        icon: 'azure.svg',
        description: 'Serviço de nuvem da Microsoft para construir, testar, implantar e gerenciar aplicações.',
      }
    ],
  },
  {
    title: 'DevOps',
    skills: [
      {
        name: 'Docker',
        icon: 'docker.svg',
        description: 'Plataforma para desenvolver, implantar e executar aplicações em contêineres, garantindo consistência.',
      },
      {
        name: 'Jest',
        icon: 'jest.svg',
        description: 'Framework de teste de JavaScript focado em simplicidade, amplamente usado para testar aplicações React.',
      },
      {
        name: 'Git',
        icon: 'git.svg',
        description: 'Sistema de controle de versão distribuído, essencial para o rastreamento de alterações no código.',
      },
      {
        name: 'Jenkins',
        icon: 'jenkins.svg',
        description: 'Servidor de automação de código aberto para CI/CD, ajudando a construir, testar e implantar projetos.',
      },
    ],
  },
];
export {};