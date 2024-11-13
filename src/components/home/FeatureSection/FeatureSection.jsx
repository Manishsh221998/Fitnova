import React from 'react';
import { Grid, Box, Typography, Stack, Container } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import ReplayIcon from '@mui/icons-material/Replay';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const FeatureSection = () => {
  return (
     <Box sx={{ p: 4, backgroundColor: '#f9f9f9',boxShadow:2,borderRadius:2,m:1}}>
      <Grid container spacing={2} justifyContent="center">
        
        {/* Free Shipping & Returns */}
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
<Stack direction='row' gap={4} sx={{justifyContent:'center',alignItems:'center'}}>
            <LocalShippingIcon  sx={{ fontSize: 40, color:'#40E0D0','&:hover':{color:'tomato'} }}/>
            <span >
             <Typography  sx={{ fontWeight: 'bold',fontSize:'1rem' }}>Free Shipping & Returns</Typography>
            <Typography sx={{fontSize:'0.8rem' }}>For all orders over 199.00</Typography>
            </span>
            </Stack>
           </Box>
        </Grid>
        
        {/* Secure Payment */}
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
          <Stack direction='row' gap={4} sx={{justifyContent:'center',alignItems:'center'}}>

            <LockIcon  sx={{ fontSize: 40, color:'#40E0D0','&:hover':{color:'tomato'} }} />
            <span>
            <Typography sx={{ fontWeight: 'bold',fontSize:'1rem' }}>Secure Payment</Typography>
            <Typography sx={{fontSize:'0.8rem' }}>We ensure secure payment</Typography>
            </span>

            </Stack>

          </Box>
        </Grid>
        
        {/* Money Back Guarantee */}
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
          <Stack direction='row' gap={4} sx={{justifyContent:'center',alignItems:'center'}}>
            <ReplayIcon  sx={{ fontSize: 40, color:'#40E0D0','&:hover':{color:'tomato'} }} />
            <span>
            <Typography sx={{ fontWeight: 'bold',fontSize:'1rem' }}>Money Back Guarantee</Typography>
            <Typography sx={{fontSize:'0.8rem' }}>Returning money 30 days</Typography>
            </span>
</Stack>
          </Box>
        </Grid>
        
        {/* 24/9 Customer Support */}
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
          <Stack direction='row' gap={4} sx={{justifyContent:'center',alignItems:'center'}}>
            <SupportAgentIcon sx={{ fontSize: 40, color:'#40E0D0','&:hover':{color:'tomato'} }} />
            <span>
            <Typography sx={{ fontWeight: 'bold',fontSize:'1rem' }}>24/7 Customer Support</Typography>
            <Typography sx={{fontSize:'0.8rem' }}>Friendly customer support</Typography>
            </span>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
   );
};

export default FeatureSection;
