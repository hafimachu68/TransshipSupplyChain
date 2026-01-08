import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>About Us - TransShip Logistics</title>
                <meta name="description" content="About TransShip Logistics - A fast-emerging solutions provider in global distribution and logistics." />
            </Helmet>

            {/* Hero Section */}
            <div className="about-hero">
                <div className="container">
                    <h1>About Us</h1>
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> <span>/</span> <span>About Us</span>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="about-intro-grid">
                        <div className="about-text">
                            <h2>TransShip Logistics</h2>
                            <p>
                                TransShip Logistics is a fast-emerging solutions provider in global distribution and logistics industries. We offer our customers a comprehensive range of logistics services and solutions.
                            </p>
                            <p>
                                At TransShip we believe that we have the heritage, experience, and the right set of tools to be the preferred choice of our customers because we understand what our customers’ needs are. We provide our customers with cost-effective, reliable, and timely services which lead to customer satisfaction.
                            </p>
                            <p>
                                We are capable of providing all kinds of logistic services to our customers under one roof. We have a team of highly-skilled and experienced professionals who are always ready to serve our customers. We have a strong network of agents and partners all over the world which helps us to provide our customers with the best possible services.
                            </p>
                        </div>
                        <div className="about-image">
                            <img src="https://cubeslogistics.com/wp-content/uploads/2022/10/about.jpg" alt="About TransShip" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CMD Message Section */}
            <section className="cmd-section">
                <div className="container">
                    <div className="cmd-content">
                        <h2 className="cmd-title">Chairman's Message</h2>
                        <div className="cmd-text">
                            <p>
                                "During the past years, we have transformed our business to be very much tuned to the market dynamics. We have shifted our focus from being a mere service provider to a solution provider. We believe that we have the right strategy, right people, and right culture to drive our business forward."
                            </p>
                            <p>
                                "Our aim is to pull together our worldwide strength to provide our customers with the best possible services. We are committed to our customers and we promise to deliver what we promise."
                            </p>
                        </div>
                        <div className="cmd-signature">
                            {/* Name removed */}
                            <span className="cmd-role">Chairman & Managing Director</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="team-header">
                        <h2>Our Management Team</h2>
                    </div>
                    <div className="team-grid">
                        {/* Member 1 */}
                        <div className="team-member">
                            <div className="team-img-wrapper">
                                <img src="https://cubeslogistics.com/wp-content/uploads/2022/10/t1.jpg" alt="Jimshad Abdu" className="team-img" />
                            </div>
                            <div className="team-info">
                                {/* Name removed */}
                                <p>Executive Director</p>
                            </div>
                        </div>
                        {/* Member 2 */}
                        <div className="team-member">
                            <div className="team-img-wrapper">
                                <img src="https://cubeslogistics.com/wp-content/uploads/2022/10/t2.jpg" alt="Sunil Kumar" className="team-img" />
                            </div>
                            <div className="team-info">
                                {/* Name removed */}
                                <p>Head Finance</p>
                            </div>
                        </div>
                        {/* Member 3 */}
                        <div className="team-member">
                            <div className="team-img-wrapper">
                                <img src="https://cubeslogistics.com/wp-content/uploads/2022/10/t3.jpg" alt="Harish Kumar" className="team-img" />
                            </div>
                            <div className="team-info">
                                {/* Name removed */}
                                <p>Manager Operations</p>
                            </div>
                        </div>
                        {/* Member 4 */}
                        <div className="team-member">
                            <div className="team-img-wrapper">
                                <img src="https://cubeslogistics.com/wp-content/uploads/2022/10/t4.jpg" alt="Nandu Rajeev" className="team-img" />
                            </div>
                            <div className="team-info">
                                {/* Name removed */}
                                <p>Head HR & Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Group Info Section */}
            <section className="section-padding" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="group-section">
                        <img src="https://cubeslogistics.com/wp-content/uploads/2022/10/logo.png" alt="TransShip International Group" className="group-logo" style={{ maxWidth: '200px' }} />
                        <div className="group-text">
                            <p>
                                <strong>TransShip Logistics is a division of TransShip International Group.</strong>
                            </p>
                            <p>
                                TransShip International partnership ventures operate in the fields of shipping, construction, food-Imports, general trading, travel, and other industries. The group is also active in financial investments and portfolio management across the region and globally. With the growth of Qatar as the commercial hub of the region, the group has emerged as a strong leader in all fields of its endeavour and is poised for even greater challenges and achievements that await it in the future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Mission Values */}
            <section className="section-padding bg-light-grey">
                <div className="container">
                    <div className="vmv-grid">
                        <div className="vmv-item">
                            <div className="vmv-icon">
                                {/* Placeholder Icon - Vision */}
                                <svg fill="#C51368" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>TransShip Logistics is a fast emerging solutions provider in global distribution and logistics industries, offering efficient and reliable means tailored to customer’s requirements. We leverage our vast experience in the Middle East and follow industry’s best practices to provide our clients with a very unique service from the point of origin till point of delivery. This allows our clients to attain resource optimization, process efficiencies and cost-effectiveness- the most critical components of any business. TransShip Logistics offers comprehensive services for integrated logistics, warehouse management, and freight forwarding. Our clients trust us for delivering efficient and effective supply chain services. From transportation to warehousing and inventory management to other value-added services, the company is equipped to cater to clients across sectors.</p>
                        </div>
                        <div className="vmv-item">
                            <div className="vmv-icon">
                                {/* Placeholder Icon - Mission */}
                                <svg fill="#C51368" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" /></svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>TransShip Logistics always makes sure to provide efficient, effective and reliable logistics solutions to result in total customer satisfaction. We aim to develop long-term business relationships with our clients. Our staff is well-trained, and value enhanced to ensure high performance through the highest degree of professionalism and integrity. We shall mould an organization composed of highly competent people and driven by superior technology.</p>
                        </div>
                        <div className="vmv-item">
                            <div className="vmv-icon">
                                {/* Placeholder Icon - Values */}
                                <svg fill="#C51368" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" /></svg>
                            </div>
                            <h3>Our Values</h3>
                            <p>We established longer and closer working relationships with our clients and supplier not only to provide immediate and reliable service but to continually exceed expectations and goals. We create commercial flows, import and export products, arranging and manage international projects with our partners. Supported by our network, we can integrate all these functions with our fruitful experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Concerns Recommendations */}
            <section className="concerns-section">
                <div className="container">
                    <div className="concerns-grid">
                        <div className="concern-col">
                            <h4>We Recommend</h4>
                            <ul className="concern-list">
                                <li><a href="#">Logistics</a></li>
                                <li><a href="#">Transportation</a></li>
                                <li><a href="#">Warehouse</a></li>
                                <li><a href="#">Consulting</a></li>
                                <li><a href="#">Management</a></li>
                            </ul>
                        </div>
                        <div className="concern-col">
                            <h4>Industries</h4>
                            <ul className="concern-list">
                                <li><a href="#">Construction</a></li>
                                <li><a href="#">Maintenance</a></li>
                                <li><a href="#">Engineering</a></li>
                                <li><a href="#">Contracting</a></li>
                                <li><a href="#">Cleaning</a></li>
                            </ul>
                        </div>
                        <div className="concern-col">
                            <h4>Our Concerns</h4>
                            <ul className="concern-list">
                                <li><a href="#">TransShip Logistics</a></li>
                                <li><a href="#">TransShip Trading</a></li>
                                <li><a href="#">TransShip Contracting</a></li>
                                <li><a href="#">TransShip Holidays</a></li>
                            </ul>
                        </div>
                        <div className="concern-col">
                            <h4>Quick Links</h4>
                            <ul className="concern-list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
