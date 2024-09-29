import React from 'react';
import './Internships.css';

export default function Internships() {
  return (
    <div className="internship-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Join Our Internship Program</h1>
          <p>Kickstart your career with hands-on experience and mentorship at Mahisha India Technologies.</p>
          <button className="apply-now-btn">Apply Now</button>
        </div>
      </section>

      {/* Why Intern with Us */}
      <section className="why-intern">
        <h2>Why Intern with Mahisha India Technologies?</h2>
        <p>Our internship program is designed to help you develop your skills, build your network, and get real-world experience in a fast-paced tech environment. Whether you're a developer, designer, or aspiring entrepreneur, we have a place for you!</p>
        <ul>
          <li>Work on live projects and cutting-edge technologies.</li>
          <li>Collaborate with a passionate and innovative team.</li>
          <li>Get mentorship from industry leaders.</li>
          <li>Gain valuable insights into the world of startups.</li>
          <li>Flexible working hours and remote opportunities.</li>
        </ul>
      </section>

      {/* Available Internship Positions */}
      <section className="internship-positions">
        <h2>Available Internship Positions</h2>
        <div className="position-card">
          <h3>Web Developer Intern</h3>
          <p>Help us build scalable, user-friendly web applications using technologies like React, Node.js, and MySQL.</p>
          <ul>
            <li>Duration: 6 months</li>
            <li>Location: Remote</li>
            <li>Skills Required: JavaScript, React, Node.js, SQL</li>
          </ul>
          <button className="apply-now-btn">Apply for Web Developer</button>
        </div>
        <div className="position-card">
          <h3>UI/UX Design Intern</h3>
          <p>Design user-centric interfaces and experiences for our web and mobile applications.</p>
          <ul>
            <li>Duration: 3 months</li>
            <li>Location: Remote</li>
            <li>Skills Required: Figma, Adobe XD, User Research</li>
          </ul>
          <button className="apply-now-btn">Apply for UI/UX Design</button>
        </div>
        <div className="position-card">
          <h3>Digital Marketing Intern</h3>
          <p>Drive our online presence with innovative marketing strategies across various digital platforms.</p>
          <ul>
            <li>Duration: 4 months</li>
            <li>Location: Remote</li>
            <li>Skills Required: SEO, Social Media Marketing, Content Creation</li>
          </ul>
          <button className="apply-now-btn">Apply for Digital Marketing</button>
        </div>
      </section>

      {/* Application Process */}
      <section className="application-process">
        <h2>How to Apply</h2>
        <div className="process-steps">
          <div className="step">
            <h3>Step 1</h3>
            <p>Submit your application by clicking on the Apply Now button under your desired role.</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>We'll review your application and schedule a virtual interview if you're a good fit.</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>After the interview, successful candidates will receive an offer to join our internship program!</p>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="perks-benefits">
        <h2>Perks & Benefits</h2>
        <ul>
          <li>Monthly stipend based on performance.</li>
          <li>Hands-on mentorship with industry experts.</li>
          <li>Work on exciting real-world projects.</li>
          <li>Flexible working hours and location.</li>
          <li>Certificate and letter of recommendation.</li>
          <li>Networking opportunities with professionals in the tech industry.</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Interns Say</h2>
        <div className="testimonial">
          <p>"This internship provided me with the opportunity to work on challenging projects while learning from experienced mentors. The team is super supportive and the work environment is very dynamic!"</p>
          <h3>- Aditi, Web Developer Intern</h3>
        </div>
        <div className="testimonial">
          <p>"The internship at Mahisha India Technologies helped me refine my design skills. I gained real-world experience working on user interfaces for live projects."</p>
          <h3>- Rajesh, UI/UX Design Intern</h3>
        </div>
        <div className="testimonial">
          <p>"I loved my time here! I learned so much about digital marketing and SEO. The hands-on experience was exactly what I needed to boost my career."</p>
          <h3>- Kavita, Digital Marketing Intern</h3>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is the duration of the internship?</h3>
          <p>Our internships range from 3 to 6 months depending on the role and your availability.</p>
        </div>
        <div className="faq-item">
          <h3>Is the internship paid?</h3>
          <p>Yes, we offer a stipend based on your performance and the type of role.</p>
        </div>
        <div className="faq-item">
          <h3>Can I work remotely?</h3>
          <p>Yes, all our internships are remote, allowing you to work from anywhere.</p>
        </div>
        <div className="faq-item">
        <h3>What skills do I need to apply?</h3>
          <p>Each internship role has its own set of requirements, but we're looking for passionate individuals who are eager to learn and grow. Check the position details for specific skills.</p>
        </div>
        <div className="faq-item">
          <h3>What happens after I submit my application?</h3>
          <p>Once you've applied, our team will review your application. If we think you're a good fit, we'll reach out to schedule a virtual interview.</p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="apply-section">
        <h2>Ready to Join Us?</h2>
        <p>We’re excited to have you on board! Apply today and take the first step toward a rewarding internship experience.</p>
        <button className="apply-now-btn">Apply Now</button>
      </section>
    </div>
  );
}

