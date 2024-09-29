import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MoreIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import logoImage from '../../assets/images/mit_logo.jpeg';
import logoImage from '../../assets/images/mit_logo3.svg';
import HomeIcon from '@mui/icons-material/Home';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import './Navbar.css';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const location = useLocation(); // Get the current route

  const handleDropdownToggle = (option) => {
    setOpenDropdown(openDropdown === option ? null : option);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  const handleCareerClick = () => {
    navigate('/career');
  };

  const handleOptionSelect = (path) => {
    navigate(path); // Use navigate to go to the corresponding path
    setOpenDropdown(null); // Close the dropdown after selection
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const exploreOptions = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'Our Products', path: '/our-products' },
    { name: 'Happy Customers', path: '/happy-customers' },
  ];

  const dropdownOptions = {
    software: [
      { name: 'Web Applications', path: '/web-applications' },
      { name: 'Mobile Applications', path: '/mobile-applications' },
      { name: 'Enterprise Software', path: '/enterprise-software' },
    ],
    website: [
      { name: 'E-commerce', path: '/ecommerce' },
      { name: 'Portfolio Sites', path: '/portfolio-sites' },
      { name: 'Corporate Sites', path: '/corporate-sites' },
    ],
    branding: [
      { name: 'Brand Strategy', path: '/brand-strategy' },
      { name: 'Logo Design', path: '/logo-design' },
      { name: 'Visual Identity', path: '/visual-identity' },
    ],
    blog: [
      { name: 'SEO Articles', path: '/seo-articles' },
      { name: 'Technical Writing', path: '/technical-writing' },
      { name: 'Creative Content', path: '/creative-content' },
    ],
    social: [
      { name: 'Content Creation', path: '/content-creation' },
      { name: 'Ad Campaigns', path: '/ad-campaigns' },
      { name: 'Analytics', path: '/analytics' },
    ],
    design: [
      { name: 'Infographics', path: '/infographics' },
      { name: 'Marketing Materials', path: '/marketing-materials' },
      { name: 'User Interfaces', path: '/user-interfaces' },
    ],
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="appBar">
          <div className="toolbar">
            <img src={logoImage} alt="logo" className="logoImage" />
            {/* <span className="mitTypography">MIT</span> */}
            <div className="search">
              <div className="searchIconWrapper">
                <SearchIcon className="searchIcon" />
              </div>
              <input
                placeholder="Search"
                aria-label="search"
                className="styledInputBase"
              />
            </div>
            <div className="spacer" />
            <div className="desktopMenu">
              <button className="styledButton" onClick={handleHomeClick}>
                <HomeIcon style={{marginRight: '10px'}}/>
                <span className="styledTypography">Home</span>
              </button>
              {/* <button className="styledButton">
                <span className="styledTypography">Explore</span>
                <KeyboardArrowDownIcon />
              </button> */}
               {/* Explore Button with Dropdown */}
               <div className="styledButton exploreButton">
                <button
                  className="styledButton"
                  onClick={() => handleDropdownToggle('explore')}
                >
                  <span className="styledTypography">Explore</span>
                  <KeyboardArrowDownIcon />
                </button>
                {openDropdown === 'explore' && (
                  <div className="dropdownContent" ref={dropdownRef}>
                    {exploreOptions.map((option) => (
                      <div
                        className="dropdownItem"
                        key={option.name}
                        onClick={() => handleOptionSelect(option.path)}
                      >
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="styledButton">
                <span className="styledTypography">English</span>
                <LanguageIcon />
              </button>
              <button className="styledButton" onClick={handleCareerClick}>
                <span className="styledTypography">Career</span>
                <InterpreterModeIcon />
              </button>
              {/* <button className="styledButton">
                <span className="styledTypography">Join with us</span>
              </button> */}
              <button className="styledButton">
                <span className="styledTypography">Sign in</span>
              </button>
            </div>
            <button className="styledButton joinButton">Join</button>
            <div className="mobileMenuButton">
              <button
                aria-label="show more"
                aria-controls="primary-search-account-menu-mobile"
                aria-haspopup="true"
                className="styledIconButton"
                onClick={() => handleDropdownToggle('mobileMenu')}
              >
                <MoreIcon />
              </button>
              {openDropdown === 'mobileMenu' && (
                <div className="dropdownContent2 mobileDropdown" ref={dropdownRef}>
                  <button className="styledButton3" onClick={() => handleOptionSelect('/')}>
                    <span className="styledTypography3">Home</span>
                    <HomeIcon style={{marginTop: '-4px'}}/>
                  </button>
                  <button className="styledButton3" onClick={() => handleOptionSelect('/explore')}>
                    <span className="styledTypography3">Explore</span>
                    <KeyboardArrowDownIcon style={{marginTop: '-4px'}}/>
                  </button>
                  <button className="styledButton3" onClick={() => handleOptionSelect('/english')}>
                    <span className="styledTypography3">English</span>
                    <LanguageIcon style={{marginTop: '-4px'}}/>
                  </button>
                  <button className="styledButton3" onClick={() => handleOptionSelect('/english')}>
                    <span className="styledTypography3" onClick={handleCareerClick}>Career</span>
                    <InterpreterModeIcon style={{marginTop: '-4px'}}/>
                  </button>
                  <button className="styledButton3" onClick={() => handleOptionSelect('/join')}>
                    <span className="styledTypography3">Join with us</span>
                  </button>
                  <button className="styledButton3" onClick={() => handleOptionSelect('/signin')}>
                    <span className="styledTypography3">Sign in</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="subAppBar">
          <div className="scrollableContainer">
            <div className="subToolbar">
              {/* Software Development Dropdown */}
              <div className="subMenuOption">
                <button className="styledButton2" onClick={() => handleDropdownToggle('software')}>
                  Custom Software Development <KeyboardArrowDownIcon className="dropdownIcon" />
                </button>
                {openDropdown === 'software' && (
                  <div className="dropdownContent" ref={dropdownRef}>
                    {dropdownOptions.software.map(option => (
                      <div className="dropdownItem" key={option.name} onClick={() => handleOptionSelect(option.path)}>
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Website Development Dropdown */}
              <div className="subMenuOption">
                <button className="styledButton2" onClick={() => handleDropdownToggle('website')}>
                  Website Development <KeyboardArrowDownIcon className="dropdownIcon" />
                </button>
                {openDropdown === 'website' && (
                  <div className="dropdownContent" ref={dropdownRef}>
                    {dropdownOptions.website.map(option => (
                      <div className="dropdownItem" key={option.name} onClick={() => handleOptionSelect(option.path)}>
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Branding Dropdown */}
              <div className="subMenuOption">
                <button className="styledButton2" onClick={() => handleDropdownToggle('branding')}>
                  Founder-lead Branding <KeyboardArrowDownIcon className="dropdownIcon" />
                </button>
                {openDropdown === 'branding' && (
                  <div className="dropdownContent" ref={dropdownRef}>
                    {dropdownOptions.branding.map(option => (
                      <div className="dropdownItem" key={option.name} onClick={() => handleOptionSelect(option.path)}>
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Blog Writing Dropdown */}
              <div className="subMenuOption">
                <button className="styledButton2" onClick={() => handleDropdownToggle('blog')}>
                  Blog Writing <KeyboardArrowDownIcon className="dropdownIcon" />
                </button>
                {openDropdown === 'blog' && (
                  <div className="dropdownContent" ref={dropdownRef}>
                    {dropdownOptions.blog.map(option => (
                      <div className="dropdownItem" key={option.name} onClick={() => handleOptionSelect(option.path)}>
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Media Management Dropdown */}
              <div className="subMenuOption">
                <button className="styledButton2" onClick={() => handleDropdownToggle('social')}>
                  Social Media Management <KeyboardArrowDownIcon className="dropdownIcon" />
                </button>
                {openDropdown === 'social' && (
                  <div className="dropdownContent" ref={dropdownRef}>
                    {dropdownOptions.social.map(option => (
                      <div className="dropdownItem" key={option.name} onClick={() => handleOptionSelect(option.path)}>
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Graphic Design Dropdown */}
              <div className="subMenuOption">
                <button className="styledButton2" onClick={() => handleDropdownToggle('design')}>
                  Graphic Design <KeyboardArrowDownIcon className="dropdownIcon" />
                </button>
                {openDropdown === 'design' && (
                  <div className="dropdownContent" ref={dropdownRef}>
                    {dropdownOptions.design.map(option => (
                      <div className="dropdownItem" key={option.name} onClick={() => handleOptionSelect(option.path)}>
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}