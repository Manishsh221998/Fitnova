import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Bestsellers = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$49.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
    { id: 2, name: 'Product 2', price: '$59.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
    { id: 3, name: 'Product 3', price: '$39.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
    { id: 4, name: 'Product 4', price: '$69.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
    { id: 5, name: 'Product 5', price: '$89.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
    { id: 6, name: 'Product 6', price: '$79.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
  ];

  return (
    <Box sx={{ padding:4,bgcolor:'white',m:1,borderRadius:2,boxShadow:2 }}>
      <Typography variant="h4" align="start" gutterBottom>
        Our Bestsellers
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ maxWidth: 305, boxShadow:4 ,borderRadius:2}}>
              <CardMedia
                component="img"
                height="100"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {product.price}
                </Typography>
                <Button variant="contained" sx={{bgcolor:'black'}} fullWidth startIcon={<AddShoppingCartIcon sx={{color:'turquoise'}}/>}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Bestsellers;
