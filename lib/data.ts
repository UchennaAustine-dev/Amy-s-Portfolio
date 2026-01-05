export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  completedDate: string;
  category: string;
  teamSize: string;
  primaryLanguage: string;
  database: string;
  architecture: string;
  deployment: string;
  testing: string;
  cicd: string;
  content?: string; // Added optional content property
  features: {
    title: string;
    description: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "Swiftlify",
    slug: "swiftlify",
    description:
      "A trading dashboard application built with TypeScript, providing real-time trading insights and analytics.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["TypeScript", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/Amidathtc/Swiftlify",
    completedDate: "2025",
    category: "Web Application",
    teamSize: "Solo",
    primaryLanguage: "TypeScript",
    database: "N/A",
    architecture: "Full Stack",
    deployment: "N/A",
    testing: "N/A",
    cicd: "N/A",
    features: [
      {
        title: "Real-time Analytics",
        description: "Provides live trading data and performance metrics.",
      },
      {
        title: "User Dashboard",
        description:
          "Interactive interface for monitoring trades and portfolio.",
      },
    ],
  },
  {
    title: "Loan Management System",
    slug: "loan-management-system",
    description:
      "A comprehensive loan management system for handling loan applications, approvals, and tracking.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["TypeScript", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Amidathtc/Loan-Management-system",
    completedDate: "2025",
    category: "Backend Application",
    teamSize: "Solo",
    primaryLanguage: "TypeScript",
    database: "MongoDB",
    architecture: "Monolithic",
    deployment: "N/A",
    testing: "Jest",
    cicd: "N/A",
    features: [
      {
        title: "Loan Processing",
        description: "Automated loan application and approval workflow.",
      },
      {
        title: "Tracking System",
        description: "Real-time tracking of loan status and payments.",
      },
    ],
  },
  {
    title: "PortBlog",
    slug: "portblog",
    description:
      "A personal blog platform for sharing thoughts, projects, and technical insights.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Amidathtc/portBlog",
    completedDate: "2025",
    category: "Web Application",
    teamSize: "Solo",
    primaryLanguage: "TypeScript",
    database: "N/A",
    architecture: "Full Stack",
    deployment: "Vercel",
    testing: "N/A",
    cicd: "GitHub Actions",
    features: [
      {
        title: "Blog Posts",
        description:
          "Create and publish technical blog posts with markdown support.",
      },
      {
        title: "Portfolio Integration",
        description: "Showcase projects and skills alongside blog content.",
      },
    ],
  },
  {
    title: "Smart Wave",
    slug: "smart-wave",
    description:
      "An intelligent application for data processing and wave analysis.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["TypeScript", "Node.js", "Python"],
    liveUrl: "#",
    githubUrl: "https://github.com/Amidathtc/Smart-Wave",
    completedDate: "2024",
    category: "Data Processing",
    teamSize: "Solo",
    primaryLanguage: "TypeScript",
    database: "PostgreSQL",
    architecture: "Microservices",
    deployment: "Docker",
    testing: "Jest",
    cicd: "N/A",
    features: [
      {
        title: "Wave Analysis",
        description:
          "Advanced algorithms for processing and analyzing wave data.",
      },
      {
        title: "Data Visualization",
        description: "Interactive charts and graphs for data insights.",
      },
    ],
  },
  {
    title: "SpectraDash Backend",
    slug: "spectradash-be",
    description:
      "Backend API for SpectraDash, a dashboard application with comprehensive data management.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["TypeScript", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/Amidathtc/SpectraDashBE",
    completedDate: "2024",
    category: "Backend API",
    teamSize: "Solo",
    primaryLanguage: "TypeScript",
    database: "MongoDB",
    architecture: "REST API",
    deployment: "Heroku",
    testing: "Supertest",
    cicd: "GitHub Actions",
    features: [
      {
        title: "Authentication",
        description: "Secure user authentication with JWT tokens.",
      },
      {
        title: "Data Management",
        description: "CRUD operations for dashboard data and user profiles.",
      },
    ],
  },
  {
    title: "TestOore",
    slug: "test-oore",
    description:
      "A testing framework and application for automated software testing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["TypeScript", "Jest", "Puppeteer"],
    liveUrl: "#",
    githubUrl: "https://github.com/Amidathtc/TestOore",
    completedDate: "2024",
    category: "Testing Tool",
    teamSize: "Solo",
    primaryLanguage: "TypeScript",
    database: "N/A",
    architecture: "Utility",
    deployment: "NPM",
    testing: "Self-testing",
    cicd: "N/A",
    features: [
      {
        title: "Automated Testing",
        description: "Run automated tests for web applications and APIs.",
      },
      {
        title: "Reporting",
        description: "Generate detailed test reports and coverage analysis.",
      },
    ],
  },
];
