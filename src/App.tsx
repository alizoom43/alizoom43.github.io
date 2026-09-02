import {
    education,
    experience,
    projects,
    research,
    skills
} from "./data";

import type {
    Education,
    Experience,
    Project
} from "./data";


// ============================================================
// Reusable section heading
// ============================================================

interface SectionHeadingProps {
    number: string;
    title: string;
}

function SectionHeading({
                            number,
                            title
                        }: SectionHeadingProps) {
    return (
        <div className="section-heading">
            <h2>
                <span>{number}</span>
                {" / "}
                {title}
            </h2>

            <div className="section-line"/>
        </div>
    );
}


// ============================================================
// Experience item
// ============================================================

function ExperienceItem({
                            item
                        }: {
    item: Experience;
}) {
    return (
        <article className="experience-item">
            <div className="item-period">
                {item.period}
            </div>

            <div className="item-content">
                <div className="item-heading">
                    <h3>{item.title}</h3>

                    <p className="organization">
                        {item.organization}
                    </p>

                    {item.location && (
                        <p className="location">
                            {item.location}
                        </p>
                    )}
                </div>

                <div className="description">
                    {item.description.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </div>

                {item.technologies && (
                    <div className="technology-list">
                        {item.technologies.map((technology) => (
                            <span key={technology}>
                {technology}
              </span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}


// ============================================================
// Project item
// ============================================================

function ProjectItem({
                         project
                     }: {
    project: Project;
}) {
    const content = (
        <>
            <div className="project-number">
                {project.number}
            </div>

            <div className="project-content">
                <div className="project-title-row">
                    <h3>{project.title}</h3>

                    {project.url && (
                        <span
                            className="external-arrow"
                            aria-hidden="true"
                        >
              ↗
            </span>
                    )}
                </div>

                <p>{project.description}</p>

                <div className="technology-list">
                    {project.technologies.map((technology) => (
                        <span key={technology}>
              {technology}
            </span>
                    ))}
                </div>
            </div>
        </>
    );

    if (project.url) {
        return (
            <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="project-item project-link"
            >
                {content}
            </a>
        );
    }

    return (
        <article className="project-item">
            {content}
        </article>
    );
}


// ============================================================
// Education item
// ============================================================

function EducationItem({
                           item
                       }: {
    item: Education;
}) {
    return (
        <article className="education-item">
            <div className="item-period">
                {item.period}
            </div>

            <div>
                <h3>{item.degree}</h3>

                <p className="organization">
                    {item.institution}
                </p>

                {item.details && (
                    <p className="education-details">
                        {item.details}
                    </p>
                )}
            </div>
        </article>
    );
}


// ============================================================
// Main application
// ============================================================

function App() {
    return (
        <div className="site-wrapper">

            {/* ====================================================
          HEADER
          ==================================================== */}

            <header className="site-header">
                <a
                    href="#top"
                    className="identity"
                    aria-label="Back to top"
                >
          <span className="identity-name">
            ALEX Li
          </span>

                    <span className="identity-role">
            software engineer
          </span>
                </a>

                <nav
                    className="header-links"
                    aria-label="External links"
                >
                    <a
                        href="https://github.com/alizoom43"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/in/alex-ali655/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn ↗
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Résumé ↗
                    </a>
                </nav>
            </header>


            <main id="top">

                {/* ==================================================
            HERO
            ================================================== */}

                <section
                    className="hero"
                    aria-labelledby="hero-title"
                >
                    <div className="hero-copy">
                        <p className="code-label">
                            {"// hello"}
                        </p>

                        <h1 id="hero-title">
                            Software Engineer / Computer Science / Research
                        </h1>

                        <div className="hero-roles">
                            <span>Software Engineer</span>
                            <span>/</span>
                            <span>Computer Science</span>
                            <span>/</span>
                            <span>Research</span>
                        </div>

                        <p className="hero-description">
                            I'm Alex, a software engineer with experience in
                            backend systems, distributed applications,
                            technical research, and building reliable
                            software for difficult problems.
                        </p>

                        <div className="hero-actions">
                            <a
                                href="#experience"
                                className="primary-link"
                            >
                                view my work
                                <span>↓</span>
                            </a>

                            <a
                                href="mailto:alextli247@gmail.com"
                                className="text-link"
                            >
                                email me ↗
                            </a>
                        </div>
                    </div>


                    {/* Small sketch/code-inspired decoration */}

                    <div
                        className="hero-sketch"
                        aria-hidden="true"
                    >
                        <div className="sketch-window">
                            <p className="sketch-comment">
                                {"// currently"}
                            </p>

                            <p>establishing connections</p>
                            <p>building software</p>
                            <p>exploring systems</p>
                            <p>learning continuously</p>

                            <div className="table-flip-container">
                                <span className="table-flip-hint">
                                    {"// hover to flip"}
                                    <span className="hint-arrow">→</span>
                                </span>

                                <div className="table-flip"
                                     role="img"
                                     aria-label="Table flip ASCII art"
                                >
                                    <span className="table-normal">
                                        {"┬─┬ ノ( ゜-゜ノ)"}
                                    </span>

                                    <span className="table-flipped">
                                        {"(╯°□°）╯︵ ┻━┻"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ==================================================
            EXPERIENCE
            ================================================== */}

                <section
                    id="experience"
                    className="content-section"
                >
                    <SectionHeading
                        number="01"
                        title="EXPERIENCE"
                    />

                    <div className="section-content">
                        {experience.map((item, index) => (
                            <ExperienceItem
                                key={`${item.organization}-${index}`}
                                item={item}
                            />
                        ))}
                    </div>
                </section>


                {/* ==================================================
            RESEARCH
            ================================================== */}

                <section
                    id="research"
                    className="content-section"
                >
                    <SectionHeading
                        number="02"
                        title="RESEARCH"
                    />

                    <div className="section-content">
                        {research.map((item, index) => (
                            <ExperienceItem
                                key={`${item.organization}-${index}`}
                                item={item}
                            />
                        ))}
                    </div>
                </section>


                {/* ==================================================
            PROJECTS
            ================================================== */}

                <section
                    id="projects"
                    className="content-section"
                >
                    <SectionHeading
                        number="03"
                        title="PROJECTS"
                    />

                    <div className="projects-list">
                        {projects.map((project) => (
                            <ProjectItem
                                key={project.number}
                                project={project}
                            />
                        ))}
                    </div>
                </section>


                {/* ==================================================
            EDUCATION
            ================================================== */}

                <section
                    id="education"
                    className="content-section"
                >
                    <SectionHeading
                        number="04"
                        title="EDUCATION"
                    />

                    <div className="section-content">
                        {education.map((item, index) => (
                            <EducationItem
                                key={`${item.institution}-${index}`}
                                item={item}
                            />
                        ))}
                    </div>
                </section>


                {/* ==================================================
            SKILLS
            ================================================== */}

                <section
                    id="skills"
                    className="content-section"
                >
                    <SectionHeading
                        number="05"
                        title="SKILLS"
                    />

                    <div className="skills-grid">
                        {skills.map((group) => (
                            <div
                                className="skill-row"
                                key={group.category}
                            >
                <span className="skill-category">
                  {group.category}
                </span>

                                <div className="skill-values">
                                    {group.skills.map((skill, index) => (
                                        <span key={skill}>
                      {skill}
                                            {index < group.skills.length - 1 && (
                                                <span className="skill-divider">
                          {" / "}
                        </span>
                                            )}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* ==================================================
            CONTACT
            ================================================== */}

                <section
                    id="contact"
                    className="content-section contact-section"
                >
                    <SectionHeading
                        number="06"
                        title="CONTACT"
                    />

                    <div className="contact-content">
                        <p className="code-label">
                            {"// say hello"}
                        </p>

                        <h2>
                            Let's work
                            <br/>
                            together
                        </h2>

                        <a
                            className="email-link"
                            href="mailto:alextli247@gmail.com"
                        >
                            alextli247@gmail.com
                            <span>↗</span>
                        </a>
                    </div>
                </section>

            </main>


            {/* ====================================================
          FOOTER
          ==================================================== */}

            <footer>
        <span>
          © {new Date().getFullYear()} Alex Li
        </span>

                <span className="footer-tech">
          built with React + TypeScript
        </span>
            </footer>

        </div>
    );
}

export default App;