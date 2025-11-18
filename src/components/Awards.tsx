import './Awards.css';

interface Award {
  category: string;
  items: string[];
}

const Awards = () => {
  const awards: Award[] = [
    {
      category: 'Professional Recognition',
      items: [
        'Led test automation initiatives reducing regression cycles by 62% at Apple',
        'Recognized for excellence in quality engineering and framework architecture',
        'Mentored junior engineers on automation best practices and test strategies'
      ],
    },
    {
      category: 'Technical Achievements',
      items: [
        'Built enterprise-scale test frameworks handling 1500+ automated tests',
        'Achieved 92% test coverage across critical workflows',
        'Optimized CI/CD pipeline performance by 65% through containerized execution'
      ],
    },
  ];

  return (
    <section id="awards" className="section awards">
      <div className="container">
        <h2 className="section-title">Awards & Achievements</h2>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-category">
              <h3 className="award-category-title">{award.category}</h3>
              <ul className="award-list">
                {award.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

