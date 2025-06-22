'use client';
import React, { useState, useRef } from 'react';
import {
  FaUtensils,
  FaCamera,
  FaShoppingBag,
  FaHeartbeat,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import useIsMobile from '../hooks/useIsMobile';

const BottomNav = () => {
  const isMobile = useIsMobile();

  const [selected, setSelected] = useState('dining');
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === 'left' && container.scrollLeft <= 0) {
      return; // En başta, sola kaydırma
    }

    if (direction === 'right' && container.scrollLeft >= maxScrollLeft) {
      return; // En sonda, sağa kaydırma
    }

    container.scrollBy({
      left: direction === 'left' ? -150 : 150,
      behavior: 'smooth',
    });
  };

  const iconItemStyle = (name) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: isMobile ? '0.8rem' : '1rem',
    whiteSpace: 'nowrap',
    padding: isMobile ? '0.5rem' : '0.75rem 1rem',
    flexShrink: 0,
    fontWeight: selected === name ? 'bold' : 'normal',
    color: selected === name ? '#000' : '#4B5563',
    opacity: selected === name ? 1 : 0.6,
    cursor: 'pointer',
  });

  const dividerStyle = {
    width: '2px',
    height: isMobile ? '20px' : '24px',
    backgroundColor: '#D1D5DB',
    flexShrink: 0,
  };

  return (
    <div
      style={{
        position: 'relative',
        margin: '2.5rem auto',
        width: '90%',
        maxWidth: 925,
        padding: '0 1rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Sol Ok */}
      {isMobile && (
        <FaChevronLeft
          onClick={() => handleScroll('left')}
          style={{
            position: 'absolute',
            left: -10,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            color: '#999',
            zIndex: 10,
          }}
        />
      )}

      {/* Navigasyon kutusu */}
      <div
        ref={scrollRef}
        style={{
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '16px',
          border: '1.73px solid #D1D5DB',
          padding: isMobile ? '5px 10px' : '5px 35px',
          gap: isMobile ? '1rem' : '3rem',
          overflowX: isMobile ? 'auto' : 'visible',
          scrollbarWidth: 'none',
        }}
      >
        <div style={iconItemStyle('dining')} onClick={() => setSelected('dining')}>
          <FaUtensils size={isMobile ? 20 : 30} />
          Dining
        </div>
        <div style={dividerStyle} />
        <div style={iconItemStyle('attractions')} onClick={() => setSelected('attractions')}>
          <FaCamera size={isMobile ? 20 : 30} />
          Attractions
        </div>
        <div style={dividerStyle} />
        <div style={iconItemStyle('shopping')} onClick={() => setSelected('shopping')}>
          <FaShoppingBag size={isMobile ? 20 : 30} />
          Shopping
        </div>
        <div style={dividerStyle} />
        <div style={iconItemStyle('health')} onClick={() => setSelected('health')}>
          <FaHeartbeat size={isMobile ? 20 : 30} />
          Health
        </div>
      </div>

      {/* Sağ Ok */}
      {isMobile && (
        <FaChevronRight
          onClick={() => handleScroll('right')}
          style={{
            position: 'absolute',
            right: -10,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            color: '#999',
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

export default BottomNav;
