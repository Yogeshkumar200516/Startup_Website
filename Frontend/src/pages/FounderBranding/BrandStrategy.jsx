import React from 'react';
import './BrandStrategy.css';
import Footer from '../Footer';

const BrandStrategy = () => {
  return (
    <div className="brand-container">
      <section className="brand-banner">
        <h1>Brand Strategy</h1>
        <p>Building a Brand That Resonates</p>
      </section>

      <section className="brand-identity">
        <h2>Our Brand Identity</h2>
        <p>
          Our brand is built on the pillars of innovation, integrity, and impact. We push the boundaries of what’s possible, stay true to our values, and make a meaningful difference in the lives of our clients and their customers.
        </p>
      </section>

      <section className="brand-vision-mission">
        <div className="vision-section">
          <h2>Brand Vision</h2>
          <p>
            We envision a brand that is synonymous with excellence and trust. Our goal is to be recognized as a leader in delivering cutting-edge digital solutions that empower businesses to achieve their full potential.
          </p>
        </div>
        <div className="mission-section">
          <h2>Brand Mission</h2>
          <p>
            Our mission is to help businesses thrive in the digital age by providing innovative, tailored solutions that address their unique challenges.
          </p>
        </div>
      </section>

      <section className="brand-values">
        <h2>Brand Values</h2>
        <div className="value-cards">
          <div className="value-card" style={{backgroundColor: '#f3e5f5'}}>
            <h3>Innovation</h3>
            <p>We embrace creativity and forward-thinking, constantly seeking new ways to solve problems and deliver value.</p>
          </div>
          <div className="value-card" style={{backgroundColor: '#fce4ec'}}>
            <h3>Integrity</h3>
            <p>We conduct our business with honesty and transparency, building trust with our clients through every interaction.</p>
          </div>
          <div className="value-card" style={{backgroundColor: '#e0f7fa'}}>
            <h3>Customer-Centricity</h3>
            <p>We listen, understand, and deliver solutions that meet our clients' needs.</p>
          </div>
          <div className="value-card" style={{backgroundColor: '#e0f2f1'}}>
            <h3>Excellence</h3>
            <p>We continually strive to exceed expectations and deliver the highest quality in our work.</p>
          </div>
        </div>
      </section>

      <section className="target-audience">
        <h2>Target Audience</h2>
        <p>
          Our brand is tailored for businesses seeking a strategic partner to navigate the digital landscape. From startups to established companies, we provide strategic insight, creativity, and reliable execution.
        </p>
      </section>

      <section className="brand-personality">
        <h2>Brand Personality</h2>
        <p>
          Our brand is approachable yet professional, innovative yet grounded. We solve problems, inspire confidence, and always look toward the future.
        </p>
      </section>

      <section className="brand-promise">
        <h2>Brand Promise</h2>
        <p>
          We promise to deliver tailored digital solutions that are not only innovative but also practical and results-driven.
        </p>
      </section>

      <section className="brand-tone-visual">
        <div className="tone-section">
          <h2>Brand Tone and Voice</h2>
          <p>
            Our tone is confident and knowledgeable, yet warm and relatable. We communicate complex ideas clearly, ensuring our clients feel empowered.
          </p>
        </div>
        <div className="visual-identity-section">
          <h2>Visual Identity</h2>
          <p>
            Our visual identity reflects innovation, integrity, and excellence through a cohesive and recognizable design that resonates with our core values.
          </p>
        </div>
      </section>

      <section className="brand-evolution">
        <h2>Brand Growth and Evolution</h2>
        <p>
          Our brand will continue to evolve, adapting to the changing needs of our clients while remaining true to our values. We’re committed to refining our strategy to ensure lasting impact.
        </p>
      </section>

      <section className="brand-conclusion">
        <h2>Conclusion</h2>
        <p>
          At our Start-up, our brand is more than a logo—it's the embodiment of who we are, what we stand for, and what we aim to achieve. We are committed to building a brand that resonates deeply with our audience and leaves a lasting impact.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default BrandStrategy;
