import React, { useState, useEffect } from "react";
import "./styles.css";

function Portfolio() {
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
  }, [typingIndex, currentTextIndex]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`app ${theme}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => handleNavigation("home")}>
          FD
        </div>
        <ul className="nav-links">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
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
      <section id="home" className="section">
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
      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate frontend developer with 3 years of experience
            building modern web applications.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {[1, 2, 3].map((project) => (
            <div key={project} className="project-card">
              <h3>Project {project}</h3>
              <p>Description of project {project}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>My Skills</h2>
        <div className="skills-list">
          {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
            <div key={skill} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
}

export default Portfolio;
