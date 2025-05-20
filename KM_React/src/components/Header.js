import React, { useState } from 'react';
import LoginPopup from './pages/LoginPopup';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => setShowLogin(true);
  const handleClose = () => setShowLogin(false);

  const handleLoginSuccess = () => {
    login();
    setShowLogin(false);
    navigate('/dashboard');
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="header">
        <div className="logo">KM Valuers</div>
        <nav className="nav-links">
          <a onClick={() => scrollToSection('empanelment')}>Empanelment</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
          <a onClick={handleLoginClick}>Login</a>
        </nav>
      </header>
      {showLogin && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.3)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <LoginPopup onClose={handleClose} onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </>
  );
};

export default Header;
