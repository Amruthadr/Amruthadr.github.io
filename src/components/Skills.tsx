import './Skills.css';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Testing Tools & Frameworks',
      skills: [
        'Playwright',
        'Selenium WebDriver',
        'TestNG',
        'JUnit',
        'Cucumber',
        'Rest-Assured',
        'Postman',
        'Swagger',
        'WireMock',
        'JMeter',
        'Grafana',
      ],
    },
    {
      title: 'Programming & Scripting',
      skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'Bash', 'HTML', 'CSS', 'XML', 'JSON', 'SQL'],
    },
    {
      title: 'Databases & Cloud',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Google Cloud Platform (GCP)'],
    },
    {
      title: 'CI/CD & DevOps Tools',
      skills: ['Jenkins', 'Git', 'Docker', 'Kubernetes', 'Rio', 'Agile/Scrum', 'TDD', 'BDD', 'Jira', 'Confluence'],
    },
    {
      title: 'Other',
      skills: [
        'Test data management',
        'Service virtualization',
        'Performance/load testing',
        'Automated reporting',
        'Excel',
        'Radar',
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

