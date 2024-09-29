import React from 'react';
import './OurProducts.css'; // Assuming you will style based on the suggestions below

// Importing local images
import webAppImage from '../../assets/images/team7.jpeg';
import mobileAppImage from '../../assets/images/team7.jpeg';
import enterpriseSoftwareImage from '../../assets/images/team7.jpeg';
import brandingToolsImage from '../../assets/images/team7.jpeg';

// Example projects data
const projects = [
  {
    id: 1,
    title: 'Innovative Web Applications',
    description: 'We develop cutting-edge web applications with a focus on performance, scalability, and user experience.',
    image: webAppImage,
    highlights: ['Custom-built for specific business needs', 'Responsive across devices', 'Scalable architecture for growth']
  },
  {
    id: 2,
    title: 'Mobile Applications',
    description: 'Our mobile applications are designed with usability and performance in mind. Whether you need an iOS or Android app, we ensure a seamless experience for your users.',
    image: mobileAppImage,
    highlights: ['Cross-platform development', 'Smooth and responsive UI', 'Optimized for battery and performance']
  },
  {
    id: 3,
    title: 'Custom Enterprise Software',
    description: 'We offer tailor-made enterprise software solutions that help streamline operations and enhance productivity.',
    image: enterpriseSoftwareImage,
    highlights: ['Integration with existing systems', 'Robust security features', 'User-friendly interfaces for large teams']
  },
  {
    id: 4,
    title: 'Branding and Marketing Tools',
    description: 'Our branding and marketing tools are designed to boost your brand’s visibility through comprehensive strategies.',
    image: brandingToolsImage,
    highlights: ['Comprehensive branding strategies', 'Custom marketing tools', 'Data-driven approach for better results']
  }
];

// Example client testimonials
const testimonials = [
  {
    name: 'Alice Green',
    company: 'GreenTech Innovations',
    feedback: 'The team at your company provided exceptional service and delivered an outstanding web application that significantly improved our business operations.'
  },
  {
    name: 'Mark Johnson',
    company: 'Johnson & Co.',
    feedback: 'Their expertise in mobile app development helped us create an app that our customers love. Highly recommend their services!'
  }
];

// Example key metrics
const metrics = [
  { title: 'Satisfied Clients', value: '150+' },
  { title: 'Completed Projects', value: '200+' },
  { title: 'Years in Business', value: '10+' }
];

const OurProducts = () => {
  return (
    <div className="products-container">
      <h1 className="products-title">Our Completed Projects</h1>
      <p className="products-intro">
        We pride ourselves on delivering innovative solutions tailored to our clients' needs. Below are some of our successful projects:
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="metrics-section">
        <h2 className="metrics-title">Key Metrics</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <h3 className="metric-value">{metric.value}</h3>
              <p className="metric-title">{metric.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-section">
        <h2 className="testimonials-title">Client Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-name">- {testimonial.name}, {testimonial.company}</p>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2 className="cta-title">Ready to Start Your Project?</h2>
        <p className="cta-description">Let’s bring your vision to life. Contact us today to discuss your next big project.</p>
        <button className="cta-button">Contact Us</button>
      </div>
    </div>
  );
};

export default OurProducts;
