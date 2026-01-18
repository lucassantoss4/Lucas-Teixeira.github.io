// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4', 
  },
  
  base: '/',

  projects: {
    github: {
      display: true,
      header: 'Projetos em Destaque',
      mode: 'automatic', 
      automatic: {
        sortBy: 'stars',
        limit: 4, 
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [], 
      },
    },
    external: {
      header: 'Projetos de Arquitetura',
      projects: [],
    },
  },
  
  seo: { 
    title: 'Portfólio de Lucas Teixeira', 
    description: 'Engenharia de Software, Automação e Cloud Computing.',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'lucas-teixeira',
    medium: '', 
    dev: '', 
    email: 'lucas@example.com', // Lembre de colocar seu email real aqui
    // Removi redes sociais desnecessárias para manter o visual limpo
  },
  
  resume: {
    fileUrl: '/curriculo.pdf', 
  },
  
  // SKILLS: Limpo, sem ícones, apenas as tecnologias
  skills: [
    'Python',
    'Automation',
    'AWS Lambda',
    'AWS S3',
    'PostgreSQL',
    'SQL',
    'Docker',
    'Git Flow',
    'CI/CD',
    'Linux',
    'Scrum',
    'Pandas',
    'Selenium',
    'Data Analysis',
  ],
  
  experiences: [
    {
      company: 'Escrevendo na Quebrada',
      position: 'Voluntário de Inovação & Dev Python',
      from: 'Novembro 2025',
      to: 'Presente',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      description: 
        'Liderança técnica em projetos de impacto social focados em automação.\n' +
        '• Desenvolvimento de scripts em Python para automatizar a coleta e processamento de dados administrativos.\n' +
        '• Implementação de melhorias em processos internos utilizando conceitos de cultura ágil e inovação.\n' +
        '• Manutenção de repositórios e documentação técnica para garantir a continuidade dos projetos.',
    },
    {
      company: 'Em Busca de Oportunidade',
      position: 'Estudante de Engenharia de Software',
      from: '2023',
      to: 'Presente',
      companyLink: '',
      description: 
        'Desenvolvimento focado em Backend, Microsserviços e Arquitetura em Nuvem.\n' +
        '• Criação de projetos práticos utilizando AWS (S3, Lambda, EC2) para entender escalabilidade.\n' +
        '• Estudo aprofundado de bancos de dados relacionais (PostgreSQL) e otimização de queries SQL.\n' +
        '• Prática constante de algoritmos e estruturas de dados em Python.',
    },
  ],
  
  // PREENCHI: Cursos relevantes para seu perfil
  certifications: [
    {
      name: 'AWS Cloud Practitioner (Em andamento)',
      body: 'Amazon Web Services',
      year: '2026',
      link: 'https://aws.amazon.com/certification/',
    },
    {
      name: 'Python for Data Science & Automation',
      body: 'Curso Técnico Complementar',
      year: '2025',
      link: '',
    },
    {
      name: 'Inglês Técnico para TI',
      body: 'Formação de Idiomas',
      year: 'Em andamento',
      link: '',
    },
  ],
  
  education: [
    {
      institution: 'Uniamerica - Descomplica',
      degree: 'Bacharelado em Engenharia de Software',
      from: '2024',
      to: '2028',
    },
    // Adicionei uma formação complementar genérica para encher o currículo
    {
      institution: 'Formação Autodidata & Bootcamps',
      degree: 'Foco em Cloud Computing e DevOps',
      from: '2023',
      to: 'Presente',
    },
  ],
  
  blog: {
    source: 'dev',
    username: '', 
    limit: 2,
  },
  
  googleAnalytics: {
    id: '',
  },
  
  hotjar: { id: '', snippetVersion: 6 },
  
  themeConfig: {
    defaultTheme: 'black', // TEMA PRETO ATIVADO
    disableSwitch: true, // Impede que o usuário mude o tema
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'black', // Apenas o tema preto disponível na lista principal
      'dark',
    ],
  },

  footer: `Lucas Teixeira © 2026`, 

  enablePWA: true,
};

export default config;
