import { ArrowDown, ArrowUpRight } from "lucide-react";
import "../styles/hero.css";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-vignette" />
      </div>

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div className="hero-container">
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-status" />
            <span>AVAILABLE FOR CREATIVE WORK</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">HUSSNA</span>

            <span className="hero-title-line hero-title-accent">
              FAISAL<span className="hero-title-dot">.</span>
            </span>
          </h1>

          <div className="hero-role">
            <span>FRONTEND DEVELOPER</span>

            <span className="hero-role-divider">/</span>

            <span>UI / UX DESIGNER</span>
          </div>

          <p className="hero-description">
            I build digital experiences where thoughtful design,
            clean code and meaningful interaction come together.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-primary-button"
              onClick={() => scrollToSection("projects")}
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight size={17} strokeWidth={2} />
            </button>

            <button
              type="button"
              className="hero-secondary-button"
              onClick={() => scrollToSection("contact")}
            >
              LET'S TALK
            </button>
          </div>

          {/* =================================================
              SPECIALTIES
          ================================================= */}

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-number">01</span>
              <span className="hero-meta-text">FRONTEND</span>
            </div>

            <div className="hero-meta-item">
              <span className="hero-meta-number">02</span>
              <span className="hero-meta-text">UI / UX</span>
            </div>

            <div className="hero-meta-item">
              <span className="hero-meta-number">03</span>
              <span className="hero-meta-text">CREATIVE</span>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT PHOTO
        ================================================= */}

        <div className="hero-visual">
          <div className="hero-photo-wrapper">
            <div
              className="hero-photo-frame"
              aria-hidden="true"
            />

            <div className="hero-photo">
              <img
                src="/images/hussna.png"
                alt="Hussna Faisal"
              />

              <div className="hero-photo-overlay" />
            </div>

            <div className="hero-photo-label">
              <span className="hero-photo-dot" />
              <span>HUSSNA FAISAL</span>
            </div>
{/* 
            <div className="hero-photo-number">
              01
            </div> */}

            <div className="hero-photo-corner hero-photo-corner-top" />
            <div className="hero-photo-corner hero-photo-corner-bottom" />
          </div>

          {/* Small professional info card */}

          <div className="hero-floating-card">
            <span className="hero-floating-line" />

            <div>
              <small>FOCUS</small>
              <strong>DESIGN × CODE</strong>
            </div>
          </div>

          <div className="hero-location">
            <span className="hero-location-dot" />
            <span>PAKISTAN</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <button
        type="button"
        className="hero-scroll"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to about section"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} strokeWidth={1.8} />
      </button>
    </section>
  );
}

export default Hero;