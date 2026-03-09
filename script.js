// GLOBAL CONFIG - Loads from data.json
let websiteData = {};

// Load data and generate website
async function initWebsite() {
    try {
        const response = await fetch('data.json');
        websiteData = await response.json();
        generateWebsite();
        initAllInteractions();
        console.log('✅ Website loaded dynamically!');
    } catch (error) {
        console.error('❌ Failed to load ', error);
        document.getElementById('dynamic-content').innerHTML = 
            '<div style="text-align:center;padding:4rem;"><h2>⚠️ Config not found</h2><p>Please create <code>data.json</code></p></div>';
    }
}

// Generate entire website dynamically
function generateWebsite() {
    const content = document.getElementById('dynamic-content');
    content.innerHTML = `
        ${generateHero()}
        ${generateAbout()}
        ${generateSkills()}
        ${generateProjects()}
        ${generateContact()}
    `;
}

// 1. Hero Section
function generateHero() {
    const data = websiteData.personal;
    return `
        <section id="home" class="hero">
            <div class="hero-container">
                <div class="hero-content">
                    <h1 class="hero-title">${data.name}</h1>
                    <p class="hero-subtitle">${data.title}</p>
                    <p class="hero-description">${data.description}<br>Based in ${data.location}.</p>
                    <div class="hero-buttons">
                        <button class="btn btn-primary" onclick="scrollToSection('projects')">View My Work</button>
                        <div class="resume-buttons">
                            ${Object.entries(websiteData.resumes || {}).map(([key, resume]) => 
                                `<button class="btn btn-secondary" onclick="downloadResume('${key}')">
                                    📄 ${resume.filename}
                                </button>`
                            ).join('')}
                        </div>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="profile-photo"><span>👨‍💻</span></div>
                </div>
            </div>
        </section>
    `;
}

// 2. About Section  
function generateAbout() {
    const data = websiteData.personal;
    return `
        <section id="about" class="about">
            <div class="container">
                <h2 class="section-title">About Me</h2>
                <div class="about-content">
                    <div class="about-image">
                        <div class="profile-photo"><span>👨‍💻</span></div>
                    </div>
                    <div class="about-text">
                        <p>Passionate developer building web and mobile applications with modern technologies. I specialize in full-stack development using React, Java, PHP/MySQL, C#, and Swift.</p>
                        <p>Currently studying in Quebec while working towards B2 French proficiency. I love solving complex problems and creating user-friendly applications.</p>
                        <div class="about-stats">
                            <div class="stat"><span class="stat-number">${data.stats.experience}</span><span class="stat-label">Years Experience</span></div>
                            <div class="stat"><span class="stat-number">${data.stats.projects}</span><span class="stat-label">Projects Completed</span></div>
                            <div class="stat"><span class="stat-number">${data.stats.technologies}</span><span class="stat-label">Technologies</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// 3. Skills Section
function generateSkills() {
    return `
        <section id="skills" class="skills">
            <div class="container">
                <h2 class="section-title">Skills & Technologies</h2>
                <div class="skills-grid">
                    ${websiteData.skills.map(skill => `
                        <div class="skill-category">
                            <div class="skill-icon">${skill.icon}</div>
                            <h3>${skill.category}</h3>
                            <div class="skill-tags">
                                ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

// 4. Projects Section
function generateProjects() {
    return `
        <section id="projects" class="projects">
            <div class="container">
                <h2 class="section-title">Featured Projects</h2>
                <div class="projects-grid">
                    ${websiteData.projects.map(project => `
                        <div class="project-card">
                            <div class="project-content">
                                <h3>${project.title}</h3>
                                <p>${project.description}</p>
                                <div class="project-tech">
                                    ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                                </div>
                                <div class="project-links">
                                    <a href="${project.github}" class="btn btn-small" target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

// 5. Contact Section
function generateContact() {
    const data = websiteData;
    return `
        <section id="contact" class="contact">
            <div class="container">
                <h2 class="section-title">Get In Touch</h2>
                <div class="contact-content">
                    <div class="contact-info">
                        <h3>${data.contact.greeting}</h3>
                        <p>${data.contact.message}</p>
                        <div class="social-links">
                            <a href="${data.social.github}" class="social-link" aria-label="GitHub" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><!-- GitHub SVG --></svg>
                            </a>
                            <a href="${data.social.linkedin}" class="social-link" aria-label="LinkedIn" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><!-- LinkedIn SVG --></svg>
                            </a>
                            <a href="mailto:${data.social.email}" class="social-link" aria-label="Email">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><!-- Email SVG --></svg>
                            </a>
                        </div>
                    </div>
                    <form class="contact-form" id="contactForm"><!-- Form stays same --></form>
                </div>
            </div>
        </section>
    `;
}

// Dynamic Resume Download
function downloadResume(type) {
    const resume = websiteData.resumes[type];
    if (!resume) {
        showNotification('Document not found!', 'error');
        return;
    }
    
    const link = document.createElement('a');
    link.href = resume.url;
    link.download = resume.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification(`${resume.filename} download started!`, 'success');
}

// All your existing functions (scrollToSection, showNotification, etc.) stay the same...
// Copy them from your original script.js

// Initialize everything
document.addEventListener('DOMContentLoaded', initWebsite);
