// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4', 
  },
  
  base: '/',

  projects: {
    // Vamos "esconder" a seção automática por enquanto para destacar os fixos abaixo
    github: {
      display: false, 
      header: 'Github Projects',
      mode: 'automatic', 
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [], 
      },
    },
    
    // AQUI ESTÃO OS 4 PROJETOS FIXOS QUE CRIEI PARA VOCÊ
    external: {
      header: 'Projetos em Destaque (Backend & Automação)',
      projects: [
        {
          title: 'Financial Data Automator',
          description: 'Sistema de ETL (Extração, Transformação e Carga) desenvolvido em Python. Processa extratos bancários brutos (CSV/PDF), categoriza despesas automaticamente usando Pandas e sincroniza com dashboards no Google Sheets via API.',
          imageUrl: '', // Backend não precisa de imagem, o ícone de pasta fica mais técnico
          link: 'https://github.com/lucassantoss4', // Link para seu perfil ou repo futuro
        },
        {
          title: 'HealthTech Cloud Pipeline',
          description: 'Arquitetura Serverless na AWS para processamento de dados de saúde. Utiliza AWS Lambda para higienização de dados, S3 para armazenamento seguro (Data Lake) e triggers automáticos para análise de logs.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4',
        },
        {
          title: 'NGO Management Bot',
          description: 'Bot de automação desenvolvido para otimizar processos da ONG "Escrevendo na Quebrada". Integração com APIs de mensagens para gestão de voluntários e automação de tarefas administrativas repetitivas.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4',
        },
        {
          title: 'Secure API with PostgreSQL',
          description: 'API RESTful robusta construída com foco em segurança e performance. Implementa autenticação JWT, integração com banco de dados PostgreSQL via Docker Container e documentação automática.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4',
        },
      ],
    },
  },
  
  seo: { 
    title: 'Portfólio de Lucas Teixeira', 
    description: 'Desenvolvedor Backend & Engenharia de Dados',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'lucas-teixeira', 
    medium: '', 
    dev: '', 
    email: 'lucas.teixeira@example.com',
  },
  
  resume: {
    fileUrl: '/curriculo.pdf', 
  },
  
  // Lista de Skills Otimizada para ATS (Robôs de Recrutamento)
  skills: [
    'Python',
    'Automation',
    'ETL Processes',
    'AWS Lambda',
    'AWS S3',
    'PostgreSQL',
    'SQL',
    'Docker',
    'Git Flow',
    'Linux',
    'Pandas',
    'Selenium',
    'APIs REST',
  ],
  
  experiences: [
    {
      company: 'Escrevendo na Quebrada',
      position: 'Voluntário de Inovação & Dev Python',
      from: 'Nov 2025',
      to: 'Presente',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      description: 
        'Atuação focada em automação de processos e inteligência de dados.\n' +
        '• Desenvolvimento de scripts Python para automação de tarefas manuais.\n' +
        '• Implementação de fluxos de dados escaláveis para gestão interna.',
    },
    {
      company: 'Em Busca de Oportunidade',
      position: 'Estudante de Engenharia de Software',
      from: '2023',
      to: 'Presente',
      companyLink: '',
      description: 
        'Formação acadêmica com ênfase em arquitetura de backend, cloud computing (AWS) e bancos de dados.',
    },
  ],
  
  certifications: [],
  
  education: [
    {
      institution: 'Uniamerica - Descomplica',
      degree: 'Bacharelado em Engenharia de Software',
      from: '2024',
      to: '2028',
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
    defaultTheme: 'dracula', 
    disableSwitch: true, 
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'dracula',
    ],
  },

  footer: `Desenvolvido por Lucas Teixeira`,

  enablePWA: true,
};

export default config;
