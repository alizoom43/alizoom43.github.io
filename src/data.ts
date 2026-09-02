export interface Experience {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string[];
  focuses?: string[];
}

export interface Project {
  number: string;
  period: string;
  title: string;
  description: string;
  focuses: string[];
  url?: string;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  details?: string;
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

export const experience: Experience[] = [{
  period: "2022 — 2026",
  title: "Software Engineer",
  organization: "EAB Global, Inc.",
  location: "Washington, D.C.",
  description: ["Built and maintained production software, with most of my work centered on backend services, APIs, and distributed systems.", "Worked across design, implementation, testing, and delivery while also taking on code reviews and technical leadership/mentorship.",],
  focuses: ["Backend Engineering", "Distributed Systems", "API Design", "System Design", "Technical Leadership",]
},

  {
    period: "2024 — 2026",
    title: "Team Security Representative (Volunteer)",
    organization: "EAB Global, Inc.",
    location: "Washington, D.C.",
    description: ["Volunteered for this security-focused role alongside my engineering work, helping connect day-to-day development with broader application security practices.",],
    focuses: ["Application Security", "Security Tool Evaluation", "Knowledge Sharing", "In-Person Conferences", "Engineering Team Presentations",]
  }];


/* =========================================================
   RESEARCH
   ========================================================= */

export const research: Experience[] = [{
  period: "2026 — PRESENT",
  title: "Graduate Student Researcher",
  organization: "Georgia Institute of Technology",
  location: "Atlanta, Georgia (Remote)",
  description: ["Working on software and testing tools for research in industrial and cyber-physical systems security.", "Collaborating with faculty and researchers on the testing and technical analysis of their ongoing projects.",]
}];


/* =========================================================
   PROJECTS
   ========================================================= */

export const projects: Project[] = [{
  number: "01",
  period: "2026 - PRESENT",
  title: "Industrial Systems Vulnerability Detection",
  description: "An academic research project exploring security testing and software tooling for cyber-physical systems with the Georgia Tech Cyber-Physical Security Lab.",
  focuses: ["Cyber-Physical Security", "Industrial Systems", "Programmable Logic Controller (PLC)",]
}];


/* =========================================================
   EDUCATION
   ========================================================= */

export const education: Education[] = [{
  period: "2025 — PRESENT", degree: "M.S. Computer Science", institution: "Georgia Institute of Technology"
},

  {
    period: "2018 — 2022", degree: "B.S. Computer Science", institution: "University of Maryland, College Park"
  }];


// ==========================================================
// 05 / SKILLS
// ==========================================================

export const skills = [{
  category: "Languages", items: ["Java", "Kotlin", "Python", "SQL", "Groovy", "OCaml",],
},

  {
    category: "Backend Engineering",
    items: ["Spring Boot", "Spring", "REST APIs", "Microservices", "JPA / Hibernate", "Backend Service Design", "Distributed Systems", "Application Architecture",],
  },

  {
    category: "Build, Version Control & Development Tools",
    items: ["Git", "GitHub", "GitLab", "Gradle", "Maven", "Atlassian (Jira, Bitbucket)", "IntelliJ IDEA", "Eclipse", "Cursor", "GitHub Copilot", "ChatGPT Codex",],
  },

  {
    category: "Data, Messaging & Caching",
    items: ["MySQL", "MongoDB", "Apache ActiveMQ", "SQL Databases", "Message Queues", "Topics", "Asynchronous Messaging", "Redis", "Caching",],
  },

  {
    category: "Testing & Code Quality",
    items: ["JUnit", "Mockito", "Unit Testing", "Software Testing", "Code Reviews", "Design Reviews", "Production Debugging", "Dependency Analysis",],
  },

  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "AWS Lambda", "Amazon S3", "Amazon CloudWatch", "Amazon EventBridge", "AWS CodeArtifact", "Docker", "Kubernetes", "Containerized Applications", "Cloud-Based Services",],
  },

  {
    category: "Software Engineering",
    items: ["Software Architecture", "System Design", "API Design", "Production Software Development", "Agile / Scrum", "Cross-Functional Collaboration", "Technical Mentoring", "Technical Documentation", "Engineering Knowledge Sharing",],
  },

  {
    category: "Security",
    items: ["Application Security", "Software Composition Analysis", "Dependency Vulnerability Monitoring", "Secure Software Development", "Security Tool Evaluation",],
  },

  {
    category: "Research & Cyber-Physical Systems",
    items: ["Cyber-Physical Systems", "Industrial Security", "Research Software Development", "Security Testing", "Experimental Design", "Technical Analysis",],
  },];