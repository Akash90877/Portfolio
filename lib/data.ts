
export const identity = {
  name: "AKASH",
  roles: [
    "Full Stack Developer",
    "Spring Boot Developer",
    "Open Source Contributor",
  ],
  location: "Kuppam, Andhra Pradesh, India",
  status: "AVAILABLE FOR OPPORTUNITIES",
  summary:
    "I build fast, scalable, and beautiful software. Obsessed with clean architecture, developer experience, and shipping things that actually work.",
  projectsShipped: "8+",
  coffeeCount: "∞",
};

export const about = {
  paragraphs: [
    "I'm a software engineer who lives at the intersection of elegant code and meaningful products. I care deeply about the craft — from database schema design to pixel-perfect UI.",
    "Most of what I know came from taking things apart to understand how they work, then rebuilding them better. I believe the best code is the code that doesn't need a comment to explain itself.",
    "When I'm not shipping features, I'm contributing to open source, exploring new technologies, or writing about what I've learned.",
  ],
  focusAreas: [
    "Distributed Systems",
    "Developer Tooling",
    "API Design",
    "Cloud Infrastructure",
  ],
  stats: [
    { label: "Projects Shipped", value: "8+" },
    { label: "GitHub Stars", value: "10+" },
    { label: "Contributions", value: "200+" },
  ],
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "SHIPPED" | "IN_PROGRESS" | "ARCHIVED";
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "proj-01",
    title: "Sellex",
    tagline: "A E-Commerce platform for small businesses to sell online.",
    description:
      "Developed a full-stack e-commerce platform with real-time inventory management,order processing and analytics dashboard. Implemented microservices architecture for scalability.",
    stack: ["React", "Spring Boot", "Java", "JWT Authentication", "MySQL & Firebase"],
    status: "IN_PROGRESS",
    links: [
      { label: "live", href: "#" },
      { label: "source", href: "https://github.com/Akash90877/Sellex--E-Commerce_Platform" },
    ],
  },
  {
    id: "proj-02",
    title: "GeoFlow",
    tagline: "A Ground Water AI assistant for real-time monitoring and prediction of groundwater levels.",
    description:
      "Developed a real-time groundwater monitoring system using AI models. Implemented predictive analytics for water level forecasting and alerting.",
    stack: ["Python", "React", "FastAPI", "Google Cloud AI"],
    status: "SHIPPED",
    links: [
      { label: "live", href: "https://geoflowai.netlify.app/" },
      { label: "source", href: "https://github.com/Akash90877/GeoFlow" },
    ],
  },
  {
    id: "proj-03",
    title: "",
    tagline: "CLI toolkit for automating cloud infrastructure deployments.",
    description:
      "Developed a developer-first CLI that abstracts away Terraform and Helm complexity. Supports multi-cloud deployments with a single config file and interactive prompts.",
    stack: ["Python", "Terraform", "AWS", "GCP", "Click"],
    status: "IN_PROGRESS",
    links: [
      { label: "source", href: "#" },
    ],
  },
  {
    id: "proj-04",
    title: "PROJECT_DELTA",
    tagline: "Open-source analytics platform with zero vendor lock-in.",
    description:
      "Self-hostable product analytics alternative. Tracks user events, funnels, and retention with a privacy-first approach. No cookies, no third-party scripts.",
    stack: ["Next.js", "ClickHouse", "Kafka", "Grafana", "Rust"],
    status: "SHIPPED",
    links: [
      { label: "live", href: "#" },
      { label: "source", href: "#" },
    ],
  },
];

export type SkillGroup = {
  category: string;
  skills: { name: string; level: number; icon?: string }[];
};

export const stack: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Java", level: 92 },
      { name: "C", level: 85 },
      { name: "Python", level: 70 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 65 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "Kafka", level: 72 },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Docker / Kubernetes", level: 82 },
      { name: "AWS", level: 78 },
      { name: "CI/CD Pipelines", level: 70},
    ],
  },
];

export type TimelineEntry = {
  date: string;
  title: string;
  org: string;
  type:  "work" | "education";
  description: string;
};

export const timeline: TimelineEntry[] = [
   {
    date: "May 2026 - july 2026",
    title: "Java Full Stack Intern",
    org: "VaultShpere AI Technologies",
    type: "work",
    description:
      "Developed end-to-end web applications, integrating front-end and back-end components. Implemented RESTful APIs and optimized database queries for performance.",
  },
  {
    date: "2023 — Present",
    title: " Engineering Undergraduate",
    org: "Kuppam Engineering College",
    type: "education",
    description:
      "Aspired to become a software engineer, focusing on full-stack development, cloud computing, and open-source contributions. Engaged in various projects and hackathons to enhance practical skills.",
  },
 
];

export type Award = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: "award" | "cert" | "achievement";
};

export const awards: Award[] = [
  {
    title: "HACKATHON_NAME — 1st Place",
    issuer: "ORGANIZING_BODY",
    date: "2024",
    description: "Built PLACEHOLDER_PROJECT in 48 hours. Won best technical implementation out of 200+ teams.",
    type: "award",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Professional-level certification covering cloud architecture, security, and cost optimization.",
    type: "cert",
  },
  {
    title: "CERTIFICATION_NAME",
    issuer: "PLATFORM_NAME",
    date: "2023",
    description: "EDIT_ME — describe the scope and what you learned.",
    type: "cert",
  },
  {
    title: "OPEN_SOURCE_ACHIEVEMENT",
    issuer: "GitHub",
    date: "2022",
    description: "EDIT_ME — e.g. reached X stars, merged into major project, etc.",
    type: "achievement",
  },
];

export const contact = {
  email: "akashp2605@gmail.com",
  github: "https://github.com/Akash90877",
  linkedin: "https://www.linkedin.com/in/akash-p-77709a331?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resumeUrl: "",
};
