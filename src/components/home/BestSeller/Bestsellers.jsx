import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Button, Divider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../../redux/productSlice/ProductSlice';
import { Link } from 'react-router-dom';
const Bestsellers = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$49.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
    { id: 2, name: 'Product 2', price: '$59.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
    { id: 3, name: 'Product 3', price: '$39.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
    { id: 4, name: 'Product 4', price: '$69.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
    { id: 5, name: 'Product 5', price: '$89.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
    { id: 6, name: 'Product 6', price: '$79.99', image: 'https://img9.hkrtcdn.com/27298/prd_2729758-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg' },
  ];
  let[data,setData]=useState([])
  let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProduct())
    .then(res=>{
      console.log("axios res for Best sellers",res?.payload)
setData(res?.payload)
    })
    .catch(err=>console.log("axios error for best seller",err))
  },[dispatch])

  return (
    <Box sx={{ padding:3,bgcolor:'white',m:1,borderRadius:2,boxShadow:2 }}>

      <Typography sx={{textAlign:'start',fontSize:"2rem",background: 'linear-gradient(95deg, #32E0C4, #54E346)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',fontWeight:'bold'}} gutterBottom>
        Our Bestsellers
        </Typography>
      <Divider sx={{marginBottom:3}}/>
      <Grid container spacing={3} justifyContent="center">
        {data.slice(0,8).reverse().map((v) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
            <Card sx={{ maxWidth: 350, boxShadow:3 ,borderRadius:2,'&:hover':{boxShadow:0}}}>
              <CardMedia
              sx={{padding:'2.5rem'}}
                component="img"
                height="100"
                image={v.prodImage}
                alt={v.brand}
                sx={{
                  padding: 5,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(0.9)",
                  },
                }}
               />
              <Divider/>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {v.brand}
                </Typography>
               <Typography  sx={{fontSize:'1.1rem',paddingBottom:1,fontWeight:550,color:'black'}}>
               <span style={{color:'grey'}}>Price:</span> ₹{v.price}
                </Typography>
               <Link to='/product'><Button variant="contained" sx={{bgcolor:'#40E0D0',color:'white',fontWeight:'bold'}} fullWidth >
                  view more
                </Button></Link> 
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Bestsellers;
