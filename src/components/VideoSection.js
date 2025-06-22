import React from 'react';

const VideoSection = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("/video-background.png")', // arka plan görseli
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: '60px 20px',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 55,
            }}
        >
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
                <div style={{ flex: 1, minWidth: '250px', maxWidth: '500px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>How Does it Work?</h2>
                    <p style={{ marginTop: '20px', fontSize: '1rem', lineHeight: 1.6, color: '#e0e0e0' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos.
                    </p>
                </div>

                {/* Sağ Kısım - Video */}
                <div style={{ flex: 1, minWidth: '250px', display: 'flex', justifyContent: 'center' }}>
                    <video
                        controls
                        poster="/video-thumbnail.png" // video önizleme görseli
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            borderRadius: '12px',
                            backgroundColor: '#ccc',
                        }}
                    >
                        <source src="/how-it-works-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
