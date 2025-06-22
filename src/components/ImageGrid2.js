import React from 'react';
import { FaFilter } from 'react-icons/fa';

const ImageGrid2 = () => {
    const restaurant1Images = [
        '/Attractions1-1.png',
        '/Attractions1-2.png',
        '/Attractions1-3.png',
    ];

    const restaurant2Images = [
        '/Attractions2-1.png',
        '/Attractions2-2.png',
        '/Attractions2-3.png',
    ];

    const imageBoxStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        position: 'relative',
    };

    const imageStyle = {
        width: '100%',
        aspectRatio: '2.5 / 1',
        objectFit: 'cover',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    };

    const textStyle = {
        fontSize: '1rem',
        fontWeight: 600,
        color: '#333',
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                gap: '40px',
                marginTop: '20px'
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: "space-around",
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: "2rem"
                }}
            >
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111' }}>Tourist Attractions</h2>
                <FaFilter size={24} style={{ cursor: 'pointer', color: '#21b8a6' }} />
            </div>

            {/* Grid */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '40px',
                }}
            >
                {/* Attraction 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '520px', width: '100%' }}>
                    {restaurant1Images.map((src, index) => (
                        <div key={index} style={imageBoxStyle}>
                            <img src={src} alt={`Attraction 1 - ${index + 1}`} style={imageStyle} />
                            <p style={textStyle}>Attraction 1</p>
                        </div>
                    ))}
                </div>

                {/* Attraction 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '520px', width: '100%' }}>
                    {restaurant2Images.map((src, index) => (
                        <div key={index} style={imageBoxStyle}>
                            <img src={src} alt={`Attractions 2 - ${index + 1}`} style={imageStyle} />
                            <p style={textStyle}>Attraction 2</p>

                            {/* "See All" butonu */}
                            {index === 2 && (
                                <button
                                    style={{
                                        position: "absolute",
                                        bottom: '-50px',
                                        right: '0px',
                                        color: "black",
                                        fontSize: '1rem',
                                    }}
                                >
                                    See All
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGrid2;
