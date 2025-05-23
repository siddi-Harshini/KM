import React, { useEffect, useState } from 'react';

const InvoicePage = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8085/api/invoices')
      .then(res => res.json())
      .then(data => {
        setInvoices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <button style={{
          background: '#4caf50', color: '#fff', border: 'none', borderRadius: 16,
          padding: '8px 20px', fontWeight: 'bold', cursor: 'pointer'
        }}>New?</button>
      </div>
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
        Invoice
      </div>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: '#fff'
      }}>
        <thead>
          <tr style={{ background: '#ff9800', fontWeight: 600, color: '#fff' }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>File Number</th>
            <th style={thStyle}>Invoice Date</th>
            <th style={thStyle}>Purpose</th>
            <th style={thStyle}>Total Price</th>
            <th style={thStyle}>Bank</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', padding: 20 }}>Loading...</td>
            </tr>
          ) : invoices.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', padding: 20 }}>No invoices found.</td>
            </tr>
          ) : (
            invoices.map((inv, idx) => (
              <tr key={inv.id || idx} style={{ background: idx % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                <td style={tdStyle}>{inv.id}</td>
                <td style={tdStyle}>{inv.fileNumber}</td>
                <td style={tdStyle}>{inv.invoiceDate}</td>
                <td style={tdStyle}>{inv.purpose}</td>
                <td style={tdStyle}>{inv.totalPrice}</td>
                <td style={tdStyle}>{inv.bank}</td>
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

export default InvoicePage;