import React, { useState } from 'react';
import './ContactInfo.css';  // Include your CSS styles
import { TextField, Button, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';  // Import success icon
import { FaTimes } from 'react-icons/fa'; // Import close icon

const ContactInfo = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    if (name && email && phone && subject && message) {
      try {
        const response = await fetch('https://mahishaindia-tech-rjovd05yf-mahisha-india-technologies-projects.vercel.app/api/contact', {  // Updated URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormSubmitted(true);
          setErrorMessage('');
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        setErrorMessage('Failed to submit the form. Please try again later.');
      }
    } else {
      setFormValid(false);
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-container')) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-container ${isOpen ? 'show' : ''}`}
      onClick={handleOutsideClick}
    >
      <div className="modal-content">
        <FaTimes className="close-icon" onClick={onClose} />
        {!formSubmitted ? (
          <>
            <Typography variant="h5" className="modal-title" style={{ marginBottom: '30px' }}>Contact Us</Typography>
            <Typography className="modal-description">
              Mahisha India Technologies is committed to providing innovative web solutions to meet your business needs. Please fill out the form below to get in touch with us.
            </Typography>
            {errorMessage && <Typography color="error">{errorMessage}</Typography>}
            <form className="modal-form" onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <div className="modal-actions">
                <Button type="submit" variant="contained" color="primary" className="submit-btn" style={{ marginRight: '15px' }}>Submit</Button>
                <Button variant="outlined" color="secondary" onClick={onClose}>Close</Button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-message">
            <CheckCircleIcon className="success-icon" style={{ color: 'green', fontSize: '40px' }} />
            <Typography className="success-text">Your message has been sent successfully!</Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
