import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { ArrowRight, Briefcase, Code2, Sparkles } from "lucide-react";

import "../styles/about.css";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.to(".about-orb", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
    >
      <div className="about-container">

        {/* LEFT VISUAL */}
        <div className="about-visual about-reveal">

          <div className="about-grid" />

          <div className="about-orb">
            <div className="about-orb-inner">
              <Code2 size={54} />
            </div>
          </div>

          <div className="about-floating-card card-top">
            <Code2 size={17} />
            <span>FRONTEND</span>
          </div>

          <div className="about-floating-card card-bottom">
            <Sparkles size={17} />
            <span>CREATIVE UI</span>
          </div>

          <div className="about-ring ring-a" />
          <div className="about-ring ring-b" />

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <div className="section-label about-reveal">
            <span>02</span>
            <i />
            ABOUT ME
          </div>

          <h2 className="about-title about-reveal">
            I BUILD DIGITAL
            <span> EXPERIENCES</span>
            <br />
            THAT <strong>FEEL</strong>
            <br />
            DIFFERENT.
          </h2>

          <p className="about-description about-reveal">
            I'm Hussna Faisal, a frontend developer and
            UI/UX designer who enjoys turning ideas into
            meaningful digital experiences.
          </p>

          <p className="about-description secondary about-reveal">
            I combine clean development, thoughtful
            interface design and creative visual direction
            to build websites that don't just work —
            they leave an impression.
          </p>

          <button className="about-button about-reveal">
            MORE ABOUT ME
            <ArrowRight size={16} />
          </button>

          {/* STATS */}
          <div className="about-stats about-reveal">

            <div className="about-stat">
              <div className="stat-icon">
                <Briefcase size={17} />
              </div>

              <div>
                <strong>2+</strong>
                <span>Years Experience</span>
              </div>
            </div>

            <div className="about-stat">
              <div className="stat-icon">
                <Code2 size={17} />
              </div>

              <div>
                <strong>30+</strong>
                <span>Projects Completed</span>
              </div>
            </div>

            <div className="about-stat">
              <div className="stat-icon">
                <Sparkles size={17} />
              </div>

              <div>
                <strong>20+</strong>
                <span>Happy Clients</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;