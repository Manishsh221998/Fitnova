import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/productSlice/ProductSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ProductCategoryDrawer from "./ProductCategory/ProductCategoryDrawer";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";
const Allproduct = () => {
  let [data, setData] = useState([]);
  const { isLoading, error } = useSelector((state) => state.product);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct())
      .then((res) => {
        console.log("axios res for All product", res?.payload);
        setData(res?.payload);
      })
      .catch((err) => console.log("axios error for all product", err));
  }, [setData, dispatch]);
   return (
    <>
      <ProductCategoryDrawer />
       <Container maxWidth="lg">
        {/* <Typography variant="h4">Special Offers For You</Typography> */}
        <Grid container spacing={2}>
          {data.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ p: 1, boxShadow:1, m: 1 ,'&:hover':{boxShadow:5}}}>
                <CardMedia
                  component="img"
                  height="25"
                  image={value.prodImage}
                  alt={value.brand}
                  sx={{
                    padding: 5,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.08)",
                    },
                  }}
                />
                <Divider />
                <CardContent sx={{ textAlign: "start" }}>
                  <Typography
                    variant="h6"
                    sx={{ textWrap: "wrap", fontSize: "1.2rem" }}
                  >
                    {value.brand}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "GrayText",
                      marginBottom:'0.3rem',
                    }}
                  >
                    ({value.product_name})
                  </Typography>

                  <Typography
                    sx={{
                      color: "#23120B",
                      fontSize: "1.1rem",
                      fontWeight:'600',
                    }}
                  >
                    {value.price} ₹
                    <span
                      style={{
                        color: "tomato",
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        paddingLeft: "0.6rem",
                      }}
                    >
                      {value?.discount}% off
                    </span>
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "rgb(0, 168, 86)",
                    }}
                  >
                    Inclusive of all taxes
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between",paddingX:'0.8rem'}}>
                  <Link to={`singleProduct/${value.id}`}>
                  <Button
                    variant="outlined"
                    color="warning"
                    sx={{ color: "tomato", textTransform: "none" }}
                  >
                    View more
                  </Button>
                  </Link>
                 
                  <IconButton variant="standard" sx={{ color: "turquoise" }}>
                    <ShoppingCartIcon sx={{ color: "turquoise" }} /> 
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Allproduct;
