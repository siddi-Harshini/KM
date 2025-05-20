import React from 'react';
import LoginPopup from './LoginPopup';

const LoginPage = () => {
  // Redirect to home or another page on close
  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f4f6fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <LoginPopup onClose={handleClose} />
    </div>
  );
};

export default LoginPage;