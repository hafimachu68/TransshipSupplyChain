import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, link }) => {
    return (
        <div className="service-card">
            <div className="icon-wrapper">
                <span className="material-icons">{icon}</span> {/* Assuming we might add Material Icons later, or just text for now */}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link || '/services'} className="read-more">Read More &rarr;</Link>
            <style>{`
        .service-card {
            background: #fff;
            padding: 40px 30px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid #eee;
        }
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            border-color: var(--primary-blue);
        }
        .service-card h3 {
            margin: 20px 0 15px;
            font-size: 1.5rem;
            color: var(--secondary-navy);
        }
        .service-card p {
            color: var(--text-gray);
            margin-bottom: 20px;
            font-size: 0.95rem;
        }
        .read-more {
            color: var(--primary-blue);
            font-weight: 600;
            font-size: 0.9rem;
        }
        .icon-wrapper {
            width: 80px;
            height: 80px;
            line-height: 80px;
            background: var(--accent-light-blue);
            color: var(--primary-blue);
            font-size: 2rem;
            border-radius: 50%;
            margin: 0 auto;
        }
      `}</style>
        </div>
    );
};

export default ServiceCard;
