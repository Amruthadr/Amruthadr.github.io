import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Amrutha D Ramegowda. All rights reserved.
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/Amruthadr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/amrutha-dr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a href="mailto:amruthadrgowda@gmail.com" className="footer-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

