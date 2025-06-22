'use client';
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';

const MembershipSection = () => {
    const isMobile = useIsMobile();

    return (
        <div
            style={{
                backgroundImage: 'url("/membership-background.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: '0px 20px',
                paddingTop: '40px',
                paddingLeft: '40px',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 55,
            }}
        >
            {/* Konteyner */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '1200px',
                    width: '100%',
                    gap: '40px',
                }}
            >
                {/* Sol Kısım */}
                <div style={{ flex: 3, maxWidth: '900px' }}>
                    {/* Başlık ve Yazı */}
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', textAlign: isMobile ? 'center' : 'left' }}>
                        Choose Your Membership & Start Saving
                    </h2>
                    <p
                        style={{
                            fontSize: '1.2rem',
                            marginTop: '25px',
                            lineHeight: 1.5,
                            color: '#f0f0f0',
                            textAlign: isMobile ? 'center' : 'left'
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                        aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos.
                    </p>

                    {/* Kartlar */}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '40px', flexWrap: 'wrap', justifyContent: isMobile ? "center" : "" }}>
                        <img src="/diamond-card.png" alt="Diamond Member" style={{ height: '120px' }} />
                        <img src="/gold-card.png" alt="Gold Member" style={{ height: '120px' }} />
                        <img src="/silver-card.png" alt="Silver Member" style={{ height: '120px' }} />
                    </div>
                </div>

                {/* Sağ Kısım - Kadın görseli */}
                <div
                    style={{
                        flex: 1,
                        minWidth: '225px',
                        display: 'flex',
                        marginRight: isMobile ? '50px' : '0px'
                    }}
                >
                    <img
                        src="/excited-woman.png"
                        alt="Excited Woman"
                        style={{
                            maxHeight: '455px',
                            width: '100%',
                            maxWidth: '400px',
                            objectFit: 'contain',
                        }}
                    />
                </div>
            </div>
        </div>

    );
};

export default MembershipSection;
