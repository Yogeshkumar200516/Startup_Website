import React from 'react';
import './Customers.css';

// Import local images for customers
import customer1Image from '../../assets/images/team1.jpeg';
import customer2Image from '../../assets/images/team2.jpeg';
import customer3Image from '../../assets/images/team3.jpeg';
import customer4Image from '../../assets/images/team4.jpeg';
import customer5Image from '../../assets/images/team7.jpeg';
import customer6Image from '../../assets/images/team8.jpeg';

const customers = [
  {
    id: 'customer1',
    name: 'ABC Corp',
    feedback: '“Working with this team has been a game-changer for our business. Their innovative solutions have helped us scale efficiently.”',
    image: customer1Image,
    relationship: 'Long-term partner with ongoing collaboration on various projects.'
  },
  {
    id: 'customer2',
    name: 'XYZ Ltd.',
    feedback: '“We were impressed with their dedication to quality and attention to detail. Highly recommend their services!”',
    image: customer2Image,
    relationship: 'Completed a successful website redesign and marketing campaign.'
  },
  {
    id: 'customer3',
    name: 'LMN Inc.',
    feedback: '“Their approach to solving complex problems is unparalleled. We saw significant improvements in our system performance.”',
    image: customer3Image,
    relationship: 'Engaged for enterprise software development and optimization.'
  },
  {
    id: 'customer4',
    name: 'OPQ Solutions',
    feedback: '“Exceptional service and support. Their expertise in branding has elevated our market presence.”',
    image: customer4Image,
    relationship: 'Provided comprehensive branding and marketing solutions.'
  },
  {
    id: 'customer5',
    name: 'RST Technologies',
    feedback: '“The team’s dedication and innovative approach have made a huge difference in our project’s success.”',
    image: customer5Image,
    relationship: 'Worked on custom app development and integration.'
  },
  {
    id: 'customer6',
    name: 'UVW Enterprises',
    feedback: '“A pleasure to work with. Their attention to detail and customer-centric approach were key to our project’s success.”',
    image: customer6Image,
    relationship: 'Provided ongoing support and software enhancements.'
  }
];

const HappyCustomers = () => {
  return (
    <div className="happy-customers-container">
      <h1 className="happy-customers-title">Our Happy Customers</h1>
      <p className="happy-customers-intro">
        We are proud to have collaborated with a diverse range of clients. Here’s what some of them have to say about their experiences with us.
      </p>
      <div className="customer-testimonials">
        {customers.map((customer) => (
          <div key={customer.id} className="customer-card">
            <img src={customer.image} alt={customer.name} className="customer-image" />
            <div className="customer-info">
              <h2 className="customer-name">{customer.name}</h2>
              <p className="customer-feedback">{customer.feedback}</p>
              <p className="customer-relationship"><strong>Relationship:</strong> {customer.relationship}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="additional-content">
        <h2 className="content-title">Client Success Stories</h2>
        <p className="content-description">
          Discover more about how we've transformed our clients' businesses and delivered measurable results through our innovative solutions.
        </p>
        <ul className="success-stories-list">
          <li>Increased web traffic by 150% for a major e-commerce client.</li>
          <li>Streamlined operational processes for a leading financial services firm.</li>
          <li>Developed a high-performing mobile app that won industry awards.</li>
        </ul>
      </div>
      <div className="cta-section2">
        <h2 className="cta-title2">Ready to Transform Your Business?</h2>
        <p className="cta-description2">
          Get in touch with us today to find out how we can help you achieve your goals with our tailored solutions.
        </p>
        <button className="cta-button2">Contact Us</button>
      </div>
    </div>
  );
};

export default HappyCustomers;
