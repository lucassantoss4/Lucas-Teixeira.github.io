// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4', 
  },
  
  base: '/',

  projects: {
    github: {
      display: false, // <-- MUDEI AQUI: Isso desliga a seção "Repositórios em Destaque"
      header: 'Repositórios em Destaque',
      mode: 'manual', 
      automatic: {
        sortBy: 'stars',
        limit: 4, 
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
          'lucassantoss4/devradar',
          'lucassantoss4/innovation-projects-manager',
          'lucassantoss4/corporate-automation-suite',
          'lucassantoss4/teams-comms-orchestrator',
        ],
      },
    },
    
    external: {
      header: 'Projetos de Arquitetura & Automação',
      projects: [
        {
          title: 'DevRadar (Market Intelligence Platform)',
          description: 'Plataforma de monitoramento automatizado de editais e eventos usando OCR (docling) e Web Scraping (crawl4ai). Arquitetura backend baseada em Flask, orquestrada via Kestra e 100% conteinerizada com Docker.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/devradar',
        },
        {
          title: 'Innovation Projects Manager (CRUD)',
          description: 'Sistema de gestão de projetos desenvolvido para substituir planilhas complexas. Centraliza dados em banco SQL, eliminando redundância e permitindo geração de dashboards em tempo real.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/innovation-projects-manager',
        },
        {
          title: 'Corporate Automation Suite (RPA)',
          description: 'Conjunto de algoritmos Python para automação de ciclo de vida de usuários (Onboarding/Offboarding) e Web Scraping para monitoramento de editais de inovação.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/corporate-automation-suite',
        },
        {
          title: 'Teams Comms Orchestrator',
          description: 'Solução Low-code com Power Automate para orquestrar notificações críticas em massa via Microsoft Teams. Aumentou a taxa de leitura e reduziu ruído de e-mails.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/teams-comms-orchestrator',
        },
      ],
    },
  },
  
  seo: { 
    title: 'Portfólio de Lucas Teixeira', 
    description: 'Engenheiro de Software em formação com ênfase em Backend, Cloud Computing e Automação (Python/AWS).',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'lucas-t-santos', 
    medium: '', 
    dev: '', 
    email: 'contadulucas@gmail.com', 
  },
  
  resume: {
    fileUrl: '/CV_python.pdf', 
  },
  
  skills: [
    'Python',
    'Flask / FastAPI',
    'SQL',
    'PostgreSQL',
    'Shell Scripting',
    'Selenium / Playwright',
    'Pandas',
    'Numpy',
    'Data Analysis',
    'AWS Lambda',
    'AWS S3',
    'Docker',
    'Git / GitHub',
    'CI/CD Pipelines',
    'Linux Server',
    'Scrum',
    'Clean Code',
  ],
  
experiences: [
    {
      company: 'Grupo Elfa',
      position: 'Estagiário Automação de Processos (Inovação & IA)',
      from: 'Julho 2024',
      to: 'Presente',
      companyLink: '',
      description: 'Desenvolvimento de soluções para eficiência operacional e transformação digital, utilizando Python e Inteligência Artificial. Atuo na centralização de dados via APIs (eliminando planilhas), automação de onboarding/offboarding com auditoria de acessos, Web Scraping para inteligência de mercado e orquestração de comunicação corporativa via RPA.',
    },
    {
      company: 'Escrevendo na Quebrada',
      position: 'Líder de Automação de Processos',
      from: 'Setembro 2025',
      to: 'Presente',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      description: 'Liderança técnica no desenvolvimento de soluções automatizadas, incluindo mapeamento de processos e Web Scraping de editais públicos de educação. Criação de Chatbot no WhatsApp para atendimento automatizado, integrando fluxos de conversação inteligentes.',
    },
    {
      company: 'Educafro',
      position: 'Professor de Programação Voluntário',
      from: 'Abril 2025',
      to: 'Agosto 2025',
      companyLink: '',
      description: 'Ensino de lógica de programação em Python. Desenvolvi uma automação interna para correção de notas, reduzindo o tempo administrativo em 50%.',
    },
  ],
  
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      body: 'Amazon Web Services (Em preparação)',
      year: '2026',
      link: 'https://aws.amazon.com/certification/',
    },
    {
      name: 'Python for Data Science and Automation',
      body: 'Udemy / Coursera',
      year: '2025',
      link: '',
    },
    {
      name: 'Git & GitHub: Do Zero ao Avançado',
      body: 'Curso Técnico',
      year: '2024',
      link: '',
    },
    {
      name: 'SQL Database Masterclass',
      body: 'Formação Técnica',
      year: '2024',
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
    {
      institution: 'Ensino Técnico Autodidata',
      degree: 'Foco em Automação e Cloud',
      from: 'Continua',
      to: 'Presente',
    },
  ],

  publications: [
    {
      title: 'Na minha máquina funciona: Expondo seu Localhost',
      conferenceName: '', 
      journalName: 'Artigo Técnico',
      authors: 'Lucas Teixeira',
      link: 'https://linkedin.com/in/lucas-t-santos', 
      description: 'Guia sobre como conectar seu ambiente local (localhost) com o mundo real usando Túneis, essencial para testar Webhooks e apresentar projetos. Comparativo técnico entre ngrok (debug), Cloudflare Tunnel (domínios fixos e gratuito) e Localtunnel (open source).',
    },
    {
      title: 'Otimização de Processos com Python e Selenium',
      conferenceName: '', 
      journalName: 'Estudo de Caso',
      authors: 'Lucas Teixeira',
      link: 'https://linkedin.com/in/lucas-t-santos', 
      description: 'Análise de como a automação de scripts reduziu em 40% o tempo operacional de tarefas administrativas. Aborda o uso de bibliotecas como Pandas para manipulação de dados e Selenium para interação web em ambientes corporativos.',
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
    defaultTheme: 'dark', 
    disableSwitch: true, 
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'dark',
    ],
  },

  footer: `Lucas Teixeira © 2026`, 

  enablePWA: true,
};

export default config;
