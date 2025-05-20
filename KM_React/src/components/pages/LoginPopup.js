import React, { useState } from 'react';

const LoginPopup = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:8085/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        if (onLoginSuccess) onLoginSuccess();
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div style={styles.popup}>
      <button onClick={onClose} style={styles.closeBtn} aria-label="Close login popup">×</button>
      <div style={styles.iconWrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          fill="#203663"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 8-4 8-4s8 0 8 4v1H4v-1z" />
        </svg>
      </div>
      <form onSubmit={handleSubmit}>
        <label style={styles.label} htmlFor="username">Username</label>
        <input
          id="username"
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          placeholder="Enter your email"
          required
        />
        <label style={styles.label} htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ ...styles.input, backgroundColor: '#e6f0ff' }}
          placeholder="Enter your password"
          required
        />
        <div style={styles.rememberMe}>
          <input
            id="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe" style={{ marginLeft: 6 }}>Remember me</label>
        </div>
        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        <button type="submit" style={styles.loginBtn}>Login</button>
        <button type="button" onClick={onClose} style={styles.cancelBtn}>Cancel</button>
      </form>
    </div>
  );
};

const styles = {
  popup: {
    position: 'relative',
    width: 360,
    padding: 24,
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  closeBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    background: 'transparent',
    border: 'none',
    fontSize: 20,
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#333',
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
  },
  label: {
    display: 'block',
    fontWeight: '600',
    marginBottom: 6,
    color: '#222',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    marginBottom: 16,
    borderRadius: 4,
    border: '1px solid #ccc',
    fontSize: 14,
    outline: 'none',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    fontSize: 14,
    color: '#444',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: 12,
    fontSize: 16,
    borderRadius: 4,
    cursor: 'pointer',
    marginBottom: 12,
  },
  cancelBtn: {
    width: '100%',
    backgroundColor: '#f44336',
    border: 'none',
    color: 'white',
    padding: 12,
    fontSize: 16,
    borderRadius: 4,
    cursor: 'pointer',
  },
};

export default LoginPopup;