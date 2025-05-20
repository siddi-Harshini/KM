import React, { useEffect, useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8085/api/users') // Change to your backend URL
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <button style={{
          background: '#4caf50', color: '#fff', border: 'none', borderRadius: 16,
          padding: '8px 20px', fontWeight: 'bold', cursor: 'pointer'
        }}>New User?</button>
        <button style={{
          background: '#4caf50', color: '#fff', border: 'none', borderRadius: 16,
          padding: '8px 20px', fontWeight: 'bold', cursor: 'pointer'
        }}>Roles</button>
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
        Users
      </div>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: '#fff'
      }}>
        <thead>
          <tr style={{ background: '#e0e0e0', fontWeight: 600 }}>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Login Mail Id</th>
            <th style={thStyle}>Password</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}></th>
            <th style={thStyle}></th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', padding: 20 }}>Loading...</td>
            </tr>
          ) : users.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', padding: 20 }}>No users found.</td>
            </tr>
          ) : (
            users.map((user, idx) => (
              <tr key={user.loginId} style={{ background: idx % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                <td style={tdStyle}>{user.loginId}</td>
                <td style={tdStyle}>{user.loginMailId}</td>
                <td style={tdStyle}>{"*".repeat(8)}</td>
                <td style={tdStyle}>{user.role}</td>
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

export default UsersPage;