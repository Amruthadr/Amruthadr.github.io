import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Playwright UI Automation Framework',
      description:
        'Enterprise-grade UI test automation framework built with Playwright and Python, achieving 98% coverage of critical user workflows. Features parallel execution, cross-browser testing, and seamless CI/CD integration with Jenkins.',
      technologies: ['Playwright', 'Python', 'Jenkins', 'CI/CD', 'Docker'],
      highlights: [
        'Reduced regression cycle time from 4 hours to 1.5 hours',
        '98% test coverage of critical workflows',
        'Scalable parallelized test execution',
        'Containerized execution with 65% performance improvement'
      ],
      badge: 'Production',
    },
    {
      title: 'Rest-Assured API Testing Suite',
      description:
        'Comprehensive REST API testing framework using Rest-Assured and Java, implementing schema validation, request-response integrity checks, and robust error handling for cloud services including identity, configuration, and metrics endpoints.',
      technologies: ['Rest-Assured', 'Java', 'TestNG', 'Postman', 'Swagger'],
      highlights: [
        'Validated 200+ API endpoints across cloud services',
        'Schema-based validation approach',
        'Comprehensive error handling and logging',
        'Reusable REST API validation modules'
      ],
      badge: 'Enterprise',
    },
    {
      title: 'JMeter Performance Testing Framework',
      description:
        'Scalable performance and load testing solution using Apache JMeter, configured for high-concurrency scenarios. Integrated with Jenkins for automated performance validation and Grafana for real-time metrics visualization.',
      technologies: ['JMeter', 'Jenkins', 'Grafana', 'Performance Testing', 'Load Testing'],
      highlights: [
        'Improved system throughput by 30%',
        'High-concurrency smoke and load tests',
        'Automated performance regression detection',
        'Real-time metrics visualization in Grafana dashboards'
      ],
      badge: 'Production',
    },
    {
      title: 'Selenium WebDriver Test Framework',
      description:
        'Cross-browser test automation framework built with Selenium WebDriver and TestNG, implementing Page Object Model (POM) design pattern for maintainable and scalable test suites with data-driven testing capabilities.',
      technologies: ['Selenium WebDriver', 'Java', 'TestNG', 'Page Object Model', 'Agile/Scrum'],
      highlights: [
        'Cross-browser compatibility testing',
        'POM design pattern reducing flakiness by 40%',
        'Data-driven testing capabilities',
        'Refactored legacy test scripts for better maintainability'
      ],
      badge: 'Enterprise',
    },
    {
      title: 'Cucumber BDD Test Framework',
      description:
        'Behavior-Driven Development framework using Cucumber with Gherkin syntax, enabling collaboration between technical and non-technical stakeholders through readable, executable specifications following BDD principles.',
      technologies: ['Cucumber', 'Java', 'Gherkin', 'BDD', 'TestNG'],
      highlights: [
        'Readable test scenarios in plain English',
        'Enhanced collaboration with stakeholders',
        'Living documentation for test specifications',
        'Improved test maintainability and clarity'
      ],
      badge: 'Enterprise',
    },
    {
      title: 'ETL Data Testing Automation',
      description:
        'Automated ETL testing framework using Python and SQL, validating data transformations, integrity, and consistency across distributed source and target systems with complex SQL queries across MySQL, PostgreSQL, and MongoDB.',
      technologies: ['Python', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB'],
      highlights: [
        'Reduced production data errors by 25%',
        'Automated data integrity validation',
        'Complex SQL queries for backend verification',
        'Cross-system data consistency checks across microservices'
      ],
      badge: 'Production',
    },
    {
      title: 'WireMock Service Virtualization',
      description:
        'API mocking and service virtualization framework using WireMock, enabling consistent test execution by simulating external dependencies and third-party service behaviors, including failure scenarios for fallback workflow validation.',
      technologies: ['WireMock', 'Java', 'TestNG', 'Service Virtualization', 'API Mocking'],
      highlights: [
        'Eliminated dependency on external services',
        'Faster test execution cycles',
        'Simulated third-party API failures',
        'Validated fallback workflows under adverse conditions'
      ],
      badge: 'Enterprise',
    },
    {
      title: 'Test Reporting & Analytics Dashboard',
      description:
        'Automated test reporting dashboard aggregating results from UI, API, and performance tests. Built with JavaScript and integrated with Grafana for real-time insights, trend analysis, and actionable metrics for quality engineering teams.',
      technologies: ['JavaScript', 'Grafana', 'TypeScript', 'Analytics', 'Reporting'],
      highlights: [
        'Real-time test execution insights',
        'Aggregated metrics from UI, API, and performance tests',
        'Trend analysis and historical data visualization',
        'Actionable quality metrics for engineering teams'
      ],
      badge: 'Production',
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Testing Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.badge && <span className="project-badge">{project.badge}</span>}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-highlights">
                <h4 className="highlights-title">Key Achievements:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="project-technologies">
                <h4 className="tech-title">Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.githubUrl && (
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>View Code</span>
                    <span>→</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

