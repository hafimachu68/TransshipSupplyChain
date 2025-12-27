import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>About Us - TransShip Logistics</title>
                <meta name="description" content="Learn about TransShip's history, mission, and vision as a leading global logistics partner." />
            </Helmet>
            <div className="page-header">
                <div className="container">
                    <h1>About TransShip</h1>
                    <p>Your Global Logistics Partner</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2>Who We Are</h2>
                            <p>TransShip is a premier global logistics provider, dedicated to facilitating international trade through innovative supply chain solutions. Founded on the principles of reliability and integrity, we have grown into a trusted partner for businesses of all sizes.</p>
                            <p>Our team of experienced professionals understands the complexities of modern logistics. We leverage cutting-edge technology and a vast network of partners to ensure your cargo reaches its destination safely, on time, and within budget.</p>
                        </div>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Countries Served</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10k+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="mission-vision">
                        <div className="mv-card">
                            <h3>Our Mission</h3>
                            <p>To provide exceptional logistics services that empower our customers to succeed globally, by delivering efficiency, transparency, and value in every interaction.</p>
                        </div>
                        <div className="mv-card">
                            <h3>Our Vision</h3>
                            <p>To be the world’s most trusted supply chain partner, recognized for our commitment to excellence, sustainability, and customer satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding text-center">
                <div className="container">
                    <h2>Ready to Move Your Cargo?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 30px' }}>Contact our team today for a personalized quote and see how TransShip can streamline your logistics.</p>
                    <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
                </div>
            </section>

            <style>{`
        .page-header {
            background-color: var(--secondary-navy);
            color: #fff;
            padding: 80px 0;
            text-align: center;
        }
        .page-header h1 {
            color: #fff;
            margin-bottom: 10px;
        }
        .about-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 50px;
            align-items: center;
        }
        .about-stats {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }
        .stat-item {
            background: var(--primary-blue);
            color: #fff;
            padding: 30px;
            text-align: center;
            border-radius: 8px;
        }
        .stat-number {
            display: block;
            font-size: 2.5rem;
            font-weight: 700;
        }
        .stat-label {
            font-size: 1rem;
            opacity: 0.9;
        }
        .mission-vision {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }
        .mv-card {
            background: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            text-align: center;
        }
        .bg-light {
            background-color: var(--bg-light);
        }
        @media (max-width: 768px) {
            .about-grid, .mission-vision {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </div>
    );
};

export default About;
