import React from 'react';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>Contact Us - TransShip Logistics</title>
                <meta name="description" content="Get in touch with TransShip for a quote or inquiry. We are here to help with all your logistics needs." />
            </Helmet>
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We're Here to Help</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>Have a question or need a quote? Reach out to our team of logistics experts.</p>

                            <div className="info-item">
                                <h3>Headquarters</h3>
                                <p>123 Logistics Way, Transport City, TC 90210</p>
                            </div>
                            <div className="info-item">
                                <h3>Email</h3>
                                <p>info@transship.com</p>
                            </div>
                            <div className="info-item">
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className="info-item">
                                <h3>Working Hours</h3>
                                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                <p>Sat: 9:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                        <div className="contact-form-container">
                            <ContactForm />
                        </div>
                    </div>
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
                .contact-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                }
                .info-item {
                    margin-bottom: 30px;
                }
                .info-item h3 {
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                    color: var(--primary-blue);
                }
                @media (max-width: 768px) {
                    .contact-wrapper {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;
