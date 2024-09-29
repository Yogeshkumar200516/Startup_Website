import React from 'react';
import './Consultant.css';

export default function Consultant() {
  return (
    <div className="consultant-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Expert Consulting Services</h1>
          <p>Transform your business with professional guidance and innovative strategies.</p>
          <button className="contact-us-btn">Contact Us</button>
        </div>
      </section>

      {/* Our Services */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="service-card">
          <h3>Business Strategy</h3>
          <p>Develop effective strategies to achieve your business goals and drive growth.</p>
        </div>
        <div className="service-card">
          <h3>Market Analysis</h3>
          <p>Gain insights into market trends and customer behavior to make informed decisions.</p>
        </div>
        <div className="service-card">
          <h3>Financial Planning</h3>
          <p>Optimize your financial strategy to ensure sustainable success and profitability.</p>
        </div>
        <div className="service-card">
          <h3>Digital Transformation</h3>
          <p>Embrace technology to improve processes and enhance business performance.</p>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"The consulting services provided were top-notch. Our business has seen incredible growth since implementing their strategies."</p>
          <h3>- Anil Sharma, CEO of TechCorp</h3>
        </div>
        <div className="testimonial">
          <p>"Exceptional market analysis and financial planning. The insights we gained were invaluable for our business strategy."</p>
          <h3>- Priya Patel, Founder of Innovate Solutions</h3>
        </div>
        <div className="testimonial">
          <p>"Their expertise in digital transformation has revolutionized our processes. Highly recommend their consulting services."</p>
          <h3>- Rajesh Kumar, Director at SmartTech</h3>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Take Your Business to the Next Level?</h2>
        <p>Get in touch with us today to schedule a consultation and discover how we can help you achieve your goals.</p>
        <button className="contact-us-btn">Contact Us</button>
      </section>
    </div>
  );
}
