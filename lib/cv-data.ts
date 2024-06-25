type CVData = {
  header: {
    title: string;
    subtitle: string;
  };
  contact: {
    email: string;
  };
  keySkills: string[];
  workExperience: WorkExperience[];
};

export type WorkExperience = {
  title: string;
  years: string;
  jobTitle: string;
  description: string[];
  bulletPoints: string[];
  keywords: string[];
  projects: Project[];
  numOfProjectsToShow?: number;
  showMoreButtonText?: string;
};

export type Project = {
  name: string;
  jobTitle: string;
  description: string[];
  bulletPoints: string[];
  keywords: string[];
  website?: string;
  github?: string;
};

const cvData: CVData = {
  header: {
    title: "Aleksi Kaistinen",
    subtitle:
      "Software developer with a passion for building slick user experiences and robust backends.",
  },
  contact: {
    email: "aleksi.kaistinen@allu.io",
  },
  keySkills: [
    "Software development",
    "Frontend",
    "Backend",
    "Typescript",
    "React",
    "Next.js",
  ],
  workExperience: [
    {
      title: "Freepress.ai",
      years: "2023-2024",
      jobTitle: "Co-founder / Software Developer",
      description: [
        "In the summer of 2023, I co-founded a startup to develop an AI-powered news aggregator that generates concise multi-source summaries of daily news events.",
      ],
      bulletPoints: [
        "Developed a web app using React and Next.js.",
        "Developed serverless event-based backend services.",
        "Implemented OpenAI GPT-o integration.",
        "Developed an embedding-based system for detecting similar news articles.",
      ],
      keywords: [
        "Typescript",
        "React",
        "Next.js",
        "Tailwind",
        "SQL",
        "Langchain",
        "OpenAI API",
        "Vector DB",
        "Vercel",
        "Event driven architecture",
      ],
      projects: [],
    },
    {
      title: "Digia Oyj",
      years: "2018-2023",
      jobTitle: "Senior Software Developer",
      description: [
        "As a member of Digia's Skill Force team, I worked as a consultant for various large-scale customers. My role in customer teams varied from Senior Software Developer to Lead Frontend Developer.",
      ],
      bulletPoints: [],
      keywords: [],
      numOfProjectsToShow: 3,
      showMoreButtonText: "Show more Digia projects",
      projects: [
        {
          name: "SOK / Sokos.fi",
          jobTitle: "Senior Fullstack Developer",
          description: [
            "I worked as a member of a team building a one of the biggest e-commerce sites in Finland.",
          ],
          bulletPoints: [
            "Developed an e-commerce storefront as a Next.js application.",
            "Implemented Adobe Commerce integration through a serverless API gateway.",
            "Collaborated with cross-functional teams for rapid deployment and continuous integration.",
          ],
          keywords: [
            "E-commerce",
            "Next.js",
            "React",
            "Typescript",
            "Python",
            "GraphQL",
            "AWS",
            "Serverless",
          ],
          website: "https://sokos.fi/",
        },
        {
          name: "Stockmann / Crazy Days",
          jobTitle: "Senior Fullstack Developer",
          description: [
            "Twice a year, Stockmann, one of the largest retailers in Finland, launches a campaign e-commerce site, open for one week, with daily changing offers and discounts.",
            "Known for its large amount of customers and fast pace, this is one of the most demanding e-commerce projects in Finland.",
            "I was part of the team during four separate campaigns.",
          ],
          bulletPoints: [
            "Worked on ab e-commerce storefront and admin interface using React.",
            "Worked on backend services using Clojure and PostgresSQL.",
            "Monitoring and on-call during the campaign.",
            "Implemented load testing using Gatling.",
          ],
          keywords: ["E-commerce", "React", "Javascript", "Clojure", "AWS"],
          website: "https://hullutpaivat.com/",
        },
        {
          name: "Helsinki Design System",
          jobTitle: "Frontend Developer",
          description: [
            "Worked as a developer on an award-winning open source design system for the City of Helsinki.",
          ],
          bulletPoints: [
            "Implemented components for a highly accessible, audited, UI component library for React.",
            "Provided support for projects using Helsinki Design System.",
          ],
          keywords: ["React", "Typescript", "Accessibility", "Open source"],
          website: "https://hds.hel.fi/",
          github: "https://github.com/City-of-Helsinki/helsinki-design-system",
        },
        {
          name: "Digivisio 2030",
          jobTitle: "Frontend Lead",
          description: [
            "I worked as a Frontend Lead for a Finnish education institutions' joint programme aiming to create a better future for digital learning.",
          ],
          bulletPoints: [
            "Optimized development processes through tooling improvements.",
            "Initialized processes for design system based UI development.",
          ],
          keywords: ["React", "Typescript", "Storybook", "Tooling"],
        },
        {
          name: "Yliopiston Apteekki",
          jobTitle: "Senior Software Developer",
          description: ["Implemented various microservices for a pharmacy."],
          bulletPoints: [
            "Implemented reimbursement calculator service.",
            "Implemented product search service.",
            "Implemented refill reminder service for pharmacy customers.",
          ],
          keywords: [
            "Typescript",
            "Node.js",
            "Kubernetes",
            "Elasticsearch",
            "Serverless",
            "Google Cloud",
          ],
        },

        {
          name: "A-Lehdet / Lily.fi",
          jobTitle: "Senior Software Developer",
          description: [
            "Migrated an online blogging service Lily.fi from Drupal to WordPress.",
          ],
          bulletPoints: [
            "Implemented a consumer blogging service on top of headless multi-site WordPress.",
            "Created a process to migrate thousands of blog websites from Drupal to WordPress.",
          ],
          keywords: ["WordPress", "Drupal", "React", "Javascript", "PHP"],
        },
        {
          name: "Holiday Club Resorts",
          jobTitle: "Senior Software Developer",
          description: [
            "Worked as a software developer in a team building a refreshed website for a hotel/resort company.",
          ],
          bulletPoints: [
            "Implemented website and reservation interface using React.",
          ],
          keywords: ["React", "Javascript"],
        },
        {
          name: "Oulun seudun liikenne / Reittiopas",
          jobTitle: "Senior Software Developer",
          description: [],
          bulletPoints: [
            "Implemented features and bug fixes for a route planning application.",
          ],
          keywords: ["React", "Javascript", "GraphQL"],
          website: "https://reittiopas.osl.fi/",
        },
        {
          name: "Port of Helsinki",
          jobTitle: "Senior Software Developer",
          description: [],
          bulletPoints: [
            "Implemented an offline-capable progressive web app for port customers.",
          ],
          keywords: ["React", "PWA", "Tailwind", "Azure"],
        },
      ],
    },
    {
      title: "Allu.io",
      years: "2004-",
      jobTitle: "Freelance Software Developer",
      description: [
        "I might occasionally take on interesting side projects or freelance development jobs.",
      ],
      bulletPoints: [],
      keywords: [],
      projects: [
        {
          name: "Nolla Cabins",
          jobTitle: "Software Developer",
          description: [],
          bulletPoints: [
            "Rebuilt and modernized an existing WordPress site with Next.js and Sanity CMS.",
            "Implemented a versatile booking management system to support business scaling.",
          ],
          keywords: ["Next.js", "Typescript", "CMS", "Vercel"],
          website: "https://nollacabins.com/",
        },
      ],
    },
    {
      title: "Mediasignal Oy",
      years: "2013-2018",
      jobTitle: "Software Developer",
      description: [
        "Worked as a software developer for consulting agency Mediasignal. I was responsible for developing customer solutions, usually as the sole developer on projects.",
      ],
      bulletPoints: [],
      keywords: [],
      numOfProjectsToShow: 0,
      showMoreButtonText: "Show selected Mediasignal projects",
      projects: [
        {
          name: "Oras",
          jobTitle: "Software Developer",
          description: [],
          bulletPoints: [
            "Developed oras.com website.",
            "Developed brochure generation system with PIM integration.",
            "Implemented fast product search with Elasticsearch.",
          ],
          keywords: ["React", "Typescript", "Node.js", "PHP", "CMS"],
        },
        {
          name: "Akateeminen Kirjakauppa",
          jobTitle: "Software Developer",
          description: [],
          bulletPoints: [
            "Developed akateeminen.com website.",
            "Implemented fast product search with Elasticsearch.",
          ],
          keywords: [
            "E-commerce",
            "React",
            "Javascript",
            "Node.js",
            "Elasticsearch",
            "PHP",
            "CMS",
          ],
        },
        {
          name: "Finnpark",
          jobTitle: "Software Developer",
          description: [],
          bulletPoints: [
            "Built a website including a parking location map application.",
            "Implemented various parking related backend services and UIs.",
          ],
          keywords: ["React", "Javascript", "Node.js", "Java", "PHP", "CMS"],
        },
        {
          name: "HOK Elanto",
          jobTitle: "Software Developer",
          description: [],
          bulletPoints: [
            "Implemented an online reservation system for a fashion consultation in Sokos.",
            "Implemented various restaurant websites.",
            "Implemented various campaign sites and games.",
          ],
          keywords: ["Javascript", "PHP", "CMS"],
        },
      ],
    },
  ],
};

export default cvData;
