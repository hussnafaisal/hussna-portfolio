import { useEffect, useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import "../styles/Projects.css";

const projects = [
  {
    number: "01",
    category: "WEB EXPERIENCE",
    title: "CREATIVE PORTFOLIO",
    description:
      "A modern interactive portfolio focused on bold typography, smooth motion and immersive frontend experiences.",
    technologies: ["React", "GSAP", "CSS"],
    type: "01 / FEATURED",
    className: "project-blue",
    link: "https://tidy-theme.vercel.app/#/home",
  },

  {
    number: "02",
    category: "WEB EXPERIENCE",
    title: "BOOK STORE",
    description:
      "A refined digital experience designed around elegant visuals, intuitive navigation and conversion-focused interfaces.",
    technologies: ["React", "Figma", "UI/UX"],
    type: "02 / EXPERIENCE",
    className: "project-purple",
    link: "https://hussnafaisal.github.io/bookstore/",
  },

  {
    number: "03",
    category: "WEB EXPERIENCE",
    title: "BOOK SHOP",
    description:
      "A modern book shopping experience combining clean layouts, product presentation and responsive frontend design.",
    technologies: ["React", "CSS", "JavaScript"],
    type: "03 / EXPERIENCE",
    className: "project-cyan",
    link: "https://hussnafaisal.github.io/bookshop/",
  },

  {
    number: "04",
    category: "E-COMMERCE",
    title: "E-COMMERCE",
    description:
      "A responsive shopping experience focused on product presentation, usability and modern frontend interactions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "04 / COMMERCE",
    className: "project-pink",
    link: "https://new-year-eve-neon.vercel.app/",
  },

  {
    number: "05",
    category: "UI DESIGN",
    title: "CREATIVE WEBSITE",
    description:
      "A visually engaging website combining modern layouts, responsive design and smooth interactive elements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "05 / CREATIVE",
    className: "project-green",
    link: "https://www.figma.com/design/j7o8LFqni6TarztyaBM74r/Shopping-App?node-id=311-113&p=f&t=eEk18AJy52UHqSBu-0",
  },

  {
    number: "06",
    category: "UI / UX",
    title: "DIGITAL EXPERIENCE",
    description:
      "A modern digital interface designed around usability, visual hierarchy and engaging user interactions.",
    technologies: ["React", "CSS", "JavaScript"],
    type: "06 / EXPERIENCE",
    className: "project-yellow",
    link: "https://www.figma.com/design/8oJCT4M2Ih61ZkXQfFd0f7/Shopping-App?node-id=0-1&p=f&t=jbQrTMWQGolh2fIe-0",
  },

  {
  number: "07",
  category: "UX UI DESIGN",
  title: "SHOPPING APP",
  description: "A responsive shopping experience focused on product presentation, usability and modern frontend interactions.",
  technologies: ["Figma", "Design", "Logo"],
  type: "07 / EXPERIENCE",
  className: "project-red",
  link: "..."
}
];

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const section = projectsRef.current;

    if (!section) return;

    const cards = section.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    cards.forEach((card, index) => {
      card.style.setProperty(
        "--project-delay",
        `${index * 100}ms`
      );

      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="projects-section"
      id="projects"
      ref={projectsRef}
    >
      <div className="projects-header">
        <div className="projects-label">
          <span></span>
          SELECTED WORK
        </div>

        <div className="projects-heading-wrap">
          <h2>
            PROJECTS
            <span>THAT SPEAK.</span>
          </h2>

          <p>
            A collection of digital experiences where design,
            interaction and technology come together.
          </p>
        </div>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article
            className={`project-card ${project.className}`}
            key={project.number}
          >
            <div
              className="project-big-number"
              aria-hidden="true"
            >
              {project.number}
            </div>

            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>

              <span className="project-type">
                {project.type}
              </span>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-visual"
              aria-label={`Open ${project.title}`}
            >
              <div className="visual-grid"></div>

              <div className="visual-light"></div>

              <div className="browser-window">
                <div className="browser-top">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-address">
                    {project.title
                      .toLowerCase()
                      .replaceAll(" ", "-")}
                  </div>
                </div>

                <div className="browser-body">
                  <div className="mock-navbar">
                    <div className="mock-logo"></div>

                    <div className="mock-nav">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <div className="mock-hero">
                    <div className="mock-heading">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="mock-button"></div>
                  </div>

                  <div className="mock-cards">
                    <div className="mock-card"></div>
                    <div className="mock-card"></div>
                    <div className="mock-card"></div>
                  </div>
                </div>
              </div>

              <div className="visual-scan"></div>

              <div className="visual-label">
                <span>VIEW EXPERIENCE</span>
                <ArrowUpRight size={15} />
              </div>
            </a>

            <div className="project-content">
              <div className="project-title-area">
                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{project.title}</h3>
              </div>

              <p>{project.description}</p>

              <div className="project-bottom">
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    VIEW PROJECT
                    <ArrowUpRight size={18} />
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon-button"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer"></div>
    </section>
  );
}

export default Projects;