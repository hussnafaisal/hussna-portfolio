import { ArrowUpRight, ArrowUp } from "lucide-react";
import "../styles/footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">

      {/* CTA */}
      <div className="footer-cta">

        <div className="footer-availability">
          <span className="availability-dot"></span>
          AVAILABLE FOR CREATIVE WORK
        </div>

        <h2 className="footer-title">
          LET'S CREATE
          <span>SOMETHING</span>
          UNFORGETTABLE.
        </h2>

        <a href="#contact" className="footer-cta-button">
          START A PROJECT
          <ArrowUpRight size={20} />
        </a>

      </div>

      {/* Main Footer */}
      <div className="footer-main">

        <div className="footer-brand">
          <h3>HUSSNA FAISAL</h3>

          <p>
            Building digital experiences
            where design meets technology.
          </p>
        </div>

        <div className="footer-column">
          <span className="footer-label">NAVIGATION</span>

          <a href="#hero">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="footer-column">
          <span className="footer-label">SOCIAL</span>

          <a
            href="https://github.com/hussnafaisal"
            target="https://github.com/hussnafaisal"
            rel="noreferrer"
          >
            GITHUB
            <ArrowUpRight size={14} />
          </a>

          <a
            href="https://www.linkedin.com/in/hussna-faisal-78733a362/"
            target="https://www.linkedin.com/in/hussna-faisal-78733a362/"
            rel="noreferrer"
          >
            LINKEDIN
            <ArrowUpRight size={14} />
          </a>

          <a href="mail-to:hussnafaisal01@email.com">
            EMAIL
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
          <span>BACK TO TOP</span>
        </button>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <span>
          © {currentYear} HUSSNA FAISAL 
        </span>

       

        <span>
          PAKISTAN
        </span>

      </div>

    </footer>
  );
}

export default Footer;