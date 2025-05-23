import React, { useEffect, useState } from 'react';

const BanksPage = () => {
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    bankName: '',
    branch: '',
    area: '',
    state: ''
  });

  useEffect(() => {
    fetch('http://localhost:8085/api/banks')
      .then(res => res.json())
      .then(data => {
        setBanks(data);
        setLoading(false);
      });
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId
      ? `http://localhost:8085/api/banks/${editId}`
      : 'http://localhost:8085/api/banks';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(updatedBank => {
        if (editId) {
          setBanks(banks.map(b => (b.id === editId ? updatedBank : b)));
        } else {
          setBanks([...banks, updatedBank]);
        }
        setShowModal(false);
        setForm({ bankName: '', branch: '', area: '', state: '' });
        setEditId(null);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this bank?")) {
      fetch(`http://localhost:8085/api/banks/${id}`, {
        method: 'DELETE'
      })
        .then(res => {
          if (res.ok) {
            setBanks(banks.filter(bank => bank.id !== id));
          }
        });
    }
  };

  const handleEdit = (bank) => {
    setEditId(bank.id);
    setForm({
      bankName: bank.bankName,
      branch: bank.branch,
      area: bank.area,
      state: bank.state
    });
    setShowModal(true);
  };

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
      <button
        style={{ margin: 16, padding: '8px 24px', background: '#43a047', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 18, cursor: 'pointer' }}
        onClick={() => setShowModal(true)}
      >
        New?
      </button>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{
            background: '#fff', padding: 32, borderRadius: 8, minWidth: 350, position: 'relative'
          }}>
            <button style={{ position: 'absolute', top: 8, right: 8, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }} onClick={() => setShowModal(false)}>×</button>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 600 }}>Bank Name</label>
                <input type="text" name="bankName" value={form.bankName} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 600 }}>Branch</label>
                <input type="text" name="branch" value={form.branch} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 600 }}>Area</label>
                <input type="text" name="area" value={form.area} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 600 }}>State</label>
                <input type="text" name="state" value={form.state} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
              </div>
              <button type="submit" style={{ background: '#43a047', color: '#fff', padding: '10px 0', width: '100%', border: 'none', borderRadius: 4, fontWeight: 600, fontSize: 16 }}>Add</button>
              <button type="button" style={{ background: '#f44336', color: '#fff', padding: '10px 0', width: '100%', border: 'none', borderRadius: 4, fontWeight: 600, fontSize: 16, marginTop: 8 }} onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

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
                  <span
                    style={{ color: '#43a047', cursor: 'pointer', fontSize: 18 }}
                    title="Edit"
                    onClick={() => handleEdit(bank)}
                  >
                    &#9998;
                  </span>
                </td>
                <td style={tdStyle}>
                  <span
                    style={{ color: '#f44336', cursor: 'pointer', fontSize: 18 }}
                    title="Delete"
                    onClick={() => handleDelete(bank.id)}
                  >
                    &#128465;
                  </span>
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