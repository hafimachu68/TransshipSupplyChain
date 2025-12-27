import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import oceanImg from '../assets/ocean.jpg';
import airImg from '../assets/air.jpg';
import landImg from '../assets/land.jpg';
import warehouseImg from '../assets/warehousing.jpg';
import fmcgImg from '../assets/FMCG1.png';
import retailImg from '../assets/Retail.png';
import hightechImg from '../assets/Hightech.png';
import automotiveImg from '../assets/Automotive.png';
import industrialImg from '../assets/Industrial.png';
import aerospaceImg from '../assets/Aerospace-and-defence.png';
import healthcareImg from '../assets/healthcare.png';
import eCommerceImg from '../assets/E-commerce.jpg';
import expressImg from '../assets/Express-and-parcel-delivery.jpg';
import airOceanImg from '../assets/Air-and-Ocean-Freight.jpg';
import contractImg from '../assets/Contract-Logistics-Services.jpg';
import supplyChainImg from '../assets/Supply-Chain-Optimization.jpg';
import customsImg from '../assets/Customs-and-Foreign-Trade.jpg';
import transportImg from '../assets/Transportation-Management.jpg';
import transportIm from '../assets/about2.jpg';


const Home = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>TransShip - Global Supply Chain Solutions</title>
                <meta name="description" content="TransShip provides authentic global logistics solutions including ocean freight, air freight, warehousing, and supply chain optimization." />
            </Helmet>

            {/* 1. Hero Slider (New Component) */}
            <Hero />



            {/* 2. Welcome Section (styled like requested layout) */}
            <section className="section-padding welcome-section">
                <div className="container welcome-grid">
                    <div className="welcome-left">
                        <div className="small-label">Welcome to</div>
                        <h2 className="brand-title">Transship</h2>
                        <div className="brand-sub">supply chain solutions</div>
                        <div className="spacer-35"></div>
                        <Link to="/about" className="btn-about desktop-only">About Us</Link>
                    </div>
                    <div className="welcome-right">
                        <div className="wpb_wrapper">
                            <h1 className="vcex-heading vcex-module wpex-text-2xl wpex-font-normal wpex-m-auto wpex-max-w-100 vcex-heading-plain wpex-block hidden-phone" style={{ fontSize: '2em', fontWeight: 300 }}>
                                <span className="vcex-heading-inner wpex-inline-block wpex-clr">WORLD CLASS LOGISTICS SERVICES</span>
                            </h1>
                            <div className="vcex-heading vcex-module wpex-text-2xl wpex-font-normal wpex-m-auto wpex-max-w-100 vcex-heading-plain wpex-block wpex-text-left hidden-phone vcex_694e2e3ca1bcb" style={{ fontWeight: 300, lineHeight: 1.2 }}>
                                <span className="vcex-heading-inner wpex-inline-block wpex-clr">Logistics Solutions Meet Operational Excellence</span>
                            </div>
                            <div className="vcex-spacing wpex-w-100 wpex-clear" style={{ height: 21 }}></div>
                            <div className="wpb_text_column wpb_content_element">
                                <div className="wpb_wrapper">
                                    <p>
                                        Transship supply chain solutions is a fast emerging solutions provider in global distribution and logistics industries, offering efficient and reliable means tailored to customer’s requirements. We leverage our vast experience in the Middle East and follow industry’s best practices to provide our clients with a very unique service from the point of origin till point of delivery. This allows our clients to attain resource optimization, process efficiencies and cost-effectiveness- the most critical components of any business. Transship supply chain solutions offers comprehensive services for integrated logistics, warehouse management, and freight forwarding. Our clients trust us for delivering efficient and effective supply chain services. From transportation to warehousing and inventory management to other value-added services, the company is equipped to cater to clients across sectors.
                                    </p>

                                </div>
                            </div>
                            <div className="vcex-spacing wpex-w-100 wpex-clear" style={{ height: 30 }}></div>
                            <Link to="/about" className="vcex-button theme-button inline visible-phone btn-about mobile-only" style={{ background: '#f22150', paddingTop: 10, paddingRight: 30, paddingBottom: 10, paddingLeft: 30, fontSize: 18, fontWeight: 300, borderRadius: 0 }}>
                                <span className="theme-button-inner">Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. We Will Deliver (Flags) */}
            <section className=" text-center ">
                <div className="container">
                    <h3 className="section-title-simple">We will Deliver</h3>
                    <div className="flags-row">
                        <div className="vc_single_image-wrapper vc_box_border_grey" style={{ width: '100%', textAlign: 'center', height: '80px', overflow: 'hidden' }}>
                            <img decoding="async" width="1870" height="80" src="https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined.png" className="vc_single_image-img attachment-full" alt="" title="css-sprite-combined" sizes="auto, (max-width: 1870px) 100vw, 1870px" srcSet="https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined.png 1870w, https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined-300x13.png 300w, https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined-1024x44.png 1024w, https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined-768x33.png 768w, https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined-1536x66.png 1536w" data-ll-status="loaded" loading="lazy" style={{ height: '80px', width: '100%', objectFit: 'contain', maxWidth: '1870px' }} />
                            <noscript>
                                <img loading="lazy" decoding="async" width="1870" height="80" src="https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined.png" className="vc_single_image-img attachment-full" alt="" title="css-sprite-combined" srcSet="https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined.png 1870w, https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined-300x13.png 300w, https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined-1024x44.png 1024w, https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined-768x33.png 768w, https://cubeslogistics.com/wp-content/uploads/2022/10/css-sprite-combined-1536x66.png 1536w" sizes="auto, (max-width: 1870px) 100vw, 1870px" style={{ height: '80px', width: '100%', objectFit: 'contain', maxWidth: '1870px' }} />
                            </noscript>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Core Services (User Images) */}
            <section className="section-padding vc_custom_1665352225215">
                <div className="container">
                    <div className="services-image-grid">
                        <div className="service-img-card">
                            <img src={oceanImg} alt="Ocean Freight" />
                            <div className="vcex-teaser-content" style={{ padding: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/ocean-freight-export/" title="Ocean Freight Export" className="wpex-no-underline">Ocean Freight</Link>
                                </h3>
                                <div className="vcex-teaser-text wpex-mt-10 wpex-last-mb-0  wpex-clr">
                                    <p>TransShip Supply Chain Solutions can help our customers choose the most reliable and cost-effective sailing routes from India to any destination worldwide.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-img-card">
                            <img src={airImg} alt="Air Cargo" />
                            <div className="vcex-teaser-content" style={{ padding: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/air-cargo/" title="Air Cargo" className="wpex-no-underline">Air Freight</Link>
                                </h3>
                                <div className="vcex-teaser-text wpex-mt-10 wpex-last-mb-0 wpex-clr">
                                    <p>It has always been our mission to develop Cubes International Logistics into a full-service freight forwarder and logistics service provider.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-img-card">
                            <img src={landImg} alt="Land Transportation" />
                            <div className="vcex-teaser-content" style={{ padding: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/land-transportation/" title="Land Transportation" className="wpex-no-underline">Land Transportation</Link>
                                </h3>
                                <div className="vcex-teaser-text wpex-mt-10 wpex-last-mb-0 wpex-clr">
                                    <p>With our extensive experience in logistics, our approach to transportation management goes beyond rate negotiations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-img-card">
                            <img src={warehouseImg} alt="Warehousing" />
                            <div className="vcex-teaser-content" style={{ padding: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/warehousing/" title="Warehousing" className="wpex-no-underline">Ocean Freight Import</Link>
                                </h3>
                                <div className="vcex-teaser-text wpex-mt-10 wpex-last-mb-0 wpex-clr">
                                    <p>Maintaining a well-balanced inventory is very important for manufacturers, distributors and retailers to control their stocks and costs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Vertical Market (vcex-style icons/grid) */}
            <section className="section-padding">
                <div className="container">
                    <h3 className="section-title-center">Services by vertical market</h3>
                    <div className="vcex-spacing wpex-w-100 wpex-clear" ></div>

                    <div className="vcex-grid-container vcex-module wpex-grid wpex-gap-20 wpex-grid-cols-1 wpex-md-grid-cols-7" style={{ gap: 5 }}>
                        <div className="vcex-module vcex-teaser vcex-teaser-two textcenter hvr hvr-shadow-radial wpex-surface-2 wpex-p-20 vc_custom_1667155066735" style={{ padding: 0, background: '#ffffff', borderRadius: 5 }}>
                            <div className="vcex-teaser-media wpex-mb-0">
                                <Link to="/services/by-vertical-market/fmcg/" title="Fast Moving Consumer Goods" className="wpex-no-underline">
                                    <img src={fmcgImg} alt="FMCG" width="250" height="250" />
                                </Link>
                            </div>
                            <div className="vcex-teaser-content" style={{ paddingTop: 40, paddingRight: 20, paddingBottom: 40, paddingLeft: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/by-vertical-market/fmcg/" className="wpex-no-underline">FMCG</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="vcex-module vcex-teaser vcex-teaser-two textcenter hvr hvr-shadow-radial wpex-surface-2 wpex-p-20 vc_custom_1667155074425" style={{ padding: 0, background: '#ffffff', borderRadius: 5 }}>
                            <div className="vcex-teaser-media wpex-mb-0">
                                <Link to="/services/by-vertical-market/retail/" title="Retail" className="wpex-no-underline">
                                    <img src={retailImg} alt="Retail" width="250" height="250" />
                                </Link>
                            </div>
                            <div className="vcex-teaser-content" style={{ paddingTop: 40, paddingRight: 20, paddingBottom: 40, paddingLeft: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/by-vertical-market/retail/" className="wpex-no-underline">Retail</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="vcex-module vcex-teaser vcex-teaser-two textcenter hvr hvr-shadow-radial wpex-surface-2 wpex-p-20 vc_custom_1667155081639" style={{ padding: 0, background: '#ffffff', borderRadius: 5 }}>
                            <div className="vcex-teaser-media wpex-mb-0">
                                <Link to="/services/by-vertical-market/hightech/" title="Hightech" className="wpex-no-underline">
                                    <img src={hightechImg} alt="Hightech" width="250" height="250" />
                                </Link>
                            </div>
                            <div className="vcex-teaser-content" style={{ paddingTop: 40, paddingRight: 20, paddingBottom: 40, paddingLeft: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/by-vertical-market/hightech/" className="wpex-no-underline">Hightech</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="vcex-module vcex-teaser vcex-teaser-two textcenter hvr hvr-shadow-radial wpex-surface-2 wpex-p-20 vc_custom_1667155095497" style={{ padding: 0, background: '#ffffff', borderRadius: 5 }}>
                            <div className="vcex-teaser-media wpex-mb-0">
                                <Link to="/services/by-vertical-market/automotive/" title="Automotive" className="wpex-no-underline">
                                    <img src={automotiveImg} alt="Automotive" width="250" height="250" />
                                </Link>
                            </div>
                            <div className="vcex-teaser-content" style={{ paddingTop: 40, paddingRight: 20, paddingBottom: 40, paddingLeft: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/by-vertical-market/automotive/" className="wpex-no-underline">Automotive</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="vcex-module vcex-teaser vcex-teaser-two textcenter hvr hvr-shadow-radial wpex-surface-2 wpex-p-20 vc_custom_1667155103499" style={{ padding: 0, background: '#ffffff', borderRadius: 5 }}>
                            <div className="vcex-teaser-media wpex-mb-0">
                                <Link to="/services/by-vertical-market/industrial/" title="Industrial" className="wpex-no-underline">
                                    <img src={industrialImg} alt="Industrial" width="250" height="250" />
                                </Link>
                            </div>
                            <div className="vcex-teaser-content" style={{ paddingTop: 40, paddingRight: 20, paddingBottom: 40, paddingLeft: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/by-vertical-market/industrial/" className="wpex-no-underline">Industrial</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="vcex-module vcex-teaser vcex-teaser-two textcenter hvr hvr-shadow-radial wpex-surface-2 wpex-p-20 vc_custom_1667155110881" style={{ padding: 0, background: '#ffffff', borderRadius: 5 }}>
                            <div className="vcex-teaser-media wpex-mb-0">
                                <Link to="/services/by-vertical-market/aerospace-and-defence/" title="Aerospace and Defence" className="wpex-no-underline">
                                    <img src={aerospaceImg} alt="Aerospace and Defence" width="250" height="250" />
                                </Link>
                            </div>
                            <div className="vcex-teaser-content" style={{ paddingTop: 40, paddingRight: 20, paddingBottom: 40, paddingLeft: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/by-vertical-market/aerospace-and-defence/" className="wpex-no-underline">Aerospace and Defence</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="vcex-module vcex-teaser vcex-teaser-two textcenter hvr hvr-shadow-radial wpex-surface-2 wpex-p-20 vc_custom_1667155120818" style={{ padding: 0, background: '#ffffff', borderRadius: 5 }}>
                            <div className="vcex-teaser-media wpex-mb-0">
                                <Link to="/services/by-vertical-market/healthcare/" title="Healthcare" className="wpex-no-underline">
                                    <img src={healthcareImg} alt="Healthcare" width="250" height="250" />
                                </Link>
                            </div>
                            <div className="vcex-teaser-content" style={{ paddingTop: 40, paddingRight: 20, paddingBottom: 40, paddingLeft: 20 }}>
                                <h3 className="vcex-teaser-heading wpex-heading wpex-text-lg" style={{ fontSize: '1.3em', fontWeight: 600 }}>
                                    <Link to="/services/by-vertical-market/healthcare/" className="wpex-no-underline">Healthcare</Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="vcex-spacing wpex-w-100 wpex-clear" style={{ height: 60 }}></div>
                </div>
            </section>

            {/* 7. Services by Activity (Image Grid - REDESIGNED) */}
            <section className="section-padding">
                <div className="container">
                    <h3 className="section-title-center">Services by activity</h3>

                    <div className="activity-grid-new">

                        {/* Left Column: E-commerce */}
                        <div className="act-col-left">
                            <div className="act-card-new act-lg">
                                <Link to="/services/by-activity/e-commerce/" className="act-link">
                                    <img src={eCommerceImg} alt="E Commerce" />
                                </Link>
                                <div className="act-content-new">
                                    <h3><Link to="/services/by-activity/e-commerce/">E commerce</Link></h3>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="act-col-right">

                            {/* Top: Express */}
                            <div className="act-row-top">
                                <div className="act-card-new act-wide">
                                    <Link to="/services/by-activity/express-and-parcel-delivery/" className="act-link">
                                        <img src={expressImg} alt="Express and Parcel Delivery" />
                                    </Link>
                                    <div className="act-content-new">
                                        <h3><Link to="/services/by-activity/express-and-parcel-delivery/">Express and parcel delivery</Link></h3>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom: 2-col split */}
                            <div className="act-row-bottom">
                                <div className="act-card-new act-sm">
                                    <Link to="/services/by-activity/air-and-ocean-freight/" className="act-link">
                                        <img src={airOceanImg} alt="Air and Ocean Freight" />
                                    </Link>
                                    <div className="act-content-new">
                                        <h3><Link to="/services/by-activity/air-and-ocean-freight/">Air and Ocean Freight</Link></h3>
                                    </div>
                                </div>
                                <div className="act-card-new act-sm">
                                    <Link to="/services/by-activity/contract-logistics-services/" className="act-link">
                                        <img src={contractImg} alt="Contract Logistics Services" />
                                    </Link>
                                    <div className="act-content-new">
                                        <h3><Link to="/services/by-activity/contract-logistics-services/">Contract Logistics Services</Link></h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="vcex-spacing wpex-w-100 wpex-clear" style={{ height: 30 }}></div>

                    {/* Second Block: Missing Items */}
                    <div className="activity-grid-new">

                        {/* Left Column: Supply Chain */}
                        <div className="act-col-left">
                            <div className="act-card-new ">
                                <Link to="/services/by-activity/supply-chain-optimization/" className="act-link">
                                    <img src={supplyChainImg} alt="Supply Chain Optimization" />
                                </Link>
                                <div className="act-content-new">
                                    <h3><Link to="/services/by-activity/supply-chain-optimization/">Supply Chain Optimization</Link></h3>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="act-col-right">

                            {/* <div className="act-row-top">
                                <div className="act-card-new act-wide">
                                    <Link to="/services/by-activity/customs-and-foreign-trade/" className="act-link">
                                        <img src={customsImg} alt="Customs and Foreign Trade" />
                                    </Link>
                                    <div className="act-content-new">
                                        <h3><Link to="/services/by-activity/customs-and-foreign-trade/">Customs and Foreign Trade</Link></h3>
                                    </div>
                                </div>
                            </div> */}

                     <div className="act-row-bottom">
                                <div className="act-card-new act-sm">
                                   <Link to="/services/by-activity/customs-and-foreign-trade/" className="act-link">
                                        <img src={customsImg} alt="Customs and Foreign Trade" />
                                    </Link>
                                    <div className="act-content-new">
                                        <h3><Link to="/services/by-activity/customs-and-foreign-trade/">Customs and Foreign Trade</Link></h3>
                                    </div>
                                </div>
                                <div className="act-card-new act-sm">
                                    <Link to="/services/by-activity/transportation-management/" className="act-link">
                                        <img src={transportImg} alt="Transportation Management" />
                                    </Link>
                                    <div className="act-content-new">
                                        <h3><Link to="/services/by-activity/transportation-management/">Transportation Management</Link></h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* 5. Leader in End to End */}
            <section className="section-padding bg-light">
                <div className="container leader-section">
                    <div className="leader-image">
                        <img src={transportIm} alt="Logistics Worker" />
                    </div>
                    <div className="leader-content">
                        <div className="leader-header">
                            <span className="bullet">●</span> SERVICES
                            <h2>LEADER IN END TO END SUPPLY CHAIN SOLUTIONS</h2>
                        </div>
                        <div className="leader-grid">
                            <div className="leader-item">
                                <h4>Distribution</h4>
                                <p>It is the methodology of getting products to consumers. It affects supply chain cost.</p>
                            </div>
                            <div className="leader-item">
                                <h4>Dedicated Transportation</h4>
                                <p>TransShip ensures dedicated transportation in every area using road, railway, air, ocean.</p>
                            </div>
                            <div className="leader-item">
                                <h4>Integrated Logistics</h4>
                                <p>Used to accelerate product delivery and customer service.</p>
                            </div>
                            <div className="leader-item">
                                <h4>Port Services</h4>
                                <p>Approach focused on internal logistics based on cargo handling services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <style>{`
        /* 2. Welcome */
        .welcome-grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 60px;
            color:black;
        }
            .wpb_wrapper p{
            color:gray;}
        /* Welcome left (brand block) */
        .small-label { font-size: 24px; font-weight: 300; margin-bottom: 6px; }
        .brand-title { font-size: 100px; font-weight: 500; line-height:1.05; margin: 0; }
        .brand-sub { font-size: 30px; font-weight: 300; margin-top: 6px; }
        .spacer-35 { height: 35px; }
        .spacer-30 { height: 30px; }
        .btn-about { background:#f22150; color:#fff; padding:10px 30px; font-size:18px; font-weight:300; text-decoration:none; border-radius:0; display:inline-block; }
        .desktop-only { display:inline-block; }
        .mobile-only { display:none; }
        .welcome-right h3 {
            font-size: 1.8rem;
            font-weight: 400;
            margin-bottom: 5px;
            color: #333;
        }
        .lead-title { font-size: 2rem; font-weight:300; margin:0 0 8px; }
        .lead-sub { font-size: 1.1rem; color:#777; margin-bottom:20px; }
        .lead-paragraph p { font-size: 0.95rem; color:#666; margin-bottom:15px; line-height:1.7; }

        /* 3. Flags (sprite image) */
        .section-title-simple {
            font-weight: 300;
            font-size: 2rem;
            margin-bottom: 40px;
            color:black;
            text-align:center;
        }
        .flags-row {
            text-align: center;
        }
        .vc_custom_1665352225215 {
            padding-top: 90px !important;
            background-color: #f2f2f2 !important;
        }

        /* 4. Services Image Grid */
        .services-image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }
        .service-img-card {
            background: #fff;
            border: 1px solid #000;
            border-radius: 0 0 10px 10px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(14,30,37,0.06);
            display: flex;
            flex-direction: column;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .service-img-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
        }
        .service-img-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 18px 30px rgba(14,30,37,0.12);
        }
        .service-img-card:hover img {
            transform: scale(1.03);
        }
        .service-content {
            padding: 18px 20px 24px;
            flex: 1 1 auto;
        }
        .service-content h4 {
            color: var(--secondary-navy);
            margin-bottom: 10px;
            font-size: 1.1rem;
        }
        .service-content p {
            font-size: 0.9rem;
            color: #777;
            line-height: 1.5;
        }

        /* 5. Leader Section */
        .leader-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }
        .leader-image img {
            width: 100%;
            border-radius: 4px;
        }
        .leader-header {
            margin-bottom: 30px;
        }
        .bullet { color: #e91e63; font-size: 0.8rem; vertical-align: middle; }
        .leader-header h2 {
            font-weight: 300;
            font-size: 2.2rem;
            margin-top: 10px;
            line-height: 1.2;
            color: #333;
        }
        .leader-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }
        .leader-item h4 {
            color: var(--primary-blue);
            margin-bottom: 10px;
            font-size: 1rem;
        }
        .leader-item p {
            font-size: 0.85rem;
            color: #777;
        }
        h3{
        color:black}
        /* 6. Vertical Market (vcex grid styles) */
        .vcex_694e2e3cb4ea3{font-size:30px!important}
        @media (max-width:767px){.vcex_694e2e3cb4ea3{font-size:25px!important}}
        .vcex-grid-container {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 5px;
            align-items: stretch;
            margin-top: 20px;
        }
        .vcex-module.vcex-teaser {
            background:#ffffff;
            border-radius:5px;
            padding:0;
            text-align:center;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            box-shadow: 0 6px 18px rgba(14,30,37,0.04);
            border: 1px solid #000; /* thin black border */
        }
        .vcex-module.vcex-teaser:hover{transform: translateY(-6px);box-shadow:0 20px 30px rgba(14,30,37,0.08)}
        .vcex-teaser-media img{display:block; margin:0 auto; max-width:250px; width:100%; height:auto}
        .vcex-teaser-content { padding-top:40px; padding-right:20px; padding-bottom:40px; padding-left:20px }
        .vcex-teaser-heading { margin:0 }
        .vcex-teaser-heading + .vcex-teaser-text { margin-top:10px; }
        @media (max-width:1200px){ .vcex-grid-container{grid-template-columns: repeat(4,1fr);} }
        @media (max-width:900px){ .vcex-grid-container{grid-template-columns: repeat(2,1fr);} }
        @media (max-width:480px){ .vcex-grid-container{grid-template-columns: 1fr;} }

        /* Responsive sizes for brand title */
        @media (max-width: 959px) {
            .brand-title { font-size: 70px; }
        }
        @media (max-width: 767px) {
            .brand-title { font-size: 60px; }
            .desktop-only { display:none; }
            .mobile-only { display:inline-block; }
            .welcome-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 479px) {
            .brand-title { font-size: 50px; }
        }
        /* small WPBakery-like override from provided markup */
        .vcex_694e2e3ca1bcb{font-size:24px!important}
        @media (max-width:767px){.vcex_694e2e3ca1bcb{font-size:24px!important}}
        /* legacy vertical-card removed — vcex teasers used above */

        

        /* 7. Activities */
        .section-title-center {
            text-align: center;
            font-weight: 300;
            font-size: 2rem;
            margin-bottom: 40px;
            color: #444;
        }
        .activity-image-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .act-card {
            position: relative;
            overflow: hidden;
        }
        .act-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }
        .act-card:hover img {
            transform: scale(1.05);
        }
        .big {
            grid-row: span 2;
            height: 100%;
        }
        .small {
            height: 250px;
            background: #fff;
            border: 1px solid #eee;
            display: flex;
            flex-direction: column;
        }
        .small img {
            height: 180px;
        }
        .act-content {
            padding: 20px;
        }
        .act-content h4 {
           margin: 0;
           font-weight: 500;
           color: #333;
        }
        .act-overlay {
            position: absolute;
            bottom: 30px;
            left: 30px;
            background: #fff;
            padding: 10px 20px;
            font-weight: 600;
            color: #333;
        }
        
        @media (max-width: 900px) {
            .welcome-grid, .leader-section, .activity-image-grid {
                grid-template-columns: 1fr;
            }
            .welcome-left { text-align: center; }
        }

        /* 7. Activities (New Grid) */
        /* 7. Activities (New Grid) */
        .activity-grid-new {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        /* Reusable Column Classes */
        .act-col-tall, .act-col-stack {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        /* Tall Column Image Height */
        .act-col-tall .act-card-new.act-lg .act-link {
            height: 100%;
        }
        .act-col-tall .act-card-new.act-lg img {
             min-height: 500px;
             height: 100%;
        }

        /* Stack Bottom Row */
        .act-row-bottom {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        /* New Full Width Row (Supply Chain) */
        .act-row-full {
             display: grid;
             grid-template-columns: 1fr 1fr;
             gap: 20px;
             align-items: stretch;
        }
        .act-row-full .act-card-new {
             height: 100%; 
        }
        
        /* Card Styles */
        .act-card-new {
            background: #fff;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            position: relative;
            display: flex;
            flex-direction: column;
        }
        .act-card-new:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .act-link {
            display: block;
            overflow: hidden;
            flex-grow: 1; /* Allows image to fill available space */
        }
        .act-card-new img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
        }
        .act-card-new:hover img {
            transform: scale(1.05);
        }
        
        .act-content-new {
            position: relative;
            padding: 20px;
            background: #fff;
            flex-shrink: 0;
            border-top: 1px solid #f0f0f0;
        }
        .act-content-new h3 {
            font-size: 1.3em;
            font-weight: 600;
            margin: 0;
            line-height: 1.2;
        }
        .act-content-new h3 a {
            color: #333;
            text-decoration: none;
            transition: color 0.2s;
        }
        .act-content-new h3 a:hover {
            color: #f22150;
        }
        
        /* Specific Sizing */
        .act-lg img {
            height: 660px; /* Base for tall, but overwritten by flex in column */
        }
        .act-wide img {
             height: 280px;
        }
        .act-sm img {
             height: 250px;
        }

        @media (max-width: 900px) {
            .activity-grid-new, .act-row-full {
                grid-template-columns: 1fr;
            }
            .act-row-bottom {
                /* On tablet, keep split? Or stack? */
                /* Snippet used col-sm-6 which stacks on phone only usually */
            }
            .act-lg img, .act-wide img, .act-sm img {
                height: auto;
                max-height: 300px;
                min-height: auto;
            }
        }
        @media (max-width: 600px) {
            .act-row-bottom {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </div>
    );
};

export default Home;
