export interface Experience {
    period: string;
    title: string;
    organization: string;
    location?: string;
    description: string[];
    technologies?: string[];
}

export interface Project {
    number: string;
    title: string;
    description: string;
    technologies: string[];
    url?: string;
}

export interface Education {
    period: string;
    degree: string;
    institution: string;
    details?: string;
}

export interface SkillGroup {
    category: string;
    skills: string[];
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

export const experience: Experience[] = [
    {
        period: "2022 — 2026",
        title: "Software Engineer",
        organization: "EAB Global, Inc.",
        location: "Washington, D.C.",
        description: [
            "TBA"
        ],
        technologies: [
            "TBA"
        ]
    },

    {
        period: "2024 — 2026",
        title: "Team Security Representative (Volunteer)",
        organization: "EAB Global, Inc.",
        location: "Washington, D.C.",
        description: [
            "TBA"
        ],
        technologies: [
            "TBA"
        ]
    }
];


/* =========================================================
   RESEARCH
   ========================================================= */

export const research: Experience[] = [
    {
        period: "2026 — PRESENT",
        title: "Graduate Student Researcher",
        organization: "Georgia Institute of Technology",
        location: "Atlanta, Georgia (Remote)",
        description: [
            "TBA"
        ],
        technologies: [
            "TBA"
        ]
    }
];


/* =========================================================
   PROJECTS
   ========================================================= */

export const projects: Project[] = [
    {
        number: "01",
        title: "Research Project",
        description:
            "TBA",
        technologies: [
            "TBA"
        ]
    }
];


/* =========================================================
   EDUCATION
   ========================================================= */

export const education: Education[] = [
    {
        period: "2025 — PRESENT",
        degree: "M.S. Computer Science",
        institution: "Georgia Institute of Technology"
    },

    {
        period: "2018 — 2022",
        degree: "B.S. Computer Science",
        institution: "University of Maryland, College Park"
    }
];


/* =========================================================
   SKILLS
   ========================================================= */

export const skills: SkillGroup[] = [
    {
        category: "LANGUAGES",
        skills: [
            "TBA"
        ]
    }
];