import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Column 1: Group Companies */}
        <div className="footer-col">
          <ul className="footer-list">
            <li>TransShip International Developers L.L.P.</li>
            <li>TransShip Designs Pvt.Ltd</li>
            <li>TransShip International Trading Pvt.Ltd</li>
            <li>TransShip Trading & Contracting W.L.L.</li>
            <li>Cascade Foodstuff Trading L.L.C</li>
            <li>TransShip Entertainments</li>
          </ul>
        </div>

        {/* Column 2: Services 1 */}
        <div className="footer-col">
          <ul className="footer-list">
            <li><Link to="/services">Ocean Freight Export</Link></li>
            <li><Link to="/services">Ocean Freight Import</Link></li>
            <li><Link to="/services">Air Freight & Ocean Freight</Link></li>
            <li><Link to="/services">Land Transportation</Link></li>
            <li><Link to="/services">Transportation Management</Link></li>
            <li><Link to="/services">Supply Chain Optimization</Link></li>
          </ul>
        </div>

        {/* Column 3: Services 2 */}
        <div className="footer-col">
          <ul className="footer-list">
            <li><Link to="/services">Distribution</Link></li>
            <li><Link to="/services">Dedicated transportation</Link></li>
            <li><Link to="/services">Integrated logistics</Link></li>
            <li><Link to="/services">Port services</Link></li>
            <li><Link to="/services">Real estate</Link></li>
            <li><Link to="/services">Contract Logistics</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact/Logo */}
        <div className="footer-col brand-col">
          <img src={logo} alt="TransShip" style={{ height: '50px', marginBottom: '15px' }} />
          <p className="group-text">TRANS-SHIP<br />INTERNATIONAL GROUP</p>

          <div className="contact-info">
            <p>A TransShip International Group Concern</p>
            <p>info@transship-logistics.com</p>
            <p>Toll-Free 1800-890-5995 (INTL)</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <div className="logo-small">
            <img src={logo} alt="TransShip" style={{ height: '30px' }} />
            <span>&copy; {new Date().getFullYear()} TransShip international logistics</span>
          </div>
          <div className="rights">
            <span>All Rights Reserved</span>
            <div className="socials">
              <span>f</span> <span>in</span> <span>📸</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #fff;
          color: #555;
          padding: 60px 0 0;
          font-size: 0.85rem;
          border-top: 1px solid #eee;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          padding-bottom: 50px;
        }
        .footer-list {
            list-style: none;
            padding: 0;
        }
        .footer-list li {
            margin-bottom: 8px;
            color: #666;
        }
        .footer-list li a {
            color: #666;
            text-decoration: none;
            transition: color 0.3s;
        }
        .footer-list li a:hover {
            color: var(--primary-blue);
        }
        .brand-col {
            text-align: right;
        }
        .group-text {
            color: #e4a200; /* Goldish color from screenshol */
            font-weight: bold;
            line-height: 1.2;
            margin-bottom: 15px;
        }
        .contact-info p {
            margin-bottom: 5px;
            color: #888;
        }

        .footer-bottom {
          padding: 20px 0;
          border-top: 1px solid #eee;
        }
        .bottom-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }
        .logo-small {
            display: flex;
            align-items: center;
            gap: 15px;
            color: #888;
        }
        .rights {
            text-align: right;
            color: #888;
        }
        .socials {
            margin-top: 5px;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            color: var(--primary-blue);
        }
        
        @media (max-width: 768px) {
            .brand-col, .rights { text-align: left; }
            .socials { justify-content: flex-start; }
            .bottom-flex { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
