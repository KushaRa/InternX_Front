import React from 'react';
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
          <Grid container spacing={2}>
            <Grid item xs={6} className="gridItem companyName">
              <FilledInput className="inputBox" placeholder="Company Name *" disableUnderline fullWidth />
            </Grid>
            <Grid item xs={6} className="gridItem jobTitle">
              <FilledInput className="inputBox" placeholder="Job Title *" disableUnderline fullWidth />
            </Grid>
            <Grid item xs={6} className="gridItem jobType">
              <FormControl className="formControl" variant="filled" fullWidth>
                <InputLabel style={{ color: '#727171' }}>Job Type</InputLabel>
                <Select className="selectBox" disableUnderline defaultValue="" style={{ backgroundColor: '#0000', color: '#fff', border: '2px solid #00B4D8' }}>
                  <MenuItem value="" disabled className="menuItem">
                    Job Type
                  </MenuItem>
                  <MenuItem value="On-site" className="menuItem">On-site</MenuItem>
                  <MenuItem value="Online" className="menuItem">Online</MenuItem>
                  <MenuItem value="Hybrid" className="menuItem">Hybrid</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} className="gridItem duration">
              <FilledInput className="inputBox" placeholder="Duration *" disableUnderline fullWidth />
            </Grid>
            <Grid item xs={6} className="gridItem location">
              <FilledInput className="inputBox" placeholder="Location *" disableUnderline fullWidth />
            </Grid>
            <Grid item xs={6} className="gridItem email">
              <FilledInput className="inputBox" placeholder="Email *" disableUnderline fullWidth />
            </Grid>
            <Grid item xs={12} className="gridItem description">
              <FilledInput
                className="inputBox"
                placeholder="Description *"
                disableUnderline
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
          <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption">*Required Fields</Typography>
            <Button
              className="PostIntern"
              style={{
                backgroundColor: '#00B4D8',
                marginTop: '10px',
                borderRadius: '4px',
                padding: '10px 20px',
                width: '100px',
                height: '45px',
                color: 'rgb(0, 0, 0)',
                fontWeight: 'bolder',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease-in-out',
                border: '1px solid #00B4D8',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#00B4D8')}
              onClick={handleClose} //This Part Will change in future. Add this line to close the dialog when clicking the Post button
            >
              Post
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default NewIntern;
