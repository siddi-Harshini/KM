import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import BanksPage from './pages/BanksPage';
import InwardRegisterPage from './pages/InwardRegisterPage';
import { useAuth } from './AuthContext';
import '../styles/Dashboard.css'; // Adjust path as needed

const summaryData = [
  { label: 'Assigned', value: 38, color: '#2196f3' },
  { label: 'Checking', value: 3, color: '#2196f3' },
  { label: 'Completed', value: 5361, color: '#4caf50' },
  { label: 'Draft completed', value: 8, color: '#2196f3' },
  { label: 'Pending', value: 76, color: '#ff9800' },
  { label: 'Rejected', value: 583, color: '#f44336' },
];

const sidebarItems = [
  { label: 'Admin Dashboard', route: '.' },
  { label: 'Users', route: 'users' },
  { label: 'Banks', route: 'banks' },
  { label: 'Inward Registry', route: 'inward-registry' },
  { label: 'Documents', route: 'documents' },
  { label: 'Photographs', route: 'photographs' },
  { label: 'Utilities', route: 'utilities' },
  { label: 'Invoice', route: 'invoice' },
  { label: 'Outward', route: 'outward' },
  { label: 'Data Master', route: 'data-master' },
  { label: 'Logout', isLogout: true },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Helper to determine if sidebar item is active
  const isActive = (route) => {
    if (route === '.') {
      return location.pathname === '/' || location.pathname === '/dashboard' || location.pathname === '/dashboard/';
    }
    // For nested routes
    return location.pathname.endsWith(route) || location.pathname === `/dashboard/${route}`;
  };
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6fa', position: 'relative' }}>
      {/* Responsive Top Bar */}
      <div className="dashboard-topbar-green">
        <span className="dashboard-topbar-title">KM Valuations</span>
        <span
          className="dashboard-hamburger"
          onClick={() => setSidebarOpen(true)}
          style={{ cursor: 'pointer', fontSize: 28, marginLeft: 18 }}
        >&#9776;</span>
      </div>
      {/* Overlay for mobile sidebar */}
      <div
        className={`dashboard-overlay${sidebarOpen ? ' open' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-label="Close sidebar overlay"
      />
      {/* Sidebar */}
      <aside
        className={`dashboard-sidebar${sidebarOpen ? ' open' : ''}`}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 230,
          height: '100vh',
          background: '#009688',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 201
        }}
      >
        {/* Close button for mobile */}
        <span
          className="dashboard-close"
          style={{
            display: 'none',
            fontSize: 28,
            cursor: 'pointer',
            position: 'absolute',
            top: 10,
            right: 18,
            zIndex: 202,
          }}
          onClick={() => setSidebarOpen(false)}
        >×</span>
        <div style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginBottom: 24,
          textAlign: 'center',
          padding: '24px 0 0 0',
          borderBottom: '1px solid #00796b'
        }}>
          <img src="https://i.imgur.com/2yaf2wb.png" alt="Logo" style={{ height: 40, marginBottom: 10 }} />
          <div>Welcome <span style={{ textDecoration: 'underline', fontWeight: 600 }}>test</span></div>
        </div>
        <nav style={{ flex: 1 }}>
          <ul className="sidebar-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {sidebarItems.map(item => (
              <li
                key={item.label}
                className={`sidebar-item${item.isLogout ? ' logout' : ''}`}
                style={{
                  padding: '14px 28px',
                  cursor: 'pointer',
                  background: item.isLogout ? '#00897b' : 'transparent',
                  color: isActive(item.route) ? '#000' : '#fff',
                  fontWeight: isActive(item.route) || item.isLogout ? 'bold' : 500,
                  borderLeft: isActive(item.route) ? '6px solid #009688' : '6px solid transparent',
                  transition: 'color 0.2s',
                }}
                onClick={() => {
                  if (item.isLogout) {
                    logout();
                    navigate('/'); // Redirect to landing page after logout
                  } else if (item.route) {
                    navigate(item.route);
                  }
                  setSidebarOpen(false); // Always close sidebar on navigation (for mobile)
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main style={{ flex: 1, padding: 32, paddingBottom: 70, paddingLeft: 230 }}>
        {(
          location.pathname === '/dashboard' ||
          location.pathname === '/dashboard/' ||
          location.pathname === '/dashboard' // fallback for default
        ) && (
          <>
            <div style={{
              background: '#388e3c',
              color: '#fff',
              borderRadius: 10,
              padding: '12px 0',
              fontSize: 24,
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: 28,
              letterSpacing: 1
            }}>
              Properties
            </div>

            {/* Summary Cards */}
            <div style={{ display: 'flex', gap: 18, marginBottom: 32 }}>
              {summaryData.map((item) => (
                <div key={item.label} style={{
                  flex: 1,
                  background: item.color,
                  color: '#fff',
                  borderRadius: 10,
                  padding: 28,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                }}>
                  <div>{item.label}</div>
                  <div style={{ fontSize: 36, marginTop: 6 }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
              <select style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #bbb' }}>
                <option>Select Bank</option>
              </select>
              <select style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #bbb' }}>
                <option>Select Field Engineer</option>
              </select>
              <select style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #bbb' }}>
                <option>Select ToWhomItWasIssued</option>
              </select>
              <select style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #bbb' }}>
                <option>Select Feeding Person</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
              <input style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #bbb' }} placeholder="Search by File Number" />
              <input style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #bbb' }} placeholder="Search by Village" />
            </div>

            <div style={{ fontWeight: 'bold', marginBottom: 16, fontSize: 16 }}>
              Property info will be listed here.
            </div>

            {/* Property Type Buttons */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['SBI_L&B', 'SBI_FLAT', 'KB', 'LIC_PVR1', 'LIC_PVR2', 'LIC_PVR3', 'LIC_PVR6'].map((type) => (
                <button key={type} style={{
                  background: '#4caf50',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 16,
                  padding: '10px 22px',
                  fontWeight: 'bold',
                  marginBottom: 8,
                  cursor: 'pointer',
                  fontSize: 15
                }}>
                  {type}
                </button>
              ))}
            </div>
          </>
        )}

        <Routes>
          <Route path="." element={<div>Dashboard Home</div>} />
          <Route path="users" element={<UsersPage />} />
          <Route path="banks" element={<BanksPage />} />
          <Route path="inward-registry" element={<InwardRegisterPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>

      {/* Fixed Footer */}
      <footer style={{
        position: 'fixed',
        left: 230, // width of sidebar
        right: 0,
        bottom: 0,
        background: '#009688',
        color: '#fff',
        borderRadius: 0,
        textAlign: 'center',
        padding: '10px 0',
        fontSize: 15,
        fontWeight: 500,
        zIndex: 100
      }}>
        Powered by KM Valuers<br />
        Developed and Maintained By: Valuer Wallet, Contact: 9989803310 © 2025
      </footer>
    </div>
  );
};

export default Dashboard;