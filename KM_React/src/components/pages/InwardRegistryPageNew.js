import React, { useState } from 'react';
import '../../styles/InwardRegistryPageNew.css';

const propertyTypes = [
  '', 'New_Land_and_Building', 'Old_Land_and_Building', 'Land_and_Building', 'Open_Plot', 'New_Flat', 'Old_Flat', 'Flat', 'Semi_Finished_L&B', 'Semi_Finished_Flat', 'Commercial', 'Industrial', 'Villa', 'Commercial L&B', 'Commercial Flat', 'Villa Composite', 'Villa L&B', 'Apartment', 'Agriculture_Land', 'Gated Community', 'Group Housing', 'Horticulture', 'High Rise Apartments'
];
const valuationTypes = [
  '', 'Fresh Valuation', 'ReValuation', 'Stage Completion Certificate', 'Estimation', 'Structural Stability Certificate', 'Private Valuation', 'Revised Valuation', 'STAGE', 'Mater Valuation/Tie-up report', 'Visa Valuations', 'IBBI Valuation', 'NCLT Valuation', 'Incontinuation Letters', 'Capital Gains', 'Estimation Vetting', 'Master Valuation', 'Tie-Up Report', 'Renovation of Civil Works', 'Renovation of Interior Works', 'Proposed Estimation for Civil Works', 'Proposed Estimation for Interior Works', 'Proposed Estimation for PEB Structure'
];
const purposes = [
  '', 'For Bank Security Lending Purpose-Housing Loan', 'For bank Security lending purpose', 'Wetting Certificate', 'For Bank Security Lending Purpose-Education Loan', 'Improvements/Renovation works', 'For Bank Security Lending Purpose-Top-up', 'For Bank Security Lending Purpose-Self Construction', 'New Face Lift(NFL)', 'For Bank Security Lending Purpose-Take Over', 'Take over and Top-up', 'Resale or Purchase', 'Gruha Vikas/Mortgage loan', 'Purchase of New House', 'Subsequent', 'Internal Take over', 'Purchase of New flat', 'To Know the Fair Market Value of NPA Property-Under SARFAESI Act', 'To Know the Net Worth Value of the Property', 'Project Finance', 'Project Tie-Up', 'To Know the Fair Market Value of NPA Property-Under SARFAESI Act', 'SARFAESI'
];
const schemes = [
  '', 'PVR1', 'PVR2', 'PVR3', 'PVR4', 'PVR5', 'PVR6', 'RACPC', 'SME', 'SARFAESI', 'Others'
];
const fileStatuses = [
  '', 'Pending', 'Completed', 'Assigned', 'Checking', 'Draft completed', 'Rejected', 'Sample file'
];
const planAuthorities = [
  '', 'HMDA', 'GHMC', 'GRAM PANCHAYAT', 'MCH', 'TS-bPASS', 'TS-iPASS', 'MUNCIPAL CORPORATION', 'HUDA', 'Muncipality', 'Director of Factories', 'UDA', 'CDA', 'CDMA', 'Contonment', 'DTCP', 'GVMC', 'GWMC', 'SEZ', 'YTDA', 'APIIC', 'TSIIC', 'Others'
];
// These should be fetched from backend ideally, but hardcoded for now as per your HTML
const bankOptions = [
  { value: '', label: 'Select Bank' },
  { value: '16', label: 'A S Rao Nagar-Karnataka Bank' },
  { value: '220', label: 'A.S. Rao Nagar  Branch-Can-fin' },
  { value: '78', label: 'A.S.Rao Nagar Branch-BOB' },
  { value: '199', label: 'ABIDS-DLB' },
  { value: '346', label: 'abids-PSB' },
  { value: '184', label: 'ABIDS-BOI' },
  { value: '404', label: 'Abids-SBI' },
  { value: '244', label: 'AfzalGunj-UBI' },
  { value: '228', label: 'Afzalgunj-UBI' },
  // ...add all other options as needed...
];
const userOptions = [
  { value: '', label: 'Select User' },
  { value: 'admin@gmail.com', label: 'admin@gmail.com' },
  { value: 'siva@gmail.com', label: 'siva@gmail.com' },
  { value: 'sudheer-freelancer@gmail.com', label: 'sudheer-freelancer@gmail.com' },
  { value: 'ramarao@gmail.com', label: 'ramarao@gmail.com' },
  { value: 'vineetha@gmail.com', label: 'vineetha@gmail.com' },
  { value: 'Gowtham@GMAIL.COM', label: 'Gowtham@GMAIL.COM' },
  { value: 'Ganesh@gmail.com', label: 'Ganesh@gmail.com' },
  { value: 'Chandra@gmail.com', label: 'Chandra@gmail.com' },
  { value: 'NVKM@gmail.com', label: 'NVKM@gmail.com' },
  { value: 'Ramesh@gmail.com', label: 'Ramesh@gmail.com' },
  { value: 'Akhil@gmail.com', label: 'Akhil@gmail.com' },
  { value: 'Sirisha@gmail.com', label: 'Sirisha@gmail.com' },
  { value: 'Hemanth@gmail.com', label: 'Hemanth@gmail.com' },
  { value: 'OutSource@gamil.com', label: 'OutSource@gamil.com' },
  { value: 'gsandhya@gmail.com', label: 'gsandhya@gmail.com' },
  { value: 'vinithabarishetty@gmail.com', label: 'vinithabarishetty@gmail.com' },
  { value: 'Chaithanyaupashi222@gmail.com', label: 'Chaithanyaupashi222@gmail.com' },
  { value: 'bheemavarapudivya@gmail.com', label: 'bheemavarapudivya@gmail.com' },
  { value: 'Naragonianuhya62@gmail.com', label: 'Naragonianuhya62@gmail.com' },
  { value: 'sravanisambari756@gmail.com', label: 'sravanisambari756@gmail.com' },
  { value: 'vijaynagaphanindrakasireddy@gmail.com72', label: 'vijaynagaphanindrakasireddy@gmail.com72' },
  { value: 'aravindswamy.m@gmail.com', label: 'aravindswamy.m@gmail.com' },
  { value: 'manasamansu76112@gmail.com', label: 'manasamansu76112@gmail.com' },
  { value: 'Jyothi@gmail.com', label: 'Jyothi@gmail.com' },
  { value: 'Cravikumar931@gmail.com', label: 'Cravikumar931@gmail.com' },
  { value: 'srivanikanala01@gmail.com', label: 'srivanikanala01@gmail.com' },
  { value: 'pamulakumar165@gmail.com', label: 'pamulakumar165@gmail.com' },
  { value: 'kartheek@gmail.com', label: 'kartheek@gmail.com' },
  { value: 'test@gmail.com', label: 'test@gmail.com' },
  { value: 'sudheer-report@gmail.com', label: 'sudheer-report@gmail.com' },
  { value: 'Chandu@gmail.com', label: 'Chandu@gmail.com' },
  { value: 'newramesh@gmail.com', label: 'newramesh@gmail.com' },
  { value: 'sandeep@gmail.com', label: 'sandeep@gmail.com' },
  { value: 'naresh.6026@gmail.com', label: 'naresh.6026@gmail.com' },
  { value: 'sharavan@gmail.com', label: 'sharavan@gmail.com' },
  { value: 'SUNITHA@GMAIL.COM', label: 'SUNITHA@GMAIL.COM' },
  { value: 'prakash@gmail.com', label: 'prakash@gmail.com' },
  { value: 'karthikvisits@gmail.com', label: 'karthikvisits@gmail.com' },
  { value: 'PraveenFreelancer@gmail.com', label: 'PraveenFreelancer@gmail.com' },
  { value: 'nagarajufreelancer@gmail.com', label: 'nagarajufreelancer@gmail.com' },
  { value: 'Vikranth@gmail.com', label: 'Vikranth@gmail.com' },
  { value: 'jansi@gmail.com', label: 'jansi@gmail.com' }
];

const initialState = {
  file_number: '',
  data_sheet_number: '',
  Property_Type: '',
  valuation_type: '',
  purpose: '',
  scheme: '',
  creditor_id: '',
  issuer: '',
  field_engineer: '',
  report_prepared_by: '',
  docs_received_date: '',
  inspection_date: '',
  file_status: '',
  plan_approval_authority: '',
  door_num: '',
  ward_num: '',
  block_num: '',
  plot_num: '',
  building_name: '',
  survey_num: '',
  village: '',
  mandal: '',
  district: '',
  state: '',
  pincode: '',
  remarks: '',
  customer_details: '',
  agent_banker_details: '',
  bank_ref_number: ''
};

const InwardRegistryPageNew = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  // Hide registry table: do not render it on this page

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: Submit form to backend (API call)
    setTimeout(() => {
      setSubmitting(false);
      alert('Registered!');
      setForm(initialState);
    }, 1000);
  };

  return (
    <div className="inward-registry-bg">
      <form className="w3-card inward-registry-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="w3-container w3-center w3-green inward-registry-header">
          <h4>Inward Register</h4>
        </div>
        <div className="inward-registry-grid">
          {/* Each field in a grid cell, label+input/select/textarea */}
          <div>
            <label>File Number</label>
            <input className="w3-input" type="text" min="0" name="file_number" id="file_number" required value={form.file_number} onChange={handleChange} />
          </div>
          <div>
            <label>Data Sheet Number</label>
            <input className="w3-input" type="text" name="data_sheet_number" value={form.data_sheet_number} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="Property_Type">Property Type</label>
            <select className="w3-select" name="Property_Type" id="Property_Type" required value={form.Property_Type} onChange={handleChange}>
              <option value="">Select Property Type-Reset</option>
              {propertyTypes.slice(1).map((type) => (
                <option key={type} value={type}>{type.replace(/_/g, ' ')}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Valuation Type</label>
            <select className="w3-select" name="valuation_type" value={form.valuation_type} onChange={handleChange}>
              <option value="">--Select Type--</option>
              {valuationTypes.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Purpose of Valuation</label>
            <select className="w3-select" name="purpose" value={form.purpose} onChange={handleChange}>
              <option value="">--Select Purpose--</option>
              {purposes.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Scheme</label>
            <select className="w3-select" name="scheme" value={form.scheme} onChange={handleChange}>
              <option value="">Select Scheme</option>
              {schemes.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="creditor_id">Bank name</label>
            <select className="w3-select" name="creditor_id" id="creditor_id" required value={form.creditor_id} onChange={handleChange}>
              {bankOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label>To Whom it was issued</label>
            <select className="w3-select" name="issuer" value={form.issuer} onChange={handleChange}>
              {userOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Field Engineer</label>
            <select className="w3-select" name="field_engineer" value={form.field_engineer} onChange={handleChange}>
              {userOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Report Prepared By</label>
            <select className="w3-select" name="report_prepared_by" value={form.report_prepared_by} onChange={handleChange}>
              {userOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Documents Received Date</label>
            <input className="w3-input" type="date" name="docs_received_date" value={form.docs_received_date} onChange={handleChange} />
          </div>
          <div>
            <label>Date of Inspection</label>
            <input className="w3-input" type="date" name="inspection_date" value={form.inspection_date} onChange={handleChange} />
          </div>
          <div>
            <label>File Status</label>
            <select className="w3-select" name="file_status" required value={form.file_status} onChange={handleChange}>
              <option value="">Select Status</option>
              {fileStatuses.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Plan Approval Authority</label>
            <select className="w3-select" name="plan_approval_authority" value={form.plan_approval_authority} onChange={handleChange}>
              <option value="">--Select Authority--</option>
              {planAuthorities.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Door Number</label>
            <input className="w3-input" type="text" name="door_num" maxLength="100" value={form.door_num} onChange={handleChange} />
          </div>
          <div>
            <label>Ward Number</label>
            <input className="w3-input" type="text" name="ward_num" maxLength="100" value={form.ward_num} onChange={handleChange} />
          </div>
          <div>
            <label>Block Number</label>
            <input className="w3-input" type="text" name="block_num" maxLength="100" value={form.block_num} onChange={handleChange} />
          </div>
          <div>
            <label>Plot Number</label>
            <input className="w3-input" type="text" name="plot_num" maxLength="100" value={form.plot_num} onChange={handleChange} />
          </div>
          <div>
            <label>Name of the Building / Apartment</label>
            <input className="w3-input" type="text" name="building_name" maxLength="200" value={form.building_name} onChange={handleChange} />
          </div>
          <div>
            <label>Survey Number</label>
            <input className="w3-input" type="text" name="survey_num" value={form.survey_num} onChange={handleChange} />
          </div>
          <div>
            <label>Village/Town</label>
            <input className="w3-input" type="text" name="village" maxLength="100" value={form.village} onChange={handleChange} />
          </div>
          <div>
            <label>Mandal</label>
            <input className="w3-input" type="text" name="mandal" maxLength="100" value={form.mandal} onChange={handleChange} />
          </div>
          <div>
            <label>District</label>
            <input className="w3-input" type="text" name="district" maxLength="100" value={form.district} onChange={handleChange} />
          </div>
          <div>
            <label>State</label>
            <input className="w3-input" type="text" name="state" maxLength="50" value={form.state} onChange={handleChange} />
          </div>
          <div>
            <label>PinCode</label>
            <input className="w3-input" type="text" name="pincode" maxLength="6" value={form.pincode} onChange={handleChange} />
          </div>
          <div>
            <label>Remarks</label>
            <input className="w3-input" type="text" name="remarks" maxLength="400" value={form.remarks} onChange={handleChange} />
          </div>
          <div style={{ gridColumn: '1 / span 2' }}>
            <label>Applicant/Customer Details</label>
            <textarea className="w3-input" name="customer_details" placeholder="Name,mobile number,..." required value={form.customer_details} onChange={handleChange}></textarea>
          </div>
          <div>
            <label>Agent/Banker Details</label>
            <input className="w3-input" type="text" name="agent_banker_details" value={form.agent_banker_details} onChange={handleChange} />
          </div>
          <div>
            <label>Bank Reference Number</label>
            <input className="w3-input" type="text" name="bank_ref_number" value={form.bank_ref_number} onChange={handleChange} />
          </div>
        </div>
        <div className="w3-mobile w3-center w3-hover-text-green" style={{ marginTop: 24 }}>
          <button className="w3-button w3-card w3-teal w3-card w3-round-xlarge inward-registry-btn" id="addButton" type="submit" disabled={submitting}>
            <b>{submitting ? 'Registering...' : 'Register'}</b>
          </button>
        </div>
      </form>
    </div>
  );
};

export default InwardRegistryPageNew;
