import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(calculatedBMI);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        BMI Calculator
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Height (cm)"
              type="number"
              variant="outlined"
              fullWidth
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Weight (kg)"
              type="number"
              variant="outlined"
              fullWidth
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={calculateBMI}
            >
              Calculate BMI
            </Button>
          </Grid>
          {bmi && (
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                Your BMI: {bmi}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color={
                  bmi < 18.5 ? 'info.main' :
                  bmi < 24.9 ? 'success.main' :
                  bmi < 29.9 ? 'warning.main' :
                  'error.main'
                }
              >
                {bmi < 18.5
                  ? 'Underweight'
                  : bmi < 24.9
                  ? 'Normal weight'
                  : bmi < 29.9
                  ? 'Overweight'
                  : 'Obese'}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
}
