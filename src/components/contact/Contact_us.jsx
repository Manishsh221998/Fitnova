import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Divider } from '@mui/material';
import Add_product from '../admin_panel/Add_product/Add_product';
import Header from '../../layout/header/Header';
import BMICalculator from '../../BMI';
import CalorieCalculator from '../../CalorieCalculator';
import swAlert from '../../swAlert/swAlert';

const Contact_us = () => {
  const greetMsg = () => swAlert('success', 'Message sent successfully');

  const handleSubmit = (event) => {
    // event.preventDefault(); // Prevents the default page reload
    greetMsg();
  };

  return (
    <>
      <Header />
      <Container component="form" maxWidth="md" style={{ marginTop: '5rem' }} onSubmit={handleSubmit}>
        <Typography
          sx={{
            textAlign: 'start',
            fontSize: '2rem',
            background: 'linear-gradient(95deg, #32E0C4, #54E346)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
          gutterBottom
        >
          Contact us
        </Typography>
        <Divider sx={{ marginBottom: 3 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '2rem' }}>
              <Typography variant="h6">Get in Touch</Typography>
              <TextField fullWidth label="Your Name" margin="normal" variant="outlined" />
              <TextField fullWidth label="Your Email" margin="normal" variant="outlined" />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                type="submit"
                style={{ marginTop: '1rem', backgroundColor: 'black' }}
              >
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
        <Container maxWidth="md" sx={{ marginTop: 6 }}>
          <Typography
            sx={{
              textAlign: 'start',
              fontSize: '2rem',
              background: 'linear-gradient(95deg, #32E0C4, #54E346)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
            gutterBottom
          >
            Know your BMI
          </Typography>
          <Divider sx={{ marginBottom: 3 }} />
          <BMICalculator />
          <Typography
            sx={{
              marginTop: 6,
              textAlign: 'start',
              fontSize: '2rem',
              background: 'linear-gradient(95deg, #32E0C4, #54E346)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
            gutterBottom
          >
            Calculate your Calories
          </Typography>
          <Divider sx={{ marginBottom: 3 }} />
          <CalorieCalculator />
        </Container>
      </Container>
    </>
  );
};

export default Contact_us;
