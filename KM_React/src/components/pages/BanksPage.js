import React, { useEffect, useState } from 'react';

const BanksPage = () => {
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8085/api/banks')
      .then(res => res.json())
      .then(data => {
        setBanks(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div style={{
        background: '#43a047',
        color: '#fff',
        borderRadius: '8px 8px 0 0',
        padding: '12px 0',
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: 0
      }}>
        Banks
      </div>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: '#fff'
      }}>
        <thead>
          <tr style={{ background: '#e0e0e0', fontWeight: 600 }}>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Bank Name</th>
            <th style={thStyle}>Branch</th>
            <th style={thStyle}>Area</th>
            <th style={thStyle}>State</th>
            <th style={thStyle}></th>
            <th style={thStyle}></th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={7} style={{ textAlign: 'center', padding: 20 }}>Loading...</td>
            </tr>
          ) : banks.length === 0 ? (
            <tr>
              <td colSpan={7} style={{ textAlign: 'center', padding: 20 }}>No banks found.</td>
            </tr>
          ) : (
            banks.map((bank, idx) => (
              <tr key={bank.id} style={{ background: idx % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                <td style={tdStyle}>{idx + 1}</td>
                <td style={tdStyle}>{bank.bankName}</td>
                <td style={tdStyle}>{bank.branch}</td>
                <td style={tdStyle}>{bank.area}</td>
                <td style={tdStyle}>{bank.state}</td>
                <td style={tdStyle}>
                  <span style={{ color: '#43a047', cursor: 'pointer', fontSize: 18 }} title="Edit">&#9998;</span>
                </td>
                <td style={tdStyle}>
                  <span style={{ color: '#f44336', cursor: 'pointer', fontSize: 18 }} title="Delete">&#128465;</span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: '10px 8px',
  borderBottom: '1px solid #bbb',
  textAlign: 'left'
};
const tdStyle = {
  padding: '10px 8px',
  borderBottom: '1px solid #eee'
};

export default BanksPage;