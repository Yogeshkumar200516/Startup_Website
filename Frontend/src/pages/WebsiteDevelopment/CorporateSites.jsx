import React from 'react';
import './CorporateSites.css';
import Footer from '../Footer';

const CorporateSites = () => {
  return (
    <div className="corporate-container">
      <section className="hero-banner">
        <div className="banner-content">
          <h1>Corporate Sites for a Modern Business</h1>
          <p>
            We specialize in creating corporate websites that help businesses communicate their brand, services, and values with impact. From intuitive designs to dynamic functionalities, our corporate sites are built for success.
          </p>
        </div>
      </section>

      <section className="why-corporate-sites">
        <h2>Why Choose Our Corporate Sites?</h2>
        <div className="features">
          <div className="feature">
            <h3>Professional Design</h3>
            <p>
              Our designs are modern, sleek, and tailored to reflect your business’s unique personality while ensuring optimal user experience.
            </p>
          </div>
          <div className="feature">
            <h3>Responsive & Scalable</h3>
            <p>
              We create websites that adapt perfectly to all devices and grow with your business. Scalable solutions are our forte.
            </p>
          </div>
          <div className="feature">
            <h3>SEO-Friendly</h3>
            <p>
              Our corporate sites are optimized for search engines, ensuring better visibility and increased traffic to your business.
            </p>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <h2>Our Approach to Corporate Web Development</h2>
        <p style={{marginBottom: '40px'}}>
          We follow a structured yet flexible approach to web development. We work closely with our clients to ensure that every aspect of the website is aligned with their business goals and objectives.
        </p>
        <div className="approach-steps">
          <div className="step">
            <h3>Research & Planning</h3>
            <p>
              We start by understanding your business, target audience, and competition to craft a site strategy that drives results.
            </p>
          </div>
          <div className="step">
            <h3>Design & Development</h3>
            <p>
              Our design and development teams collaborate to build beautiful, functional websites that look great and perform even better.
            </p>
          </div>
          <div className="step">
            <h3>Launch & Ongoing Support</h3>
            <p>
              Once your site is ready to go live, we ensure a smooth launch and offer ongoing support to keep your website updated and secure.
            </p>
          </div>
        </div>
      </section>

      <section className="case-studies">
        <h2>Case Studies</h2>
        <p>Explore our upcoming corporate site projects:</p>
        <div className="case-studies-list">
          <div className="case-study" style={{backgroundColor: '#e8eaf6'}}>
            <h3>Financial Consulting Firm</h3>
            <p>
              We are designing a sleek, professional website for a financial consulting firm that aims to enhance their digital presence.
            </p>
          </div>
          <div className="case-study" style={{backgroundColor: '#fce4ec'}}>
            <h3>Healthcare Provider</h3>
            <p>
              Our ongoing project with a healthcare provider focuses on delivering a user-friendly, secure, and informative platform for their patients and clients.
            </p>
          </div>
          <div className="case-study" style={{backgroundColor: '#e0f7fa'}}>
            <h3>Tech Startup</h3>
            <p>
              A responsive, dynamic website is in the works for a tech startup, showcasing their innovative products and services.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          Ready to elevate your corporate online presence? Contact us today, and let’s discuss how we can build a corporate website that drives success for your business.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default CorporateSites;
