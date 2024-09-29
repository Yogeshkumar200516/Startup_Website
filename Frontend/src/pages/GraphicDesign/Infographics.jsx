import React from 'react';
import './Infographics.css'; // Custom CSS for styles
import back2 from '../../assets/images/back3.jpeg';
import Footer from '../Footer';

const Infographics = () => {
  return (
    <div className="infographics-page-container">
      {/* Hero Section */}
      <section className="infographics-hero-section">
        <div className="infographics-hero-content">
          <h1 className="infographics-hero-heading">Visualize Your Data with Impactful Infographics</h1>
          <p className="infographics-hero-subheading">
            Make complex information easier to understand with beautifully designed, data-driven infographics.
          </p>
          <button className="infographics-cta-button">Explore Our Designs</button>
        </div>
        <div className="infographics-hero-image">
          <img src={back2} alt="Infographics Example" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="infographics-introduction-section">
        <h2 className="infographics-introduction-heading">Turn Data into Engaging Visual Stories</h2>
        <p className="infographics-introduction-paragraph">
          Infographics help you present data in a visually appealing way that resonates with your audience. Whether
          it's for marketing, internal reporting, or client presentations, our infographics turn raw data into compelling
          visual narratives that simplify complex ideas and captivate attention.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="infographics-services-section">
        <h2 className="infographics-services-heading">Our Services</h2>
        <div className="infographics-service-card">
          <h3 className="infographics-service-title">Custom Infographics Design</h3>
          <p className="infographics-service-description">
            We create bespoke infographics tailored to your brand and goals. From concept to design, we craft visuals
            that effectively communicate your message.
          </p>
        </div>
        <div className="infographics-service-card">
          <h3 className="infographics-service-title">Data Visualization Infographics</h3>
          <p className="infographics-service-description">
            Transform your data into clear and informative visuals that highlight key insights and trends.
          </p>
        </div>
        <div className="infographics-service-card">
          <h3 className="infographics-service-title">Marketing Infographics</h3>
          <p className="infographics-service-description">
            Enhance your marketing materials with eye-catching infographics that attract attention and convey your
            message with clarity and style.
          </p>
        </div>
        <div className="infographics-service-card">
          <h3 className="infographics-service-title">Interactive Infographics</h3>
          <p className="infographics-service-description">
            Engage your audience with interactive infographics that allow users to explore the data and stories behind
            the visuals.
          </p>
        </div>
        <div className="infographics-service-card">
          <h3 className="infographics-service-title">Reports and Presentation Infographics</h3>
          <p className="infographics-service-description">
            Turn dry, complex reports and presentations into dynamic and visually engaging content.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="infographics-why-choose-us-section">
        <h2 className="infographics-why-choose-us-heading">Why Choose Us</h2>
        <ul className="infographics-why-choose-us-list">
          <li className="infographics-why-choose-us-item"><strong>Creative Excellence:</strong> Our team of skilled designers blends creativity with data science to produce stunning infographics that captivate and inform.</li>
          <li className="infographics-why-choose-us-item"><strong>Brand-Centric Design:</strong> We ensure that your brand identity is reflected in every infographic, with customized colors, fonts, and themes.</li>
          <li className="infographics-why-choose-us-item"><strong>Data Accuracy:</strong> We prioritize data integrity, ensuring that every visual accurately represents your data in a meaningful way.</li>
          <li className="infographics-why-choose-us-item"><strong>User Engagement:</strong> Infographics designed to drive engagement and interaction, helping you connect with your audience.</li>
        </ul>
      </section>

      {/* Our Process Section */}
      <section className="infographics-process-section">
        <h2 className="infographics-process-heading">Our Process</h2>
        <div className="infographics-process-step">
          <h3 className="infographics-process-title">Understanding Your Goals</h3>
          <p className="infographics-process-description">We start by learning about your objectives and the message you want to convey.</p>
        </div>
        <div className="infographics-process-step">
          <h3 className="infographics-process-title">Data Gathering and Analysis</h3>
          <p className="infographics-process-description">We collect and analyze your data to identify the most critical insights.</p>
        </div>
        <div className="infographics-process-step">
          <h3 className="infographics-process-title">Storyboarding and Conceptualization</h3>
          <p className="infographics-process-description">Our designers craft a visual narrative that best represents your data and ideas.</p>
        </div>
        <div className="infographics-process-step">
          <h3 className="infographics-process-title">Design and Development</h3>
          <p className="infographics-process-description">We create a stunning infographic, ensuring every detail aligns with your vision.</p>
        </div>
        <div className="infographics-process-step">
          <h3 className="infographics-process-title">Review and Revisions</h3>
          <p className="infographics-process-description">We work with you to refine the design until it's perfect.</p>
        </div>
        <div className="infographics-process-step">
          <h3 className="infographics-process-title">Delivery</h3>
          <p className="infographics-process-description">Receive a polished, high-quality infographic ready to share with your audience.</p>
        </div>
      </section>

      {/* Infographics Portfolio Section */}
      <section className="infographics-portfolio-section">
        <h2 className="infographics-portfolio-heading">Infographics Portfolio</h2>
        <div className="infographics-case-study">
          <h3 className="infographics-case-study-title">Boosting Engagement Through Interactive Infographics</h3>
          <p className="infographics-case-study-client">(Client X)</p>
        </div>
        <div className="infographics-case-study">
          <h3 className="infographics-case-study-title">Simplifying Complex Data for a Healthcare Report</h3>
          <p className="infographics-case-study-client">(Client Y)</p>
        </div>
        <div className="infographics-case-study">
          <h3 className="infographics-case-study-title">Creating a Visual Story for a Marketing Campaign</h3>
          <p className="infographics-case-study-client">(Client Z)</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="infographics-testimonials-section">
        <h2 className="infographics-testimonials-heading">Testimonials</h2>
        <div className="infographics-testimonial">
          <p className="infographics-testimonial-text">
            "Their infographics helped us break down complex data in a way that was both beautiful and easy to understand. Our engagement metrics skyrocketed!" – Client X
          </p>
        </div>
        <div className="infographics-testimonial">
          <p className="infographics-testimonial-text">
            "We’ve seen a tremendous response to the infographics in our reports. Our clients appreciate the clarity they bring." – Client Y
          </p>
        </div>
        <div className="infographics-testimonial">
          <p className="infographics-testimonial-text">
            "Their team nailed our brand look and delivered visuals that have become key parts of our presentations." – Client Z
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="infographics-blog-section">
        <h2 className="infographics-blog-heading">Blog</h2>
        <div className="infographics-blog-post">
          <h3 className="infographics-blog-title">The Power of Infographics in Business Communication</h3>
        </div>
        <div className="infographics-blog-post">
          <h3 className="infographics-blog-title">How Interactive Infographics Can Boost Engagement</h3>
        </div>
        <div className="infographics-blog-post">
          <h3 className="infographics-blog-title">Best Practices for Data-Driven Infographic Design</h3>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="infographics-cta-section">
        <h2 className="infographics-cta-heading">Ready to Elevate Your Data with Stunning Infographics?</h2>
        <p className="infographics-cta-paragraph">
          Get in touch with us today to discover how our custom-designed infographics can help you communicate your message more effectively.
        </p>
        <button className="infographics-cta-button">Contact Us</button>
      </section>
      <Footer />
    </div>
  );
};

export default Infographics;
