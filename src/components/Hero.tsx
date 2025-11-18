import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    tests: 0,
    coverage: 0,
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
      animateCounter(50, 'projects');
      animateCounter(200, 'tests');
      animateCounter(98, 'coverage');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: 'Years Experience', value: counters.experience, suffix: '+' },
    { label: 'Projects Delivered', value: counters.projects, suffix: '+' },
    { label: 'Tests Automated', value: counters.tests, suffix: '+' },
    { label: 'Test Coverage', value: counters.coverage, suffix: '%' },
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
            Test automation architect with 7+ years of experience building scalable frameworks
            for UI, API, backend, and performance testing. Passionate about quality engineering
            and enabling teams to ship with confidence.
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

