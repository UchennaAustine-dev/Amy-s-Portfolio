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
    title: "Distributed Task Queue System",
    slug: "distributed-task-queue",
    description:
      "A high-performance distributed task queue system that can process millions of jobs per day with fault tolerance and horizontal scaling capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "Redis", "Docker", "Kubernetes", "Prometheus"],
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2023",
    category: "Backend Infrastructure",
    teamSize: "4 developers",
    primaryLanguage: "Node.js",
    database: "Redis",
    architecture: "Microservices",
    deployment: "Kubernetes",
    testing: "Jest, Supertest",
    cicd: "GitHub Actions",
    features: [
      {
        title: "Horizontal Scaling",
        description:
          "Dynamically scales worker nodes based on queue size and processing demands.",
      },
      {
        title: "Priority Queues",
        description:
          "Supports multiple priority levels to ensure critical tasks are processed first.",
      },
      {
        title: "Failure Recovery",
        description:
          "Implements dead-letter queues and automatic retry mechanisms for failed tasks.",
      },
      {
        title: "Real-time Monitoring",
        description:
          "Provides dashboards and metrics for queue health, processing rates, and error tracking.",
      },
    ],
  },
  {
    title: "Real-time Analytics API",
    slug: "real-time-analytics-api",
    description:
      "A scalable API for collecting, processing, and visualizing real-time analytics data with support for custom event tracking and dashboards.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "WebSockets",
    ],
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2022",
    category: "Data Processing",
    teamSize: "3 developers",
    primaryLanguage: "Python",
    database: "TimescaleDB",
    architecture: "Event-driven",
    deployment: "AWS ECS",
    testing: "Pytest",
    cicd: "CircleCI",
    features: [
      {
        title: "Custom Event Tracking",
        description:
          "Flexible schema for tracking any type of user or system event.",
      },
      {
        title: "Real-time Processing",
        description:
          "Processes and aggregates data in real-time with minimal latency.",
      },
      {
        title: "Time-series Analysis",
        description:
          "Optimized storage and querying for time-series data with automatic partitioning.",
      },
      {
        title: "WebSocket Streaming",
        description:
          "Pushes real-time updates to connected clients for live dashboards.",
      },
    ],
  },
  {
    title: "E-commerce Microservices",
    slug: "ecommerce-microservices",
    description:
      "A suite of microservices powering an e-commerce platform, including inventory management, payment processing, and order fulfillment.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "Express", "MongoDB", "RabbitMQ", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2022",
    category: "E-commerce",
    teamSize: "5 developers",
    primaryLanguage: "Node.js",
    database: "MongoDB",
    architecture: "Microservices",
    deployment: "Docker Swarm",
    testing: "Mocha, Chai",
    cicd: "Jenkins",
    features: [
      {
        title: "Service Discovery",
        description:
          "Automatic service registration and discovery for seamless communication between services.",
      },
      {
        title: "Event Sourcing",
        description:
          "Maintains a complete history of state changes for auditing and recovery.",
      },
      {
        title: "CQRS Pattern",
        description:
          "Separates read and write operations for optimized performance and scalability.",
      },
      {
        title: "Distributed Transactions",
        description:
          "Ensures data consistency across services using saga pattern.",
      },
    ],
  },
  {
    title: "Authentication Service",
    slug: "authentication-service",
    description:
      "A secure authentication and authorization service with support for OAuth, JWT, multi-factor authentication, and role-based access control.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2021",
    category: "Security",
    teamSize: "2 developers",
    primaryLanguage: "Node.js",
    database: "PostgreSQL",
    architecture: "Monolithic",
    deployment: "AWS ECS",
    testing: "Jest",
    cicd: "GitHub Actions",
    features: [
      {
        title: "Multi-factor Authentication",
        description:
          "Supports SMS, email, and authenticator app verification methods.",
      },
      {
        title: "OAuth Integration",
        description:
          "Seamless integration with popular OAuth providers like Google, GitHub, and Facebook.",
      },
      {
        title: "Role-based Access Control",
        description:
          "Granular permission system with hierarchical roles and custom permissions.",
      },
      {
        title: "Brute Force Protection",
        description:
          "Implements rate limiting and account lockout mechanisms to prevent attacks.",
      },
    ],
  },
  {
    title: "Content Management API",
    slug: "content-management-api",
    description:
      "A headless CMS API with support for content modeling, versioning, localization, and media management.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Django", "PostgreSQL", "AWS S3", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2021",
    category: "Content Management",
    teamSize: "3 developers",
    primaryLanguage: "Python",
    database: "PostgreSQL",
    architecture: "API-first",
    deployment: "AWS Elastic Beanstalk",
    testing: "Pytest",
    cicd: "AWS CodePipeline",
    features: [
      {
        title: "Flexible Content Modeling",
        description:
          "Define custom content types with complex relationships and validation rules.",
      },
      {
        title: "Content Versioning",
        description:
          "Maintains full history of content changes with ability to restore previous versions.",
      },
      {
        title: "Localization Support",
        description:
          "Built-in support for multilingual content with fallback mechanisms.",
      },
      {
        title: "GraphQL API",
        description:
          "Efficient data fetching with GraphQL allowing clients to request exactly what they need.",
      },
    ],
  },
  {
    title: "DevOps Automation Tools",
    slug: "devops-automation-tools",
    description:
      "A collection of tools for automating deployment, monitoring, and scaling of cloud infrastructure and applications.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Terraform", "AWS", "Docker", "Bash", "GitHub Actions"],
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2020",
    category: "DevOps",
    teamSize: "2 developers",
    primaryLanguage: "Terraform, Bash",
    database: "N/A",
    architecture: "Infrastructure as Code",
    deployment: "Self-hosted",
    testing: "Terratest",
    cicd: "GitHub Actions",
    features: [
      {
        title: "Infrastructure as Code",
        description:
          "Declarative infrastructure definitions with version control and automated provisioning.",
      },
      {
        title: "Self-healing Systems",
        description:
          "Automatic detection and recovery from common failure scenarios.",
      },
      {
        title: "Cost Optimization",
        description:
          "Intelligent resource scaling based on usage patterns to minimize cloud costs.",
      },
      {
        title: "Compliance Automation",
        description:
          "Automated security scanning and compliance checks integrated into deployment pipeline.",
      },
    ],
  },
];
