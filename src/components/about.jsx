import { ArrowRight, Sparkles, Code2, Palette, Layers3 } from "lucide-react";
import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* LEFT VISUAL */}

        <div className="about-visual">

          <div className="about-orbit orbit-a" />
          <div className="about-orbit orbit-b" />

          <div className="about-core">
            <Code2 size={46} />
            <span>CREATIVE<br />CODE</span>
          </div>

          <div className="about-floating about-code">
            &lt;/&gt;
          </div>

          <div className="about-floating about-design">
            <Palette size={19} />
          </div>

          <div className="about-floating about-layers">
            <Layers3 size={18} />
          </div>

        </div>


        {/* RIGHT CONTENT */}

        <div className="about-content">

          <div className="section-number">
            02 <span>—</span> ABOUT ME
          </div>

          <h2>
            I BUILD
            <br />
            <span>DIGITAL</span>
            <br />
            EXPERIENCES.
          </h2>

          <p className="about-lead">
            I'm Hussna Faisal, a Frontend Developer,
            UI/UX Designer and Graphic Designer who
            loves transforming ideas into beautiful,
            interactive digital experiences.
          </p>

          <p className="about-text">
            I combine creativity with technology to create
            interfaces that don't just look good — they feel
            meaningful, intuitive and memorable.
          </p>

          <a href="#contact" className="about-button">
            MORE ABOUT ME
            <ArrowRight size={16} />
          </a>


          {/* STATS */}

          <div className="about-stats">

            <div className="about-stat">
              <strong>2+</strong>
              <span>YEARS EXPERIENCE</span>
            </div>

            <div className="about-stat">
              <strong>30+</strong>
              <span>PROJECTS COMPLETED</span>
            </div>

            <div className="about-stat">
              <strong>20+</strong>
              <span>HAPPY CLIENTS</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}