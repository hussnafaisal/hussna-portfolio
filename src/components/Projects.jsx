import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, GitBranch } from "lucide-react";

import "../styles/Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Challenge Pakistan",
    category: "EDUCATION PLATFORM",
    description:
      "A modern platform designed for students to learn new skills, build portfolios and explore career opportunities.",
    tech: ["React", "JavaScript", "CSS", "UI/UX"],
    className: "blue",
  },
  {
    number: "02",
    title: "CryptoGuru",
    category: "CRYPTO INTELLIGENCE",
    description:
      "A modern crypto intelligence platform focused on market data, research, analytics and useful insights.",
    tech: ["React", "API", "JavaScript", "Charts"],
    className: "purple",
  },
  {
    number: "03",
    title: "Bookstore",
    category: "E-COMMERCE",
    description:
      "A clean and responsive bookstore interface with modern product cards and an easy shopping experience.",
    tech: ["React", "JavaScript", "CSS", "Responsive"],
    className: "cyan",
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".project-card", {
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects-section">
      <div className="projects-container">

        <div className="project-heading">

          <div className="projects-label">
            <span>04</span>
            <div></div>
            SELECTED WORK
          </div>

          <h2>
            MY RECENT
            <span> PROJECTS.</span>
          </h2>

          <p>
            A collection of projects where design, development
            and creativity come together.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              key={project.number}
              className={`project-card ${project.className}`}
            >

              <div className="project-preview">

                <div className="preview-top">
                  <div className="preview-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>

                  <span>PROJECT_{project.number}</span>
                </div>

                <div className="preview-content">

                  <div className="preview-small">
                    {project.category}
                  </div>

                  <div className="preview-title">
                    {project.title}
                  </div>

                  <div className="preview-lines">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>

                  <div className="preview-circle"></div>

                </div>

                <div className="preview-number">
                  {project.number}
                </div>

              </div>

              <div className="project-details">

                <div className="project-top">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">

                  <a href="#" className="project-view">
                    VIEW PROJECT
                    <ArrowUpRight size={15} />
                  </a>

                  <a href="#" className="project-github">
                    <GitBranch size={16} />
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;