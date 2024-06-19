import React, { useState } from 'react';
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  InputLabel,
  FormControl,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import './newIntern.css';
import CloseIcon from '@mui/icons-material/Close';

const NewIntern = ({ open, handleClose }) => {
  const [InternData, setInternData] = useState({
    company_name: '',
    title: '',
    job_type: '',
    duration: '',
    location: '',
    email: '',
    description: ''
  });

  const handleChangeNewIntern = (e) => {
    const { name, value } = e.target;
    setInternData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitNewIntern = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/submit-add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(InternData),
      });
      if (response.ok) {
        console.log('Data submitted successfully!');
        alert('Data submitted successfully!');
        const result = await response.json();
        console.log('Success:', result);
        alert('Post submitted successfully!');
        setInternData({
          company_name: '',
          title: '',
          job_type: '',
          duration: '',
          location: '',
          email: '',
          description: '',
        });
        handleClose();
      } else {
        console.error('Error:', response.statusText);
        alert('Failed to submit the post.');
      }
    } catch (error) {
      console.error('Error:', error);
      // alert('Post Submitted.');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth className="dialog">
      <Box className="dialogBox">
        <DialogTitle className="dialogTitle">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography>Post Intern</Typography>
            <IconButton edge="end" style={{ color: '#00B4D8' }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent className="dialogContent">
          <form onSubmit={handleSubmitNewIntern}>
            <Grid container spacing={2} direction="column">
              {/* First Section: Two Inputs in Two Columns */}
              <Grid item container spacing={2}>
                <Grid item xs={6} className="gridItem">
                  <FilledInput
                    className="inputBox"
                    placeholder="Company Name *"
                    disableUnderline
                    fullWidth
                    name="company_name"
                    value={InternData.company_name}
                    onChange={handleChangeNewIntern}
                  />
                </Grid>
                <Grid item xs={6} className="gridItem">
                  <FilledInput
                    className="inputBox"
                    placeholder="Title *"
                    disableUnderline
                    fullWidth
                    name="title"
                    value={InternData.title}
                    onChange={handleChangeNewIntern}
                  />
                </Grid>
              </Grid>
              {/* Second Section: Job Type and Duration in One Row */}
              <Grid item container spacing={2}>
                <Grid item xs={6} className="gridItem">
                  <FormControl className="formControl" variant="filled" fullWidth>
                    <InputLabel style={{ color: '#727171' }}>Job Type</InputLabel>
                    <Select
                      className="selectBox"
                      disableUnderline
                      name="job_type"
                      value={InternData.job_type}
                      onChange={handleChangeNewIntern}
                      style={{
                        backgroundColor: '#0000',
                        color: '#fff',
                        border: '2px solid #00B4D8',
                      }}
                    >
                      <MenuItem value="" disabled className="menuItem">
                        Job Type
                      </MenuItem>
                      <MenuItem value="On-site" className="menuItem">On-site</MenuItem>
                      <MenuItem value="Online" className="menuItem">Online</MenuItem>
                      <MenuItem value="Hybrid" className="menuItem">Hybrid</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} className="gridItem">
                  <FilledInput
                    className="inputBox"
                    placeholder="Duration *"
                    disableUnderline
                    fullWidth
                    name="duration"
                    value={InternData.duration}
                    onChange={handleChangeNewIntern}
                  />
                </Grid>
              </Grid>
              {/* Third Section: Location and Email in One Row */}
              <Grid item container spacing={2}>
                <Grid item xs={6} className="gridItem">
                  <FilledInput
                    className="inputBox"
                    placeholder="Location *"
                    disableUnderline
                    fullWidth
                    name="location"
                    value={InternData.location}
                    onChange={handleChangeNewIntern}
                  />
                </Grid>
                <Grid item xs={6} className="gridItem">
                  <FilledInput
                    className="inputBox"
                    placeholder="Email *"
                    disableUnderline
                    fullWidth
                    name="email"
                    value={InternData.email}
                    onChange={handleChangeNewIntern}
                  />
                </Grid>
              </Grid>
              {/* Fourth Section: Description Input */}
              <Grid item className="gridItem">
                <FilledInput
                  className="inputBox"
                  placeholder="Description *"
                  disableUnderline
                  fullWidth
                  multiline
                  rows={4}
                  name="description"
                  value={InternData.description}
                  onChange={handleChangeNewIntern}
                />
              </Grid>
              {/* Fifth Section: Post Button and Required Fields Message */}
              <Grid item container spacing={2} alignItems="center">
                {/* First Column: Required Fields Message */}
                <Grid item xs={6} className="gridItem">
                  <Typography variant="caption" style={{ textAlign: 'left' }}>
                    *Required Fields
                  </Typography>
                </Grid>
                {/* Second Column: Post Button */}
                <Grid item xs={6} className="gridItem" style={{ textAlign: 'right' }}>
                  <Button
                    className="PostIntern"
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
                    onClick={handleClose}
                  >
                    Post
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default NewIntern;
