import React, { useState, useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light");
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const texts = [
    "Frontend Developer",
    "UI Enthusiast",
    "React Specialist",
    "CSS Artisan",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    if (typingIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setTypingText((prev) => prev + currentText.charAt(typingIndex));
        setTypingIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypingText("");
        setTypingIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, currentTextIndex, texts]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    document
      .getElementById("home")
      ?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, []);
  const scrolling = (e) => {
    setActiveSection(e);
    document
      .getElementById(e?.target?.id)
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={`app ${theme}`}>
      {/* Navigation */}
      <nav className="navbar">
        {console.log(activeSection)}
        <div className="nav-logo" onClick={() => handleNavigation("home")}>
          FD
        </div>
        <ul className="nav-links">
          {["home", "about", "projects", "skills", "work"].map((item) => (
            <li
              key={item}
              className={activeSection === item ? "active" : ""}
              onClick={() => handleNavigation(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className={`section ${
          activeSection === "home" ? "section-active" : ""
        }`}
      >
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Alex</span>
          </h1>
          <h2>
            <span className="typing-text">{typingText}</span>
            <span className="cursor-indicator">|</span>
          </h2>
          <p>
            Crafting beautiful, responsive, and user-friendly web experiences
          </p>
          <button
            className="cta-button"
            onClick={() => handleNavigation("projects")}
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`section ${
          activeSection === "about" ? "section-active" : ""
        }`}
        // onWheel={scrolling}
      >
        <AboutMe />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`section ${
          activeSection === "projects" ? "section-active" : ""
        }`}
        // onWheel={scrolling}
      >
        <Projects />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`section ${
          activeSection === "skills" ? "section-active" : ""
        }`}
        // onWheel={scrolling}
      >
        <Skills />
      </section>

      {/* Contact Section */}
      <section
        id="work"
        className={`section ${
          activeSection === "work" ? "section-active" : ""
        }`}
        // onWheel={scrolling}
      >
        <Experience />
      </section>

      <footer>
        <p>© {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
