import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Grid,
  Divider,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Container,
  Stack,
  Tooltip,
} from "@mui/material";
import { Add, Edit, Delete, Visibility } from "@mui/icons-material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DiscountIcon from '@mui/icons-material/Discount';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct, getSingleProd } from "../../../redux/productSlice/ProductSlice";
import swAlert from "../../../swAlert/swAlert";
import Header from "../../../layout/header/Header";
//-------------------Modal------------------------
import Modal from '@mui/material/Modal';
import Edit_product from "../Edit_product/Edit_product";

import LogoutIcon from '@mui/icons-material/Logout';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
//------------------------------------------------

function ProductTable() {
 let[searchText,setSearchText]=useState("") //Search state
 let [state, setState] = useState([]); //State for all product list
const [product, setProduct] = useState(); //satte for single product

 const [open, setOpen] = React.useState(false); //state for view modal
 const [openeditproduct, setOpenEditproduct] = useState(false); // state for view edit

 //-------------------Modal----------------------------


const handleOpen = () => setOpen(true); //View Modal open
const handleClose = () => setOpen(false);//View modal close

const handleOpenEditProduct = () => setOpenEditproduct(true);//edit modal
const handleCloseEditProduct = () => setOpenEditproduct(false);//edit modal


  let navigate = useNavigate();
  const { isLoading, error, postValue } = useSelector((state) => state.product);
  // console.log('postValue',postValue)


  let dispatch = useDispatch();
//-----------------------Product Table-----------------------
  useEffect(() => {
    dispatch(getProduct())
      .then((res) => {
        console.log(res);
        setState(res?.payload);
      })
      .catch((err) => console.log(err))
  }, [dispatch]);
 //---------------------------------------------------------------
 //--------------------------View single Product------------------

let handleView = (id) => {
  let found = state.find((x) => x.id == id);
  console.log("found", found);
  setProduct(found);
  handleOpen();
};
//----------------------------------------------------------------
  //--------------------------Delete Product----------------------
  const deleteItem=(id)=>{
    console.log("ID=",id)
    dispatch(deleteProduct(id)).then((res)=>{
      swAlert("success","Deleted succesfully",600)
      dispatch(getProduct())
      .then((res)=>{
        console.log(res)
        setState(res?.payload)
      })
      .catch((err)=>{
        console.log(err)
        swAlert("error","Something went wrong",500)
      })
    }).catch((err)=>{
      swAlert("error","Something went wrong",500)
    })
  }
  //-------------------------------------------------

 
  //----------------Update/Edit Product-------------------

  const handleEdit=(id)=>{
console.log("Edit Id",id)
let found = state.find((x) => x.id == id);
  console.log("found", found);
  setProduct(found);
  handleOpenEditProduct();
   }
 //----------------------------------------------
  const adminLogout = () => {
    localStorage.clear();
    navigate("/");
    // window.location.reload();
  };
 
  return (
    <>
        <Header/>
    <Container>
    <Box sx={{ flexGrow: 1, padding: 2, marginX: 5, marginY:5 }}>
      {/* AppBar with Search and Add */}
      <AppBar position="static" color="light" sx={{ borderRadius: 3 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#DFF5FF",
            borderRadius: 2,
            border: 1,
            borderColor: "skyblue",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            onChange={(event)=>{setSearchText(event.target.value)}}
            sx={{ backgroundColor: "#fff", borderRadius: 1, mr: 2 ,width:'300px'}}
          />
          <Link to="/addProduct">
            <Button
              variant="contained"
              color="info"
              sx={{
                fontFamily:'unset',
                marginY: { xs: "10px" },
                fontSize: { xs: "8px", sm: "12px", md: "14px", lg: "16px" },
              }}
              startIcon={<Add />}
            >
              Add New
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Responsive Table */}
      <TableContainer
        component={Paper}
        sx={{ marginTop: 2, borderRadius: 3, boxShadow: 3, border:1,borderColor:'silver' }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#F5EFFF" }}>
            <TableCell sx={{paddingLeft:'2rem'}}>List</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
          //   state?.filter((x)=>{
          //     if(searchText===""){
          //       return x;
          //     }
          //     else if((x?.brand.toLowerCase().includes(searchText.toLowerCase()))||
          //   (x?.product_name.toLowerCase().includes(searchText.toLowerCase()))||
          //   (x?.product_category.toLowerCase().includes(searchText.toLowerCase()))||
          //   (x?.Weight.toLowerCase().includes(searchText.toLowerCase()))||
          //   (x?.price.toLowerCase().includes(searchText.toLowerCase()))
          // ){
          //       return x;
          //     }
          //   })
            
           state?.filter((x)=>{
            if(searchText===''){
              return x
            }
            else if((x?.brand.toLowerCase().includes(searchText.toLowerCase()))||
           (x.product_category.toLowerCase().includes(searchText.toLowerCase()))||
           (x.price.toLowerCase().includes(searchText.toLowerCase()))||
           (x.weight.toLowerCase().includes(searchText.toLowerCase()))
            ){
              return x
            }
           }).map((data,idx) => (
              <TableRow key={data.id}>
               <TableCell sx={{color:'grey',paddingLeft:'2rem'}}>{idx+1}</TableCell>
                <TableCell>
                  <Avatar src={data.prodImage} alt={data.brand}  />
                </TableCell>
                {/* <Stack direction="column"> */}
                  <TableCell>
                    {data.brand} 
                    {/* <TableBody
                      sx={{
                        fontSize:{ xs:"5px", sm:"8px",md:"10px", lg:"11px"},
                        display: "inline-block",
                        color: "gray",
                        textWrap:'wrap'
                      }}
                    >
                      ({data.product_name})
                    </TableBody> */}
                  </TableCell>
                {/* </Stack> */}
                <TableCell>{data.product_category}</TableCell>
                <TableCell>{data.weight} kg</TableCell>
                <TableCell>
                  <CurrencyRupeeIcon
                    sx={{ fontSize: 17, paddingBottom: "3px" }}
                  />
                  {data.price}
                </TableCell>
                <TableCell align="center">
                  {/* -----------------------View Single product in Modal----------------------- */}
                  <Tooltip title='View'><IconButton sx={{color:"#6EACDA" }} aria-label="view" >
                    <Visibility onClick={() => handleView(data?.id)}/>
                  </IconButton></Tooltip>
                  <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                          sx={{bgcolor:"transparent"}}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: "70%",
                              bgcolor: "background.paper",
                              borderRadius: 1,
                              boxShadow: 24,
                              p: 4,
                            }}
                          >
                            <IconButton
                              onClick={handleClose}
                              sx={{
                                position: "absolute",
                                top: 8,
                                right: 8,
                              }}
                            >
                              <CloseIcon />
                            </IconButton>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "70vh",
                                bgcolor: "#f5f5f5",
                                px: 2,
                              }}
                            >
                              <Paper
                                elevation={3}
                                sx={{
                                  maxWidth: 900,
                                  width: "100%",
                                  p: 4,
                                  borderRadius: 2,
                                }}
                              >
                                 <Grid
                                  container
                                  spacing={4}
                                  sx={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Box
                                      component="img"
                                      src={product?.prodImage}
                                      alt="Product"
                                       sx={{
                                        width: "100%",
                                        maxWidth: 300,
                                        height: "auto",
                                        borderRadius: 2,
                                        objectFit: "cover",
                                      }}
                                    />
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                     <Typography
                                      variant="h4"
                                      fontWeight="bold"
                                      gutterBottom
                                    >
                                      {product?.brand}
                                    </Typography>
                                    <Typography
                                      variant="h6"
                                      fontWeight="medium"
                                      gutterBottom
                                    >
                                      ({product?.product_name})
                                    </Typography>

                                    <Typography
                                      variant="subtitle1"
                                      color="textSecondary"
                                      gutterBottom
                                    >
                                      Category:{" "}
                                      <span style={{ fontWeight: 500 }}>
                                        {product?.product_category}
                                      </span>
                                    </Typography>
                                    <Stack direction='row'>
                                    <Typography
                                      variant="h5"
                                      color="primary"
                                      fontWeight="bold"
                                      gutterBottom
                                    >
                                      Price:{" "}
                                      <span style={{ fontWeight: 500 }}>
                                        {product?.price}
                                      </span>
                                    </Typography>
                                    <Typography
                                      variant="h6"
                                      color="success"
                                      fontWeight="bold"
                                      gutterBottom
                                    
                                    >
                                       <span style={{ fontWeight: 400,paddingLeft:5 }} >
                                        {/* <span style={{color:"GrayText"}}><s>{100*(product?.discount)}</s></span> */}
                                       {product?.discount}% <DiscountIcon sx={{fontSize:19}}/>
                                      </span>
                                    </Typography>
                                    </Stack>

                                    <Typography
                                      variant="body1"
                                      color="textSecondary"
                                      gutterBottom
                                    >
                                      Flavour:{" "}
                                      <span style={{ fontWeight: 500 }}>
                                        {product?.flavour}
                                      </span>
                                    </Typography>

                                    <Typography
                                      variant="body1"
                                      color="textSecondary"
                                      gutterBottom
                                    >
                                      Weight:{" "}
                                      <span style={{ fontWeight: 500 }}>
                                        {product?.Weight}
                                      </span>
                                    </Typography>

                                    <Typography
                                      variant="body1"
                                      color="textSecondary"
                                      gutterBottom
                                    >
                                      Warranty:{" "}
                                      <span style={{ fontWeight: 500 }}>
                                        {product?.warranty}
                                      </span>
                                    </Typography>

                                    <Divider sx={{ my: 2 }} />

                                    {/* <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: 1,
              }}
            >
              Add to Cart
            </Button> */}
                                  </Grid>
                                </Grid>
                              </Paper>
                            </Box>
                          </Box>
                  </Modal>
          {/* ------------------------------------------------------------------------------------ */}

                 <Tooltip title='Edit'><IconButton sx={{color:"#A7D129" }} aria-label="edit" >
                  <Edit 
                    onClick={()=>{handleEdit(data.id)}}  
                    />  
                  </IconButton>
                  </Tooltip> 
          {/* ------------------------------------------Edit modal-------------------------------------- */}
                  <Modal
              open={openeditproduct}
              onClose={handleCloseEditProduct}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: {xs:"70%",sm:"60%",md:'60%',lg:"38%",xl:'35%'},
                  bgcolor: "background.paper",
                  borderRadius:3,
                  boxShadow:3,
                  background: 'linear-gradient(to right, #D4F6FF, #C7FFD8)', // Gradient from left to right
                  p:0,
                }}
              >
                <IconButton
                  onClick={handleCloseEditProduct}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                  }}
                >
                  <CloseIcon />
                </IconButton>
            <Edit_product pid={product}/>
              </Box>
            </Modal>
          {/* ------------------------------------------------------------------------------------------- */}

          <Tooltip title="Delete"> <IconButton sx={{color:"#FF0000" }} aria-label="delete" 
                  onClick={()=>{deleteItem(data.id)}}
                  >
                    <Delete />
                    
                  </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{display:'flex',justifyContent:'right'}}>
      <Tooltip title="Log out"> <IconButton onClick={adminLogout} ><LogoutIcon/></IconButton></Tooltip>
      </Box>
    </Box>
    </Container>
    </>
  );
}

export default ProductTable;
