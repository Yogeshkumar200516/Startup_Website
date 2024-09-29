import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';  // Include CSS styles
import { FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'; // Import mail and social icons
import ContactInfo from './ContactInfo';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleQuoteClick = () => {
    navigate('/reach-us');
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Start building awesome websites</h2>
        <p>Join over 12,653,898 customers that are already building amazing websites with us.</p>
        <div className="footer-buttons">
          <button className="footer-btn quote-btn" onClick={handleQuoteClick}>Get a Quote</button>
          <a href="/" onClick={handleOpenModal}>
            <button className="footer-btn reach-btn">Contact Us</button>
          </a>
        </div>
      </div>

      <div className="footer-middle">
        <div className="company-info">
          <h1 className="footer-logo">
            <span className="nexus-info" style={{color: 'white'}}>Mahisha<span className="highlight"> India</span>Tech</span>
          </h1>
          <p>We develop websites for your business, bringing your vision to life and propelling your business into the digital realm.</p>
          <div className="social-icons">
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://linkedin.com"><FaLinkedinIn /></a>
            <a href="https://whatsapp.com"><FaWhatsapp /></a>
            <a href="mailto:mahishaindiatechnologies@gmail.com"><FaEnvelope /></a> {/* Added mail icon */}
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-link-section">
            <h4>Company</h4>
            <ul>
              <li><a href="" onClick={() => navigate('/about-us')}>About Us</a></li>
              <li><a href="/internships" onClick={() => navigate('/internships')}>Internships</a></li>
              <li><a href="" onClick={() => navigate('/consultant')}>Consultant</a></li>
              <li><a href="" onClick={() => navigate('/career')}>Career</a></li>
              <li><a href="/" onClick={handleOpenModal}>Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-link-section">
            <h4>Services</h4>
            <ul>
              <li><a href="" onClick={() => navigate('/web-applications')}>Website Services</a></li>
              <li><a href="" onClick={() => navigate('/marketing-materials')}>Digital Marketing</a></li>
              <li><a href="" onClick={() => navigate('/content-creation')}>Creative Design</a></li>
              <li><a href="" onClick={() => navigate('/enterprise-software')}>Software Development</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Still Need Help?</h4>
            <p><a href="mailto:mahishaindiatechnologies@gmail.com" className="email-link"><FaEnvelope style={{marginRight: '10px', fontSize: '1.6rem'}}/> mahishaindiatechnologies@gmail.com</a></p>
            <p><i className="fas fa-phone"></i> +91 70949 53135</p>
            <p><i className="fab fa-whatsapp"></i> +91 87789 93293</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Mahisha India Technologies Private Limited | All rights reserved.</p>
      </div>

      <ContactInfo isOpen={modalOpen} onClose={handleCloseModal} />
    </footer>
  );
};

export default Footer;
