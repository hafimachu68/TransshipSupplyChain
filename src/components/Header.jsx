import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logo} alt="TransShip" style={{ height: '55px' }} />
        </Link>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
            <li
              className="dropdown-item"
              onMouseEnter={() => window.innerWidth > 992 && setIsServicesOpen(true)}
              onMouseLeave={() => window.innerWidth > 992 && setIsServicesOpen(false)}
            >
              <div
                className="dropdown-trigger"
                onClick={(e) => {
                  if (window.innerWidth <= 992) {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  }
                }}
              >
                <Link to="/services" onClick={handleLinkClick}>Services</Link>
                <span className="arrow" onClick={(e) => {
                  // Prevent link click, just toggle dropdown
                  e.preventDefault();
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}>▼</span>
              </div>

              <ul className={`dropdown-menu ${isServicesOpen ? 'show-dropdown' : ''}`}>
                <li className="nested-item">
                  <span className="nested-trigger">By Vertical Market <span className="arrow-right">▶</span></span>
                  <ul className="nested-menu">
                    <li><Link to="/services#fmcg" onClick={handleLinkClick}>FMCG</Link></li>
                    <li><Link to="/services#retail" onClick={handleLinkClick}>Retail</Link></li>
                    <li><Link to="/services#automotive" onClick={handleLinkClick}>Automotive</Link></li>
                    <li><Link to="/services#healthcare" onClick={handleLinkClick}>Healthcare</Link></li>
                    <li><Link to="/services#industrial" onClick={handleLinkClick}>Industrial</Link></li>
                    <li><Link to="/services#aerospace" onClick={handleLinkClick}>Aerospace</Link></li>
                  </ul>
                </li>
                <li className="nested-item">
                  <span className="nested-trigger">By Activity <span className="arrow-right">▶</span></span>
                  <ul className="nested-menu">
                    <li><Link to="/services#ecommerce" onClick={handleLinkClick}>E-commerce</Link></li>
                    <li><Link to="/services#express" onClick={handleLinkClick}>Express & Parcel</Link></li>
                    <li><Link to="/services#freight" onClick={handleLinkClick}>Air & Ocean Freight</Link></li>
                    <li><Link to="/services#contract" onClick={handleLinkClick}>Contract Logistics</Link></li>
                    <li><Link to="/services#customs" onClick={handleLinkClick}>Customs</Link></li>
                    <li><Link to="/services#supply-chain" onClick={handleLinkClick}>Supply Chain Optimization</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to="/careers" onClick={handleLinkClick}>Careers</Link></li>
            <li><Link to="/updates" onClick={handleLinkClick}>Updates</Link></li>
            <li><Link to="/booking" onClick={handleLinkClick}>Booking</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            <li><Link to="/tracking" className="tracking-btn" onClick={handleLinkClick}>Tracking</Link></li>
            <li className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
      <style>{`
        .header {
          background-color: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: var(--font-main);
          height: 80px;
          display: flex;
          align-items: center;
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 20px;
        }
        
        /* Mobile Toggle */
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }
        .bar {
          width: 25px;
          height: 3px;
          background-color: var(--secondary-navy);
          border-radius: 2px;
        }

        .nav-list {
          display: flex;
          gap: 30px;
          align-items: center;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .nav-list a:not(.tracking-btn):not(.dropdown-menu a) {
          font-weight: 500;
          color: var(--nav-link-color);
          font-size: 16px;
          transition: all 0.2s ease-in-out;
          text-decoration: none;
          padding: 10px 0;
          position: relative;
        }

        .nav-list a:not(.tracking-btn):not(.dropdown-menu a):hover,
        .dropdown-trigger:hover {
          color: var(--accent-pink);
        }

        /* Dropdown Base */
        .dropdown-item {
            position: relative;
            cursor: pointer;
        }
        .dropdown-trigger {
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .arrow {
            font-size: 0.5rem;
            color: #999;
            transition: transform 0.2s;
        }
        .dropdown-item:hover .arrow {
            transform: rotate(180deg);
            color: var(--accent-pink);
        }

        /* Main Dropdown Menu */
        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0; /* Align left with parent */
            margin-top: 15px; /* Use padding on parent instead? Or keep this */
            background: #fff;
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
            padding: 10px 0;
            display: none; /* Hidden by default, shown by hover or state */
            min-width: 220px;
            border-top: 4px solid var(--accent-pink);
            animation: fadeIn 0.2s ease-out forwards;
            border-radius: 0 0 4px 4px;
            list-style: none;
        }
        /* Desktop Hover: Show menu */
        @media(min-width: 993px) {
            .dropdown-item:hover .dropdown-menu {
                display: block;
            }
        }
        
        .dropdown-menu::before {
            content: '';
            position: absolute;
            top: -20px; /* Cover the gap */
            left: 0;
            width: 100%;
            height: 20px;
            background: transparent;
        }

        /* Nested Items */
        .nested-item {
            position: relative;
            padding: 10px 20px;
            cursor: pointer;
            transition: background 0.2s;
        }
        .nested-item:hover {
            background-color: #f9f9f9;
            color: var(--accent-pink);
        }
        .nested-trigger {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 15px;
            font-weight: 500;
            color: #333;
        }
        .nested-item:hover .nested-trigger {
            color: var(--accent-pink);
        }
        .arrow-right {
            font-size: 0.6rem;
            color: #999;
        }
        
        /* Nested Submenu */
        .nested-menu {
            display: none;
            position: absolute;
            top: 0;
            left: 100%; /* Show to the right */
            background: #fff;
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
            padding: 10px 0;
            min-width: 200px;
            list-style: none;
            border-radius: 4px;
            margin-left: 2px; /* Small gap */
        }
        
        /* Show nested menu on hover */
        @media(min-width: 993px) {
            .nested-item:hover .nested-menu {
                display: block;
                animation: fadeIn 0.2s ease-out forwards;
            }
        }

        .nested-menu li {
            display: block;
        }
        .nested-menu a {
            display: block;
            padding: 8px 20px;
            font-size: 14px;
            color: #666;
            text-decoration: none;
            transition: all 0.2s;
        }
        .nested-menu a:hover {
            color: var(--accent-pink) !important;
            background-color: #f9f9f9;
            padding-left: 25px;
        }

        /* Tracking Button - Exact Replica */
        .tracking-btn {
            background-color: var(--accent-pink);
            color: #fff !important;
            padding: 10px 24px !important;
            border-radius: 3px;
            text-transform: capitalize;
            font-size: 16px !important;
            font-weight: 600 !important;
            letter-spacing: 0.5px;
            box-shadow: 0 2px 5px rgba(219, 1, 97, 0.3);
            transition: all 0.3s;
        }
        .tracking-btn:hover {
            background-color: #b0014d;
            box-shadow: 0 4px 8px rgba(219, 1, 97, 0.4);
            transform: translateY(-1px);
        }

        .search-icon {
            cursor: pointer;
            color: var(--accent-pink);
            margin-left: 15px;
            display: flex;
            align-items: center;
            transition: transform 0.2s;
        }
        .search-icon:hover {
            transform: scale(1.1);
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Mobile Responsive Styles */
        @media (max-width: 992px) {
            .mobile-toggle {
                display: flex;
            }
            .nav {
                position: absolute;
                top: 80px;
                left: 0;
                width: 100%;
                background: #fff;
                box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease-in-out;
            }
            .nav.nav-open {
                max-height: 500px; /* Allow height for menu */
                padding-bottom: 20px;
                overflow-y: auto;
            }
            .nav-list {
                flex-direction: column;
                align-items: flex-start;
                padding: 20px;
                gap: 15px;
            }
            .nav-list li {
                width: 100%;
            }
            .nav-list a:not(.tracking-btn):not(.dropdown-menu a) {
                display: block;
                width: 100%;
                padding: 10px 0;
                border-bottom: 1px solid #eee;
            }
            .tracking-btn {
                display: block;
                text-align: center;
                margin-top: 10px;
            }
            
            /* Mobile Dropdown */
            .dropdown-menu {
                position: relative;
                top: 0;
                box-shadow: none;
                border-top: none;
                padding-left: 20px;
            }
            .show-dropdown {
                display: block;
            }
            .nested-menu {
                position: relative;
                left: 0;
                top: 0;
                box-shadow: none;
                min-width: 100%;
                display: block; /* Always show children for simplicity on mobile, or toggle */
            }
            .nested-item {
                padding: 5px 0;
            }
        }
      `}</style>
    </header>
  );
};

export default Header;
