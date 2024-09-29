import React from 'react';
import './ECommerce.css';
import { FaMobileAlt, FaLaptop, FaBullhorn, FaChartLine, FaLock, FaUsers, FaIndustry } from 'react-icons/fa';
import { MdLocalShipping, MdWeb } from 'react-icons/md';
import { FaReact, FaNodeJs, FaDatabase, FaPaypal, FaShieldAlt, FaClipboardList, FaDraftingCompass, FaLaptopCode, FaBug, FaRocket } from 'react-icons/fa';
import Footer from '../Footer';


const EcommercePage = () => {
  return (
    <div className="ecommerce-container">
      <header className="ecommerce-header">
        <h1>E-Commerce Solutions</h1>
        <p>Transform Your Business with Cutting-Edge E-Commerce Solutions</p>
      </header>

      <section className="ecommerce-services">
        <h2>Our Services</h2>
        <div className="card-container">
          <div className="card" style={{color: '#b8860b'}}>
            <FaLaptop className="card-icon" style={{color: '#b8860b'}}/>
            <h3>Custom E-Commerce Development</h3>
            <p style={{color: 'gray'}}>Tailor-made e-commerce solutions that align perfectly with your business goals.</p>
          </div>
          <div className="card" style={{color: '#b8860b'}}>
            <MdWeb className="card-icon" style={{color: '#b8860b'}}/>
            <h3>User Experience Design</h3>
            <p style={{color: 'gray'}}>Enhance user satisfaction with intuitive and visually appealing designs.</p>
          </div>
          <div className="card" style={{color: '#b8860b'}}>
            <FaLock className="card-icon" style={{color: '#b8860b'}}/>
            <h3>Integration Services</h3>
            <p style={{color: 'gray'}}>Integrate your platform with payment gateways, inventory management systems, and more.</p>
          </div>
          <div className="card" style={{color: '#b8860b'}}>
            <FaMobileAlt className="card-icon" style={{color: '#b8860b'}}/>
            <h3>Mobile Commerce</h3>
            <p style={{color: 'gray'}}>Optimize your store for mobile devices for a smooth shopping experience across all devices.</p>
          </div>
          <div className="card" style={{color: '#b8860b'}}>
            <FaBullhorn className="card-icon" style={{color: '#b8860b'}}/>
            <h3>SEO & Marketing</h3>
            <p style={{color: 'gray'}}>Improve your online visibility and attract more customers with our SEO and digital marketing strategies.</p>
          </div>
          <div className="card" style={{color: '#b8860b'}}>
            <FaChartLine className="card-icon" style={{color: '#b8860b'}}/>
            <h3>Analytics & Reporting</h3>
            <p style={{color: 'gray'}}>Gain insights into your business performance with our analytics and reporting services.</p>
          </div>
        </div>
      </section>

      <section className="ecommerce-tech-stack">
        <h2>E-Commerce Technology Stack</h2>
        <div className="tech-stack-cards">
          <div className="tech-card" style={{backgroundColor: '#e1f5fe'}}>
            <FaReact className="tech-icon" />
            <h3>Frontend</h3>
            <p>React.js, Angular, Vue.js</p>
          </div>
          <div className="tech-card"style={{backgroundColor: '#fce4ec'}}>
            <FaNodeJs className="tech-icon" />
            <h3>Backend</h3>
            <p>Node.js, Django, Ruby on Rails</p>
          </div>
          <div className="tech-card" style={{backgroundColor: '#f3e5f5'}}>
            <FaDatabase className="tech-icon" />
            <h3>Database</h3>
            <p>MySQL, MongoDB, PostgreSQL</p>
          </div>
          <div className="tech-card" style={{backgroundColor: '#ede7f6'}}>
            <FaPaypal className="tech-icon" />
            <h3>Payments</h3>
            <p>PayPal, Stripe, Square</p>
          </div>
          <div className="tech-card" style={{backgroundColor: '#e0f7fa'}}>
            <FaShieldAlt className="tech-icon" />
            <h3>Security</h3>
            <p>SSL, PCI Compliance, 2FA</p>
          </div>
        </div>
      </section>

      <section className="ecommerce-process">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <FaClipboardList className="process-icon" />
            <h3>1. Consultation</h3>
            <p>We begin with a deep understanding of your business needs.</p>
          </div>
          <div className="process-step">
            <FaDraftingCompass className="process-icon" />
            <h3>2. Design</h3>
            <p>Our design team crafts an intuitive and attractive user interface.</p>
          </div>
          <div className="process-step">
            <FaLaptopCode className="process-icon" />
            <h3>3. Development</h3>
            <p>We develop the platform using cutting-edge technologies.</p>
          </div>
          <div className="process-step">
            <FaBug className="process-icon" />
            <h3>4. Testing</h3>
            <p>Rigorous testing ensures a flawless shopping experience.</p>
          </div>
          <div className="process-step">
            <FaRocket className="process-icon" />
            <h3>5. Launch</h3>
            <p>We assist you in launching your platform and monitor performance.</p>
          </div>
        </div>
      </section>

      <section className="ecommerce-testimonials">
        <h2>Client Testimonials</h2>
        <blockquote>
          "The e-commerce solution provided by [Your Company Name] has transformed our business. The platform is robust, user-friendly, and scalable." - Client A
        </blockquote>
        <blockquote>
          "We saw a 300% increase in sales after launching our new e-commerce site with [Your Company Name]." - Client B
        </blockquote>
      </section>

      <section className="ecommerce-industries">
        <h2>Industries We Serve</h2>
        <div className="card-container">
          <div className="card" style={{backgroundColor: '#fce4ec'}}>
            <FaIndustry className="card-icon" />
            <h3>Fashion & Apparel</h3>
            <p>Visually stunning platforms that showcase your products in the best light.</p>
          </div>
          <div className="card" style={{backgroundColor: '#e3f2fd'}}>
            <MdLocalShipping className="card-icon" />
            <h3>Food & Beverage</h3>
            <p>Platforms that support online ordering, delivery scheduling, and more.</p>
          </div>
          <div className="card" style={{backgroundColor: '#e8f5e9'}}>
            <FaUsers className="card-icon" />
            <h3>Health & Beauty</h3>
            <p>E-commerce solutions that cater to product recommendations, subscriptions, and loyalty programs.</p>
          </div>
        </div>
      </section>

      <footer className="ecommerce-footer">
        <h2 style={{color: 'white'}}>Get Started Today</h2>
        <p>Ready to take your e-commerce business to the next level? Contact us today to discuss your project.</p>
      </footer>
      <Footer />
    </div>
  );
};

export default EcommercePage;
