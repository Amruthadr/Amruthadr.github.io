import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Pet Adoption Center',
      description:
        'Dataset generator for pet adoption center. A comprehensive system for managing and generating datasets for pet adoption workflows.',
      technologies: ['Python', 'Data Processing', 'Automation'],
      githubUrl: 'https://github.com/Amruthadr/pet_adoption_center',
    },
    {
      title: 'Test Automation Framework',
      description:
        'Scalable Playwright-based UI automation framework covering 98% of critical workflows. Built with Python and integrated into CI/CD pipelines.',
      technologies: ['Python', 'Playwright', 'CI/CD', 'Jenkins'],
    },
    {
      title: 'API Testing Suite',
      description:
        'Comprehensive API testing suite for cloud services including identity, configuration, and metrics endpoints with robust validation.',
      technologies: ['Python', 'REST APIs', 'Postman', 'Rest-Assured'],
    },
    {
      title: 'Performance Testing Framework',
      description:
        'High-concurrency JMeter-based performance testing framework integrated with Jenkins for continuous performance validation.',
      technologies: ['JMeter', 'Jenkins', 'Performance Testing', 'Load Testing'],
    },
    {
      title: 'ETL Testing Automation',
      description:
        'Automated ETL testing framework verifying data transformations and integrity across source and target systems.',
      technologies: ['Python', 'SQL', 'ETL', 'Data Validation'],
    },
    {
      title: 'Test Reporting Dashboard',
      description:
        'Automated test reporting dashboard aggregating results from UI, API, and performance tests with real-time insights.',
      technologies: ['JavaScript', 'Dashboard', 'Analytics', 'Reporting'],
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.badge && <span className="project-badge">{project.badge}</span>}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>GitHub</span>
                    <span>→</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>Live Demo</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

