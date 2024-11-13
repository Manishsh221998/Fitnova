import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Divider } from '@mui/material';

const deals = [
  {
    backgroundColor: '#FBFBFB',
    title: 'Super Combo Sale',
    price: '₹849',
    discount: 'Flat 50% OFF',
    description: '480G @ ₹1698',
    image: 'https://img3.hkrtcdn.com/17360/prd_1735972-ON-Optimum-Nutrition-Serious-Mass-6.6-lb-Chocolate_o.jpg',  // Replace with actual image paths
  },
  {
    backgroundColor: '#FBFBFB',
    title: 'Wellness Essentials',
    price: '3499    ',
    discount: 'MRP ₹2299',
    description: 'Best deals on wellness products',
    image: 'https://img10.hkrtcdn.com/30394/prd_3039339-MuscleBlaze-High-Protein-Muesli-1-kg-Dark-Chocolate-Cranberry_o.jpg',
  },
  {
    backgroundColor: '#FBFBFB',
    title: '1kg Whey Protein Range',
    price: 'Now ₹1899',
    discount: 'MRP ₹2299',
    description: 'High-quality protein',
    image: 'https://img4.hkrtcdn.com/28086/prd_2808573-ASITIS-Nutrition-ATOM-Mass-Gainer-8.8-lb-Double-Rich-Chocolate_o.jpg',
  },
  {
    backgroundColor: '#FBFBFB',
    title: 'Get Additional ₹500 OFF',
    price: 'Now ₹4899',
    discount: 'MRP ₹6299',
     description: 'On selected products',
    image: 'https://img2.hkrtcdn.com/33797/prd_3379601-One-Science-100-Premium-Whey-Protein-5-lb-Cranberry-Pie_o.jpg',
  },
];

const DealsSection = () => {
  return (
    <Box sx={{ p:4,borderRadius:2,boxShadow:2,m:1 }}>
      <Typography sx={{textAlign:'start',fontSize:"2rem",background: 'linear-gradient(95deg, #32E0C4, #54E346)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',fontWeight:'bold'}} gutterBottom>
        Deals you can't miss
      </Typography>
      <Divider sx={{marginBottom:3}}/>
      <Grid container spacing={2}>
        {deals.map((deal, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: deal.backgroundColor,
                // backgroundImage:`url(${deal.image})`,
                borderRadius: 2,
                color: 'grey',
              }}
            >
              <CardContent sx={{ textAlign: 'center', color: 'black' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {deal.title}
                </Typography>
                {deal.price && (
                  <Typography variant="h5" sx={{ color: '#ffb703', fontWeight: 'bold' }}>
                    {deal.price}
                  </Typography>
                )}
                {deal.discount && (
                  <Typography variant="body2" sx={{ textDecoration: 'line-through', mb: 1 }}>
                    {deal.discount}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {deal.description}
                </Typography>
                <Box
                  component="img"
                  src={deal.image}
                  alt={deal.title}
                  sx={{ maxWidth: '55%', maxHeight: 210,
                     opacity:1, // Adjust opacity for blending effect
                    mixBlendMode: "multiply", // Blend effect with the background gradient
                      }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DealsSection;
