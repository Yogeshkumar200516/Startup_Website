import React from 'react';
import './Career.css';

export default function Career() {
  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Build Your Future with Us</h1>
          <p>Explore exciting career opportunities at Mahisha India Technologies and join a team that values innovation, collaboration, and growth.</p>
          <button className="explore-positions-btn">Explore Positions</button>
        </div>
      </section>

      {/* Company Culture */}
      <section className="company-culture">
        <h2>Our Company Culture</h2>
        <p>At Mahisha India Technologies, we believe in fostering a supportive and inclusive work environment. Our team is passionate about technology and driven by a shared mission to make a difference.</p>
        <ul>
          <li>Innovative Projects: Work on cutting-edge technologies and projects.</li>
          <li>Collaborative Environment: Collaborate with talented and motivated colleagues.</li>
          <li>Professional Growth: Opportunities for career advancement and personal development.</li>
          <li>Work-Life Balance: Flexible working hours and remote work options.</li>
        </ul>
      </section>

      {/* Current Openings */}
      <section className="current-openings">
        <h2>Current Openings</h2>
        <div className='job-cards'><div className="job-card">
          <h3>Software Engineer</h3>
          <p>Join our engineering team and contribute to developing scalable and efficient software solutions.</p>
          <ul>
            <li>Location: Remote</li>
            <li>Requirements: Proficiency in JavaScript, React, Node.js</li>
            <li>Experience: 2+ years in software development</li>
          </ul>
          <button className="apply-btn">Apply Now</button>
        </div>
        <div className="job-card">
          <h3>UI/UX Designer</h3>
          <p>Design engaging and user-friendly interfaces that enhance the user experience of our products.</p>
          <ul>
            <li>Location: Remote</li>
            <li>Requirements: Expertise in Figma, Adobe XD</li>
            <li>Experience: 2+ years in UI/UX design</li>
          </ul>
          <button className="apply-btn">Apply Now</button>
        </div>
        <div className="job-card">
          <h3>Marketing Specialist</h3>
          <p>Develop and execute marketing strategies to promote our products and services effectively.</p>
          <ul>
            <li>Location: Remote</li>
            <li>Requirements: Knowledge in SEO, Content Marketing</li>
            <li>Experience: 3+ years in digital marketing</li>
          </ul>
          <button className="apply-btn">Apply Now</button>
        </div></div>
      </section>

      {/* Employee Benefits */}
      <section className="employee-benefits">
        <h2>Why Work With Us?</h2>
        <ul>
          <li>Competitive Salary and Performance Bonuses</li>
          <li>Health and Wellness Programs</li>
          <li>Paid Time Off and Sick Leave</li>
          <li>Professional Development Opportunities</li>
          <li>Modern Work Environment with State-of-the-Art Technology</li>
          <li>Inclusive and Diverse Workplace Culture</li>
        </ul>
      </section>

      {/* Application Process */}
      <section className="application-process">
        <h2>How to Apply</h2>
        <div className='process-steps-total'><div className="process-step">
          <h3>Step 1</h3>
          <p>Browse our open positions and select the role that best matches your skills and interests.</p>
        </div>
        <div className="process-step">
          <h3>Step 2</h3>
          <p>Submit your resume and cover letter through our online application portal.</p>
        </div>
        <div className="process-step">
          <h3>Step 3</h3>
          <p>Our recruitment team will review your application and contact you for an interview if you are shortlisted.</p>
        </div>
        <div className="process-step">
          <h3>Step 4</h3>
          <p>If selected, you will receive a job offer and start your journey with us!</p>
        </div></div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Employees Say</h2>
        <div className="testimonial">
          <p>"Working at Mahisha India Technologies has been a fantastic experience. The team is incredibly supportive, and I have grown both professionally and personally."</p>
          <h3>- Priya, Software Engineer</h3>
        </div>
        <div className="testimonial">
          <p>"The collaborative environment and innovative projects make it a great place to work. I feel challenged and valued every day."</p>
          <h3>- Arun, UI/UX Designer</h3>
        </div>
        <div className="testimonial">
          <p>"Mahisha India Technologies offers a perfect balance of work and life, with plenty of opportunities for growth and development."</p>
          <h3>- Meera, Marketing Specialist</h3>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="apply-section">
        <h2>Ready to Join Us?</h2>
        <p>We are excited to see what you can bring to our team. Apply now and take the first step towards a rewarding career with Mahisha India Technologies!</p>
        <button className="explore-positions-btn">Explore Positions</button>
      </section>
    </div>
  );
}
