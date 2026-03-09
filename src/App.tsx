import { useState, useEffect, useRef } from 'react'
import './App.css'

interface Project {
  title: string;
  description: string;
  link: string;
  details: string;
}

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const skillsRef = useRef(null);

  const fullText = "I am currently pursuing a DEC in Information Technology at LaSalle College, where I am in my 2nd year (started September 2024, expected completion April 2026). As a former 12th-grade Computer Science student, I am passionate about programming and technology, with skills in HTML, JavaScript, C#, Java, and SQL Server. My interests include web development, software engineering, and exploring new technologies to build innovative solutions.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !skillsAnimated) {
          setSkillsAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [skillsAnimated]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    console.log('Name:', name, 'Email:', email, 'Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  const projects = [
    {
      title: 'HiTech Order Management System',
      description: 'A multi-tier Windows Forms application for order management using C#, SQL Server 2022, and Entity Framework Core.',
      link: 'https://github.com/Agent-smith018/HiTech-Order-Management-System',
      details: 'This project implements a comprehensive order management system for Hi-Tech Distribution Inc. It features user authentication, inventory management, order processing, and reporting capabilities. Built with layered architecture for maintainability and scalability.'
    },
    {
      title: 'FlavorFusion',
      description: 'A JavaScript-based project for food-related applications.',
      link: 'https://github.com/Agent-smith018/FlavorFushion',
      details: 'FlavorFusion is a web application focused on culinary experiences. It includes recipe management, ingredient tracking, and user-generated content features. Developed with modern JavaScript practices and responsive design.'
    },
    {
      title: 'Advanced OOP Priority Queue (Java)',
      description: 'An implementation of a priority queue using advanced object-oriented programming principles in Java.',
      link: 'https://github.com/Agent-smith018/advanced-oop-priority-queue-java',
      details: 'This project demonstrates advanced OOP concepts including inheritance, polymorphism, and design patterns. The priority queue implementation includes efficient algorithms for insertion, deletion, and priority management.'
    },
    {
      title: 'NichNest',
      description: 'A comprehensive IoT-based smart home automation system built with Java and modern web technologies.',
      link: 'https://github.com/Agent-smith018/NichNest',
      details: 'NichNest is an innovative smart home automation platform that integrates various IoT devices for seamless home management. The system features real-time environmental monitoring, automated device control, energy optimization, and a user-friendly web interface. Built with Java Spring Boot for the backend, it incorporates MQTT protocol for device communication, MySQL for data persistence, and a responsive React frontend. Key features include temperature/humidity monitoring, smart lighting control, security system integration, energy consumption analytics, and mobile notifications. The project demonstrates advanced concepts in distributed systems, real-time data processing, and scalable architecture design.'
    }
  ];

  return (
    <>
      <header>
        <h1>Smit Prajapati's Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="hero">
        <div className="hero-content">
          <h2>Welcome to My Portfolio</h2>
          <p>Explore my journey as a Computer Science student, showcasing projects, skills, and passion for technology.</p>
          <a href="#about" className="cta-button">Get Started</a>
        </div>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>{displayedText}<span className="cursor">|</span></p>
      </section>
      <section id="skills" ref={skillsRef}>
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">🌐</div>
              <div className="skill-info">
                <h3>HTML</h3>
                <div className="skill-level">Frontend Development</div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress" style={{width: skillsAnimated ? '90%' : '0%'}}></div>
              </div>
              <div className="skill-percentage">90%</div>
            </div>
            <div className="skill-description">
              Proficient in creating semantic, accessible, and responsive web structures using modern HTML5 standards.
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">⚡</div>
              <div className="skill-info">
                <h3>JavaScript</h3>
                <div className="skill-level">Programming Language</div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress" style={{width: skillsAnimated ? '85%' : '0%'}}></div>
              </div>
              <div className="skill-percentage">85%</div>
            </div>
            <div className="skill-description">
              Strong foundation in ES6+, DOM manipulation, asynchronous programming, and modern JavaScript frameworks.
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">🔷</div>
              <div className="skill-info">
                <h3>C#</h3>
                <div className="skill-level">Backend Development</div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress" style={{width: skillsAnimated ? '80%' : '0%'}}></div>
              </div>
              <div className="skill-percentage">80%</div>
            </div>
            <div className="skill-description">
              Experience with .NET framework, object-oriented programming, and building robust desktop applications.
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">☕</div>
              <div className="skill-info">
                <h3>Java</h3>
                <div className="skill-level">Object-Oriented Programming</div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress" style={{width: skillsAnimated ? '75%' : '0%'}}></div>
              </div>
              <div className="skill-percentage">75%</div>
            </div>
            <div className="skill-description">
              Solid understanding of Java fundamentals, data structures, algorithms, and enterprise-level application development.
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">🗄️</div>
              <div className="skill-info">
                <h3>SQL Server</h3>
                <div className="skill-level">Database Management</div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress" style={{width: skillsAnimated ? '70%' : '0%'}}></div>
              </div>
              <div className="skill-percentage">70%</div>
            </div>
            <div className="skill-description">
              Knowledge of database design, SQL queries, stored procedures, and data management best practices.
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <h2>Experience & Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>12th Grade Student</h3>
            <p>Currently studying Computer Science, focusing on programming and software development.</p>
            <span className="date">2023 - Present</span>
          </div>
          <div className="timeline-item">
            <h3>Project Development</h3>
            <p>Developed multiple projects including web applications, desktop software, and Java programs.</p>
            <span className="date">Ongoing</span>
          </div>
          <div className="timeline-item">
            <h3>Skills Development</h3>
            <p>Continuous learning in HTML, CSS, JavaScript, C#, Java, and modern frameworks.</p>
            <span className="date">2022 - Present</span>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project" onClick={() => setSelectedProject(project)}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" onClick={(e) => e.stopPropagation()}>View on GitHub</a>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedProject(null)}>&times;</span>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.details}</p>
              <a href={selectedProject.link} target="_blank">View on GitHub</a>
            </div>
          </div>
        )}
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: prajapatismit212@gmail.com</p>
        <p>Phone: +1 438 994 9802</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/smit-prajapati-3ab514342/" target="_blank">Smit Prajapati</a></p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      <footer>
        <p>© 2026 Smit Prajapati</p>
      </footer>
    </>
  )
}

export default App
