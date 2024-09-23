import React, { useState } from 'react';
import {
  Box,
  Grid,
  FilledInput, 
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import './applyJob.css';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const NewCV = ({ open, handleClose }) => {
  const [CVData, setCVData] = useState({
    student_name: '',
    student_email: '',
    cv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCVData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(CVData); // Debugging: Check the form data before submitting

    try {
        const response = await axios.post('http://localhost:8000/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(CVData),
      });

      if (response.ok) {
        console.log('Data submitted successfully!');
        alert('Resume submitted successfully!');
        const result = await response.json();
        console.log('Success:', result);
        setCVData({
          student_name: '',
          student_email: '',
          cv: ''
        });
        handleClose();
      } else {
        console.error('Error:', response.statusText);
        alert('Failed to submit the resume.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Resume Submitted Succesfully.');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth className="dialog">
      <Box className="dialogBox">
        <DialogTitle className="dialogTitle">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography>Resume Submission</Typography>
            <IconButton edge="end" style={{ color: '#00B4D8' }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent className="dialogContent">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="column">
              <Grid item container spacing={2}>
                <Grid item xs={6} className="gridItem">
                  <FilledInput
                    className="inputBox"
                    placeholder="Name *"
                    disableUnderline
                    fullWidth
                    name="student_name"
                    value={CVData.student_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6} className="gridItem">
                  <FilledInput
                    className="inputBox"
                    placeholder="Email *"
                    disableUnderline
                    fullWidth
                    name="student_email"  // Corrected the name attribute
                    value={CVData.student_email}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={12} className="gridItem">
                  <FilledInput
                    className="inputBox"
                    placeholder="Resume Link *"
                    disableUnderline
                    fullWidth
                    name="cv"
                    value={CVData.cv}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} className="gridItem" style={{ textAlign: 'right' }}>
                <Button
                  className="PostCV"
                  type="submit"
                  style={{
                    backgroundColor: '#00B4D8',
                    marginTop: '10px',
                    borderRadius: '4px',
                    padding: '10px 20px',
                    width: '100px',
                    height: '45px',
                    color: 'rgb(0, 0, 0)',
                    fontWeight: 'bolder',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease-in-out',
                    border: '1px solid #00B4D8',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#00B4D8')}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default NewCV;
