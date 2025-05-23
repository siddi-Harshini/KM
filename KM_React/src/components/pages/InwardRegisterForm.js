import React, { useState } from 'react';

const InwardRegisterForm = () => {
  const [form, setForm] = useState({
    fileNumber: '',
    dataSheetNumber: '',
    propertyType: '',
    valuationType: '',
    scheme: '',
    bank: '',
    branch: '',
    area: '',
    state: '',
    // ...add all other fields you need
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:8085/api/inward_register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        // Optionally navigate back or show a success message
      });
  };

  return (
    <div style={{ maxWidth: 1200, margin: '32px auto', background: '#fff', borderRadius: 8, padding: 32 }}>
      <div style={{ background: '#43a047', color: '#fff', padding: 16, borderRadius: '8px 8px 0 0', fontSize: 24, fontWeight: 600, textAlign: 'center' }}>
        Inward Register
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 24 }}>
        <div style={{ flex: '1 1 30%' }}>
          <label>File Number</label>
          <input name="fileNumber" value={form.fileNumber} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </div>
        <div style={{ flex: '1 1 30%' }}>
          <label>Data Sheet Number</label>
          <input name="dataSheetNumber" value={form.dataSheetNumber} onChange={handleChange} style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </div>
        <div style={{ flex: '1 1 30%' }}>
          <label>Property Type</label>
          <input name="propertyType" value={form.propertyType} onChange={handleChange} style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </div>
        {/* Add more fields in similar fashion, grouped in rows of 3 for a grid look */}
        {/* ... */}
        <div style={{ flex: '1 1 100%', textAlign: 'center', marginTop: 32 }}>
          <button type="submit" style={{ background: '#43a047', color: '#fff', padding: '12px 48px', border: 'none', borderRadius: 24, fontWeight: 600, fontSize: 18 }}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default InwardRegisterForm;