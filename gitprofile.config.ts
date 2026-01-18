// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Projetos no GitHub',
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
      header: 'Projetos de Destaque',
      projects: [
        {
          title: 'Automação de Controle Financeiro',
          description: 'Desenvolvimento de uma ferramenta de automação para coleta e análise de despesas financeiras em Python, com integração de banco de dados PostgreSQL.',
          imageUrl: 'https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg',
          link: 'https://github.com/lucassantoss4',
        },
      ],
    },
  },
  seo: {
    title: 'Portfólio | Lucas Teixeira',
    description: 'Estudante de Engenharia de Software & Desenvolvedor de Automações',
    imageURL: '',
  },
  social: {
    linkedin: 'lucas-teixeira',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    website: '',
    phone: '', 
    email: 'seu-email@gmail.com',
  },
  resume: {
    fileUrl: '/curriculo.pdf',
  },
  skills: [
    'PYTHON (Pandas, Numpy, Selenium, BeautifulSoup)',
    'SQL (PostgreSQL, MySQL)',
    'NUVEM (AWS S3, Lambda, DynamoDB)',
    'CONTROLE DE VERSÃO (Git, GitHub)',
    'DOCKER & CONTEINERIZAÇÃO',
    'VISUALIZAÇÃO DE DADOS (Power BI, Matplotlib)',
    'AUTOMAÇÃO & SCRAPING',
    'CONCEITOS DE HEALTH IT (TI em Saúde)',
    'PIPELINES DE DEVOPS',
  ],
  experiences: [
    {
      company: 'Escrevendo na Quebrada',
      position: 'Voluntário de Inovação & Desenvolvedor Python',
      from: 'Novembro de 2025',
      to: 'Presente',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      description: 'Liderando iniciativas de inovação tecnológica no setor social.\n• Desenvolvimento de scripts de automação para otimização de fluxos de trabalho.\n• Implementação de soluções de software utilizando Python para análise de dados internos.\n• Aplicação de metodologias ágeis (Scrum) para gestão de tecnologia.',
    },
    {
      company: 'Grupo Elfa',
      position: 'Estagiário de Engenharia de Software - Inovação & IA',
      from: '2024',
      to: 'Presente',
      companyLink: 'https://grupoelfa.com.br/',
      description: 'Atuação em projetos de Inovação e Inteligência Artificial no setor de saúde (Health IT).\n• Auxílio no desenvolvimento de ferramentas para eficiência operacional.\n• Estudo e aplicação de infraestrutura em nuvem (AWS) e bancos de dados relacionais.',
    },
  ],
  certifications: [
    {
      name: 'AWS Cloud Practitioner',
      body: 'Amazon Web Services',
      year: '2025',
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
  ],
  publications: [],
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Feito com ❤️ por Lucas Teixeira`,
};

export default config;
