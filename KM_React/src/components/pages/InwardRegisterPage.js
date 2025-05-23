import React, { useEffect, useState } from 'react';

const InwardRegisterPage = () => {
  const [inwards, setInwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fileSearch, setFileSearch] = useState("");
  const [villageSearch, setVillageSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // Helper to fetch and set data
  const fetchAndSet = (url) => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setInwards(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  };

  // On mount, try recent, fallback to all pending
  useEffect(() => {
    fetch('http://localhost:8085/api/inward_register/recent')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setInwards(data);
          setLoading(false);
        } else {
          fetchAndSet('http://localhost:8085/api/inward_register');
        }
      });
  }, []);

  // File number search
  const handleFileSearch = (e) => {
    const value = e.target.value;
    setFileSearch(value);
    if (value) fetchAndSet(`http://localhost:8085/api/inward_register/search/file/${value}`);
    else fetchAndSet('http://localhost:8085/api/inward_register/recent');
  };

  // Village search
  const handleVillageSearch = (e) => {
    const value = e.target.value;
    setVillageSearch(value);
    if (value) fetchAndSet(`http://localhost:8085/api/inward_register/search/village/${value}`);
    else fetchAndSet('http://localhost:8085/api/inward_register/recent');
  };

  // Date search
  const handleDateFilter = (e) => {
    const value = e.target.value;
    setDateFilter(value);
    if (value) fetchAndSet(`http://localhost:8085/api/inward_register/search/date/${value}`);
    else fetchAndSet('http://localhost:8085/api/inward_register/recent');
  };

  // Format date as DD-MM-YYYY
  const formatDateDMY = (dateStr) => {
    if (!dateStr) return '';
    const [datePart] = dateStr.split('T');
    const [year, month, day] = datePart.split('-');
    if (!year || !month || !day) return dateStr;
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      <form style={{ display: 'flex', gap: 12, margin: '16px 0' }}>
        <input
          style={{ flex: 1, padding: 10, borderRadius: 16, border: '1px solid #bbb' }}
          type="text"
          placeholder="Search by File Number"
          value={fileSearch}
          onChange={handleFileSearch}
          maxLength={50}
        />
        <input
          style={{ flex: 1, padding: 10, borderRadius: 16, border: '1px solid #bbb' }}
          type="text"
          placeholder="Search by Village"
          value={villageSearch}
          onChange={handleVillageSearch}
          maxLength={50}
        />
        <input
          style={{ flex: 1, padding: 10, borderRadius: 16, border: '1px solid #bbb' }}
          type="date"
          value={dateFilter}
          onChange={handleDateFilter}
        />
        <a
          className="w3-button w3-green"
          style={{ flex: 1, borderRadius: 16, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}
          href="#"
        >
          New?
        </a>
      </form>
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
        Inward Registry <span style={{ fontWeight: 400, fontSize: 14 }}></span>
      </div>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: '#fff'
      }}>
        <thead>
          <tr style={{ background: '#ff9800', fontWeight: 600, color: '#fff' }}>
            <th style={thStyle}>SNo</th>
            <th style={thStyle}>File Number</th>
            <th style={thStyle}>Bank</th>
            <th style={thStyle}>Inward Date</th>
            <th style={thStyle}>Village / Town</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={7} style={{ textAlign: 'center', padding: 20 }}>Loading...</td>
            </tr>
          ) : inwards.length === 0 ? (
            <tr>
              <td colSpan={7} style={{ textAlign: 'center', padding: 20 }}>No records found.</td>
            </tr>
          ) : (
            inwards.map((item, idx) => (
              <tr key={item.id || idx} style={{ background: idx % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                <td style={tdStyle}>{idx + 1}</td>
                <td style={tdStyle}>
                  <button style={{ color: '#2196f3', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontWeight: 600 }} value={item.fileNumber} name="file_number">
                    {item.fileNumber}
                  </button>
                </td>
                <td style={tdStyle}>{item.bank}</td>
                <td style={tdStyle}>{formatDateDMY(item.inwardDate)}</td>
                <td style={tdStyle}>{item.villageOrTown}</td>
                <td style={tdStyle}>{item.status}</td>
                <td style={tdStyle}>{item.remarks}</td>
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
  textAlign: 'left' // Set all column headings to normal (left aligned)
};
const tdStyle = {
  padding: '10px 8px',
  borderBottom: '1px solid #eee'
};

export default InwardRegisterPage;
