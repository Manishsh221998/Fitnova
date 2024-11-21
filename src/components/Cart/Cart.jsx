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
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import { allCartData, deleteCart } from "../../redux/cartSlice/CartSlice";
import swAlert from "../../swAlert/swAlert";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const userId = window.sessionStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const swlAlert = (message, type) => {
    Swal.fire({
      title: type === "success" ? "Success" : "Error",
      text: message,
      icon: type,
      confirmButtonText: "OK",
    });
  };

  // Fetch cart data on component mount
  useEffect(() => {
    fetchCartData();
  }, [dispatch]);

  const fetchCartData = async () => {
    try {
      const result = await dispatch(allCartData());
      const filteredItems = result?.payload?.filter((x) => x.uid === userId);
      setCartItems(filteredItems || []);
    } catch (err) {
      console.error("Error fetching cart data:", err);
    }
  };

  const handleQuantityChange = (id, change) => {
     setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + change) }
          : item
      )
    );
  };

  const handleRemoveItem = async (id) => {
    try {
      await dispatch(deleteCart(id));
      swlAlert("Item removed from cart", "success");
      await fetchCartData();
    } catch (err) {
      console.error("Error removing item:", err);
      swlAlert("Failed to remove item", "error");
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      swlAlert("Your cart is empty!", "error");
    } else {
      navigate(`/`);
      swAlert('success',"Thank you for shopping",700);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
   return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ paddingY: 2 }}>
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
            <Divider sx={{ marginBottom: "12px" }} />

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{ display: "flex", alignItems: "center", mb: 2 }}
                >
                  <Avatar
                    src={item.product_img}
                    alt={item.product_name}
                    sx={{ width: 50, height: 50, marginRight: 2 }}
                  />
                  <Box sx={{ flexGrow: 1, textAlign: "start" }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {item.product_name}
                    </Typography>
                    <Typography variant="body2">Price: ₹{item.price}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mx: 2 }}>
                    <IconButton
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={item.qty === 1}
                    >
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
                    <DeleteOutlineIcon
                      sx={{
                        color: "black",
                        "&:hover": { color: "red" ,
                        transform: "rotate(13deg)",  
    transition: "transform 0.5s ease"},
                      }}
                    />
                  </IconButton>
                </Box>
              ))
            ) : (
              <Typography>No items in your cart.</Typography>
            )}

            <Divider sx={{ my: 2 }} />
            <Link to='/product'><Typography sx={{textAlign:'end',color:'GrayText',fontSize:'13px'}}>view more products</Typography></Link>
            <Stack direction="column" spacing={1}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Total</Typography>
                <Typography>₹{subtotal}</Typography>
              </Box>
            </Stack>

             <Button
              onClick={handleCheckout}
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, textTransform: "none" }}
              style={{
                backgroundColor: "#D2E603",
                color: "white",
                fontWeight: "bold",
              }}
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
