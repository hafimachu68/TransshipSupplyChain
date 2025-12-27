import React from 'react';
import { Link } from 'react-router-dom';

const ServiceBlocks = () => {
    const services = [
        {
            id: 'fmcg',
            title: 'FMCG',
            icon: '🛒', // Using emoji for now, replace with SVGs later for exactness
            desc: 'Fast Moving Consumer Goods'
        },
        {
            id: 'retail',
            title: 'Retail',
            icon: '🛍️',
            desc: 'Tailored retail logistics'
        },
        {
            id: 'automotive',
            title: 'Automotive',
            icon: '🚗',
            desc: 'Automotive supply chains'
        },
        {
            id: 'healthcare',
            title: 'Healthcare',
            icon: '⚕️',
            desc: 'Pharma & Healthcare'
        },
        {
            id: 'industrial',
            title: 'Industrial',
            icon: '🏭',
            desc: 'Industrial machinery'
        }
    ];

    return (
        <section className="service-blocks-section">
            <div className="container">
                <div className="section-header">
                    <h2>Our Services</h2>
                    <p>Comprehensive logistics solutions across industries</p>
                </div>

                <div className="services-grid">
                    {services.map(service => (
                        <Link to={`/services#${service.id}`} key={service.id} className="service-card">
                            <div className="icon-wrapper">
                                <span className="service-icon">{service.icon}</span>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <span className="read-more">Read More &rarr;</span>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
                .service-blocks-section {
                    padding: 80px 0;
                    background-color: #f8f9fa;
                }
                .section-header {
                    text-align: center;
                    margin-bottom: 50px;
                }
                .section-header h2 {
                    font-size: 2.5rem;
                    color: var(--secondary-navy);
                    margin-bottom: 15px;
                }
                .section-header p {
                    color: #666;
                    font-size: 1.1rem;
                }
                
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 30px;
                }

                .service-card {
                    background: #fff;
                    padding: 30px 20px;
                    border-radius: 6px;
                    text-align: center;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    border-bottom: 3px solid transparent;
                }
                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    border-bottom-color: var(--accent-pink);
                }

                .icon-wrapper {
                    width: 70px;
                    height: 70px;
                    background-color: #f0f4f8;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                    transition: background-color 0.3s;
                }
                .service-card:hover .icon-wrapper {
                    background-color: var(--accent-pink);
                }
                .service-icon {
                    font-size: 30px;
                }
                
                .service-title {
                    font-size: 1.25rem;
                    color: var(--secondary-navy); /* Dark blue */
                    margin-bottom: 10px;
                    font-weight: 600;
                }
                .service-desc {
                    color: #777;
                    font-size: 0.95rem;
                    margin-bottom: 20px;
                    line-height: 1.5;
                }
                
                .read-more {
                    margin-top: auto;
                    color: var(--accent-pink);
                    font-weight: 600;
                    font-size: 0.9rem;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.3s;
                }
                .service-card:hover .read-more {
                    opacity: 1;
                    transform: translateY(0);
                }

            `}</style>
        </section>
    );
};

export default ServiceBlocks;
