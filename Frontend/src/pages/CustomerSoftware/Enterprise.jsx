import React from 'react';
import './Enterprise.css';
import Footer from '../Footer';

function EnterpriseSoftware() {
  return (
    <div className="enterpriseSoftwareContainer">
      <header className="enterpriseHeroSection">
        <h1 className="enterpriseHeroTitle">Enterprise Software Solutions</h1>
        <p className="enterpriseHeroSubtitle">
          Transforming Your Business with Scalable, Secure, and Innovative Solutions
        </p>
      </header>

      <section className="enterpriseIntroSection">
        <h2 className="enterpriseSectionTitle">Introduction</h2>
        <p className="enterpriseIntroText">
          In the rapidly evolving digital landscape, enterprise software is essential for businesses to streamline operations, enhance productivity, and drive growth. At [Your Company Name], we specialize in delivering cutting-edge enterprise software solutions that are scalable, secure, and tailored to meet the unique needs of large organizations. Our expertise in developing robust, high-performance software ensures that your business stays ahead of the competition.
        </p>
      </section>

      <section className="enterpriseServicesSection">
        <h2 className="enterpriseSectionTitle">Our Enterprise Software Services</h2>
        <div className="enterpriseServicesGrid">
          <div className="enterpriseServiceCard">
            <h3 className="enterpriseServiceTitle">Custom Enterprise Applications</h3>
            <p className="enterpriseServiceDescription">
              We develop bespoke enterprise applications that are perfectly aligned with your business processes and goals. Whether you need a complex ERP system or a specialized internal tool, our custom solutions are designed to fit your unique requirements.
            </p>
            <p className="enterpriseServiceBenefits">
              <strong>Benefits:</strong> Enhanced efficiency, tailored functionality, and improved workflow integration.
            </p>
          </div>
          <div className="enterpriseServiceCard">
            <h3 className="enterpriseServiceTitle">Enterprise Resource Planning (ERP) Systems</h3>
            <p className="enterpriseServiceDescription">
              Our ERP solutions integrate various business processes into a unified system, allowing for seamless data flow and real-time insights. We offer end-to-end ERP solutions that help manage finances, HR, supply chain, and more.
            </p>
            <p className="enterpriseServiceBenefits">
              <strong>Benefits:</strong> Streamlined operations, better resource management, and improved decision-making.
            </p>
          </div>
          <div className="enterpriseServiceCard">
            <h3 className="enterpriseServiceTitle">Customer Relationship Management (CRM) Systems</h3>
            <p className="enterpriseServiceDescription">
              We create powerful CRM systems that help you manage customer interactions, sales processes, and marketing campaigns. Our CRMs are designed to improve customer satisfaction and drive sales growth.
            </p>
            <p className="enterpriseServiceBenefits">
              <strong>Benefits:</strong> Enhanced customer insights, improved sales tracking, and more effective marketing strategies.
            </p>
          </div>
          <div className="enterpriseServiceCard">
            <h3 className="enterpriseServiceTitle">Business Intelligence (BI) Solutions</h3>
            <p className="enterpriseServiceDescription">
              Our BI solutions provide actionable insights through data analysis and reporting. We build dashboards, reports, and data visualization tools that help you make informed business decisions.
            </p>
            <p className="enterpriseServiceBenefits">
              <strong>Benefits:</strong> Data-driven insights, improved strategic planning, and better performance monitoring.
            </p>
          </div>
          <div className="enterpriseServiceCard">
            <h3 className="enterpriseServiceTitle">Integration Services</h3>
            <p className="enterpriseServiceDescription">
              We ensure that your enterprise software integrates seamlessly with existing systems and third-party applications. Our integration solutions help synchronize data across platforms and streamline processes.
            </p>
            <p className="enterpriseServiceBenefits">
              <strong>Benefits:</strong> Improved data consistency, enhanced workflow automation, and reduced manual errors.
            </p>
          </div>
          <div className="enterpriseServiceCard">
            <h3 className="enterpriseServiceTitle">Cloud-Based Solutions</h3>
            <p className="enterpriseServiceDescription">
              We develop scalable and secure cloud-based enterprise software solutions that enable remote access, collaboration, and data storage. Our cloud solutions are designed to be flexible and cost-effective.
            </p>
            <p className="enterpriseServiceBenefits">
              <strong>Benefits:</strong> Increased accessibility, scalability, and reduced infrastructure costs.
            </p>
          </div>
        </div>
      </section>

      <section className="enterpriseTechSection">
        <h2 className="enterpriseSectionTitle">Technologies We Use</h2>
        <div className="enterpriseTechGrid">
          <div className="enterpriseTechIcon">Java</div>
          <div className="enterpriseTechIcon">.NET</div>
          <div className="enterpriseTechIcon">Python</div>
          <div className="enterpriseTechIcon">JavaScript</div>
          <div className="enterpriseTechIcon">Spring</div>
          <div className="enterpriseTechIcon">Angular</div>
          <div className="enterpriseTechIcon">React</div>
          <div className="enterpriseTechIcon">SQL Server</div>
        </div>
      </section>

      <section className="enterpriseProcessSection">
        <h2 className="enterpriseSectionTitle">Our Development Process</h2>
        <div className="enterpriseProcessSteps">
          <div className="enterpriseProcessStep">
            <h3 className="enterpriseProcessTitle">Consultation</h3>
            <p className="enterpriseProcessDescription">
              We start with a thorough consultation to understand your business requirements and objectives.
            </p>
          </div>
          <div className="enterpriseProcessStep">
            <h3 className="enterpriseProcessTitle">Planning & Design</h3>
            <p className="enterpriseProcessDescription">
              Our team creates a detailed project plan and design prototypes to ensure alignment with your vision.
            </p>
          </div>
          <div className="enterpriseProcessStep">
            <h3 className="enterpriseProcessTitle">Development</h3>
            <p className="enterpriseProcessDescription">
              We build your enterprise software using agile methodologies, ensuring flexibility and continuous improvement.
            </p>
          </div>
          <div className="enterpriseProcessStep">
            <h3 className="enterpriseProcessTitle">Testing</h3>
            <p className="enterpriseProcessDescription">
              Rigorous testing is conducted to ensure your software is reliable, secure, and performs optimally.
            </p>
          </div>
          <div className="enterpriseProcessStep">
            <h3 className="enterpriseProcessTitle">Deployment</h3>
            <p className="enterpriseProcessDescription">
              We handle the deployment process, ensuring a smooth transition to your production environment.
            </p>
          </div>
          <div className="enterpriseProcessStep">
            <h3 className="enterpriseProcessTitle">Support & Maintenance</h3>
            <p className="enterpriseProcessDescription">
              We provide ongoing support and maintenance to keep your software running smoothly and adapt to changing needs.
            </p>
          </div>
        </div>
      </section>

      <section className="enterpriseCTASection">
        <h2 className="enterpriseCTATitle">Ready to Transform Your Enterprise?</h2>
        <p className="enterpriseCTADescription">
          Contact us today to discuss how our enterprise software solutions can enhance your business operations and drive growth. Let’s work together to create innovative solutions that propel your organization forward.
        </p>
        <button className="enterpriseCTAButton">Contact Us</button>
      </section>
      <Footer />
    </div>
  );
}

export default EnterpriseSoftware;
