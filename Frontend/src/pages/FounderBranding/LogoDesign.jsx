import React from 'react';
import './LogoDesign.css';
import Footer from '../Footer';

const LogoDesign = () => {
  return (
    <div className="logo-design-container">
      <section className="intro-banner">
        <h1 className="banner-title">Logo Design</h1>
        <p className="banner-subtitle">Creating Logos That Speak Volumes</p>
      </section>

      <section className="about-logo">
        <p className="about-text">
          At <span className="highlighted">[Your Startup Name]</span>, we believe that a logo is more than just a symbol—it’s the face of your brand. A well-designed logo not only captures the essence of your business but also communicates your values, vision, and uniqueness to the world.
        </p>
        <p className="about-text">
          Our Logo Design service is dedicated to crafting logos that are timeless, versatile, and memorable.
        </p>
      </section>

      <section className="powerful-logo">
        <h2 className="section-title">The Power of a Strong Logo</h2>
        <div className="benefits-container">
          <div className="benefit-card">
            <h3>Enhances Brand Recognition</h3>
            <p>It ensures your brand is easily recognizable and memorable in the minds of your audience.</p>
          </div>
          <div className="benefit-card">
            <h3>Conveys Brand Identity</h3>
            <p>It visually represents who you are and what you stand for.</p>
          </div>
          <div className="benefit-card">
            <h3>Builds Trust</h3>
            <p>A professional and well-crafted logo fosters trust and credibility with your customers.</p>
          </div>
          <div className="benefit-card">
            <h3>Differentiates You from Competitors</h3>
            <p>It sets you apart in a crowded marketplace by showcasing your brand’s unique personality.</p>
          </div>
        </div>
      </section>

      <section className="design-process">
        <h2 className="section-title">Our Logo Design Process</h2>
        <div className="process-steps">
          <div className="step">
            <h3>1. Discovery and Research</h3>
            <p>We begin by understanding your brand, its values, target audience, and industry landscape.</p>
          </div>
          <div className="step">
            <h3>2. Concept Development</h3>
            <p>We develop a range of initial logo concepts, each conveying your brand’s essence.</p>
          </div>
          <div className="step">
            <h3>3. Design Refinement</h3>
            <p>We fine-tune details to ensure the logo is perfect in every aspect.</p>
          </div>
          <div className="step">
            <h3>4. Finalization and Delivery</h3>
            <p>You will receive the logo files in all necessary formats, ensuring scalability.</p>
          </div>
        </div>
      </section>

      <section className="design-philosophy">
        <h2 className="section-title">Our Design Philosophy</h2>
        <p className="philosophy-text">Simplicity, Versatility, and Relevance</p>
        <div className="philosophy-details">
          <div className="philosophy-point" style={{backgroundColor: '#f8bbd0'}}>
            <h3>Simplicity</h3>
            <p>A simple logo is easily recognizable and timeless. We create clean, uncluttered designs.</p>
          </div>
          <div className="philosophy-point" style={{backgroundColor: '#e1bee7'}}>
            <h3>Versatility</h3>
            <p>Your logo should look great across all mediums, from business cards to billboards.</p>
          </div>
          <div className="philosophy-point" style={{backgroundColor: '#b2ebf2'}}>
            <h3>Relevance</h3>
            <p>We ensure that our designs resonate with your audience and fit seamlessly into your brand strategy.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us for Logo Design?</h2>
        <ul className="choose-list">
          <li><strong>Tailored to Your Brand:</strong> We create custom logos that align with your business goals.</li>
          <li><strong>Expert Designers:</strong> Our team brings creativity and strategic thinking to every project.</li>
          <li><strong>Collaborative Process:</strong> We work closely with you to realize your vision.</li>
          <li><strong>High-Quality Deliverables:</strong> Logos are delivered in formats ready for use.</li>
          <li><strong>Customer Satisfaction:</strong> We’re committed to your satisfaction.</li>
        </ul>
      </section>

      <section className="portfolio-section">
        <h2 className="section-title">Portfolio</h2>
        <p className="portfolio-text">Explore our portfolio to see examples of logos we’ve designed for clients across various industries.</p>
      </section>

      <section className="get-started-section">
        <h2 className="section-title">Get Started Today</h2>
        <p className="get-started-text">Ready to create a logo that truly represents your brand? Contact us today to discuss your project.</p>
      </section>
      <Footer />
    </div>
  );
};

export default LogoDesign;
