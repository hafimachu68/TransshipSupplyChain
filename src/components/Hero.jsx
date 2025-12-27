import React, { useState } from 'react';
import Slider from 'react-slick';
import dubaiImg from '../assets/log-dubai.jpg';

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
        afterChange: (i) => setActiveSlide(i),
    };

    const slides = [
        {
            id: 1,
            image: null,
            title: <>Player in accelerating <br />supply chain management</>,
            subtitle: '',
            buttonText: 'Read More',
            link: '/about',
            type: 'ship'
        },
        {
            id: 2,
            image: dubaiImg,
            title: <>Accelerating Dubai’s<br /> supply chain <br />management system</>,
            subtitle: '',
            buttonText: 'Read More',
            link: '/about',
            type: 'standard'
        }
    ];

    return (
        <section className="hero-section">
            <Slider {...settings}>
                {slides.map((slide, idx) => (
                    <div key={slide.id} className={`hero-slide ${idx === activeSlide ? 'is-active' : ''}`}>
                        <div
                            className={`hero-image ${slide.type === 'ship' ? 'ship-motion' : 'zoom-effect'}`}
                        >
                            {/* background layer (separate so transforms don't affect content) */}
                            {slide.image && (
                                <div className="bg-layer" style={{ backgroundImage: `url(${slide.image})` }} />
                            )}
                            {/* For 'ship' slide render a muted autoplaying YouTube iframe as background. */}
                            {slide.type === 'ship' && (
                                <div className="hero-video-wrap" aria-hidden="true">
                                    <iframe
                                        title="Hero ship video"
                                        src={`https://www.youtube-nocookie.com/embed/_IRNR8VlPNI?autoplay=1&mute=1&controls=0&loop=1&playlist=_IRNR8VlPNI&playsinline=1&rel=0&showinfo=0&modestbranding=1`}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen"
                                    />
                                </div>
                            )}

                            <div className={`hero-tags ${idx === activeSlide ? 'is-active' : ''}`} aria-hidden="true">
                                <div className="hero-tag tag1">LOGISTICS</div>
                                <div className="hero-tag tag2">WAREHOUSING</div>
                                <div className="hero-tag tag3">SHIPPING</div>
                            </div>

                            {/* Animated headline layer (desktop) */}
                            <div className={`hero-layer ${idx === activeSlide ? 'is-active' : ''}`} role="heading" aria-level={1}>
                                <div className="hero-layer-inner">{slide.title}</div>
                                <a href={slide.link} className="hero-layer-cta">{slide.buttonText}</a>
                            </div>

                            <div className="overlay"></div>
                            <div className="container hero-content">
                                <div className="hero-text-wrapper">
                                    <h1 className="hero-title">{slide.title}</h1>
                                    <a href={slide.link} className="hero-btn">{slide.buttonText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: #000;
        }
        .hero-slide {
            position: relative;
            width: 100%;
            height: 700px;
        }
        .hero-image {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
        }

        .bg-layer {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            z-index: 0;
            will-change: transform;
        }

        /* Ship slide: video background + subtle float */
        .ship-motion {
            position: relative;
            transform-origin: center center;
        }

        .hero-video-wrap {
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
            pointer-events: none;
            background: transparent;
        }

        .hero-video-wrap iframe {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 160%;
            height: 100%;
            transform: translate(-50%, -50%) scale(1.05);
            border: 0;
            will-change: transform;
            animation: shipFloat 8s ease-in-out infinite;
        }

        .zoom-effect .bg-layer {
            animation: kenBurns 20s infinite alternate;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            /* Dark gradient from left */
            background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%);
        }

        /* Animated headline layer (desktop) */
        .hero-layer {
            position: absolute;
            z-index: 3;
            left: 30px;
            top: 120px; /* start near top/left of image */
            transform: translateY(0);
            pointer-events: none;
            white-space: nowrap;
            animation: none;
        }

        .hero-layer.is-active { }

        .hero-layer-inner {
            font-family: 'Exo', sans-serif;
            color: #fff;
            text-decoration: none;
            white-space: nowrap;
            line-height: 48px;
            text-shadow: rgba(0, 0, 0, 0.25) 0px 0px 8px;
            letter-spacing: 0px;
            font-weight: 300;
            font-size: 48px;
            opacity: 0;
            transform: translateX(-30px);
        }

        /* Hide the small-screen inline wrapper on large screens (we show the layer instead) */
        .hero-text-wrapper { display: none; }

        /* Small label/tag layers */
        .hero-tags {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 4;
            pointer-events: none;
        }
        .hero-tag {
            position: absolute;
            font-family: Montserrat, sans-serif;
            color: #fff;
            text-decoration: none;
            white-space: nowrap;
            line-height: 21px;
            letter-spacing: 14px;
            font-weight: 400;
            font-size: 14px;
            text-transform: uppercase;
            opacity: 0;
            padding: 6px 14px;
            border-radius: 4px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }
        .hero-tags.is-active .hero-tag { animation: tagIn 0.9s forwards ease-out; }
        /* Position tags relative to the slide (px tuned for 700px height) */
        .hero-tag.tag1 { left: 3px; top: 493px; animation-delay: 0.4s; }
        .hero-tag.tag2 { left: 346px; top: 493px; animation-delay: 0.8s; }
        .hero-tag.tag3 { left: 723px; top: 493px; animation-delay: 1.2s; }

        @keyframes tagIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        /* Title and button entrance animations sequence */
        @keyframes titleIn {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes buttonIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* When slide becomes active, animate title then button then tags */
        .hero-layer.is-active .hero-layer-inner { animation: titleIn 0.6s cubic-bezier(.2,.9,.3,1) forwards; }
        .hero-layer.is-active .hero-layer-cta { animation: buttonIn 0.55s cubic-bezier(.2,.9,.3,1) 0.6s forwards; }

        /* Tags sequence (staggered after button) */
        .hero-tags.is-active .hero-tag.tag1 { animation: tagIn 0.6s cubic-bezier(.2,.9,.3,1) 1.25s forwards; }
        .hero-tags.is-active .hero-tag.tag2 { animation: tagIn 0.6s cubic-bezier(.2,.9,.3,1) 1.45s forwards; }
        .hero-tags.is-active .hero-tag.tag3 { animation: tagIn 0.6s cubic-bezier(.2,.9,.3,1) 1.65s forwards; }

        /* spacing between title and button */
        .hero-layer-inner { margin-bottom: 18px; }
        .hero-layer-cta { margin-bottom: 18px; }

        .hero-content {
            position: relative;
            z-index: 2; /* keep above bg/video */
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 0;
        }

        .hero-text-wrapper {
            max-width: 800px;
            animation: fadeInUp 1s ease-out;
            padding-left: 15px;
        }

        .hero-title {
            color: #fff;
            font-family: 'Exo', sans-serif;
            font-size: 48px;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 20px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            letter-spacing: -1px;
            text-transform: none;
            text-align: left;
        }

        /* Pink Accent Button */
        .hero-btn {
            display: inline-block;
            background-color: var(--accent-pink); /* #db0161 */
            color: #fff;
            padding: 14px 40px;
            font-size: 16px;
            font-weight: 600;
            text-transform: capitalize;
            border: none;
            border-radius: 3px;
            transition: all 0.3s;
            text-decoration: none;
            font-family: 'Exo', sans-serif;
            box-shadow: 0 4px 15px rgba(219, 1, 97, 0.4);
        }

        .hero-btn:hover {
            background-color: #b0014d;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(219, 1, 97, 0.6);
            color: #fff;
        }

        /* Dots */
        .slick-dots {
            bottom: 30px;
        }
        .slick-dots li button:before {
            font-size: 10px;
            color: #ccc;
            opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
            color: var(--accent-pink); /* Pink dots */
            opacity: 1;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes kenBurns {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }

        @keyframes shipFloat {
            0% {
                transform: translate(-50%, -50%) translateX(-18px) translateY(0) rotate(-0.35deg) scale(1);
            }
            25% {
                transform: translate(-50%, -50%) translateX(0) translateY(-6px) rotate(0.25deg) scale(1.02);
            }
            50% {
                transform: translate(-50%, -50%) translateX(18px) translateY(0) rotate(-0.2deg) scale(1.01);
            }
            75% {
                transform: translate(-50%, -50%) translateX(0) translateY(6px) rotate(0.2deg) scale(1.02);
            }
            100% {
                transform: translate(-50%, -50%) translateX(-18px) translateY(0) rotate(-0.35deg) scale(1);
            }
        }

        @keyframes layerIn {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        /* CTA inside layer - styled like requested rs-layer button */
        .hero-layer-cta {
            display: inline-block;
            z-index: 14;
            background-color: rgba(0, 0, 0, 0);
            font-family: Roboto, sans-serif;
            height: auto;
            width: auto;
            color: rgb(255, 255, 255);
            text-decoration: none;
            white-space: nowrap;
            min-height: 0px;
            min-width: 0px;
            max-height: none;
            max-width: none;
            text-align: left;
            line-height: 38px;
            letter-spacing: 0px;
            font-weight: 300;
            font-size: 16px;
            border-color: rgba(255, 255, 255, 0.35);
            border-style: solid;
            border-width: 1px;
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 8px;
            padding-bottom: 8px;
            transform-origin: 50% 50%;
            opacity: 0;
            transform: translate(0px, 0px);
            visibility: visible;
            border-radius: 0px;
            pointer-events: auto;
        }
        .hero-layer.is-active .hero-layer-cta { animation: ctaIn 0.9s 0.4s forwards ease-out; }
        .hero-layer-cta:hover { background-color: rgba(0,0,0,0); border-color: rgba(255,255,255,0.75); }
        @keyframes ctaIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 991px) {
            .hero-title { font-size: 40px; }
            .hero-slide { height: 500px; }
            .hero-layer { left: 15px; top: 80px; transform: translateY(0); }
            .hero-layer-inner { font-size: 40px; line-height: 48px; white-space: normal; }
            .hero-tag.tag1 { left: 3px; top: 441px; }
            .hero-tag.tag2 { left: 323px; top: 441px; }
            .hero-tag.tag3 { left: 623px; top: 441px; }
        }
        @media (max-width: 768px) {
            .hero-title { font-size: 40px; }
            .hero-slide { height: 450px; }
            .hero-btn { padding: 10px 25px; font-size: 15px; }
            /* On smaller screens show the inline content and hide the absolute layer */
            .hero-layer { display: none; }
            .hero-text-wrapper { display: block; }
            .hero-layer-inner { font-size: 40px; line-height: 50px; }
            /* hide tags on narrow screens to avoid overlap */
            .hero-tags { display: none; }
        }
        @media (min-width: 1200px) {
            /* keep left-aligned on wide screens but slightly larger text */
            .hero-layer { left: 30px; }
            .hero-layer-inner { font-size: 56px; line-height: 64px; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
