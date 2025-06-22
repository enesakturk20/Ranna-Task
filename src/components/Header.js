"use client";
import React, { useState } from 'react';
import {
  FaHome,
  FaCreditCard,
  FaHeart,
  FaSearch,
  FaUserCircle,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import Link from 'next/link';

import useIsMobile from '../hooks/useIsMobile';

const Header = () => {
  const [selected, setSelected] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useIsMobile();

  const navItems = [
    { name: 'home', icon: <FaHome /> },
    { name: 'card', icon: <FaCreditCard /> },
    { name: 'favorite', icon: <FaHeart /> },
    { name: 'search', icon: <FaSearch /> },
  ];

  return (
    <>
      {/* Desktop */}
      {!isMobile && (
        <header
          style={{
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 5rem',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img src="/logo.png" alt="Logo" width={160} height={40} />
          </Link>

          {/* Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#14b8a6',
              borderRadius: '9999px',
              padding: '0.5rem 1rem',
              gap: '1.5rem',
            }}
          >
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => setSelected(item.name)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                <div style={{ fontSize: '1.25rem' }}>{item.icon}</div>
                {selected === item.name && (
                  <div
                    style={{
                      width: '1.25rem',
                      height: '0.25rem',
                      backgroundColor: 'white',
                      borderRadius: '9999px',
                      marginTop: '0.125rem',
                    }}
                  />
                )}
              </div>
            ))}

            {/* Profil */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  border: '2px dashed white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaUserCircle style={{ fontSize: '1.75rem', color: 'white' }} />
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Mobil */}
      {isMobile && (
        <>
          {/* Mobil Üst Logo */}
          <div
            style={{
              position: 'relative',
              zIndex: 1001,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem 0',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <Link href="/">
              <img src="/logo.png" alt="Logo" width={160} height={40} />
            </Link>

            <FaBars
              size={24}
              onClick={() => setDrawerOpen(true)}
              style={{
                position: 'absolute',
                right: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#14b8a6',
                cursor: 'pointer',
              }}
            />
          </div>

          {/* Drawer (çekmece menü) */}
          {drawerOpen && (
            <>
              {/* Overlay - boş alana tıklayınca drawer kapama */}
              <div
                onClick={() => setDrawerOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  zIndex: 1999,
                }}
              />
              {/* Drawer Menüsü */}
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  width: '250px',
                  height: '100vh',
                  backgroundColor: 'white',
                  boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
                  padding: '1.5rem',
                  zIndex: 2000,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
              >
                {/* Kapatma butonu */}
                <FaTimes
                  size={20}
                  style={{ alignSelf: 'flex-end', cursor: 'pointer', color: '#333' }}
                  onClick={() => setDrawerOpen(false)}
                />

                {/* Profil */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', }}>
                  <FaUserCircle
                    size={30}
                    color="#14b8a6"
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      border: '2px dashed #14b8a6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }} />
                  <span style={{ fontSize: '1rem', color: '#111', fontWeight: 600 }}>Profile</span>
                </div>
              </div>
            </>
          )}

          {/* Mobil Bottom Navigation */}
          <div
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#14b8a6',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '0.75rem 0',
              boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
              zIndex: 1000,
            }}
          >
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => setSelected(item.name)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                }}
              >
                {item.icon}
                {selected === item.name && (
                  <div
                    style={{
                      width: '1.25rem',
                      height: '0.25rem',
                      backgroundColor: 'white',
                      borderRadius: '9999px',
                      marginTop: '0.125rem',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Header;
