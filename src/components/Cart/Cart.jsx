import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  TextField,
  Stack,
  Container,
  Avatar,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import { allCartData, deleteCart } from "../../redux/cartSlice/CartSlice";

function Cart() {
  const [cartItems, setCartItems] = useState();

  let userId = window.sessionStorage.getItem("userId");
  const dispatch = useDispatch();
  let navigate=useNavigate()

  const swlAlert = (message, type) => {
    Swal.fire({
      title: type === "success" ? "Success" : "Error",
      text: message,
      icon: type,
      confirmButtonText: 'OK',
    });
  };

  useEffect(() => {
    dispatch(allCartData())
      .then((result) => {
        setCartItems(result?.payload.filter((x) => x.uid == userId));
        console.log("result", result?.payload);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, [dispatch]);


  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + change) } 
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    dispatch(deleteCart(id))
    .then((result) => {
      // console.log("result",result?.payload); 
      dispatch(allCartData())
      .then((result) => {
        setCartItems(result?.payload.filter((x) => x.uid == userId));
        console.log("result", result?.payload);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
  };
// const handleOrder=()=>{
//   let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  
// const orderdata={
//   uid:userId,
//   orderValue:subtotal,
//   orderDate:utc
// }

// if(cartItems?.length==0){
//   swlAlert("There is no itms in cart","error")
// }else{
//   dispatch(createOrder(orderdata)).then((result)=>{
//     // console.log("result",result);
//     swlAlert("Order placed successfully","success")
//         navigate(`/profile/${userId}`)
//     }).catch((err)=>{
//     console.log("error",err);
//     })
// }
// }

  const subtotal = cartItems?.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
 

  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ paddingY:2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
              width: "100%",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
              Your Cart
            </Typography>
            <Divider sx={{marginBottom:"12px"}}/>

            {cartItems?.map((item) => (
              <Box
                key={item.id}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <Avatar
                  src={item.product_img}
                  alt={item.product_name}
                  sx={{ width: 50, height: 50, marginRight: 2 }}
                />
                <Box sx={{ flexGrow: 1 ,textAlign:'start'}}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {item.product_name}
                  </Typography>
                  <Typography variant="body2">Price: {item.price}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mx: 2 }}>
                  <IconButton onClick={() => handleQuantityChange(item.id, -1)}>
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    value={item.qty}
                    inputProps={{
                      min: 1,
                      style: { textAlign: "center", width: "40px" },
                    }}
                    variant="outlined"
                    size="small"
                    sx={{ mx: 1 }}
                    disabled
                  />
                  <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <IconButton onClick={() => handleRemoveItem(item.id)}>
                  <DeleteOutlineIcon sx={{color:'black','&:hover':{color:'red'}}} />
                </IconButton>
              </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            <Stack direction="column" spacing={1}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Total</Typography>
                <Typography>₹{subtotal}</Typography>
              </Box>
             
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  mt: 1,
                }}
              >
                
              </Box>
            </Stack>

            {/* <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2, textTransform: 'none' }}
            >
              <Box component="span" sx={{ mr: 1 }}>💸</Box> 2 Discounts Applied
            </Button> */}

            <Button
            // onClick={handleOrder}
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, textTransform: "none" }}
              style={{ backgroundColor:'#D2E603', color: "white",fontWeight:'bold' }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Cart;
