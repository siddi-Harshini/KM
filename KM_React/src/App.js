import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Empanelment from './components/BankLogos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { useAuth } from './components/AuthContext';
import InwardRegisterPage from './components/pages/InwardRegisterPage';
import InwardRegistryPage from './components/pages/InwardRegisterPage';
import InwardRegisterForm from './components/pages/InwardRegisterForm';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/" />;
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh' }}>
      {!isDashboard && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <section id="banner">
                <Banner />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="empanelment">
                <Empanelment />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          } />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/registry/*" element={<InwardRegisterPage />} />
          
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
