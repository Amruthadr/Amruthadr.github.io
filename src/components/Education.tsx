import './Education.css';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

const Education = () => {
  const education: EducationItem[] = [
    {
      degree: 'Master of Science, Computer Science',
      institution: 'San Jose State University',
      location: 'San Jose, USA',
      period: 'Graduated',
    },
    {
      degree: 'Bachelor of Engineering, Computer Science',
      institution: 'The Oxford College of Engineering',
      location: 'Bangalore, India',
      period: 'Graduated',
    },
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">🎓</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-location">{edu.location}</p>
              <span className="education-period">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

