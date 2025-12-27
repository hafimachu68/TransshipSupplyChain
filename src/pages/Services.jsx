import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>Our Services - TransShip Logistics</title>
                <meta name="description" content="Explore our comprehensive logistics services: Ocean Freight, Air Freight, Land Transport, and Warehousing." />
            </Helmet>
            <div className="page-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive Logistics Solutions</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="services-intro text-center">
                        <p style={{ maxWidth: '800px', margin: '0 auto 50px' }}>At TransShip, we offer a wide range of logistics services designed to meet the unique needs of your business. From small parcels to massive industrial equipment, we have the expertise to move it all.</p>
                    </div>
                    <div className="services-grid-large">
                        <ServiceCard
                            title="Ocean Freight"
                            description="Full spectrum of ocean freight services including FCL (Full Container Load) and LCL (Less than Container Load). We partner with major shipping lines to offer competitive rates and flexible schedules."
                            icon="🌊"
                        />
                        <ServiceCard
                            title="Air Freight"
                            description="When speed is critical, our air freight solutions ensure your cargo reaches its destination on time. handling everything from urgent documents to heavy cargo with speed and security."
                            icon="✈️"
                        />
                        <ServiceCard
                            title="Land Transportation"
                            description="Reliable road and rail transport tailored to your specific requirements. We offer domestic and cross-border tracking solutions for full truckload (FTL) and less than truckload (LTL)."
                            icon="🚛"
                        />
                        <ServiceCard
                            title="Warehousing & Distribution"
                            description="Secure storage solutions and efficient distribution networks to streamline your inventory management. Our facilities are equipped with modern technology."
                            icon="🏭"
                        />
                        <ServiceCard
                            title="Customs Brokerage"
                            description="Expert guidance through the complex world of customs regulations. We ensure your shipments comply with all local laws to avoid delays and penalties."
                            icon="📋"
                        />
                        <ServiceCard
                            title="Project Cargo"
                            description="Specialized handling for oversized, heavy, or high-value equipment. Our project cargo team plans every detail of the move to ensure safety and efficiency."
                            icon="🏗️"
                        />
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
                .services-grid-large {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 40px;
                }
            `}</style>
        </div>
    );
};

export default Services;
