'use client';
import React from 'react';
import useIsMobile from '@/hooks/useIsMobile';

const AppDownloadSection = () => {
    const isMobile = useIsMobile();

    return (
        <div
            style={{
                backgroundColor: '#f5f5f5',
                padding: '60px 20px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0px',
            }}
        >
            {/* Sol Kısım - Telefon Görseli */}
            <div
                style={{
                    flex: 1,
                    minWidth: '300px',
                    maxWidth: '800px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img
                    src="/phone-mockup.png"
                    alt="Mobile App"
                    style={{
                        maxWidth: '100%',
                        height: '450px',
                        objectFit: 'cover',
                    }}
                />
            </div>

            {/* Sağ Kısım - Metin + Butonlar */}
            <div
                style={{
                    flex: 3,
                    minWidth: '300px',
                    maxWidth: '800px',
                    textAlign: 'left',
                }}
            >
                {/* Metin */}
                <p
                    style={{
                        marginTop: '20px',
                        fontSize: '1.3rem',
                        maxWidth: '600px',
                        lineHeight: 1.6,
                        color: '#555',
                        textAlign: isMobile ? "center" : "left"
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>

                {/* Butonlar */}
                <div
                    style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: isMobile ? "center" : "flex-start",
                        marginTop: '30px',
                        flexWrap: 'wrap',
                    }}
                >
                    <img
                        src="/google-play-badge.png"
                        alt="Google Play"
                        style={{
                            height: '50px',
                            width: '160px',
                            cursor: 'pointer',
                        }}
                    />
                    <img
                        src="/app-store-badge.png"
                        alt="App Store"
                        style={{
                            height: '50px',
                            width: '160px',
                            cursor: 'pointer',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppDownloadSection;
