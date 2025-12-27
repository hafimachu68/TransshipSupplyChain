import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="TransShip" style={{ height: '55px' }} />
        </Link>

        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li
              className="dropdown-item"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to="/services" className="dropdown-trigger">
                Services <span className="arrow">▼</span>
              </Link>
              {isServicesOpen && (
                <ul className="dropdown-menu">
                  <li className="nested-item">
                    <span className="nested-trigger">By Vertical Market <span className="arrow-right">▶</span></span>
                    <ul className="nested-menu">
                      <li><Link to="/services#fmcg">FMCG</Link></li>
                      <li><Link to="/services#retail">Retail</Link></li>
                      <li><Link to="/services#automotive">Automotive</Link></li>
                      <li><Link to="/services#healthcare">Healthcare</Link></li>
                      <li><Link to="/services#industrial">Industrial</Link></li>
                      <li><Link to="/services#aerospace">Aerospace</Link></li>
                    </ul>
                  </li>
                  <li className="nested-item">
                    <span className="nested-trigger">By Activity <span className="arrow-right">▶</span></span>
                    <ul className="nested-menu">
                      <li><Link to="/services#ecommerce">E-commerce</Link></li>
                      <li><Link to="/services#express">Express & Parcel</Link></li>
                      <li><Link to="/services#freight">Air & Ocean Freight</Link></li>
                      <li><Link to="/services#contract">Contract Logistics</Link></li>
                      <li><Link to="/services#customs">Customs</Link></li>
                      <li><Link to="/services#supply-chain">Supply Chain Optimization</Link></li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/updates">Updates</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/tracking" className="tracking-btn">Tracking</Link></li>
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
            display: block; /* Vertical list */
            min-width: 220px;
            border-top: 4px solid var(--accent-pink);
            animation: fadeIn 0.2s ease-out forwards;
            border-radius: 0 0 4px 4px;
            list-style: none;
        }
        /* Bridge to keep hover active */
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
        .nested-item:hover .nested-menu {
            display: block;
            animation: fadeIn 0.2s ease-out forwards;
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

        @media (max-width: 992px) {
            .nav-list { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
