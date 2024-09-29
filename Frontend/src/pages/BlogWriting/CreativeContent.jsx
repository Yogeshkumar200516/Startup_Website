import React from 'react';
import './CreativeContent.css';
import Footer from '../Footer';

const CreativeContent = () => {
  return (
    <div className="creative-page-container">
      {/* Hero Section */}
      <section className="creative-hero-section">
        <div className="creative-hero-content">
          <h1>Unleash the Power of Creative Content</h1>
          <p>
            At [Your Startup Name], we believe in the transformative power of creative content. Our team of skilled writers and designers crafts compelling narratives and visually stunning content that captivates and engages your audience. From brand storytelling to innovative digital campaigns, we turn your ideas into memorable experiences.
          </p>
        </div>
      </section>

      {/* Our Creative Content Services */}
      <section className="creative-services-section">
        <h2>Our Creative Content Services</h2>
        <div className="creative-services-grid">
          <div className="creative-service-card">
            <h3>Brand Storytelling</h3>
            <p>
              We create authentic and engaging brand stories that resonate with your audience and build a strong emotional connection. Our storytelling approach is designed to highlight your brand’s unique voice and values.
            </p>
          </div>
          <div className="creative-service-card">
            <h3>Content Strategy</h3>
            <p>
              Our content strategists develop tailored strategies that align with your business goals and target audience. We ensure that every piece of content is optimized for maximum impact and engagement.
            </p>
          </div>
          <div className="creative-service-card">
            <h3>Social Media Campaigns</h3>
            <p>
              We design and execute dynamic social media campaigns that capture attention and drive interaction. Our campaigns are crafted to enhance your brand’s presence and generate meaningful engagement across platforms.
            </p>
          </div>
          <div className="creative-service-card">
            <h3>Website and Blog Content</h3>
            <p>
              Our team produces high-quality website and blog content that informs, entertains, and converts. We focus on creating content that is both SEO-friendly and aligned with your brand’s tone and style.
            </p>
          </div>
          <div className="creative-service-card">
            <h3>Video and Multimedia Content</h3>
            <p>
              We produce captivating video and multimedia content that engages viewers and enhances your brand’s storytelling. From explainer videos to promotional materials, our multimedia content is designed to leave a lasting impression.
            </p>
          </div>
          <div className="creative-service-card">
            <h3>Creative Copywriting</h3>
            <p>
              Our copywriting services include crafting persuasive and memorable copy for ads, brochures, email campaigns, and more. We focus on delivering content that drives action and communicates your message effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Our Creative Process */}
      <section className="creative-process-section">
        <h2>Our Creative Process</h2>
        <div className="creative-process-grid">
          <div className="creative-process-step" style={{backgroundColor: '#fce4ec'}}>
            <h3>1. Discovery and Ideation</h3>
            <p>
              We start with a thorough understanding of your brand, audience, and objectives. Through brainstorming and research, we generate innovative ideas that align with your vision.
            </p>
          </div>
          <div className="creative-process-step" style={{backgroundColor: '#f3e5f5'}}>
            <h3>2. Concept Development</h3>
            <p>
              Our team develops creative concepts and outlines that reflect your brand’s identity and goals. We refine these concepts through feedback and collaboration to ensure they meet your expectations.
            </p>
          </div>
          <div className="creative-process-step" style={{backgroundColor: '#e0f7fa'}}>
            <h3>3. Content Creation</h3>
            <p>
              We produce high-quality content based on the approved concepts. Our creative team handles everything from writing and design to video production and multimedia elements.
            </p>
          </div>
          <div className="creative-process-step" style={{backgroundColor: '#e0f2f1'}}>
            <h3>4. Review and Refinement</h3>
            <p>
              We review and refine the content to ensure it aligns with your brand’s voice and objectives. We incorporate your feedback to make final adjustments and ensure the highest quality.
            </p>
          </div>
          <div className="creative-process-step" style={{backgroundColor: '#f9fbe7'}}>
            <h3>5. Delivery and Launch</h3>
            <p>
              Once the content is finalized, we deliver it in the required formats and assist with its launch. We also provide support to measure performance and make any necessary adjustments.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="creative-why-section">
        <h2>Why Choose Mahisha India Tech for Creative Content?</h2>
        <div className="creative-why-grid">
          <div className="creative-why-card">
            <h3>Innovative Solutions</h3>
            <p>
              We bring fresh, creative perspectives to every project, ensuring your content stands out in a crowded market.
            </p>
          </div>
          <div className="creative-why-card">
            <h3>Expert Team</h3>
            <p>
              Our team of experienced writers, designers, and strategists work together to deliver exceptional content tailored to your needs.
            </p>
          </div>
          <div className="creative-why-card">
            <h3>Client-Centric Approach</h3>
            <p>
              We prioritize your goals and preferences, ensuring that our content aligns perfectly with your brand’s vision and audience.
            </p>
          </div>
          <div className="creative-why-card">
            <h3>Quality and Consistency</h3>
            <p>
              We maintain the highest standards of quality and consistency across all content, ensuring a cohesive and professional presentation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="creative-cta-section">
        <h2>Ready to Transform Your Content?</h2>
        <p>
          Contact us today to learn more about how our creative content services can help you connect with your audience and achieve your business goals. Let's create something amazing together!
        </p>
        <a href="/contact" className="creative-cta-button">Get in Touch</a>
      </section>
      <Footer />
    </div>
  );
};

export default CreativeContent;
