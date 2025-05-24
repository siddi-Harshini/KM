import React, { useState } from 'react';
import '../../styles/InwardRegistryPageNew.css';

const propertyTypes = [
  '', 'New_Land_and_Building', 'Old_Land_and_Building', 'Land_and_Building', 'Open_Plot', 'New_Flat', 'Old_Flat', 'Flat', 'Semi_Finished_L&B', 'Semi_Finished_Flat', 'Commercial', 'Industrial', 'Villa', 'Commercial L&B', 'Commercial Flat', 'Villa Composite', 'Villa L&B', 'Apartment', 'Agriculture_Land', 'Gated Community', 'Group Housing', 'Horticulture', 'High Rise Apartments'
];
const valuationTypes = [
  '', 'Fresh Valuation', 'ReValuation', 'Stage Completion Certificate', 'Estimation', 'Structural Stability Certificate', 'Private Valuation', 'Revised Valuation', 'STAGE', 'Mater Valuation/Tie-up report', 'Visa Valuations', 'IBBI Valuation', 'NCLT Valuation', 'Incontinuation Letters', 'Capital Gains', 'Estimation Vetting', 'Master Valuation', 'Tie-Up Report', 'Renovation of Civil Works', 'Renovation of Interior Works', 'Proposed Estimation for Civil Works', 'Proposed Estimation for Interior Works', 'Proposed Estimation for PEB Structure'
];
const purposes = [
  { value: '', label: '--Select Purpose--' },
  { value: 'For Bank Security Lending Purpose-Housing Loan', label: 'Housing Loan' },
  { value: 'For bank Security lending purpose', label: 'For bank Security lending purpose' },
  { value: 'Wetting Certificate', label: 'Wetting Certificate' },
  { value: 'For Bank Security Lending Purpose-Education Loan', label: 'Education Loan' },
  { value: 'Improvements/Renovation works', label: 'Improvements/Renovation works' },
  { value: 'For Bank Security Lending Purpose-Top-up', label: 'Top-up' },
  { value: 'For Bank Security Lending Purpose-Self Construction', label: 'Self Construction' },
  { value: 'New Face Lift(NFL)', label: 'New Face Lift(NFL)' },
  { value: 'For Bank Security Lending Purpose-Take Over', label: 'Take Over' },
  { value: 'Take over and Top-up', label: 'Take over and Top-up' },
  { value: 'Resale or Purchase', label: 'Resale or Purchase' },
  { value: 'Gruha Vikas/Mortgage loan', label: 'Gruha Vikas/Mortgage loan' },
  { value: 'Purchase of New House', label: 'Purchase of New House' },
  { value: 'Subsequent', label: 'Subsequent' },
  { value: 'Internal Take over', label: 'Internal Take over' },
  { value: 'Purchase of New flat', label: 'Purchase of New flat' },
  { value: 'To Know the Fair Market Value of NPA Property-Under SARFAESI Act', label: 'NPA' },
  { value: 'To Know the Net Worth Value of the Property', label: 'Private' },
  { value: 'Project Finance', label: 'Project Finance' },
  { value: 'Project Tie-Up', label: 'Project Tie-Up' },
  { value: 'To Know the Fair Market Value of NPA Property-Under SARFAESI Act', label: 'SARFAESI' }
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
  '',
  'admin@gmail.com',
  'siva@gmail.com',
  'sudheer-freelancer@gmail.com',
  'ramarao@gmail.com',
  'vineetha@gmail.com',
  'Gowtham@GMAIL.COM',
  'Ganesh@gmail.com',
  'Chandra@gmail.com',
  'NVKM@gmail.com',
  'Ramesh@gmail.com',
  'Akhil@gmail.com',
  'Sirisha@gmail.com',
  'Hemanth@gmail.com',
  'OutSource@gamil.com',
  'gsandhya@gmail.com',
  'vinithabarishetty@gmail.com',
  'Chaithanyaupashi222@gmail.com',
  'bheemavarapudivya@gmail.com',
  'Naragonianuhya62@gmail.com',
  'sravanisambari756@gmail.com',
  'vijaynagaphanindrakasireddy@gmail.com72',
  'aravindswamy.m@gmail.com',
  'manasamansu76112@gmail.com',
  'Jyothi@gmail.com',
  'Cravikumar931@gmail.com',
  'srivanikanala01@gmail.com',
  'pamulakumar165@gmail.com',
  'kartheek@gmail.com',
  'test@gmail.com',
  'sudheer-report@gmail.com',
  'Chandu@gmail.com',
  'newramesh@gmail.com',
  'sandeep@gmail.com',
  'naresh.6026@gmail.com',
  'sharavan@gmail.com',
  'SUNITHA@GMAIL.COM',
  'prakash@gmail.com',
  'karthikvisits@gmail.com',
  'PraveenFreelancer@gmail.com',
  'nagarajufreelancer@gmail.com',
  'Vikranth@gmail.com',
  'jansi@gmail.com'
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
  bank_ref_number: '',
  prohibited_zone: '' // Added field for 'Listed in Prohibited Zone?'
};

const InwardRegistryPageNew = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  // Hide registry table: do not render it on this page

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Map frontend form fields to backend InwardRegister entity fields
    const payload = {
      fileNumber: form.file_number,
      dataSheetNumber: form.data_sheet_number,
      propertyType: form.Property_Type,
      valuationType: form.valuation_type,
      purpose: form.purpose,
      scheme: form.scheme,
      bank: form.creditor_id ? Number(form.creditor_id) : null, // creditor_id is a number (foreign key)
      issuer: form.issuer,
      fieldEngineer: form.field_engineer,
      reportPreparedBy: form.report_prepared_by,
      docsReceivedDate: form.docs_received_date,
      inspectionDate: form.inspection_date,
      fileStatus: form.file_status,
      planApprovalAuthority: form.plan_approval_authority,
      doorNum: form.door_num,
      wardNum: form.ward_num,
      blockNum: form.block_num,
      plotNum: form.plot_num,
      buildingName: form.building_name,
      surveyNum: form.survey_num,
      villageOrTown: form.village,
      mandal: form.mandal,
      district: form.district,
      state: form.state,
      pincode: form.pincode,
      remarks: form.remarks,
      customerDetails: form.customer_details,
      agentBankerDetails: form.agent_banker_details,
      bankRefNumber: form.bank_ref_number,
      prohibitedZone: form.prohibited_zone
    };
    try {
      const res = await fetch('http://localhost:8085/api/inward_register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to register');
      setForm(initialState);
      alert('Registered!');
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="inward-registry-bg">
      <form className="w3-card inward-registry-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="inward-registry-header w3-green">
          <h4 className="inward-registry-title">Inward Register</h4>
        </div>
        <div className="inward-registry-grid">
          {/* Each field in a grid cell, label+input/select/textarea */}
          <div>
            <label>File Number</label>
            <input className="w3-input" type="text" min="0" name="file_number" id="file_number" required value={form.file_number} onChange={handleChange} onKeyDown={e => {
              // Block comma, space, single quote, period
              if ([188, 32, 222, 190].includes(e.which)) e.preventDefault();
            }} />
          </div>
          <div>
            <label>Data Sheet Number</label>
            <input className="w3-input" type="text" name="data_sheet_number" value={form.data_sheet_number} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="Property_Type">Property Type</label>
            <select className="w3-select" name="Property_Type" id="Property_Type" required value={form.Property_Type} onChange={handleChange}>
              <option value="" selected>Select Property Type-Reset</option>
              {propertyTypes.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Valuation Type</label>
            <select className="w3-select" name="valuation_type" value={form.valuation_type} onChange={handleChange}>
              <option value="" disabled selected>--Select Type--</option>
              {valuationTypes.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Purpose of Valuation</label>
            <select className="w3-select" name="purpose" value={form.purpose} onChange={handleChange}>
              {purposes.map((opt, idx) => (
                <option key={idx} value={opt.value} disabled={opt.value === ''} selected={opt.value === ''}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Scheme</label>
            <select className="w3-select" name="scheme" value={form.scheme} onChange={handleChange}>
              <option value="" disabled selected>Select Scheme</option>
              {schemes.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="creditor_id">Bank name</label>
            <select className="w3-select" name="creditor_id" id="creditor_id" required value={form.creditor_id} onChange={handleChange}>
              <option value="" disabled selected>Select Bank</option>
              {bankOptions.slice(1).map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label>To Whom it was issued</label>
            <select className="w3-select" name="issuer" value={form.issuer} onChange={handleChange}>
              <option value="" disabled selected>Select User</option>
              {userOptions.slice(1).map((email) => (
                <option key={email} value={email}>{email}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Field Engineer</label>
            <select className="w3-select" name="field_engineer" value={form.field_engineer} onChange={handleChange}>
              <option value="" disabled selected>Select User</option>
              {userOptions.slice(1).map((email) => (
                <option key={email} value={email}>{email}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Report Prepared By</label>
            <select className="w3-select" name="report_prepared_by" value={form.report_prepared_by} onChange={handleChange}>
              <option value="" disabled selected>Select User</option>
              {userOptions.slice(1).map((email) => (
                <option key={email} value={email}>{email}</option>
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
              <option value="" disabled selected>Select Status</option>
              {fileStatuses.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Plan Approval Authority</label>
            <select className="w3-select" name="plan_approval_authority" value={form.plan_approval_authority} onChange={handleChange}>
              <option value="" disabled selected>--Select Authority--</option>
              {planAuthorities.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* Add Prohibited Zone field after Plan Approval Authority */}
          <div>
            <label>Listed in Prohibited Zone?</label>
            <select className="w3-select" name="prohibited_zone" value={form.prohibited_zone} onChange={handleChange} required>
              <option value="">--Select--</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
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
