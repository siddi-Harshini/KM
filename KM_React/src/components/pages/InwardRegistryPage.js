import React from 'react';
import { useNavigate } from 'react-router-dom';

const InwardRegistryPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        style={{
          margin: 16,
          padding: '8px 24px',
          background: '#43a047',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 18,
          cursor: 'pointer'
        }}
        onClick={() => navigate('/inward-register/new')}
      >
        New?
      </button>
      {/* ...your registry table and other content... */}
    </div>
  );
};

export default InwardRegistryPage;