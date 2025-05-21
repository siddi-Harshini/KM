import React, { useEffect, useState } from 'react';

const BanksPage = () => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8085/api/banks')
      .then(res => res.json())
      .then(data => setBanks(data));
  }, []);

  return (
    <div>
      <h2>Banks</h2>
      <table>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Bank Name</th>
            <th>Branch</th>
            <th>Area</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {banks.map((bank, idx) => (
            <tr key={bank.id}>
              <td>{idx + 1}</td>
              <td>{bank.bankName}</td>
              <td>{bank.branch}</td>
              <td>{bank.area}</td>
              <td>{bank.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BanksPage;