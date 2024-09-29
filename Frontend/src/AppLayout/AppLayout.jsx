import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebApplications from '../pages/CustomerSoftware/WebApplication';
import MobileApplications from '../pages/CustomerSoftware/MobileApplication';
import EnterpriseSoftware from '../pages/CustomerSoftware/Enterprise';
import Ecommerce from '../pages/WebsiteDevelopment/ECommerce';
import PortfolioSites from '../pages/WebsiteDevelopment/PortfolioSites';
import CorporateSites from '../pages/WebsiteDevelopment/CorporateSites';
import BrandStrategy from '../pages/FounderBranding/BrandStrategy';
import LogoDesign from '../pages/FounderBranding/LogoDesign';
import VisualIdentity from '../pages/FounderBranding/VisualIdentity';
import SEOArticles from '../pages/BlogWriting/SEOArticle';
import TechnicalWriting from '../pages/BlogWriting/TechnicalWriting';
import CreativeContent from '../pages/BlogWriting/CreativeContent';
import ContentCreation from '../pages/SocialMedia/ContentCreation';
import AdCampaigns from '../pages/SocialMedia/AdCampaigns';
import Analytics from '../pages/SocialMedia/Analytics';
import Infographics from '../pages/GraphicDesign/Infographics';
import MarketingMaterials from '../pages/GraphicDesign/MarketingMaterials';
import UserInterfaces from '../pages/GraphicDesign/UserInterface';
import Home from '../pages/Home'; // Assuming you have a Home component
import Navbar from '../components/Navbar/Navbar';
import AboutUs from '../components/Explore/AboutUS';
import OurTeam from '../components/Explore/OurTeam';
import OurProducts from '../components/Explore/OurProducts';
import HappyCustomers from '../components/Explore/Customers';
import PersonInfo from '../pages/PersonInfo';
import ReachUs from '../components/ReachUs/ReachUs';
import Services from '../pages/Services';
import Internships from '../pages/Internships';
import Consultant from '../pages/Consultant';
import Career from '../pages/Career';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='contents' style={{marginTop: '120px'}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reach-us' element={<ReachUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/internships' element={<Internships />} />
        <Route path='/consultant' element={<Consultant />} />
        <Route path='/career' element={<Career />} />

?       {/* Software Routes */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/team/:id" element={<PersonInfo />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path='/happy-customers' element={<HappyCustomers />} />

        <Route path="/web-applications" element={<WebApplications />} />
        <Route path="/mobile-applications" element={<MobileApplications />} />
        <Route path="/enterprise-software" element={<EnterpriseSoftware />} />
        
        {/* Website Routes */}
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/portfolio-sites" element={<PortfolioSites />} />
        <Route path="/corporate-sites" element={<CorporateSites />} />
        
        {/* Branding Routes */}
        <Route path="/brand-strategy" element={<BrandStrategy />} />
        <Route path="/logo-design" element={<LogoDesign />} />
        <Route path="/visual-identity" element={<VisualIdentity />} />
        
        {/* Blog Routes */}
        <Route path="/seo-articles" element={<SEOArticles />} />
        <Route path="/technical-writing" element={<TechnicalWriting />} />
        <Route path="/creative-content" element={<CreativeContent />} />
        
        {/* Social Routes */}
        <Route path="/content-creation" element={<ContentCreation />} />
        <Route path="/ad-campaigns" element={<AdCampaigns />} />
        <Route path="/analytics" element={<Analytics />} />
        
        {/* Design Routes */}
        <Route path="/infographics" element={<Infographics />} />
        <Route path="/marketing-materials" element={<MarketingMaterials />} />
        <Route path="/user-interfaces" element={<UserInterfaces />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
