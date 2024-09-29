import React from 'react';
import './ContentCreation.css'; // Assuming custom styles are written here
import Footer from '../Footer';

const ContentCreation = () => {
  return (
    <div className="content-creation-unique-page">
      {/* Hero Section */}
      <section className="content-creation-unique-hero">
        <h1 className="content-creation-unique-hero-title">
          Transforming Ideas into Compelling Content
        </h1>
        <p className="content-creation-unique-hero-subtitle">
          Create, Connect, and Captivate with Tailored Content Creation Services
        </p>
        <button className="content-creation-unique-cta-button">Get Started</button>
      </section>

      {/* Introduction */}
      <section className="content-creation-unique-introduction">
        <h2 className="content-creation-unique-section-title">Welcome to Mahisha India Tech</h2>
        <p className="content-creation-unique-intro-text">
          In today’s digital world, content is king. At Mahisha Idia Tech, we specialize in turning your brand's ideas into engaging, high-quality content that resonates with your audience. Whether you're looking to inform, inspire, or influence, our content creation services are designed to deliver.
        </p>
      </section>

      {/* Our Services */}
      <section className="content-creation-unique-services">
        <h2 className="content-creation-unique-section-title">Our Services</h2>
        <div className="content-creation-unique-service-card">
          <h3>Content Writing</h3>
          <p>
            Crafting words that capture attention and communicate your message effectively. From blog posts and articles to web copy and newsletters, we provide well-researched, SEO-optimized content that speaks to your audience.
          </p>
        </div>
        <div className="content-creation-unique-service-card">
          <h3>Social Media Content</h3>
          <p>
            Building your brand’s presence on social media with engaging posts, stories, and campaigns. We create content that drives interaction and builds a loyal following across platforms like Instagram, Facebook, Twitter, LinkedIn, and more.
          </p>
        </div>
        <div className="content-creation-unique-service-card">
          <h3>Video Production</h3>
          <p>
            Telling your story through dynamic, high-quality videos. Our video production services cover everything from scripting and shooting to editing and animation, ensuring your visual content stands out.
          </p>
        </div>
        <div className="content-creation-unique-service-card">
          <h3>Graphic Design</h3>
          <p>
            Enhancing your message with visually stunning graphics. We design everything from infographics and social media visuals to brochures and digital ads, all aligned with your brand identity.
          </p>
        </div>
        <div className="content-creation-unique-service-card">
          <h3>Content Strategy</h3>
          <p>
            Developing a comprehensive content plan that aligns with your business goals. We analyze your target audience, industry trends, and competitors to create a strategy that positions your brand as a leader in your field.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="content-creation-unique-why-choose-us">
        <h2 className="content-creation-unique-section-title">Why Choose Us</h2>
        <div className="content-creation-unique-why-cards">
          <div className="content-creation-unique-why-card">
            <h3>Tailored Solutions</h3>
            <p>
              We understand that every brand is unique. That's why we offer customized content creation services that fit your specific needs, whether you're a startup looking to make your mark or an established brand aiming to maintain your voice.
            </p>
          </div>
          <div className="content-creation-unique-why-card">
            <h3>Expert Team</h3>
            <p>
              Our team of experienced writers, designers, and strategists are passionate about content creation. With a keen eye for detail and a commitment to excellence, we bring creativity and expertise to every project.
            </p>
          </div>
          <div className="content-creation-unique-why-card">
            <h3>Results-Driven Approach</h3>
            <p>
              We don’t just create content; we create content that works. By focusing on your goals, we ensure that every piece of content we produce drives engagement, conversions, and results.
            </p>
          </div>
          <div className="content-creation-unique-why-card">
            <h3>Fast Turnaround</h3>
            <p>
              We know that time is of the essence. That’s why we’re committed to delivering high-quality content on time, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies */}
      <section className="content-creation-unique-portfolio">
        <h2 className="content-creation-unique-section-title">Portfolio/Case Studies</h2>
        <p className="content-creation-unique-portfolio-intro">
          See our content in action. Explore our portfolio to view a diverse range of projects, from blog posts and social media campaigns to videos and graphic designs.
        </p>
        {/* Add portfolio image thumbnails or links */}
      </section>

      {/* Testimonials */}
      <section className="content-creation-unique-testimonials">
        <h2 className="content-creation-unique-section-title">What Our Clients Say</h2>
        <div className="content-creation-unique-testimonial">
          <p>
            "The team at Mahisha India Tech exceeded our expectations with their creative approach and attention to detail. The content they produced has significantly boosted our online presence."
          </p>
          <span>- [Client Name], [Company]</span>
        </div>
        <div className="content-creation-unique-testimonial">
          <p>
            "Their content strategy helped us reach our target audience more effectively. We’ve seen a marked increase in engagement and customer loyalty."
          </p>
          <span>- [Client Name], [Company]</span>
        </div>
      </section>

      {/* Blog Section */}
      <section className="content-creation-unique-blog">
        <h2 className="content-creation-unique-section-title">Tips & Insights</h2>
        <p>
          Stay ahead of the curve with our latest articles on content creation trends, tips, and best practices. Our blog is your go-to resource for fresh ideas and industry insights.
        </p>
      </section>

      {/* CTA */}
      <section className="content-creation-cta" style={{backgroundColor: '#b8860b'}}>
        <h2>Ready to elevate your brand with top-notch content?</h2>
        <button className="content-creation-cta-button">Contact Us Today</button>
      </section>
      <Footer />
    </div>
  );
};

export default ContentCreation;
