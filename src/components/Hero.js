"use client";
import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import useIsMobile from '@/hooks/useIsMobile';

const Hero = () => {
    const isMobile = useIsMobile();

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div style={{ position: 'relative' }}>
            {/* Arka Plan, Metin, Button */}
            <section style={{ position: 'relative', width: '100%', height: isMobile ? '40vh' : '80vh' }}>
                {/* Arka Plan Görseli */}
                <img
                    src="/hero-bg.jpg"
                    alt="Hero Background"
                    style={{
                        position: 'absolute',
                        top: isMobile ? '0px' : '0', // mobilde biraz yukarı kaydır
                        left: 0,
                        width: '100%',
                        height: '100%',
                        //objectFit: 'cover',
                        objectPosition: isMobile ? 'top' : 'center',
                        zIndex: 0,
                    }}
                />

                {/* Metin ve Buton */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: isMobile ? 'center' : 'left',
                        padding: '0 clamp(1rem, 5vw, 4rem)',
                        gap: isMobile ? '1rem' : 0,
                    }}
                >
                    <div style={{ color: 'white' }}>
                        <h1 style={{ fontSize: 'clamp(1.3rem, 6vw, 4rem)', fontWeight: 'bold' }}>
                            Explore Türkiye
                        </h1>
                        <p style={{ fontSize: 'clamp(1rem, 5vw, 2.5rem)', fontWeight: 500 }}>
                            & Save in best places!
                        </p>
                    </div>

                    <button
                        style={{
                            backgroundColor: '#14b8a6',
                            color: 'white',
                            padding: isMobile ? '0.6rem 1rem' : '1rem 2.5rem',
                            fontSize: isMobile ? '0.8rem' : '1.1rem',
                            borderRadius: '10px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            border: 'none',
                            cursor: 'pointer',
                            alignSelf: isMobile ? 'center' : 'auto',
                        }}
                    >
                        <FaShoppingBag />
                        Buy Now!
                    </button>
                </div>
            </section>

            {/* Üyelik Kartları */}
            <div
                style={{
                    marginTop: isMobile ? '-40px' : '-70px',
                    zIndex: 20,
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: isMobile ? '0.75rem' : '1.5rem',
                    padding: '0 1rem',
                }}
            >
                {[
                    { title: 'Silver', color: '#9ca3af' },
                    { title: 'Gold', color: '#facc15' },
                    { title: 'Diamond', color: '#6366f1' },
                ].map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                            backgroundColor: item.color,
                            color: 'white',
                            padding: isMobile ? '0.75rem 1rem' : '1.2rem 3rem',
                            borderRadius: '0.7rem',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            //paddingLeft: 6,
                            //paddingTop: 6,
                            minWidth: isMobile ? 100 : 120,
                            transition: 'transform 0.2s ease-in-out',
                            transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                            cursor: 'pointer',
                        }}
                    >
                        <p style={{ fontSize: isMobile ? '1rem' : '1.5rem', fontWeight: 600 }}>{item.title}</p>
                        <p style={{ fontSize: isMobile ? '0.75rem' : '1rem', marginTop: '-5px' }}>Membership</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
