import React from 'react';
import './AdCampaigns.css'; // Custom styles for the AdCampaign page
import Footer from '../Footer';

const AdCampaigns = () => {
  return (
    <div className="ad-campaign-unique-page">
      {/* Hero Section */}
      <section className="ad-campaign-unique-hero">
        <h1 className="ad-campaign-unique-hero-title">
          Maximize Your Brand Reach with Tailored Ad Campaigns
        </h1>
        <p className="ad-campaign-unique-hero-subtitle">
          Effective, Data-Driven Campaigns to Drive Results and Growth
        </p>
        <button className="ad-campaign-unique-cta-button">Start Your Campaign Today</button>
      </section>

      {/* Introduction */}
      <section className="ad-campaign-unique-introduction">
        <h2 className="ad-campaign-unique-section-title">Empowering Your Brand with Strategic Advertising Campaigns</h2>
        <p className="ad-campaign-unique-intro-text">
          In today’s competitive digital landscape, advertising is more than just getting your brand seen—it’s about connecting with the right audience at the right time with the right message. At Mahisha India Tech, we specialize in creating customized ad campaigns that align with your business goals and drive measurable results. Whether you're aiming for increased traffic, conversions, or brand awareness, we ensure your ads are both impactful and efficient.
        </p>
      </section>

      {/* Our Approach */}
      <section className="ad-campaign-unique-approach">
        <h2 className="ad-campaign-unique-section-title">Our Approach to Crafting Effective Ad Campaigns</h2>
        <p className="ad-campaign-unique-approach-text">
          We blend creativity with data-driven strategies to develop campaigns that speak to your audience and achieve your objectives. Our process includes:
        </p>
        <ul className="ad-campaign-unique-approach-list">
          <li>Research & Strategy: Understanding your business, audience, and competitors to craft the perfect campaign.</li>
          <li>Creative Development: Designing eye-catching ads that resonate with your target market.</li>
          <li>Targeting & Optimization: Leveraging precise targeting techniques to reach the right audience across platforms.</li>
          <li>Monitoring & Reporting: Continuously tracking performance and making data-backed adjustments to ensure maximum ROI.</li>
        </ul>
      </section>

      {/* Our Services */}
      <section className="ad-campaign-unique-services">
        <h2 className="ad-campaign-unique-section-title">Comprehensive Ad Campaign Services</h2>
        <div className="ad-campaign-unique-service-card">
          <h3>Google Ads Campaigns</h3>
          <p>Boost your visibility on the world's largest search engine with targeted Google Ads.</p>
        </div>
        <div className="ad-campaign-unique-service-card">
          <h3>Social Media Advertising</h3>
          <p>Increase engagement, leads, and brand loyalty with social media ads across platforms.</p>
        </div>
        <div className="ad-campaign-unique-service-card">
          <h3>PPC Campaigns</h3>
          <p>Maximize your ad spend with pay-per-click campaigns tailored to your audience.</p>
        </div>
        <div className="ad-campaign-unique-service-card">
          <h3>Retargeting Campaigns</h3>
          <p>Re-engage users who have visited your site to convert more leads into customers.</p>
        </div>
        <div className="ad-campaign-unique-service-card">
          <h3>Display & Banner Ads</h3>
          <p>Capture attention with visually appealing display ads across websites and apps.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="ad-campaign-unique-why-choose-us">
        <h2 className="ad-campaign-unique-section-title">Why Partner with Mahisha India Tech?</h2>
        <ul className="ad-campaign-unique-why-list">
          <li>Tailored Campaigns: Customized strategies catering to your unique needs.</li>
          <li>Data-Driven Decisions: Extensive data analysis ensures targeted and optimized campaigns.</li>
          <li>Creative Excellence: Our ads not only capture attention but convert audiences.</li>
          <li>Transparent Reporting: Detailed performance reports keep you informed.</li>
          <li>Proven Results: Campaigns that drive real, measurable results—traffic, leads, and sales.</li>
        </ul>
      </section>

      {/* Case Studies/Portfolio */}
      <section className="ad-campaign-unique-portfolio">
        <h2 className="ad-campaign-unique-section-title">Success Stories: Our Ad Campaigns in Action</h2>
        <p>Explore our portfolio to see the results we've achieved for clients through expertly executed ad campaigns.</p>
        {/* Add portfolio image thumbnails or links */}
      </section>

      {/* Testimonials */}
      <section className="ad-campaign-unique-testimonials">
        <h2 className="ad-campaign-unique-section-title">What Our Clients Say</h2>
        <div className="ad-campaign-unique-testimonial">
          <p>"The team at Mahisha India Tech took our ad campaigns to the next level."</p>
          <span>- Client Name, Company</span>
        </div>
        <div className="ad-campaign-unique-testimonial">
          <p>"We were impressed by the creativity and precision of their social media ads."</p>
          <span>- Client Name, Company</span>
        </div>
      </section>

      {/* Blog Section */}
      <section className="ad-campaign-unique-blog">
        <h2 className="ad-campaign-unique-section-title">Insights & Trends in Advertising</h2>
        <p>Stay ahead of the game with our blog sharing tips and best practices for successful ad campaigns.</p>
      </section>

      {/* Call to Action */}
      <section className="ad-campaign-unique-cta">
        <h2>Ready to Launch Your Next Ad Campaign?</h2>
        <button className="ad-campaign-unique-cta-button">Get Started with Your Campaign Now</button>
      </section>
      <Footer />
    </div>
  );
};

export default AdCampaigns;
