import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hey there! I'm a quality-obsessed test automation engineer who builds frameworks and infrastructure 
              that make testing feel effortless! Currently at Apple, where I design and develop the automation systems 
              that keep engineering teams confident and shipping fast (yes, both are possible!).
            </p>
            <p>
              With 7 years of experience across Apple, XLscout Xlpat LLC, and IPpro Services India, I specialize in creating test automation 
              solutions that bridge the gap between quality assurance and engineering velocity. Whether it's building 
              Playwright frameworks that handle enterprise-scale UI testing, designing API validation suites that catch 
              issues before production, or creating performance testing infrastructure that scales effortlessly—I make it happen! 
              I'm fluent in everything from Python automation to Java frameworks, from CI/CD pipelines to distributed systems.
            </p>
            <p>
              From Apple's sophisticated test automation platforms to comprehensive testing infrastructure, 
              I've built systems that power quality engineering at massive scale. I'm that engineer who gets genuinely 
              excited about reducing regression cycles, loves building frameworks so robust they barely need maintenance, 
              and believes that great test automation is the secret weapon of high-performing engineering teams!
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon-wrapper">
                  <img 
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg" 
                    alt="Apple" 
                    className="highlight-icon-img"
                  />
                </div>
                <div>
                  <h3>Currently at Apple</h3>
                  <p>Building test automation that doesn't break (revolutionary concept!)</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon-wrapper">
                  <span className="highlight-icon">🚀</span>
                </div>
                <div>
                  <h3>Always Shipping</h3>
                  <p>Building frameworks that make testing faster and more reliable</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon-wrapper">
                  <span className="highlight-icon">🤝</span>
                </div>
                <div>
                  <h3>Quality & Code</h3>
                  <p>Always up for tech talks, code reviews, or debates about test strategies</p>
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

