import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProd } from "../../../../redux/productSlice/ProductSlice";
import Header from "../../../../layout/header/Header";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Container,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { addCart } from "../../../../redux/cartSlice/CartSlice";
import swAlert from "../../../../swAlert/swAlert";

const SingleProduct = () => {
  let navigate = useNavigate();
  let [singleProd, setSingleProd] = useState({});
  const { id } = useParams();
   console.log(id);
  //   const { isLoading, error } = useSelector((state) => state.product);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProd(id))
      .then((res) => {
        console.log("axios res for single singleProd", res?.payload);
        setSingleProd(res?.payload);
      })
      .catch((err) => console.log("axios error for single singleProd", err));
  }, [dispatch]);

  const handleAddtoCart=(id)=>{
    let userID=sessionStorage.getItem("userId")
    let cartData={
      uid: userID,
      product_id: singleProd?.id,
      product_name: singleProd?.brand,
      price: singleProd?.price,
      qty: 1,
      product_img:singleProd?.prodImage
    }
    dispatch(addCart(cartData))
    .then((result)=>{
      // console.log("result",result);
      if(userID){   
  swAlert("success","Product added to cart successfully",700)
      }
      navigate('/cart')
       })
       .catch((err)=>{
        console.log("something wrong",err);
       })
  }
  return (
    <div>
      <Header />
      <Container
        maxWidth="lg"
        sx={{ marginY: 10, display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            padding: { lg: 10 },
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            boxShadow: 3,
            maxWidth: 900,
            background: 'linear-gradient(55deg, #fff, #CDFCF6)'
                  }}
        >
          {/* Image Section */}
          <CardMedia
            component="img"
            sx={{
              width: { xs: 200, sm: 250, md: 300, lg: 300 },
              height: { xs: 200, sm: 250, md: 300, lg: 300 },
              objectFit: "cover",
              opacity: 1, // Adjust opacity for blending effect
              mixBlendMode: "multiply", // Blend effect with the background gradient 
              padding: 3,
              marginLeft: { xs: 5 },
            }}
            image={singleProd.prodImage}
            alt={singleProd.product_name}
          />

          {/* Details Section */}
          <CardContent sx={{ flex: 1, padding: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography
                  sx={{ fontSize: "2rem", color: "#211951" }}
                  fontWeight="bold"
                >
                  {singleProd.brand}
                </Typography>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="darkgray"
                  sx={{ fontSize: "1.25rem" }}
                >
                  ({singleProd.product_name})
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body1" color="primary" fontWeight="bold">
                  ₹{singleProd.price}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body2" color="error" fontWeight="bold">
                  {singleProd.discount}% off
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary">
                  Weight:{singleProd.weight} kg
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary">
                  Flavour: {singleProd.flavour}
                </Typography>
              </Grid>

              {/* Add to Cart Button */}
              <Grid item xs={12} sx={{ marginBottom: 2 }}>
                <Box mt={2}>
                  <Button
                  onClick={()=>{handleAddtoCart(singleProd?.id)}} 
                    variant="contained"
                    sx={{
                      bgcolor: "turquoise",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                    fullWidth
                    startIcon={<ShoppingCartIcon />}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Discription
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#FAFAF6" }}>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ textAlign: "start" }}
                    >
                      Category: {singleProd.product_category}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ textAlign: "start" }}
                    >
                      Warranty: {singleProd.warranty}
                    </Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default SingleProduct;
