export interface ExperienceItem {
  title: string;
  companyOrInstitution: string;
  location: string;
  period: string;
  summary: string;
  description: string[];
  technologies?: string[];
}

export const professionalExperiences: ExperienceItem[] = [
  {
    title: "Desenvolvedor de Software",
    companyOrInstitution: "IBM",
    location: "São Paulo, SP",
    period: "Jan 2022 - Fev 2025",
    summary: "Atuação como Desenvolvedor de Software na IBM, com foco no desenvolvimento de dashboards interativos e implementação de soluções backend.",
    description: [
      "Desenvolvimento de dashboards interativos com ReactJS, NextJS e TypeScript.",
      "Integração com APIs, relatórios PDF, animações com GSAP e protótipos no Figma.",
      "Implementação de soluções backend com Node.js, MongoDB e PostgreSQL."
    ],
    technologies: ["ReactJS", "NextJS", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "GSAP", "Figma", "APIs"]
  },
  {
    title: "Suporte Técnico Pleno",
    companyOrInstitution: "CDF",
    location: "São Paulo, SP",
    period: "Mai 2020 - Fev 2021",
    summary: "Responsável por atendimento remoto a clientes, resolução de incidentes e manutenção de infraestrutura de TI, aplicando boas práticas de suporte.",
    description: [
      "Atendimento remoto a clientes, resolução de incidentes e manutenção de infraestrutura de TI.",
      "Documentação técnica e aplicação de boas práticas de suporte."
    ]
  },
];

export const academicExperiences: ExperienceItem[] = [
  {
    title: "Graduação - Análise e Desenvolvimento de Sistemas",
    companyOrInstitution: "FIAP - Faculdade de informática e administração paulista",
    location: "São Paulo, SP",
    period: "Fev 2022 - Dez 2023",
    summary: "Formação superior em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento fullstack e engenharia de software moderna.",
    description: [
      "Formação abrangente em lógica de programação, algoritmos e arquitetura de sistemas."
    ],
    technologies: ["ReactJS", "Node.js", "Java", "Spring", "Python", "PostgreSQL", "MongoDB", "TypeScript"]
  },
  {
    title: "Técnico - Sistemas da Informação",
    companyOrInstitution: "CEAP - Centro Educacional Assistencial e Profissionalizante",
    location: "São Paulo, SP",
    period: "Fev 2019 - Dez 2021",
    summary: "Curso técnico em Sistemas da Informação, com base sólida em desenvolvimento web e lógica de programação.",
    description: [
      "Foco em fundamentos de programação, estrutura de dados e introdução ao desenvolvimento web."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python"]
  },
  {
    title: "Técnico - Design Gráfico",
    companyOrInstitution: "SAGA - School of Art Games and Animation",
    location: "São Paulo, SP",
    period: "Fev 2019 - Dez 2021",
    summary: "Formação técnica em Design Gráfico, aprendendo princípios visuais e o uso de ferramentas da área.",
    description: [
      "Estudo de design, composição visual, tipografia e produção de materiais gráficos."
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Figma" , "DaVinci Resolve"]
  },
];

export {};