export const INTRO_TEXT =
  "Desenvolvedor Full Stack especializado em desenvolvimento web, com experiência em projetos relacionados a P&D, Produção e Gerenciamento Administrativo/Logístico. Tenho conhecimento em Javascript, Typescript, NodeJS, ReactJS, AngularJS, React Native, MongoDB, MySQL, além de várias bibliotecas relacionadas a estes.";

export const EDUCATION = [
  {
    key: "fne-em",
    name: "Fundação Nokia de Ensino (agora Fundação Mathias Machline)",
    period: "Fevereiro 2011 - Dezembro 2013",
    formation: "Ensino Médio - Técnico em Telecomunicações",
    description:
      "Técnicas relacionadas a telecomunicações, além de temas relacionados a programação, eletrônica digital e analógica",
  },
  {
    key: "ufam-b",
    name: "Universidade Federal do Amazonas",
    period: "Abril 2014 - Novembro 2021",
    formation: "Bacharelado - Engenharia da Computação",
    description:
      "O profissional de engenharia da computação tem como objetivos projetar sistemas computacionais na parte de software e até mesmo na parte de hardware. Na graduação pude obter conhecimentos técnicos relacionandos a linguagem de programação e engenharia de software, além de desenvolver habilidades interpessoais, como a proatividade, trabalho em equipe e lidar com prazos e entregas",
  },
];

export const EXPERIENCE = [
  {
    id: "fne-fc",
    name: "Fundação Nokia de Ensino (agora Fundação Mathias Machline)",
    role: "Estagiário",
    period: "Abril 2014 - Fevereiro 2015",
    description:
      "Participação em encubadora de projetos mobile para Windows Phone",
    activities: [
      "Criação de logo, paleta de cores e identidade visual",
      "Análise de mercado",
      "Criação de protótipos de telas do sistema",
      "Desenvolvimento das telas do sistema",
      "Integração com APIs de terceiros (Facebook) para autenticação de dados",
    ],
    skills: ["C#", "API REST"],
  },
  {
    id: "icts",
    name: "Grupo ICTS",
    role: "Analista de Desenvolvimento de Sistemas",
    period: "Maio 2019 - Novembro 2024",
    description:
      "Desenvolvimento de sistemas web para utilização em produção, logística, P&D e administração",
    activities: [
      "Desenvolvimento de telas de sistemas web de acordo com modelos feitos por designers",
      "Criação de componentes específicos e/ou reutilizáveis, de fácil manutenção e adição de novas ferramentas no mesmo (criando do zero, ou utilizando bibliotecas como Material UI e Bootstrap)",
      "Identificação e correção de bugs, bem como criação de testes unitários",
      "Criação de Single Page Applications",
      "Utilização de bibliotecas de gerenciamento de estados (Redux e Redux Saga)",
      "Utilização de hooks do React para gerenciamento de estados e atualização de componentes (useMemo, useContext e useCallback)",
      "Utilização de vários tipos de estilização (css, sass, styled components, etc.)",
      "Integração com API fornecidas pelo servidor da aplicação, ou APIs de terceiros",
      "Criação de CRUDs para o servidor",
      "Criação de interfaces para APIs, sendo possível fácil integração entre frontend e backend",
      "Resolução de bugs e aprimoramento de performance",
      "Otimização e manutenção de banco de dados no cliente",
      "Participação em deploys no cliente",
      "Comunicação ativa entre desenvolvedores de outras features (frontend e backend)",
      "Versionamento de código, criação e revisão de merge requests utilizando a ferramenta Git",
      "Uso de metodologias ágeis de gerenciamento de projetos (Scrum)",
      "Proatividade, comunicação, trabalho em equipe",
    ],
    skills: [
      "javascript",
      "typescript",
      "html",
      "css",
      "react",
      "node",
      "sql",
      "jest",
      "gitlab",
      "scrum",
      "docker",
      "redux",
      "redux-saga",
      "context-api",
      "material-ui",
      "styled-comps",
      "sass",
      "nestjs",
      "mongodb",
      "API REST",
    ],
  },
];

export const PROJECTS = [
  {
    id: "friend-car",
    icon: "bx bxs-car",
    name: "Friend Car",
    description:
      "Criação e desenvolvimento de startup relacionada a mobilidade urbana: criação de startup com o objetivo de permitir que pessoas possam pedir e oferecer caronas caso ambas tenham o mesmo destino",
    activities: [
      "Criação de logo, paleta de cores e identidade visual",
      "Análise de mercado",
      "Criação de protótipos de telas do sistema",
      "Desenvolvimento das telas do sistema",
      "Integração com APIs de terceiros (Facebook) para autenticação de dados",
    ],
    skills: ["C#", "API REST"],
    mainSkills: [{ name: "C#", className: "devicon-csharp-plain" }],
    period: "Abril 2014 - Fevereiro 2015",
    links: [],
  },
  {
    id: "medmob",
    icon: "bx bx-plus-medical",
    name: "MedMob",
    description:
      "Aplicativo para solicitação de consultas médicas - o MedMob tem como objetivo principal permitir a um usuário solicitar uma consulta, definir um local para que a mesma ocorra, e permitir a um médico buscar, aceitar ou rejeitar consultas.",
    period: "Janeiro 2021 - Novembro 2021",
    skills: [
      "react native",
      "nodeJS",
      "mongodb",
      "javascript",
      "typescript",
      "redux",
      "redux-saga",
      "expo",
      "google maps API",
      "AWS SNS",
    ],
    mainSkills: [
      { name: "React Native", className: "devicon-react-original" },
      { name: "NodeJS", className: "devicon-nodejs-plain" },
      { name: "MongoDB", className: "devicon-mongodb-plain" },
    ],
    activities: [],
    links: [
      {
        icon: "bx bxs-graduation",
        url: "https://riu.ufam.edu.br/handle/prefix/5982",
        title: "Repositório UFAM",
      },
    ],
  },
  {
    id: "home-finances",
    icon: "bx bxs-credit-card-alt",
    name: "Home Finances",
    description:
      "O projeto tem como objetivo ser um gerenciador de despesas individuais. Foi utilizado o AngularJS no frontend, e o NestJS no backend, além do MySQL como banco de dados",
    period: "Janeiro 2023 - em andamento",
    skills: [
      "angular",
      "nestJS",
      "mysql",
      "javascript",
      "typescript",
      "CSS",
      "HTML",
      "docker",
    ],
    mainSkills: [
      { name: "AngularJS", className: "devicon-angularjs-plain" },
      { name: "NestJS", className: "devicon-nestjs-original" },
      { name: "MySQL", className: "devicon-mysql-original" },
    ],
    links: [
      {
        icon: "devicon-github-original",
        url: "https://github.com/roddsantos/home-finances",
        title: "Github FrontEnd",
      },
      {
        icon: "devicon-github-original backend",
        url: "https://github.com/roddsantos/home-finances-backend",
        title: "Github BackEnd",
      },
    ],
  },
  {
    id: "portfolio",
    icon: "bx bxs-user",
    name: "Portfolio",
    description:
      "Portfólio com resumo acadêmico e profissional. Feito utilizando React + NextJs e TailwindCSS",
    period: "Dezembro 2024 - Janeiro 2025",
    skills: ["react", "nextJS", "tailwindCSS", "HTML"],
    mainSkills: [
      { name: "NextJS", className: "devicon-nextjs-original-wordmark" },
      { name: "TailwindCSS", className: "devicon-tailwindcss-original" },
      { name: "HTML", className: "devicon-html5-plain" },
    ],
    links: [
      {
        icon: "devicon-github-original",
        url: "https://github.com/roddsantos/portfolio",
        title: "Repositório Github",
      },
    ],
  },
];

export const SKILLS = [
  { name: "TypeScript", className: "devicon-typescript-plain" },
  { name: "CSS", className: "devicon-css3-plain" },
  { name: "HTML", className: "devicon-html5-plain" },
  { name: "ReactJS", className: "devicon-react-plain" },
  { name: "AngularJS", className: "devicon-angularjs-plain" },
  { name: "NestJS", className: "devicon-nestjs-original" },
  { name: "NodeJS", className: "devicon-nodejs-plain" },
  { name: "Redux", className: "devicon-redux-original" },
  { name: "React Native", className: "devicon-react-original" },
  { name: "MySQL", className: "devicon-mysql-original" },
  { name: "MongoDB", className: "devicon-mongodb-plain" },
  { name: "Docker", className: "devicon-docker-plain" },
  { name: "Git", className: "devicon-git-plain" },
  { name: "Jest", className: "devicon-jest-plain" },
];
