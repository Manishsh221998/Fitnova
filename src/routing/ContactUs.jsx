import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -74.003,
};

const ContactUs = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h6">Get in Touch</Typography>
            <TextField
              fullWidth
              label="Your Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Your Email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
              Send Message
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <Container>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29436.598697226287!2d88.5081754!3d22.7440389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730664800409!5m2!1sen!2sin"
          width="100%"
          height="425"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Paper>
    </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
