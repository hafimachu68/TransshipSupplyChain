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
                                <h3>Saudi Arabia Office</h3>
                                <p>TRANSSHIP SUPPLY CHAIN SOLUTION</p>
                                <p>BUILDING NO:7053</p>
                                <p>KING FAHAD BIN ABDUL AZIZ ROAD</p>
                                <p>AL KHOBAR SAUDI ARABIA</p>
                                <p>POSTAL CODE :34432</p>
                                <p className="phone"><strong>Mob:</strong> +966 55 967 0080</p>
                                <p className="phone"><strong>Mob:</strong> +966 50 710 5150</p>
                            </div>

                            <div className="info-item">
                                <h3>India Office</h3>
                                <p>TRANSSHIP SUPPLY CHAIN SOLUTION</p>
                                <p>SECOND FLOOR</p>
                                <p>HILITE BUSINESS PARK</p>
                                <p>KOZHIKODE KERALA SOUTH INDIA</p>
                                <p>POSTAL CODE:673014</p>
                                <p className="phone"><strong>Mob:</strong> +91 99956 04757</p>
                                <p className="phone"><strong>Mob:</strong> +91 80866 76409</p>
                            </div>

                            <div className="info-item">
                                <h3>Email</h3>
                                <p><a href="mailto:info@transship.co.in">info@transship.co.in</a></p>
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
