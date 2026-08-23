import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Palette,
  Layers3,
  Database,
  GitBranch,
  Smartphone,
} from "lucide-react";

import "../styles/skills.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "HTML",
    category: "FRONTEND",
    level: "95%",
  },
  {
    name: "CSS",
    category: "FRONTEND",
    level: "92%",
  },
  {
    name: "JavaScript",
    category: "LANGUAGE",
    level: "88%",
  },
  {
    name: "React",
    category: "FRONTEND",
    level: "90%",
  },
  {
    name: "Tailwind",
    category: "STYLING",
    level: "86%",
  },
  {
    name: "Figma",
    category: "DESIGN",
    level: "91%",
  },
  {
    name: "Git",
    category: "TOOLS",
    level: "82%",
  },
  {
    name: "MySQL",
    category: "DATABASE",
    level: "78%",
  },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-reveal", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".skill-progress-fill", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="skills-section"
    >
      <div className="skills-container">

        {/* HEADER */}
        <div className="skills-header skills-reveal">

          <div className="section-label">
            <span>03</span>
            <i />
            MY EXPERTISE
          </div>

          <h2 className="skills-title">
            TOOLS I USE TO
            <span> BUILD.</span>
          </h2>

          <p className="skills-intro">
            A combination of development, design and
            problem-solving skills that I use to create
            modern digital products.
          </p>

        </div>

        {/* SKILL AREA */}
        <div className="skills-layout">

          {/* LEFT */}
          <div className="skills-side skills-reveal">

            <div className="skill-feature">
              <div className="feature-icon">
                <Code2 size={21} />
              </div>

              <div>
                <h3>Development</h3>
                <p>
                  Building responsive and interactive
                  interfaces with modern technologies.
                </p>
              </div>
            </div>

            <div className="skill-feature">
              <div className="feature-icon purple">
                <Palette size={21} />
              </div>

              <div>
                <h3>UI / UX Design</h3>
                <p>
                  Designing clean interfaces with focus
                  on usability and visual hierarchy.
                </p>
              </div>
            </div>

            <div className="skill-feature">
              <div className="feature-icon blue">
                <Layers3 size={21} />
              </div>

              <div>
                <h3>Creative Development</h3>
                <p>
                  Combining motion, interaction and
                  visual design to create experiences.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div
                className="skill-card skills-reveal"
                key={skill.name}
              >
                <div className="skill-card-top">

                  <span className="skill-number">
                    0{index + 1}
                  </span>

                  <span className="skill-category">
                    {skill.category}
                  </span>

                </div>

                <h3>{skill.name}</h3>

                <div className="skill-progress">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: skill.level,
                    }}
                  />
                </div>

                <span className="skill-level">
                  {skill.level}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* BOTTOM TECHNOLOGY STRIP */}
        <div className="technology-strip skills-reveal">

          <div className="technology-item">
            <Smartphone size={17} />
            RESPONSIVE
          </div>

          <div className="technology-item">
            <Code2 size={17} />
            CLEAN CODE
          </div>

          <div className="technology-item">
            <Database size={17} />
            DATABASE
          </div>

          <div className="technology-item">
            <GitBranch size={17} />
            VERSION CONTROL
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;