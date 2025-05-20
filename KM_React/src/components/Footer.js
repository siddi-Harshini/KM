import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Powered by <a href="#">KM Valuers</a></p>
      <p>Developed and Maintained By: <a href="#">Valuer Wallet</a>, Contact: 9989803310 &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
