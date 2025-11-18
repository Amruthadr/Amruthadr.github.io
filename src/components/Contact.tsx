import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always interested in hearing about new opportunities, innovative projects, or
            just having a chat about test automation and quality engineering.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Location</h3>
                <p>San Jose, CA, United States</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email</h3>
                <a href="mailto:amruthadrgowda@gmail.com">amruthadrgowda@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h3>Phone</h3>
                <a href="tel:+17162564674">(716) 256-4674</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://linkedin.com/amrutha-dr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/amrutha-dr
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🐙</span>
              <div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/Amruthadr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Amruthadr
                </a>
              </div>
            </div>
          </div>
          <div className="contact-cta">
            <a href="mailto:amruthadrgowda@gmail.com" className="btn btn-primary">
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

