import './Experience.css';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Apple',
      role: 'Software Development Engineer in Test',
      location: 'Sunnyvale, CA',
      period: '07/2024 – Present',
      achievements: [
        'Led development of Playwright-based UI automation in Python framework, covering 98% of critical workflows',
        'Built comprehensive API testing suite for cloud services including identity, configuration, & metrics endpoints',
        'Identified and reported 200+ functional, integration, and performance issues within the first 6 months',
        'Reduced regression cycle time from 4 hours to 1.5 hours through scalable parallelized test execution',
        'Developed automated validation workflows to verify system and device metrics in Grafana dashboards',
        'Optimized CI/CD pipeline performance by 65% through containerized execution & parallel device testing',
        'Created detailed, version-controlled test documentation reducing incident response time by 40%',
      ],
    },
    {
      company: 'XLscout Xlpat LLC',
      role: 'Software Test Engineer',
      location: 'Bangalore, India',
      period: '01/2021 – 07/2022',
      achievements: [
        'Scaled Playwright-based automation for UI and backend services, increasing test coverage by 75%',
        'Developed reusable REST API validation modules with robust request-response integrity checks',
        'Designed & executed automated ETL tests, reducing production errors by 25%',
        'Validated backend data using complex SQL queries across distributed microservices',
        'Configured high-concurrency JMeter tests in Jenkins, improving system throughput by 30%',
        'Simulated third-party API failures to validate fallback workflows',
        'Verified AI reinforcement ranking models using scenario-based test strategies',
        'Logged, tracked, & triaged 150+ defects across UI and API layers',
      ],
    },
    {
      company: 'IPpro Services India',
      role: 'Quality Assurance Engineer',
      location: 'Bangalore, India',
      period: '09/2016 – 12/2020',
      achievements: [
        'Built automated test reporting dashboards aggregating results from UI, API, & performance tests',
        'Automated cross-browser UI testing using Selenium WebDriver and TestNG',
        'Built scalable, data-driven API automation frameworks in Java with Rest-Assured',
        'Integrated automated test suites into Jenkins CI/CD pipelines, reducing post-release defects by 40%',
        'Refactored legacy test scripts using Page Object Model (POM) design pattern',
        'Implemented API mocking with WireMock to simulate external service behavior',
        'Mentored junior QA engineers by reviewing test plans and sharing best practices',
      ],
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-company">{exp.company}</h3>
                    <h4 className="experience-role">{exp.role}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-location">{exp.location}</span>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                </div>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
