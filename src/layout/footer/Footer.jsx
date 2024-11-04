import React from 'react';
import { Box, Grid2, Typography, Link, Divider, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor:'#CCD3CA',
        color: '#181C14',
        p: 4,
        mt: 'auto',
        textAlign:'start',
        borderRadius:4,
        m:1
       }}
    >
      <Grid2 container spacing={4}>
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="body2" sx={{ mt: 1 , textWrap:'wrap'}}>
            We are dedicated to providing exceptional service and quality products.
          </Typography>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6">Quick Links</Typography>
           <Link href="#" color="inherit" variant="body2" underline='none'>Home</Link><br />
          <Link href="#" color="inherit" variant="body2" underline='none'>Services</Link><br />
          <Link href="#" color="inherit" variant="body2" underline='none'>Contact</Link><br />
          <Link href="#" color="inherit" variant="body2" underline='none'>Privacy Policy</Link>
         </Grid2>
        <Grid2 item xs={12} sm={6} md={3}>
          {/* <Typography variant="h6">Follow Us</Typography>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <Link href="#" color="inherit" sx={{'&:hover':{color:'blue'}}}><FacebookIcon /></Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}><TwitterIcon /></Link>
            <Link href="#" color="inherit" sx={{'&:hover':{color:'red'}}}><InstagramIcon /></Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}><LinkedInIcon /></Link>
          </Box> */}
        </Grid2>
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>Email: support@yourcompany.com</Typography>
          <Typography variant="body2">Phone: (123) 456-7890</Typography>
        </Grid2>
      </Grid2>
      <Divider sx={{ my: 3, bgcolor: 'white' }} />
    <Stack direction='row' sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
      <Typography variant="body2" align="start">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
      <Typography >
      <Link href="#" color="inherit" sx={{'&:hover':{color:'blue'}}}><FacebookIcon /></Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}><TwitterIcon /></Link>
            <Link href="#" color="inherit" sx={{'&:hover':{color:'red'}}}><InstagramIcon /></Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}><LinkedInIcon /></Link>
      </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
