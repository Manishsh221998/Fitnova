import React from "react";
 import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
 } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import MedicationIcon from "@mui/icons-material/Medication";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
const AboutUs = () => {
   
      
  return (
    <Container maxWidth="xl" sx={{backgroundImage:'url(https://images.pond5.com/paper-texture-noise-animated-stop-footage-148295348_iconl.jpeg)',borderRadius:6,marginTop:1}}>

    <Container maxWidth="lg">
      {/* Hero Section */}
      <Container maxWidth="lg" style={{ padding: "2rem",marginTop:"3rem" }}>
        <Typography variant="h4" align="center" gutterBottom>
          <Divider sx={{fontWeight:'600'}}>About Us</Divider>
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          At Fitnova, we are passionate about empowering individuals to take
          charge of their health and wellness journey. Founded with a commitment
          to quality and innovation, we offer a diverse range of health products
          designed to meet the unique needs of our customers.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                background: "#D4F6FF",
                "&:hover": { color: "white", background: "#624E88" },
              }}
            >
              <CardContent>
                <SpaIcon />
                <Typography variant="h6" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body2" sx={{ textWrap: "wrap" }}>
                  To be a global leader in health products, inspiring people to
                  embrace a healthier lifestyle.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                background: "#DFFFD8",
                "&:hover": { color: "white", background: "#624E88" },
              }}
            >
              <CardContent>
                <DirectionsRunIcon />
                <Typography variant="h6" gutterBottom>
                  Our Values
                </Typography>
                <Typography variant="body2">
                  At Fitnova, Integrity, Innovation, and Inclusivity are the
                  pillars that guide us in every aspect of our work. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                background: "#FFE3E3",
                "&:hover": {
                  color: "white",
                  background: "#624E88",
                  boxShadow: 4,
                },
              }}
            >
              <CardContent>
                <MedicationIcon />
                <Typography variant="h6" gutterBottom>
                  Our Products
                </Typography>
                <Typography variant="body2">
                  At Fitnova, we provide a diverse range of health products
                  tailored to meet your unique needs.{" "}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                background: "#F5EFFF",
                "&:hover": {
                  color: "white",
                  background: "#624E88",
                  boxShadow: 4,
                },
              }}
            >
              <CardContent>
                <FitnessCenterIcon />
                <Typography variant="h6" gutterBottom>
                  Our Goals
                </Typography>
                <Typography variant="body2">
                  Transform your potential into progress with Fitnova—your
                  dedicated partner in health and wellness.{" "}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* <Typography variant="h5" align="center" style={{ marginTop: "2rem" }}>
          Join us on our journey to better health!
        </Typography> */}
      </Container>
     
    </Container>
    </Container>

  );
};

export default AboutUs;
