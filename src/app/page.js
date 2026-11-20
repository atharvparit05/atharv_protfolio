
"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Hospital FieldTrack",
    category: "Web & Mobile Application",
    description:
      "A hospital employee tracking system with attendance, GPS location tracking, employee visits and daily reports.",
    tech: ["React", "React Native", "Expo", "GPS"],
    link: "https://github.com/atharvparit05",
  },
 
  {
    number: "02",
    title: "E-commerce Platform",
    category: "Full Stack Development",
    description:
      "An online shopping platform concept with product listings, user forms and business management.",
    tech: ["Next.js", "PostgreSQL", "Node.js"],
    link: "https://github.com/atharvparit05",
  },
];

const skills = [
  ["01", "HTML & CSS", "Frontend"],
  ["02", "JavaScript", "Programming"],
  ["03", "React.js", "Frontend"],
  ["04", "Next.js", "Framework"],
  ["05", "Node.js", "Backend"],
  ["06", "PostgreSQL", "Database"],
  ["07", "Git & GitHub", "Tools"],
  ["08", "Tailwind CSS", "Styling"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          AP<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map(([name, href]) => (
            <a key={name} href={href} onClick={closeMenu}>
              {name}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={closeMenu}
          >
            Let's Talk ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero section" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="green-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            Atharv
            <br />
            <span>Parit.</span>
          </h1>

          <h2>
            Aspiring Developer <span>&</span> Creative Thinker
          </h2>

          <p className="hero-description">
            I build modern digital experiences by combining
            creativity, technology and problem-solving.
            Passionate about learning and turning ideas into reality.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work ↗
            </a>
            <a href="#contact" className="secondary-btn">
              Get In Touch
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/atharvparit05"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
            <span>•</span>
            <a href="#about">ABOUT ME ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="profile-card">
            <span className="card-small">CREATIVE MINDSET</span>
            <div className="profile-initials">AP</div>
            <div className="profile-line"></div>
            <h3>Think. Create. Build.</h3>
            <p>Turning imagination into digital reality.</p>
            <span className="profile-number">01 / 05</span>
          </div>

          <div className="floating-tag tag-top">
            <span>✦</span> CREATIVE
          </div>
          <div className="floating-tag tag-bottom">
            <span>⌘</span> DEVELOPER
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line"></span>
          <span>01 — 05</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-label">
          <span>01 / ABOUT ME</span>
          <span>GET TO KNOW ME</span>
        </div>

        <div className="about-grid">
          <div>
            <p className="eyebrow">A LITTLE INTRODUCTION</p>
            <h2 className="section-heading">
              Building ideas
              <br />
              into <span>reality.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I'm Atharv Parit, an aspiring developer who enjoys
              exploring technology, designing websites and
              building useful digital solutions.
            </p>
            <p>
              I believe every great project starts with curiosity.
              My focus is on continuously improving my skills,
              experimenting with new technologies and creating
              meaningful experiences.
            </p>
            <a href="#contact" className="text-link">
              LET'S CONNECT ↗
            </a>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat">
            <h3>03<span>+</span></h3>
            <p>PROJECT CONCEPTS</p>
          </div>
          <div className="stat">
            <h3>08<span>+</span></h3>
            <p>TECHNOLOGIES</p>
          </div>
          <div className="stat">
            <h3>∞</h3>
            <p>IDEAS TO EXPLORE</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-label">
          <span>02 / MY SKILLS</span>
          <span>TOOLS & TECHNOLOGIES</span>
        </div>

        <h2 className="section-heading">
          My technical <span>toolkit.</span>
        </h2>

        <div className="skills-grid">
          {skills.map(([number, name, category]) => (
            <div className="skill-card" key={number}>
              <span className="skill-number">{number}</span>
              <h3>{name}</h3>
              <p>{category}</p>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-label">
          <span>03 / SELECTED WORK</span>
          <span>THINGS I'VE BEEN BUILDING</span>
        </div>

        <div className="projects-heading">
          <h2 className="section-heading">
            Featured <span>projects.</span>
          </h2>
          <p>
            A selection of ideas and applications that reflect
            my learning journey.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span className="project-number">{project.number}</span>

              <div className="project-info">
                <span className="project-category">
                  {project.category}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education-section" id="education">
        <div className="section-label">
          <span>04 / EDUCATION</span>
          <span>MY LEARNING JOURNEY</span>
        </div>

        <div className="education-content">
          <div>
            <p className="eyebrow">ACADEMIC BACKGROUND</p>
            <h2 className="section-heading">
              Learning never
              <br />
              <span>stops.</span>
            </h2>
          </div>

          <div className="education-card">
            <span className="education-icon">✦</span>
            <p>UNDERGRADUATE STUDIES</p>
            <h3>Bachelor of Computer Applications</h3>
            <span>Computer Applications</span>
            <div className="education-divider"></div>
            <p>Focused on programming, computer science
              and practical software development.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-label">
          <span>05 / CONTACT</span>
          <span>HAVE AN IDEA?</span>
        </div>

        <p className="eyebrow">LET'S CREATE SOMETHING</p>

        <h2 className="contact-heading">
          Have a project
          <br />
          in <span>mind?</span>
        </h2>

        <p className="contact-description">
          I'm always interested in exploring new ideas,
          learning and collaborating on creative projects.
        </p>

        <a
          href="https://github.com/atharvparit05"
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
          Connect on GitHub ↗
        </a>

        <div className="contact-socials">
          <a href="https://github.com/atharvparit05"
             target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">AP<span>.</span></a>
        <p>DESIGNED & BUILT BY ATHARV PARIT</p>
        <p>© 2026 ALL RIGHTS RESERVED</p>
      </footer>
    </main>
  );
}
