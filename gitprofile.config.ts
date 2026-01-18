// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
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
      header: 'Key Projects',
      projects: [
        {
          title: 'Automated Expense Tracker',
          description: 'Desenvolvimento de uma ferramenta de automação para coleta e análise de despesas financeiras em Python, com integração de banco de dados PostgreSQL.',
          imageUrl: 'https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg',
          link: 'https://github.com/lucassantoss4',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio | Lucas Teixeira',
    description: 'Software Engineering Student & Automation Developer',
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
    email: 'contadulucas@gmail.com',
  },
  resume: {
    fileUrl: '/CurrículoDadosIA.pdf',
  },
  skills: [
    'PYTHON (Pandas, Numpy, Selenium, BeautifulSoup)',
    'SQL (PostgreSQL, MySQL)',
    'CLOUD (AWS S3, Lambda, DynamoDB)',
    'VERSION CONTROL (Git, GitHub)',
    'DOCKER & CONTAINERIZATION',
    'DATA VISUALIZATION (Power BI, Matplotlib)',
    'AUTOMATION & SCRAPING',
    'HEALTH IT CONCEPTS',
    'DEVOPS PIPELINES',
  ],
  experiences: [
    {
      company: 'Escrevendo na Quebrada',
      position: 'Innovation Volunteer & Python Developer',
      from: 'November 2025',
      to: 'Present',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      description: 'Liderando iniciativas de inovação tecnológica em ambiente de terceiro setor.\n• Desenvolvimento de scripts de automação para otimização de fluxos de trabalho.\n• Implementação de soluções de software utilizando Python para análise de dados internos.',
    },
    {
      company: 'Grupo Elfa',
      position: 'Software Engineering Intern',
      from: '2024',
      to: 'Present',
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
      degree: 'Bachelor in Software Engineering',
      from: '2024',
      to: '2028',
    },
  ],
  // ESTAS SEÇÕES SÃO OBRIGATÓRIAS PARA NÃO DAR O ERRO 'ID'
  publications: [],
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '', // Mantenha isso aqui, mesmo vazio
  },
  hotjar: {
    id: '', // Mantenha isso aqui, mesmo vazio
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
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
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
  footer: `Made with ❤️`,
};

export default config;
