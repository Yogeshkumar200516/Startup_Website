import React, { useEffect, useState } from 'react';
import './Home.css';
import homeLogo from '../assets/images/homelogo.png';
import microsoftLogo from '../assets/images/microsoft.png';
import googleLogo from '../assets/images/google.png';
import airbinLogo from '../assets/images/airbin.png';
import service1 from '../assets/images/service1.png';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';
import service4 from '../assets/images/service4.png';
import service5 from '../assets/images/service5.jpg';
import videoThumbnail from '../assets/images/video.png'; // Assuming the video thumbnail is in assets
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import businessIcon from '../assets/images/cooperation.png';
import blogIcon from '../assets/images/blog.png';
import mediaIcon from '../assets/images/social-media.png';
import softwareIcon from '../assets/images/illustration.png';
import photoIcon from '../assets/images/photography.png';
import software2Icon from '../assets/images/coding.png';
import webIcon from '../assets/images/web.png';
import brandIcon from '../assets/images/brand.png';
import adLogo from '../assets/images/adimage.jpg';
import newImage from '../assets/images/homelogo.png'; // Path to the uploaded image
import LanguageIcon from '@mui/icons-material/Language';
import facebookIcon from '../assets/images/facebook.png';
import instaIcon from '../assets/images/instagram.png';
import twitterIcon from '../assets/images/twitter.png';
import linkedinIcon from '../assets/images/linkedin.png';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import teamworkIcon from '../assets/images/teamwork.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    img: videoThumbnail,
    speaker: 'Industry Leader',
    text: "The Sixty Labs' expertise helped us achieve significant growth. Their data-driven approach and clear communication made the entire process seamless.",
    source: 'E-commerce Entrepreneur'
  },
  {
    img: service4,
    speaker: 'Tech Guru',
    text: "The innovative solutions provided by Sixty Labs transformed our digital presence. Their team's dedication and professionalism are unmatched.",
    source: 'Tech Startup CEO'
  },
  {
    img: service2,
    speaker: 'Marketing Expert',
    text: "Sixty Labs delivered exceptional results. Their creative strategies and thorough market analysis were key to our campaign's success.",
    source: 'Marketing Director'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleGetStartedButton = () => {
    navigate('/services');
  }

  return (
    <div className="home-page-custom">
      <div className="hero-section-custom">
        <div className="hero-content-custom">
          <h1>Your One-Stop Shop for All Things Digital</h1>
          <p>
            Forget the Old Rules. Build Something Extraordinary. We craft custom solutions across web, branding, content, and more.
          </p>
          <button className="get-started-button-custom" onClick={handleGetStartedButton}>Get started</button>
        </div>
        <div className="hero-image-custom">
          <img src={homeLogo} alt="Digital Illustration" />
        </div>
      </div>
      <div className="trusted-by-custom">
        <p>Trusted by</p>
        <div className="trusted-logos-custom">
          <div className="trusted-logo-custom">
            <img src={microsoftLogo} alt="Microsoft" />
            <span>Microsoft</span>
          </div>
          <div className="trusted-logo-custom">
            <img src={googleLogo} alt="Google" />
            <span>Google</span>
          </div>
          <div className="trusted-logo-custom">
            <img src={airbinLogo} alt="Airbnb" />
            <span>Airbin</span>
          </div>
        </div>
      </div>
      <div className="services-section-custom">
        <h2>Popular Services</h2>
        <div className="services-list-custom">
          <div className="service-item-custom">
            <img src={service1} alt="Software Development-custom" />
            <h3>Software Development</h3>
          </div>
          <div className="service-item-custom">
            <img src={service2} alt="Graphic Design" />
            <h3>Graphic Design</h3>
          </div>
          <div className="service-item-custom">
            <img src={service3} alt="Blog Writing" />
            <h3>Blog Writing</h3>
          </div>
          <div className="service-item-custom">
            <img src={service4} alt="Founder-lead Branding" />
            <h3>Founder-lead Branding</h3>
          </div>
          <div className="service-item-custom">
            <img src={service5} alt="Social Media Management" />
            <h3>Social Media Management</h3>
          </div>
          <div className="service-item-custom">
            <img src={service5} alt="Website Development" />
            <h3>Website Development</h3>
          </div>
        </div>
      </div>
      <div className="best-part-section-custom">
        <h2>The best part? Everything.</h2>
        <div className="best-part-content-custom">
          <ul className="best-part-list-custom">
            <li>
              <div className="best-part-text-custom">
                <div className="best-part-head-custom">
                  <TaskAltIcon sx={{ color: '#424242' }} />
                  <strong>Stick to your budget</strong>
                </div>
                <p>Find the right service for every price point.</p>
                <p>No hourly rates, just project-based pricing.</p>
              </div>
            </li>
            <li>
              <div className="best-part-text-custom">
                <div className="best-part-head-custom">
                  <TaskAltIcon sx={{ color: '#424242' }} />
                  <strong>Get quality work done quickly</strong>
                </div>
                <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
              </div>
            </li>
            <li>
              <div className="best-part-text-custom">
                <div className="best-part-head-custom">
                  <TaskAltIcon sx={{ color: '#424242' }} />
                  <strong>Pay when you're happy</strong>
                </div>
                <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
              </div>
            </li>
            <li>
              <div className="best-part-text-custom">
                <div className="best-part-head-custom">
                  <TaskAltIcon sx={{ color: '#424242' }} />
                  <strong>Count on 24/7 support</strong>
                </div>
                <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
              </div>
            </li>
          </ul>
          <div className="best-part-video-custom">
            <img src={videoThumbnail} alt="Video Thumbnail" />
          </div>
        </div>
      </div>
      <div className="new-section-custom">
        <h2>You need it, we've got it</h2>
        <div className="services-grid-custom">
          <div className="service-custom">
            <img src={blogIcon} className="service-icon-custom" />
            <p>Blog Writing</p>
          </div>
          <div className="service-custom">
            <img src={mediaIcon} className="service-icon-custom" />
            <p>Social Media Management</p>
          </div>
          <div className="service-custom">
            <img src={softwareIcon} className="service-icon-custom" />
            <p>Graphic Design</p>
          </div>
          <div className="service-custom">
            <img src={webIcon} className="service-icon-custom" />
            <p>Website Development</p>
          </div>
          <div className="service-custom">
            <img src={photoIcon} className="service-icon-custom" />
            <p>Photography</p>
          </div>
          <div className="service-custom">
            <img src={software2Icon} className="service-icon-custom" />
            <p>Customer Software Development</p>
          </div>
          <div className="service-custom">
            <img src={businessIcon} className="service-icon-custom" />
            <p>Business</p>
          </div>
          <div className="service-custom">
            <img src={brandIcon} className="service-icon-custom" />
            <p>Founder-lead Branding</p>
          </div>
        </div>
      </div>
      <div className="new-content-custom">
        <h2>What People are Saying</h2>
        <div className="testimonial-slider-custom">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-custom ${index === currentSlide ? 'active' : ''}`}>
              <img src={testimonial.img} alt="Testimonial Video" />
              <div className="testimonial-text-custom">
                <h3>Speaker: {testimonial.speaker}</h3>
                <p>"{testimonial.text}"</p>
                <p>({testimonial.source})</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-dots-custom">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot-custom ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="ad-section-custom">
        <div className="ad-content-custom">
          <div className="ad-head-custom">
            <img src={softwareIcon} className='ad-image-custom' />
            <h2>Graphic Design</h2>
          </div>
          <p>Make an incredible logo in minutes</p>
          <button>Get started for Free</button>
        </div>
        <div className="ad-illustration-custom">
          <img src={adLogo} alt="Graphic Design Icon" />
        </div>
      </div>

      {/* New Section */}
      <div className="new-content-custom">
        <h2>We're here for your E-Commerce everything</h2>
        <div className="new-content-inner-custom">
          <ul className="new-content-list-custom">
            <li>
              <h3>Get a project manager</h3>
              <p>To guide you through each stage of launching your e-Commerce business</p>
            </li>
            <li>
              <h3>Accelerate time-to-market</h3>
              <p>With a dedicated team of top-tier freelance experts</p>
            </li>
            <li>
              <h3>Optimize your budget</h3>
              <p>With a dedicated project manager who will handle all your tasks, leaving you more money for marketing and growth</p>
            </li>
            <button className="get-started-button-custom" onClick={handleGetStartedButton}>Get started</button>
          </ul>
          <img src={teamworkIcon} alt="New Section Illustration" className="new-section-image-custom" />
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="bottom-section-custom">
        <div className='bottom-content-custom'>
          <div className='bottom-custom'>
            <img src={brandIcon} className='bottom-logo-custom' />
            <div className='link'>@mahishaindiatech pvt.Ltd</div>
          </div>
        <div className="social-media-icons-custom">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instaIcon} alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Ex" />
          </a>
        </div>
        <div className='language-option-custom'>
          <div className='language-custom'>
            <div className='lang-text-custom'>English</div>
            <LanguageIcon />
          </div> 
          <div className='language-custom'>
            <div className='lang-text-custom'>INR</div>
            <CurrencyRupeeIcon />
          </div> 
        </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Home;