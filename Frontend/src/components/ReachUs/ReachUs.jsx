import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Paper,
  Box,
  Alert,
  Modal,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';

const projectTypes = [
  'Website Development',
  'Mobile Application',
  'E-commerce Platform',
  'UI/UX Design',
  'Web Application',
  'Other',
];

const budgetRanges = [
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $20,000',
  '$20,000+',
];

const ReachUs = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budgetRange: '',
    startDate: '',
    deadline: '',
    communicationMethod: '',
    referenceLink: '',
    projectDescription: '',
    additionalComments: '',
    file: null,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = formValues.fullName && formValues.email; // Basic validation check

    if (isFormValid) {
      const formData = new FormData();
      formData.append('fullName', formValues.fullName);
      formData.append('email', formValues.email);
      formData.append('phone', formValues.phone);
      formData.append('company', formValues.company);
      formData.append('projectType', formValues.projectType);
      formData.append('budgetRange', formValues.budgetRange);
      formData.append('startDate', formValues.startDate);
      formData.append('deadline', formValues.deadline);
      formData.append('referenceLink', formValues.referenceLink);
      formData.append('projectDescription', formValues.projectDescription);
      formData.append('additionalComments', formValues.additionalComments);
      formData.append('file', formValues.file); // Add file to the form data

      try {
        const response = await axios.post('https://mit-website-orpin.vercel.app/api/reach-us', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        if (response.data.success) {
          setSuccessMessage('Your form was submitted successfully!');
          setErrorMessage('');
          setOpenModal(true);
          handleClear();
        } else {
          setSuccessMessage('');
          setErrorMessage('Something went wrong. Please try again.');
        }
      } catch (error) {
        setSuccessMessage('');
        setErrorMessage('Error submitting form. Please try again later.');
      }
    } else {
      setSuccessMessage('');
      setErrorMessage('Please fill in all required fields.');
    }
  };

  const handleClear = () => {
    setFormValues({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budgetRange: '',
      startDate: '',
      deadline: '',
      referenceLink: '',
      projectDescription: '',
      additionalComments: '',
      file: null,
    });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Paper
        elevation={6}
        sx={{
          padding: '2rem',
          borderRadius: '20px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          border: '1px solid #e0e0e0',
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}
        >
          Let's Work Together
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ mb: 4, color: '#555' }}
        >
          Tell us about your project and let's collaborate!
        </Typography>

        {errorMessage && <Alert severity="error" sx={{ mb: 3 }}>{errorMessage}</Alert>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Full Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="fullName"
                label="Full Name"
                fullWidth
                variant="outlined"
                value={formValues.fullName}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#00796b' },
                    '&:hover fieldset': { borderColor: '#004d40' },
                    '&.Mui-focused fieldset': { borderColor: '#00332a' },
                  },
                  '& .MuiInputLabel-root': { color: '#00796b' },
                }}
              />
            </Grid>
            {/* Email Address */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                value={formValues.email}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#00796b' },
                    '&:hover fieldset': { borderColor: '#004d40' },
                    '&.Mui-focused fieldset': { borderColor: '#00332a' },
                  },
                  '& .MuiInputLabel-root': { color: '#00796b' },
                }}
              />
            </Grid>
            {/* Phone Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="phone"
                label="Phone Number"
                type="tel"
                fullWidth
                variant="outlined"
                value={formValues.phone}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#00796b' },
                    '&:hover fieldset': { borderColor: '#004d40' },
                    '&.Mui-focused fieldset': { borderColor: '#00332a' },
                  },
                  '& .MuiInputLabel-root': { color: '#00796b' },
                }}
              />
            </Grid>
            {/* Company/Organization */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="company"
                label="Company/Organization"
                fullWidth
                variant="outlined"
                value={formValues.company}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#00796b' },
                    '&:hover fieldset': { borderColor: '#004d40' },
                    '&.Mui-focused fieldset': { borderColor: '#00332a' },
                  },
                  '& .MuiInputLabel-root': { color: '#00796b' },
                }}
              />
            </Grid>
            {/* Project Type */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel
                  sx={{
                    color: '#00796b',
                    backgroundColor: '#f9f9f9',
                    '&.Mui-focused': {
                      color: '#00332a',
                    },
                  }}
                >
                  Project Type
                </InputLabel>
                <Select
                  name="projectType"
                  value={formValues.projectType}
                  onChange={handleChange}
                  displayEmpty
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#00796b' },
                      '&:hover fieldset': { borderColor: '#004d40' },
                      '&.Mui-focused fieldset': { borderColor: '#00332a' },
                    },
                    '& .MuiSelect-icon': { color: '#00796b' },
                    '& .MuiSelect-select': {
                      paddingTop: '16px',
                      paddingBottom: '16px',
                    },
                  }}
                >
                  <MenuItem value="" disabled></MenuItem>
                  {projectTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* Budget Range */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel
                  sx={{
                    color: '#00796b',
                    backgroundColor: '#f9f9f9',
                    '&:hover': {
  color: '#00332a',
}

                  }}
                >
                  Budget Range
                </InputLabel>
                <Select
                  name="budgetRange"
                  value={formValues.budgetRange}
                  onChange={handleChange}
                  displayEmpty
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#00796b' },
                      '&:hover fieldset': { borderColor: '#004d40' },
                      '&.Mui-focused fieldset': { borderColor: '#00332a' },
                    },
                    '& .MuiSelect-icon': { color: '#00796b' },
                  }}
                >
                  <MenuItem value="" disabled></MenuItem>
                  {budgetRanges.map((range) => (
                    <MenuItem key={range} value={range}>
                      {range}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* Start Date */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="startDate"
                label="Start Date"
                type="date"
                fullWidth
                variant="outlined"
                value={formValues.startDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#00796b' },
                    '&:hover fieldset': { borderColor: '#004d40' },
                    '&.Mui-focused fieldset': { borderColor: '#00332a' },
                  },
                }}
              />
            </Grid>
            {/* Deadline */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="deadline"
                label="Deadline"
                type="date"
                fullWidth
                variant="outlined"
                value={formValues.deadline}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#00796b' },
                    '&:hover fieldset': { borderColor: '#004d40' },
                    '&.Mui-focused fieldset': { borderColor: '#00332a' },
                  },
                }}
              />
            </Grid>
            {/* Communication Method */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    color: '#00796b',
                    backgroundColor: '#f9f9f9',
                    '&.Mui-focused': {
                      color: '#00332a',
                    },
                  }}
                >
                  Preferred Communication Method
                </InputLabel>
                <Select
                  name="communicationMethod"
                  value={formValues.communicationMethod}
                  onChange={handleChange}
                  displayEmpty
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#00796b' },
                      '&:hover fieldset': { borderColor: '#004d40' },
                      '&.Mui-focused fieldset': { borderColor: '#00332a' },
                    },
                    '& .MuiSelect-icon': { color: '#00796b' },
                  }}
                >
                  <MenuItem value="" disabled></MenuItem>
                  <MenuItem value="Email">Email</MenuItem>
                  <MenuItem value="Phone">Phone</MenuItem>
                  <MenuItem value="In-Person">In-Person</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Reference Link */}
            <Grid item xs={12}>
              <TextField
                name="referenceLink"
                label="Reference Link (if any)"
                fullWidth
                variant="outlined"
                value={formValues.referenceLink}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#00796b' },
                    '&:hover fieldset': { borderColor: '#004d40' },
                    '&.Mui-focused fieldset': { borderColor: '#00332a' },
                  },
                }}
              />
            </Grid>
            {/* Project Description */}
            <Grid item xs={12}>
              <TextField
                name="projectDescription"
                label="Project Description"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={formValues.projectDescription}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#00796b' },
                    '&:hover fieldset': { borderColor: '#004d40' },
                    '&.Mui-focused fieldset': { borderColor: '#00332a' },
                  },
                }}
              />
            </Grid>
            {/* Additional Comments */}
            <Grid item xs={12}>
              <TextField
                name="additionalComments"
                label="Additional Comments"
                fullWidth
                multiline
                rows={3}
                variant="outlined"
                value={formValues.additionalComments}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#00796b' },
                    '&:hover fieldset': { borderColor: '#004d40' },
                    '&.Mui-focused fieldset': { borderColor: '#00332a' },
                  },
                }}
              />
            </Grid>
            {/* File Upload */}
            <Grid item xs={12}>
              <input
                type="file"
                name="file"
                accept="*"
                onChange={handleChange}
                style={{ marginBottom: '16px' }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              borderRadius: '20px',
              backgroundColor: '#00796b',
              '&:hover': {
                backgroundColor: '#004d40',
              },
            }}
          >
            Submit
          </Button>
        </form>

        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <Paper
              elevation={6}
              sx={{
                padding: '2rem',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                {successMessage}
              </Typography>
              <Button onClick={handleCloseModal} variant="outlined" color="primary">
                Close
              </Button>
            </Paper>
          </Box>
        </Modal>
      </Paper>
    </Container>
  );
};

export default ReachUs;

