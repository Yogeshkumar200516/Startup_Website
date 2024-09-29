import React from 'react';
import './MarketingMaterials.css'; // Custom CSS for styles
import back3 from '../../assets/images/back4.jpeg';
import Footer from '../Footer';

const MarketingMaterials = () => {
  return (
    <div className="marketing-materials-page-container">
      {/* Hero Section */}
      <section className="marketing-materials-hero-section">
        <div className="marketing-materials-hero-content">
          <h1 className="marketing-materials-hero-heading">Elevate Your Brand with Professional Marketing Materials</h1>
          <p className="marketing-materials-hero-subheading">
            Transform your marketing efforts with custom-designed materials that captivate and convert.
          </p>
          <button className="marketing-materials-cta-button">Get Started with Us</button>
        </div>
        <div className="marketing-materials-hero-image">
          <img src={back3} alt="Marketing Materials Example" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="marketing-materials-introduction-section">
        <h2 className="marketing-materials-introduction-heading">Power Your Marketing with Tailored Solutions</h2>
        <p className="marketing-materials-introduction-paragraph">
          In a crowded marketplace, making a strong impression is key. Our custom marketing materials are designed to align with your brand's vision and goals, helping you effectively reach your target audience. From print to digital, we provide a full range of solutions to boost your brand's presence and drive engagement.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="marketing-materials-services-section">
        <h2 className="marketing-materials-services-heading">Our Services</h2>
        <div className="marketing-materials-service-cards">
        <div className="marketing-materials-service-card" style={{backgroundColor: '#fce4ec'}}>
          <h3 className="marketing-materials-service-title">Brochures and Flyers</h3>
          <p className="marketing-materials-service-description">
            Eye-catching brochures and flyers designed to convey your message effectively. Perfect for events, promotions, and more.
          </p>
        </div>
        <div className="marketing-materials-service-card" style={{backgroundColor: '#f3e5f5'}}>
          <h3 className="marketing-materials-service-title">Business Cards</h3>
          <p className="marketing-materials-service-description">
            Professional business cards that make a memorable first impression. Customized to reflect your brand’s identity.
          </p>
        </div>
        <div className="marketing-materials-service-card" style={{backgroundColor: '#ede7f6'}}>
          <h3 className="marketing-materials-service-title">Banners and Posters</h3>
          <p className="marketing-materials-service-description">
            Bold and impactful banners and posters for events, exhibitions, and advertising campaigns.
          </p>
        </div>
        <div className="marketing-materials-service-card" style={{backgroundColor: '#e3f2fd'}}>
          <h3 className="marketing-materials-service-title">Digital Marketing Assets</h3>
          <p className="marketing-materials-service-description">
            Custom graphics and assets for your online presence, including social media posts, email templates, and web banners.
          </p>
        </div>
        <div className="marketing-materials-service-card" style={{backgroundColor: '#e0f2f1'}}>
          <h3 className="marketing-materials-service-title">Presentation Materials</h3>
          <p className="marketing-materials-service-description">
            Professional presentation decks and reports that make your information engaging and visually appealing.
          </p>
        </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="marketing-materials-why-choose-us-section">
        <h2 className="marketing-materials-why-choose-us-heading">Why Choose Us</h2>
        <ul className="marketing-materials-why-choose-us-list">
          <li className="marketing-materials-why-choose-us-item"><strong>Custom Design:</strong> Tailored marketing materials that perfectly align with your brand identity and objectives.</li>
          <li className="marketing-materials-why-choose-us-item"><strong>Quality Assurance:</strong> We use high-quality materials and printing processes to ensure your marketing materials look and feel professional.</li>
          <li className="marketing-materials-why-choose-us-item"><strong>Quick Turnaround:</strong> Efficient design and production processes to meet your deadlines and ensure timely delivery.</li>
          <li className="marketing-materials-why-choose-us-item"><strong>Creative Expertise:</strong> Our team combines creativity with strategic insights to create materials that stand out and drive results.</li>
        </ul>
      </section>

      {/* Our Process Section */}
      <section className="marketing-materials-process-section">
        <h2 className="marketing-materials-process-heading">Our Process</h2>
        <div className="marketing-materials-process-steps">
        <div className="marketing-materials-process-step">
          <h3 className="marketing-materials-process-title">Discovery and Consultation</h3>
          <p className="marketing-materials-process-description">We start by understanding your marketing goals and the message you want to convey.</p>
        </div>
        <div className="marketing-materials-process-step">
          <h3 className="marketing-materials-process-title">Design Brief and Strategy</h3>
          <p className="marketing-materials-process-description">We work with you to define the design brief and develop a strategy that aligns with your objectives.</p>
        </div>
        <div className="marketing-materials-process-step">
          <h3 className="marketing-materials-process-title">Design and Development</h3>
          <p className="marketing-materials-process-description">Our designers create custom marketing materials that reflect your brand and effectively communicate your message.</p>
        </div>
        <div className="marketing-materials-process-step">
          <h3 className="marketing-materials-process-title">Review and Feedback</h3>
          <p className="marketing-materials-process-description">We present the designs for your feedback and make any necessary revisions to ensure satisfaction.</p>
        </div>
        <div className="marketing-materials-process-step">
          <h3 className="marketing-materials-process-title">Production and Delivery</h3>
          <p className="marketing-materials-process-description">Final materials are produced with quality assurance and delivered to you on time.</p>
        </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="marketing-materials-portfolio-section">
        <h2 className="marketing-materials-portfolio-heading">Portfolio</h2>
        <div className="marketing-materials-case-study">
          <h3 className="marketing-materials-case-study-title">Rebranding a Local Business with Fresh Marketing Materials</h3>
          <p className="marketing-materials-case-study-client">(Client A)</p>
        </div>
        <div className="marketing-materials-case-study">
          <h3 className="marketing-materials-case-study-title">Creating Impactful Event Collateral for a Tech Conference</h3>
          <p className="marketing-materials-case-study-client">(Client B)</p>
        </div>
        <div className="marketing-materials-case-study">
          <h3 className="marketing-materials-case-study-title">Designing Digital Assets for an Online Campaign</h3>
          <p className="marketing-materials-case-study-client">(Client C)</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="marketing-materials-testimonials-section">
        <h2 className="marketing-materials-testimonials-heading">Testimonials</h2>
        <div className="marketing-materials-testimonials">
        <div className="marketing-materials-testimonial">
          <p className="marketing-materials-testimonial-text">
            "The marketing materials exceeded our expectations and played a crucial role in our rebranding efforts. Highly recommended!" – Client A
          </p>
        </div>
        <div className="marketing-materials-testimonial">
          <p className="marketing-materials-testimonial-text">
            "The event collateral was vibrant and engaging, helping us make a memorable impact at the conference." – Client B
          </p>
        </div>
        <div className="marketing-materials-testimonial">
          <p className="marketing-materials-testimonial-text">
            "The digital assets created were perfect for our online campaign and helped us achieve our engagement goals." – Client C
          </p>
        </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="marketing-materials-blog-section">
        <h2 className="marketing-materials-blog-heading">Blog</h2>
        <div className="marketing-materials-blog-post">
          <h3 className="marketing-materials-blog-title">Top Trends in Marketing Materials Design for 2024</h3>
        </div>
        <div className="marketing-materials-blog-post">
          <h3 className="marketing-materials-blog-title">How Custom Business Cards Can Enhance Your Networking Efforts</h3>
        </div>
        <div className="marketing-materials-blog-post">
          <h3 className="marketing-materials-blog-title">Effective Design Tips for Creating Impactful Banners and Posters</h3>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="marketing-materials-cta-section">
        <h2 className="marketing-materials-cta-heading">Ready to Transform Your Marketing Materials?</h2>
        <p className="marketing-materials-cta-paragraph">
          Contact us today to discuss how we can help you create marketing materials that make a lasting impression and drive your business forward.
        </p>
        <button className="marketing-materials-cta-button">Get in Touch</button>
      </section>
      <Footer />
    </div>
  );
};

export default MarketingMaterials;
