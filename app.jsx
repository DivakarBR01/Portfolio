const { useState, useEffect } = React;

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["About", "Skills", "Education", "Projects", "Experience", "Certifications", "Contact"];

const SKILLS = [
    {
        label: "💻 Programming Languages",
        items: ["Python","Java", "PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    },
    {
        label: "🛠 Tools & Technologies",
        items: ["Visual Studio Code", "Git & GitHub", "XAMPP", "Flask", "React JS"],
    },
    {
        label: "🤝 Soft Skills",
        items: ["Teamwork", "Problem Solving", "Communication", "Time Management", "Continuous Learning"],
    },
];

const EDUCATION = [
    {
        degree: "B.E – Computer Science & Design",
        school: "Sethu Institute of Technology",
        year: "2021 – 2025",
        score: "CGPA: 7.63 / 10",
        location: "Viruthunagar, TN",
    },
    {
        degree: "Class 12 – State Board (HSC)",
        school: "Viruthunagar Hindu Nadar HSS",
        year: "2020 – 2021",
        score: "80%",
        location: "Madurai, TN",
    },
    {
        degree: "Class 10 – State Board (SSLC)",
        school: "St Mary's Higher Secondary School",
        year: "2018 – 2019",
        score: "76%",
        location: "Kanyakumari, TN",
    },
];

const PROJECTS = [
    {
        name: "Job Interview Portal",
        company: "V7 Lancers Technopark Pvt Ltd",
        techs: ["HTML", "CSS", "PHP", "SQL"],
        points: [
            "Developed a complete job portal system",
            "Implemented user & admin authentication",
            "Job listings and application management",
            "Secure database integration",
        ],
    },
    {
        name: "Bakery&Co Online Store",
        company: "Madura Solution",
        techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        points: [
            "Dynamic e-commerce web application",
            "User authentication system",
            "Real-time shopping cart & order tracking",
            "Admin dashboard for inventory management",
            "QR-code-based UPI payment system",
        ],
    },
    {
        name: "Student Certificate Submission System",
        company: "Academic Project",
        techs: ["Python", "Flask", "MySQL", "HTML", "CSS"],
        points: [
            "Centralized certificate management system",
            "Student secure upload portal",
            "Staff approval workflow",
            "Backend logic using Flask & MySQL",
        ],
    },
    {
        name: "Flood Alerting System",
        company: "Hardware Project",
        techs: ["IoT", "Sensors"],
        points: [
            "Automated flood detection system",
            "Helps riverbed residents during flood risk",
            "Sensor-based real-time monitoring",
        ],
    },
];

const EXPERIENCE = [
    {
        company: "V7 Lancers Technopark Pvt Ltd",
        role: "Full Stack Developer Intern",
        duration: "Jun 2024 – Jul 2024",
    },
    {
        company: "Codtech IT Solutions",
        role: "Cyber Security Intern",
        duration: "Jan 2025 – Mar 2025",
    },
    {
        company: "Madura Solution",
        role: "Junior Software Developer",
        duration: "Oct 2025 – Feb 2026",
    },
];

const CERTIFICATIONS = [
    { icon: "☕", name: "Java", issuer: "Infosys Springboard" },
    { icon: "🐘", name: "PHP & MySQL", issuer: "Udemy" },
    { icon: "🐍", name: "Python & Flask", issuer: "Udemy" },
    { icon: "🔐", name: "Cyber Security", issuer: "Codtech IT Solutions" },
];



// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none" }}>
            <div className="nav-logo">Divakar B R</div>
            <ul className="nav-links">
                {NAV_LINKS.map((l) => (
                    <li key={l}>
                        <a href={`#${l.toLowerCase()}`}>{l}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg" />
            <div className="hero-content">
                <div className="hero-badge">🚀 Full Stack Developer</div>
                <h1>
                    Hi, I'm <span>Divakar B R</span>
                </h1>
                <p className="hero-sub">
                    B.E Computer Science &amp; Design student passionate about building real-world applications and solving complex problems with technology.
                </p>
                <div className="hero-btns">
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="#contact" className="btn-outline">Contact Me</a>
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section id="about">
            <div className="section-title">About <span>Me</span></div>
            <p className="section-sub">A passionate developer ready to make an impact</p>
            <div className="about-grid">
                <div className="about-text">
                    <p>
                        I am a Bachelor of Engineering student in <strong>Computer Science and Design</strong> with hands-on experience in full-stack web development. I have built multiple real-world applications including job portals, e-commerce platforms, and certificate management systems.
                    </p>
                    <p>
                        I enjoy solving real-world problems using technology and continuously improving my development skills.
                    </p>
                    <div className="about-stats">
                        <div className="stat-box"><div className="num">3+</div><div className="label">Internships</div></div>
                        <div className="stat-box"><div className="num">4+</div><div className="label">Projects</div></div>
                        <div className="stat-box"><div className="num">4+</div><div className="label">Certifications</div></div>
                    </div>
                </div>
                <div>
                    <div className="section-title" style={{ fontSize: "1rem", marginBottom: "14px" }}>
                        🏏 <span>Achievement</span>
                    </div>
                    <div className="achievement-card">
                        <div className="achievement-icon">🏆</div>
                        <div className="achievement-text">
                            <h3>State-Level Cricket Player</h3>
                            <p>Demonstrated discipline, dedication, and teamwork through competitive sports participation. (2021)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section id="skills">
            <div className="section-title">My <span>Skills</span></div>
            <p className="section-sub">Technologies and tools I work with</p>
            <div className="skills-grid">
                {SKILLS.map((group) => (
                    <div key={group.label} className="skill-card">
                        <div className="skill-card-title">{group.label}</div>
                        <div className="skill-pills">
                            {group.items.map((s) => <span key={s} className="pill">{s}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Education() {
    return (
        <section id="education">
            <div className="section-title">My <span>Education</span></div>
            <p className="section-sub">Academic background and qualifications</p>
            <div className="edu-list">
                {EDUCATION.map((e, i) => (
                    <div key={i} className="edu-card">
                        <div className="edu-icon">🎓</div>
                        <div className="edu-info">
                            <h3>{e.degree}</h3>
                            <div className="school">{e.school}</div>
                            <div className="edu-meta">
                                <span>📅 {e.year}</span>
                                <span>📍 {e.location}</span>
                                <span className="edu-badge">{e.score}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects">
            <div className="section-title">My <span>Projects</span></div>
            <p className="section-sub">Real-world applications I have built</p>
            <div className="projects-grid">
                {PROJECTS.map((p) => (
                    <div key={p.name} className="project-card">
                        <div className="project-company">{p.company}</div>
                        <h3>{p.name}</h3>
                        <ul className="project-desc">
                            {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                        </ul>
                        <div className="project-techs">
                            {p.techs.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section id="experience">
            <div className="section-title">Work <span>Experience</span></div>
            <p className="section-sub">Internships</p>
            <div className="exp-list">
                {EXPERIENCE.map((e) => (
                    <div key={e.company} className="exp-card">
                        <div>
                            <h3>🏢 {e.company}</h3>
                            <div className="exp-role">{e.role}</div>
                        </div>
                        <div className="exp-duration">📅 {e.duration}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Certifications() {
    return (
        <section id="certifications">
            <div className="section-title">My <span>Certifications</span></div>
            <p className="section-sub">Verified credentials and courses completed</p>
            <div className="cert-grid">
                {CERTIFICATIONS.map((c) => (
                    <div key={c.name} className="cert-card">
                        <div className="cert-icon">{c.icon}</div>
                        <div className="cert-text">
                            <h4>{c.name}</h4>
                            <p>{c.issuer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2>Let's <span>Connect</span></h2>
            <p>Let's connect and build something amazing together!</p>
            <div className="contact-links">
                <a href="mailto:divakar.rbala@gmail.com" className="contact-link">
                    <span className="contact-link-icon">📧</span>
                    divakar.rbala@gmail.com
                </a>
                <a href="tel:+919488204437" className="contact-link">
                    <span className="contact-link-icon">📞</span>
                    +91 9488204437
                </a>
                <a href="https://linkedin.com/in/divakar-b-r-2a0b33230" target="_blank" rel="noreferrer" className="contact-link">
                    <span className="contact-link-icon">🔗</span>
                    LinkedIn Profile
                </a>
            </div>
            <p className="footer-copy">© 2025 Divakar B R · Built with React &amp; CSS</p>
        </section>
    );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
