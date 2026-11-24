import { useState} from 'react'
import wondersImg from './assets/wonders-of-india.png'
import cravecraftImg from './assets/crave-craft.jpeg'
import lifePilotImg from './assets/life-pilot.png'
import expenseMateImg from './assets/expense-mate.jpeg'
import profileImg from './assets/profile.jpeg'

import cert1 from './assets/certificates/NASSCOM_Gold_Certificate.pdf'
import cert2 from './assets/certificates/NxtWave_Static_Web_Application_Certificate.pdf'
import cert3 from './assets/certificates/NxtWave_Dynamic_Web_Application_Certificate.pdf'
import cert4 from './assets/certificates/NxtWave_Build_Your_Own_Responsive_Website_Certificate.pdf'
import cert5 from './assets/certificates/NxtWave_Responsive_Web_Design_Using_Flexbox_Certificate.pdf'
import cert6 from './assets/certificates/NxtWave_JavaScript_Essentials_Certificate.pdf'
import cert7 from './assets/certificates/NxtWave_Intrduction_to_databases_certificate.pdf'
import cert8 from './assets/certificates/NxtWave_Node_JS_Certificate.pdf'
import cert9 from './assets/certificates/NxtWave_React_JS_Certificate.pdf'
import cert10 from './assets/certificates/NxtWave_Developer_Foundations_Certificate.pdf'

import './App.css'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  const skills = [
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'React JS',
    'Node.js',
    'Express.js',
    'SQL',
    'Git',
    'GitHub',
  ]

const projects = [
  {
    title: 'Wonders of India',
    category: 'Tourism Website',
    description: 'A responsive tourism website showcasing popular tourist destinations, attractions and travel information across India.',
    tech: 'HTML • CSS • Bootstrap',
    image: wondersImg,
    link: 'https://suhail2203.github.io/tourism-website/',
    github: 'https://github.com/suhail2203/tourism-website'
  },
  {
    title: 'CraveCraft',
    category: 'Restaurant Website',
    description: 'A modern restaurant website designed to present food items and provide an engaging browsing experience.',
    tech: 'HTML • CSS • Bootstrap • JavaScript',
    image: cravecraftImg,
    link: 'https://suhail2203.github.io/CraveCraft-website/',
    github: 'https://github.com/suhail2203/CraveCraft-website'
  },
  {
    title: 'LifePilot',
    category: 'Task Management App',
    description: 'A task management website that helps users organize daily activities, set priorities and track progress.',
    tech: 'HTML • CSS • JavaScript',
    image: lifePilotImg,
    link: 'https://suhail2203.github.io/LifePilot-website/',
    github: 'https://github.com/suhail2203/LifePilot-website'
  },
  {
    title: 'ExpenseMate',
    category: 'Personal Expense Tracker',
    description: 'A personal finance application to manage income, expenses, transactions and monthly expense analytics.',
    tech: 'React JS • Node.js • Express.js • SQL',
    image: expenseMateImg,
    link: 'https://expense-mate-indol.vercel.app',
    github: 'https://github.com/suhail2203/ExpenseMate'
  }
]

  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">
          Suhail<span>.</span>
        </h2>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Muhammed Suhail M.L</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I build responsive and user-friendly web applications.
            I enjoy learning new technologies and creating practical
            solutions through development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile-container">
          <img
            src={profileImg}
            alt="Muhammed Suhail ML"
            className="profile-photo"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <p className="section-label">GET TO KNOW ME</p>
        <h2 className="section-title">About Me</h2>

        <p className="about-description">
          I am a Computer Science and Engineering graduate with
          knowledge of frontend and backend web development.
          I enjoy organizing tasks, monitoring progress and
          working towards completing goals effectively.
          I am interested in developer roles and open to
          opportunities where I can learn and grow professionally.
        </p>

        <div className="education-section">
          <h2 className="education-heading">My Education</h2>

          <div className="education-grid">

            <div className="education-card">
              <span className="education-year">2022 – 2026</span>
              <h3>B.E. Computer Science and Engineering</h3>
              <h4>Aalim Muhammed Salegh College of Engineering</h4>
              <p>CGPA: 7.36</p>
            </div>

            <div className="education-card">
              <span className="education-year">2021 – 2022</span>
              <h3>Higher Secondary (12th)</h3>
              <h4>Central Higher Secondary School</h4>
              <p>Percentage: 80.3%</p>
            </div>

            <div className="education-card">
              <span className="education-year">2019 – 2020</span>
              <h3>SSLC (10th)</h3>
              <h4>Central Higher Secondary School</h4>
              <p>Percentage: 81.6%</p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <p className="section-label">WHAT I WORK WITH</p>
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-category-container">

          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skills-container">
              {["HTML", "CSS", "JavaScript", "Bootstrap", "React JS"].map((skill) => (
                <div className="skill-card" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend Development</h3>
            <div className="skills-container">
              {["Node.js", "Express.js", "REST APIs"].map((skill) => (
                <div className="skill-card" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Database</h3>
            <div className="skills-container">
              {["SQL"].map((skill) => (
                <div className="skill-card" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Tools & Technologies</h3>
            <div className="skills-container">
              {["Git", "GitHub"].map((skill) => (
                <div className="skill-card" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <p className="section-label">MY RECENT WORK</p>
        <h2 className="section-title">My Projects</h2>

        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech}
              </div>

              <div className="project-buttons">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Code ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
<section id="certifications" className="section">
  <p className="section-label">MY ACHIEVEMENTS</p>
  <h2 className="section-title">Certifications</h2>

  <div className="certifications-container">

    {[
      { title: 'NASSCOM CCBP 4.0 Academy Assessment - Gold Category', file: cert1, issuer: 'NASSCOM' },
      { title: 'Build Your Own Static Website', file: cert2, issuer: 'NxtWave Academy' },
      { title: 'Build Your Own Dynamic Web Application', file: cert3, issuer: 'NxtWave Academy' },
      { title: 'Build Your Own Responsive Website', file: cert4, issuer: 'NxtWave Academy' },
      { title: 'Responsive Web Design Using Flexbox', file: cert5, issuer: 'NxtWave Academy' },
      { title: 'JavaScript Essentials', file: cert6, issuer: 'NxtWave Academy' },
      { title: 'Introduction to Databases', file: cert7, issuer: 'NxtWave Academy' },
      { title: 'Node.js', file: cert8, issuer: 'NxtWave Academy' },
      { title: 'React JS', file: cert9, issuer: 'NxtWave Academy' },
      { title: 'Developer Foundations', file: cert10, issuer: 'NxtWave Academy' }
    ].map((cert) => (
      <div className="certificate-card" key={cert.title}>
        <h3>{cert.title}</h3>
        <p>{cert.issuer}</p>
        <a
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          View Certificate →
        </a>
      </div>
    ))}

  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <p className="section-label">GET IN TOUCH</p>
        <h2 className="section-title">Let's Connect</h2>

        <p>
          I am open to opportunities and would love to connect
          with professionals and teams.
        </p>

        <div className="contact-links">
            <a href="mailto:mdsuhail2203@gmail.com">
              Email Me
            </a>

            <a href="tel:+918754802214">
              Call Me
            </a>

            <a
              href="https://www.linkedin.com/in/muhammed-suhail-ml"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/suhail2203"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
      </section>

      {/* Footer */}
<footer className="footer">
  <div className="footer-container">

    <div className="footer-about">
      <h2 className="logo">Suhail<span>.</span></h2>
      <p>Full Stack Developer</p>
      <p>Building responsive and user-friendly web applications.</p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#certifications">Certifications</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-social">
  <h3>Connect With Me</h3>

  <a href="mailto:mdsuhail2203@gmail.com">
    Email
  </a>

  <a href="tel:+918754802214">
    Phone: +91 8754802214
  </a>

  <a
    href="https://www.linkedin.com/in/muhammed-suhail-ml"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/suhail2203"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Muhammed Suhail M.L. All Rights Reserved.</p>
    <a href="#home" className="back-to-top">Back to Top ↑</a>
  </div>
</footer>

    </div>
  )
}

export default App