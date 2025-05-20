import React from 'react';
import '../styles/BankLogos.css';

const BankLogos = () => {
  const logos = [
    { src: '/images/BOB.png', name: 'Bank of Baroda' },
    { src: '/images/boi.png', name: 'Bank of India' },
    { src: '/images/bom.jpeg', name: 'Bank of Maharashtra' },
    { src: '/images/canfin.png', name: 'Can Fin Homes' },
    { src: '/images/cb.png', name: 'Central Bank of India' },
    { src: '/images/db.png', name: 'Dena Bank' },
    { src: '/images/KB.jpeg', name: 'Karnataka Bank' },
    { src: '/images/lic.jpeg', name: 'LIC Housing Finance' },
    { src: '/images/PNB.jpeg', name: 'Punjab National Bank' },
    { src: '/images/psb.png', name: 'Punjab & Sind Bank' },
    { src: '/images/sbi.jpeg', name: 'State Bank of India' },
    { src: '/images/tgb.png', name: 'Telangana Grameena Bank' },
    { src: '/images/tmb.png', name: 'Tamilnad Mercantile Bank' },
    { src: '/images/ub.png', name: 'Union Bank of India' },
    { src: '/images/uco.png', name: 'UCO Bank' },
  ];

  return (
    <div id="empanelment" className="bank-logos">
      <h2 className="section-title">Empanelment - Our Partner Banks</h2>
      <div className="logos-container">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img
              src={logo.src}
              alt={logo.name}
              className="bank-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankLogos;
