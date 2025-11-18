import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    suites: 0,
    tests: 0,
    coverage: 0,
    endpoints: 0,
    frameworks: 0,
  });

  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters, duration: number = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(7, 'experience');
      animateCounter(5, 'frameworks');
      animateCounter(2500, 'tests');
      animateCounter(92, 'coverage');
      animateCounter(1000, 'endpoints');
      animateCounter(60, 'suites');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: 'Years Experience', value: counters.experience, suffix: ' years', subtitle: 'Since 2016' },
    { label: 'Test Frameworks Built', value: counters.frameworks, suffix: '+', subtitle: 'Enterprise Scale' },
    { label: 'Tests Automated', value: counters.tests, suffix: '+', subtitle: 'Career Total' },
    { label: 'Test Coverage', value: counters.coverage, suffix: '%', subtitle: 'Critical Workflows' },
    { label: 'API Endpoints Tested', value: counters.endpoints, suffix: '+', subtitle: 'Production APIs' },
    { label: 'Test Suites Created', value: counters.suites, suffix: '+', subtitle: 'Across Projects' },
  ];

  const restAssuredIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='11' fill='%232F58F5'/%3E%3Ccircle cx='12' cy='12' r='2' fill='white'/%3E%3Ccircle cx='12' cy='12' r='5' fill='none' stroke='white' stroke-width='1.2' opacity='0.8'/%3E%3Ccircle cx='12' cy='12' r='7.5' fill='none' stroke='white' stroke-width='1' opacity='0.6'/%3E%3C/svg%3E";

  const topTechnologies = [
    { name: 'Playwright', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/playwright.svg' },
    { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cypress.svg' },
    { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/selenium.svg' },
    { name: 'Rest-Assured', icon: restAssuredIcon },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg' },
    { name: 'JMeter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apachejmeter.svg' },
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jenkins.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postman.svg' }
  ];

  const competencies = [
    'Test Strategy & Architecture',
    'Quality Engineering Leadership',
    'Technical Leadership',
    'Continuous Quality Engineering',
    'Scalable Test Infrastructure',
    'Performance Engineering',
    'API & Integration Testing',
    'Team Development & Mentoring',
    'Agile Test Engineering',
    'DevOps & Quality Integration'
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">Amrutha D Ramegowda</span>
            <span className="hero-role">Senior SDET</span>
          </h1>
            <p className="hero-description">
              Senior SDET specializing in enterprise-scale test automation frameworks (Playwright, Cypress, Selenium, Rest-Assured, JMeter), CI/CD pipeline optimization, DevOps integration, performance testing, and Agile methodology. Architecting scalable solutions at Apple that enable parallel execution, reduce regression cycles, and improve test coverage.
            </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-subtitle">{stat.subtitle}</div>
              </div>
            ))}
          </div>
          <div className="hero-technologies">
            <div className="tech-badges-row">
              {topTechnologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className={tech.name === 'Rest-Assured' ? 'tech-icon tech-icon-restassured' : 'tech-icon'} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const badge = target.closest('.tech-badge');
                      if (badge) {
                        const fallback = document.createElement('div');
                        fallback.className = 'tech-icon-fallback';
                        fallback.style.cssText = 'width: 22px; height: 22px; background: var(--primary-color); border-radius: 4px; margin-bottom: 0.3rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px; font-weight: bold;';
                        fallback.textContent = tech.name.substring(0, 2).toUpperCase();
                        target.parentNode?.insertBefore(fallback, target);
                        target.style.display = 'none';
                      }
                    }} 
                  />
                  <span className="tech-name">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="hero-competencies">
            <div className="competencies-row">
              {competencies.map((competency, index) => (
                <span key={index} className="competency-badge">{competency}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

