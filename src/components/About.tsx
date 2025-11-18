import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a Senior Software Development Engineer in Test (SDET) with a passion for
              building robust, scalable test automation frameworks that enable teams to deliver
              high-quality software with confidence.
            </p>
            <p>
              With over 7 years of experience across top tech companies including Apple, Adobe,
              and IBM, I specialize in designing end-to-end automation solutions for UI, API,
              backend services, ETL pipelines, and performance testing. I'm passionate about
              quality engineering, CI/CD optimization, and mentoring teams on automation best
              practices.
            </p>
            <p>
              Currently at Apple, I lead test automation initiatives that have reduced regression
              cycles by 62% and improved system stability through comprehensive API and performance
              testing. I thrive in collaborative environments and enjoy solving complex technical
              challenges.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <div>
                  <h3>Automation First</h3>
                  <p>Building frameworks that scale and eliminate repetitive manual work</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔧</span>
                <div>
                  <h3>Quality Engineering</h3>
                  <p>Ensuring reliability through comprehensive testing strategies</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <div>
                  <h3>Team Collaboration</h3>
                  <p>Working closely with cross-functional teams to deliver excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

