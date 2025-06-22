'use client';
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';

const Footer = () => {
    const isMobile = useIsMobile();

    return (
        <footer
            style={{
                justifyContent: 'space-around',
                backgroundColor: '#fff',
                padding: '40px 20px',
                display: 'flex',
                flexDirection: 'row',
                borderTop: '1px solid #ddd',
                gap: '30px',
                marginBottom: isMobile? '40px' : '0px',
            }}
        >
            {/* Sol kısım */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    gap: '20px',
                    alignItems: 'flex-start',
                }}
            >
                {/* Menü Linkleri */}
                <div
                    style={{
                        display: 'flex',
                        gap: '30px',
                        flexWrap: 'wrap',
                        fontSize: '1rem',
                        color: '#333',
                        fontWeight: 500,
                    }}
                >
                    <a href="#">About Us</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Contact</a>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '20px',
                        alignItems: 'center',
                        paddingTop: '20px',
                        fontSize: '0.9rem',
                        color: '#666',
                    }}
                >
                    <p style={{ maxWidth: '800px', margin: 0 }}>
                        Copyright © 2025. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                        libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>
            </div>

            {/* Sağ kısım */}

            {/* Sosyal Medya İkonları */}
            <div
                style={{
                    display: 'flex',
                    gap: '15px',
                    flexWrap: "wrap",
                    alignItems: 'center',
                }}
            >
                <img src="/icon-youtube.png" alt="Youtube" style={{ height: "36.55px", width: "36.55px" }} />
                <img src="/icon-instagram.png" alt="Instagram" style={{ height: "36.55px", width: "36.55px" }} />
                <img src="/icon-twitter.png" alt="Twitter" style={{ height: "36.55px", width: "36.55px" }} />
                <img src="/icon-facebook.png" alt="Facebook" style={{ height: "36.55px", width: "36.55px" }} />
            </div>
        </footer>
    );
};

export default Footer;
