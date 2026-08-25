import {
  Code2,
  Palette,
  Atom,
  FileCode2,
  Wind,
  Database,
  GitBranch,
  PenTool,
  icons,
} from "lucide-react";

import "../styles/skills.css";

const skills = [
  {
    name: "HTML5",
    icon: FileCode2,
    className: "skill-html",
  },
  {
    name: "CSS3",
    icon: Code2,
    className: "skill-css",
  },
  {
    name: "JavaScript",
    icon: Code2,
    className: "skill-js",
  },
  {
    name: "React",
    icon: Atom,
    className: "skill-react",
  },
  {
    name: "Bootstrap",
    icon: Wind,
    className: "skill-tailwind",
  },
  {
    name: "Figma",
    icon: PenTool,
    className: "skill-figma",
  },
  {
    name: "Git",
    icon: GitBranch,
    className: "skill-git",
  },
  {
    name: "MySQL",
    icon: Database,
    className: "skill-mysql",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="skills-header">

          <div className="section-number">
            03 <span>—</span> MY EXPERTISE
          </div>

          <h2>
            MY <span>SKILLS</span>
          </h2>

          <p>
            I combine creativity with technology to create
            exceptional digital experiences.
          </p>

        </div>


        {/* =========================
            3D SKILLS SCENE
        ========================= */}

        <div className="skills-scene">

          {/* MAIN GLOW */}

          <div className="skills-glow"></div>


          {/* ORBITS */}

          <div className="orbit orbit-1"></div>

          <div className="orbit orbit-2"></div>

          <div className="orbit orbit-3"></div>


          {/* =========================
              CENTER
          ========================= */}

          <div className="skill-core">

            <div className="core-inner">

              <Code2 size={42} />

              <strong>CODE</strong>

              <span>CREATE</span>

            </div>

          </div>


          {/* =========================
              SKILLS
          ========================= */}

          {skills.map((skill) => {

            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className={`skill-node ${skill.className}`}
              >

                <div className="skill-node-icon">

                  <Icon size={23} />

                </div>

                <span>
                  {skill.name}
                </span>

              </div>
            );

          })}

        </div>


        {/* =========================
            SKILL CATEGORIES
        ========================= */}

        <div className="skill-categories">

          <div>
            <Code2 size={16} />
            <span>DEVELOPMENT</span>
          </div>

          <div>
            <Palette size={16} />
            <span>UI / UX DESIGN</span>
          </div>

          <div>
            <Atom size={16} />
            <span>CREATIVE DEVELOPMENT</span>
          </div>

          <div>
            <PenTool size={16} />
            <span>VISUAL DESIGN</span>
          </div>

        </div>

      </div>

    </section>
  );
}