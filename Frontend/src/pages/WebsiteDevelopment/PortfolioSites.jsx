import React from 'react';
import './PortfolioSites.css';
import Footer from '../Footer';

const EnhancedPortfolioSites = () => {
  return (
    <div className="enhanced-portfolio-container">
      <section className="enhanced-intro-banner">
        <div className="intro-text">
          <h1>Welcome to Our Portfolio Sites</h1>
          <p>Your gateway to innovation and creativity. Let’s build something amazing together!</p>
        </div>
      </section>

      <section className="enhanced-vision-section">
        <h2>Our Vision for Future Projects</h2>
        <div className="enhanced-project-list">
          <div className="enhanced-project-item">
            <h3>Responsive E-commerce Solutions</h3>
            <p>
              Building intuitive e-commerce platforms that drive engagement and boost sales across devices.
            </p>
          </div>
          <div className="enhanced-project-item">
            <h3>Custom CMS Development</h3>
            <p>
              Tailoring CMS solutions to meet business needs, making content management effortless.
            </p>
          </div>
          <div className="enhanced-project-item">
            <h3>Dynamic Single Page Applications</h3>
            <p>
              Crafting SPAs that deliver immersive experiences, using modern frameworks like React.
            </p>
          </div>
          <div className="enhanced-project-item">
            <h3>Captivating Portfolio Websites</h3>
            <p>
              Showcasing work with elegance and creativity through custom portfolio sites.
            </p>
          </div>
          <div className="enhanced-project-item">
            <h3>Corporate Websites</h3>
            <p>
              Professional and branded corporate websites that communicate values effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="enhanced-approach-section">
        <h2>Our Approach</h2>
        <div className="approach-content">
          <p>
            We believe every project requires a personalized touch, and our dedicated team collaborates closely with you to transform your vision into reality through cutting-edge designs and technology.
          </p>
        </div>
      </section>

      <section className="enhanced-process-section">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="process-step" style={{backgroundColor: '#e3f2fd'}}>
            <h4>Discovery and Planning</h4>
            <p>Understanding goals, planning, and aligning on project scope to ensure success.</p>
          </div>
          <div className="process-step" style={{backgroundColor: '#fce4ec'}}>
            <h4>Design and Prototyping</h4>
            <p>Crafting engaging prototypes to visualize the project before development.</p>
          </div>
          <div className="process-step" style={{backgroundColor: '#f3e5f5'}}>
            <h4>Development and Testing</h4>
            <p>Turning designs into fully functional websites with rigorous testing for quality assurance.</p>
          </div>
          <div className="process-step" style={{backgroundColor: '#e0f2f1'}}>
            <h4>Launch and Support</h4>
            <p>Deploying the website and providing continuous support for maintenance and upgrades.</p>
          </div>
        </div>
      </section>

      <section className="enhanced-skills-section">
        <h2>Skills & Expertise</h2>
        <div className="skills-showcase">
          <p>Front-End Development: <span>React, Vue.js, HTML, CSS, JavaScript</span></p>
          <p>Back-End Development: <span>Node.js, Express.js, Python</span></p>
          <p>Database Management: <span>MySQL, MongoDB</span></p>
          <p>Design Tools: <span>Figma, Adobe XD</span></p>
          <p>Version Control: <span>Git, GitHub</span></p>
        </div>
      </section>

      <section className="enhanced-contact-section">
        <h2>Why Choose Us?</h2>
        <p>
          Passion, innovation, and commitment to excellence define us. We are eager to collaborate and create digital solutions that make an impact. Reach out to start your journey with us.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default EnhancedPortfolioSites;
