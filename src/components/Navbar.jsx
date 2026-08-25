import { useEffect, useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

import "../styles/navbar.css";

const navItems = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "PROJECTS", id: "projects" },
  { label: "CONTACT", id: "contact" },
];

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  /* =====================================================
     THEME
  ===================================================== */

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);


  /* =====================================================
     ACTIVE SECTION ON SCROLL
  ===================================================== */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  /* =====================================================
     SCROLL TO SECTION
  ===================================================== */

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    setActiveSection(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <header className="navbar">

      <div className="navbar-inner">

        {/* =================================================
            LOGO
        ================================================= */}

        <button
          className="logo"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          HF<span>.</span>
        </button>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          className="nav-links"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${
                activeSection === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                scrollToSection(item.id)
              }
            >
              <span className="nav-link-text">
                {item.label}
              </span>
            </button>
          ))}
        </nav>


        {/* =================================================
            ACTIONS
        ================================================= */}

        <div className="nav-actions">

          {/* Theme */}
          <button
            type="button"
            className="theme-button"
            onClick={() =>
              setDarkMode((prev) => !prev)
            }
            aria-label={
              darkMode
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            aria-pressed={!darkMode}
          >
            {darkMode ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>


          {/* Let's Talk */}
          <button
            type="button"
            className="talk-button"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            <span>LET'S TALK</span>

            <ArrowUpRight size={15} />
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;