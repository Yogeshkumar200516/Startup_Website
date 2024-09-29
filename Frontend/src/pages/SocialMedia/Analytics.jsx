import React from 'react';
import './Analytics.css'; // Custom CSS for styles
import back1 from '../../assets/images/back2.jpeg';
import Footer from '../Footer';

const Analytics = () => {
  return (
    <div className="analytics-page-container">
      {/* Hero Section */}
      <section className="analytics-hero-section">
        <div className="analytics-hero-content">
          <h1>Unlock the Power of Data with Our Advanced Analytics Solutions</h1>
          <p>
            Transform your data into actionable insights that drive growth, innovation, and efficiency.
          </p>
          <button className="analytics-cta-button">Get Started Today</button>
        </div>
        <div className="analytics-hero-image">
          {/* Add an image related to data visualization */}
          <img src={back1} alt="Data Visualization" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="analytics-introduction-section">
        <h2>Data-Driven Decisions for the Future</h2>
        <p>
          In today's fast-paced business environment, data is everything. Our advanced analytics solutions
          help you harness the full potential of your data, empowering your business with real-time insights
          that lead to smarter, more informed decisions. From predictive analytics to customized reporting,
          we provide the tools you need to stay ahead.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="analytics-services-section">
        <h2>Our Services</h2>
        <div className="analytics-service-card" style={{backgroundColor: '#e0f7fa'}}>
          <h3>Data Visualization</h3>
          <p>
            Transform complex data into clear and actionable insights with our intuitive dashboards and reports,
            designed to enhance decision-making.
          </p>
        </div>
        <div className="analytics-service-card" style={{backgroundColor: '#e3f2fd'}}>
          <h3>Predictive Analytics</h3>
          <p>
            Utilize AI and machine learning to forecast trends, behaviors, and opportunities, ensuring your
            business stays ahead of the curve.
          </p>
        </div>
        <div className="analytics-service-card" style={{backgroundColor: '#efebe9'}}>
          <h3>Business Intelligence</h3>
          <p>
            Turn raw data into valuable business insights that drive performance, efficiency, and profitability.
          </p>
        </div>
        <div className="analytics-service-card" style={{backgroundColor: '#f9fbe7'}}>
          <h3>Custom Reporting</h3>
          <p>
            Receive tailored reports that fit your unique business needs, helping you focus on the metrics that
            matter most.
          </p>
        </div>
        <div className="analytics-service-card" style={{backgroundColor: '#f1f8e9'}}>
          <h3>Data Integration</h3>
          <p>
            Connect all your data sources seamlessly, ensuring your analytics are accurate, comprehensive, and
            up to date.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="analytics-why-choose-us-section">
        <h2>Why Choose Us</h2>
        <ul>
          <li><strong>Expertise:</strong> Our team of data scientists and analysts is dedicated to delivering customized analytics solutions that align with your business goals.</li>
          <li><strong>Cutting-Edge Technology:</strong> We use the latest tools and technologies to ensure you get fast, accurate, and insightful data.</li>
          <li><strong>Scalability:</strong> Whether you're a small startup or an established enterprise, our analytics services grow with your business.</li>
          <li><strong>Proven Results:</strong> Our clients have seen measurable success through improved decision-making and business outcomes.</li>
        </ul>
      </section>

      {/* Our Process Section */}
      <section className="analytics-process-section">
        <h2>Our Process</h2>
        <div className="analytics-process-step">
          <h3>Data Collection</h3>
          <p>We work with you to gather and consolidate data from all sources.</p>
        </div>
        <div className="analytics-process-step">
          <h3>Data Analysis</h3>
          <p>Our experts analyze your data to uncover trends, patterns, and actionable insights.</p>
        </div>
        <div className="analytics-process-step">
          <h3>Visualization</h3>
          <p>We present the insights through easy-to-understand dashboards and reports.</p>
        </div>
        <div className="analytics-process-step">
          <h3>Continuous Optimization</h3>
          <p>We continuously monitor and refine your analytics to ensure they deliver maximum value.</p>
        </div>
      </section>

      {/* Case Studies/Portfolio Section */}
      <section className="analytics-portfolio-section">
        <h2>Case Studies/Portfolio</h2>
        <div className="analytics-case-study">
          <h3>Driving Efficiency Through Predictive Analytics</h3>
          <p>(Client A)</p>
        </div>
        <div className="analytics-case-study">
          <h3>Improving Customer Retention with Data-Driven Insights</h3>
          <p>(Client B)</p>
        </div>
        <div className="analytics-case-study">
          <h3>Unlocking Growth with Advanced Business Intelligence</h3>
          <p>(Client C)</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="analytics-testimonials-section">
        <h2>Testimonials</h2>
        <div className="analytics-testimonial">
          <p>
            "Their analytics solutions transformed our business by helping us understand our data and act on it.
            We saw a 30% increase in efficiency within the first three months!" – Client A
          </p>
        </div>
        <div className="analytics-testimonial">
          <p>
            "The insights provided by their dashboards have been invaluable. We’re making smarter decisions
            and it shows in our bottom line." – Client B
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="analytics-blog-section">
        <h2>Blog</h2>
        <div className="analytics-blog-post" style={{backgroundColor: '#d1c4e9'}}>
          <h3>The Future of Predictive Analytics: What You Need to Know</h3>
        </div>
        <div className="analytics-blog-post" style={{backgroundColor: '#f8bbd0'}}>
          <h3>How Data Visualization Can Transform Your Business</h3>
        </div>
        <div className="analytics-blog-post" style={{backgroundColor: '#b2ebf2'}}>
          <h3>Top Trends in Business Intelligence for 2024</h3>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="analytics-cta-section">
        <h2 style={{color: 'white'}}>Ready to Elevate Your Business with Data?</h2>
        <p>
          Get in touch with us today to learn how our analytics solutions can help you make better decisions,
          faster.
        </p>
        <button className="analytics-cta-button">Contact Us</button>
      </section>
      <Footer />
    </div>
  );
};

export default Analytics;
