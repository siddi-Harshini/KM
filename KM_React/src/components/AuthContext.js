import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const SESSION_DURATION_MINUTES = 30; // Set your session duration here

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const stored = localStorage.getItem('isLoggedIn');
    const expiry = localStorage.getItem('loginExpiry');
    if (stored === 'true' && expiry && Date.now() < parseInt(expiry, 10)) {
      return true;
    }
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginExpiry');
    return false;
  });

  useEffect(() => {
    if (isLoggedIn) {
      const expiry = Date.now() + SESSION_DURATION_MINUTES * 60 * 1000;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loginExpiry', expiry.toString());
      const timeout = setTimeout(() => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loginExpiry');
      }, SESSION_DURATION_MINUTES * 60 * 1000);
      return () => clearTimeout(timeout);
    } else {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginExpiry');
    }
  }, [isLoggedIn]);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginExpiry');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);