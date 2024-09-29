import React from 'react';
import './WebApplication.css';
import react  from '../../assets/images/react.png';
import node  from '../../assets/images/node.png';
import django  from '../../assets/images/django.png';
import vue  from '../../assets/images/vue.png';
import laravel  from '../../assets/images/laravel.png';
import aws  from '../../assets/images/aws.png';
import mysql  from '../../assets/images/mysql.png';
import net  from '../../assets/images/net.png';
import Footer from '../Footer';

function WebApplications() {
  return (
    <div className="webAppContainer">
      <header className="webAppHeroSection">
        <h1 className="webAppHeroTitle">Web Applications Development</h1>
        <p className="webAppHeroSubtitle">
          Building Future-Proof, Scalable, and Secure Web Solutions
        </p>
      </header>

      <section className="webAppIntroSection">
        <p className="webAppIntroText">
          In today's digital age, web applications have become a cornerstone for businesses to engage with their customers, streamline operations, and stay competitive. At <span className="companyName">[Your Company Name]</span>, we specialize in crafting high-performance web applications tailored to meet the unique needs of your business.
        </p>
      </section>

      <section className="webAppServicesSection">
        <h2 className="webAppSectionTitle">Our Web Application Services</h2>
        <div className="webAppServicesGrid">
          <div className="webAppServiceCard">
            <h3 className="webAppServiceTitle">Custom Web Application Development</h3>
            <p className="webAppServiceDescription">We build bespoke web applications that align perfectly with your business goals.</p>
          </div>
          <div className="webAppServiceCard">
            <h3 className="webAppServiceTitle">Progressive Web Apps (PWA)</h3>
            <p className="webAppServiceDescription">Providing faster load times, offline functionality, and an app-like experience.</p>
          </div>
          <div className="webAppServiceCard">
            <h3 className="webAppServiceTitle">E-commerce Solutions</h3>
            <p className="webAppServiceDescription">From custom shopping carts to secure payment gateways, we cover it all.</p>
          </div>
          <div className="webAppServiceCard">
            <h3 className="webAppServiceTitle">Single Page Applications (SPA)</h3>
            <p className="webAppServiceDescription">We create SPAs that are fast, reliable, and designed to engage your users.</p>
          </div>
          <div className="webAppServiceCard">
            <h3 className="webAppServiceTitle">API Development and Integration</h3>
            <p className="webAppServiceDescription">Our robust APIs ensure your application can scale with your business needs.</p>
          </div>
          <div className="webAppServiceCard">
            <h3 className="webAppServiceTitle">Content Management Systems (CMS)</h3>
            <p className="webAppServiceDescription">User-friendly CMS solutions to easily manage your content.</p>
          </div>
        </div>
      </section>

      <section className="webAppWhyChooseUsSection">
        <h2 className="webAppSectionTitle">Why Choose Us?</h2>
        <ul className="webAppWhyChooseUsList">
          <li><strong>Expert Team:</strong> Our developers are skilled in the latest technologies.</li>
          <li><strong>Scalability:</strong> We design web applications that grow with your business.</li>
          <li><strong>Security:</strong> We implement the latest security protocols to protect your data.</li>
          <li><strong>User-Centric Design:</strong> We create intuitive and engaging user interfaces.</li>
        </ul>
      </section>

      <section className="webAppTechnologiesSection">
  <h2 className="webAppSectionTitle">Technologies We Use</h2>
  <div className="webAppTechnologiesGrid">
    <div className="webAppTechIcon">
      <img src={react} alt="React.js Logo" className="techLogo" /> React.js
    </div>
    <div className="webAppTechIcon">
      <img src={node} alt="Node.js Logo" className="techLogo" /> Node.js
    </div>
    <div className="webAppTechIcon">
      <img src={django} alt="Django Logo" className="techLogo" /> Django
    </div>
    <div className="webAppTechIcon">
      <img src={vue} alt="Vue.js Logo" className="techLogo" /> Vue.js
    </div>
    <div className="webAppTechIcon">
      <img src={laravel} alt="Laravel Logo" className="techLogo" /> Laravel
    </div>
    <div className="webAppTechIcon">
      <img src={net} alt=".NET Logo" className="techLogo" /> .NET
    </div>
    <div className="webAppTechIcon">
      <img src={mysql} alt="MySQL Logo" className="techLogo" /> MySQL
    </div>
    <div className="webAppTechIcon">
      <img src={aws} alt="AWS Logo" className="techLogo" /> AWS
    </div>
  </div>
</section>


      <section className="webAppProcessSection">
        <h2 className="webAppSectionTitle">Our Process</h2>
        <ol className="webAppProcessList">
          <li><strong>Consultation:</strong> We begin with an in-depth consultation to understand your business needs and goals.</li>
          <li><strong>Planning:</strong> Our team creates a detailed project plan outlining the scope, timelines, and deliverables.</li>
          <li><strong>Development:</strong> We build your web application using agile methodologies.</li>
          <li><strong>Testing:</strong> Rigorous testing ensures your application is bug-free.</li>
          <li><strong>Deployment:</strong> We handle the deployment process smoothly.</li>
          <li><strong>Maintenance & Support:</strong> Ongoing maintenance and support to keep your application running securely.</li>
        </ol>
      </section>

      <section className="webAppCTASection">
        <h2 className="webAppCTATitle">Ready to Transform Your Idea into Reality?</h2>
        <p className="webAppCTADescription">Contact us today to discuss your project and see how we can bring your vision to life.</p>
        <button className="webAppCTAButton">Get in Touch</button>
      </section>
      <Footer />
    </div>
  );
}

export default WebApplications;
