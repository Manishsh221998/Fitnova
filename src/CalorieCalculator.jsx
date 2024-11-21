import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';

const CalorieCalculator = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    let bmr;

    // Calculate BMR (Basal Metabolic Rate)
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      alert('Please select a gender.');
      return;
    }

    // Adjust for activity level
    const activityMultipliers = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      extraActive: 1.9,
    };

    const multiplier = activityMultipliers[activityLevel];
    if (!multiplier) {
      alert('Please select an activity level.');
      return;
    }

    const totalCalories = bmr * multiplier;
    setCalories(totalCalories.toFixed(2));
  };

  return (
    <Container maxWidth="md" sx={{ marginBottom:10 }}>
      <Paper elevation={3} sx={{ padding: 3 ,borderRadius:2}}>
         {/* <Typography sx={{textAlign:'start',fontSize:"2rem",background: 'linear-gradient(95deg, #32E0C4, #54E346)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',fontWeight:'bold'}} gutterBottom>
       Count your Calories
      </Typography>
      <Divider sx={{marginBottom:3}}/> */} 
        <Grid container spacing={2} sx={{p:2}}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Age (years)"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Weight (kg)"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Height (cm)"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="activity-level-label">Activity Level</InputLabel>
              <Select
                labelId="activity-level-label"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
              >
                <MenuItem value="sedentary">Sedentary (little or no exercise)</MenuItem>
                <MenuItem value="lightlyActive">Lightly Active (light exercise)</MenuItem>
                <MenuItem value="moderatelyActive">Moderately Active (moderate exercise)</MenuItem>
                <MenuItem value="veryActive">Very Active (hard exercise)</MenuItem>
                <MenuItem value="extraActive">Extra Active (very hard exercise)</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{bgcolor:'black',color:'white'}}
              onClick={calculateCalories}
            >
              Calculate Calories
            </Button>
          </Grid>

          {calories && (
            <Grid item xs={12}>
              <Box
                sx={{
                  textAlign: 'center',
                  marginTop: 2,
                  padding: 2,
                  backgroundColor: '#f5f5f5',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6">
                  Your daily calorie needs: <strong>{calories} kcal</strong><br />
                  <Link to='/product'><Box sx={{color:'GrayText',fontSize:'16px',background: 'linear-gradient(95deg, #32E0C4, #54E346)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',fontWeight:'bold'}}>Fuel your body, with our-FITNOVA protein supplements that help to you conquer your daily calorie needs with ease!</Box></Link>
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default CalorieCalculator;
