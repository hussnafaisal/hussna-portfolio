import { useEffect, useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

import "../styles/navbar.css";

const navItems = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "PROJECTS", id: "projects" },
  { label: "EXPERIENCE", id: "experience" },
];

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-theme", !darkMode);
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          HF<span>.</span>
        </button>

        {/* Navigation */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${
                item.id === "home" ? "active" : ""
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="nav-actions">

          <button
            className="theme-button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>

          <button
            className="talk-button"
            onClick={() => scrollToSection("contact")}
          >
            LET'S TALK
            <ArrowUpRight size={15} />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;