import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">Let’s get in touch and talk about your next project.</p>

      <div className="contact-details">
        <p>
          <strong>Address:</strong><br />
          #8-3-903/7/A, 1st Floor, Padmaja Villa,<br />
          Opp. Nagarjuna Nagar Community Hall,<br />
          Ameerpet, Hyderabad - 500016, Telangana.
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:lickittu1@gmail.com">lickittu1@gmail.com</a><br />
          <strong>Phone:</strong>{' '}
          <a href="tel:+919989127222">9989127222</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
