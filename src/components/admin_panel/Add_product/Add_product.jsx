import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Grid2,
  Stack,
  Divider,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/productSlice/ProductSlice";
import "./add_Product.css"
import swAlert from "../../../swAlert/swAlert";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from "../../../layout/header/Header";

const Add_product = () => {
 

  let navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const { error, isLoading, postValue } = useSelector((state) => {
    console.log("state of addProduct form", state);
    return state.product;
  });

  console.log("postValue addproduct", postValue, postValue.status);
  let[imageBase64,setImageBase64]=useState("")
  const handleImageChange=(e)=>{
    const file=e.target.files[0]
    const reader=new FileReader()
    reader.onloadend=()=>{
      setImageBase64(reader.result)
    };
    if(file){
      reader.readAsDataURL(file)
    }
  };

  let dispatch = useDispatch();
  const OnSubmit = (data) => {
    console.log("Product submit data :", data);
    let productData={...data,prodImage:imageBase64}
    console.log("Product submit data :", productData);
    dispatch(addProduct(productData))
      .then((res) =>{ console.log(res.data)
        swAlert("success","Product Added successfully",700)
        navigate("/producttable")
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
    <Header/>
    <Container
      maxWidth="sm"
      sx={{
        borderRadius: 4,
        py:5,
        boxShadow: 3,
         my:5,
         color: "tomato",
        //     '@media (max-width:320px)': {
        //     bgcolor:'skyblue'
        //    },
      }}
    >
      <Typography variant="h4" gutterBottom>
        <Divider>Add Product</Divider>
      </Typography>
      <form style={{ padding: 12 }} onSubmit={handleSubmit(OnSubmit)}>
        {/* row-1 */}
        <Stack direction="row" spacing={1}>
          <TextField
            fullWidth
            label="Brand"
            id="brand"
            required
            margin="normal"
            color="warning"
            {...register("brand", {
              required: { value: true, message: "Brand name is required" },
              minLength: { value: 3, message: "minimum 3 characters" },
            })}
            className="customTextField"
            helperText={errors?.brand?.message}
          />
          <TextField
            fullWidth
            label="Product name"
            id="product_name"
            required
            margin="normal"
            color="warning"
            {...register("product_name", {
              required: { value: true, message: "Product Name is required" },
            })}
              className="customTextField"
            helperText={errors?.product_name?.message}
          />
        </Stack>

        {/* row-2 */}

        <TextField
          fullWidth
          sx={{ mb: 2 }}
          label="Product category"
          id="product_category"
          required
          margin="normal"
          color="warning"
          {...register("product_category", {
            required: { value: true, message: "Product category is required" },
          })}
          className="customTextField"
          helperText={errors?.product_category?.message}
        />

        {/* row-3*/}
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Weight"
            id="weight"
            required
            margin="normal"
            color="warning"
            {...register("weight", {
              required: { value: true, message: "weight is required" },
            })}
            className="customTextField"
            helperText={errors?.weight?.message}
          />
          <TextField
            fullWidth
            label="Flavour"
            id="flavour"
            required
            margin="normal"
            color="warning"
            {...register("flavour", {
              required: { value: true, message: "Flavour is required" },
            })}
            className="customTextField"
            helperText={errors?.flavour?.message}
          />
        </Stack>

        {/* row-4 */}
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Price"
            id="price"
            required
            margin="normal"
            color="warning"
            type="text"
            {...register("price", {
              required: { value: true, message: "Price is required" },
            })}
            className="customTextField"
            helperText={errors?.price?.message}
 
          />
          <TextField
            fullWidth
            label="Discount (%)"
             id="discount"
            margin="normal"
            color="warning"
            type="text"
            {...register("discount", {
              required: { value: true, message: "Discount is required" },
            })}
            className="customTextField"
            helperText={errors?.discount?.message}
          />
        </Stack>

          {/* row-4 */}
        <FormControl sx={{ textAlign: "start" }} size="medium" fullWidth>
          <InputLabel color="warning">Warranty</InputLabel>
          <Select
            labelId="warranty"
            id="warranty"
            label="Warranty"
            color="warning"
            //  custom color for text field
            sx={{
              "&.MuiOutlinedInput-root": {
                "&.fieldset": {
                  borderColor: "turquoise", // Customize border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "turquoise", // Color when focused
                },
              },
              "&.MuiInputLabel-root": {
                color: "turquoise", // Label color
                "&.Mui-focused": {
                  color: "turquoise", // Focused label color
                },
              },
            }}
            {...register("warranty", {
              required: { value: true, message: "warranty is required" },
            })}
            helperText={errors?.warranty?.message}
          >
            <MenuItem value="6 months">6 months</MenuItem>
            <MenuItem value="1 year">1 year</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="prodImage"
          type="file"
          required
          margin="normal"
          variant="outlined"
          color="warning"
          {...register("prodImage")}
          className="customTextField"
          onChange={handleImageChange}
        />

        <Button type="submit" variant="contained" color="warning" fullWidth sx={{marginTop:1}}
        >
          Add Product
        </Button>
      </form>
    </Container>     
   <Link to='/producttable'><Button sx={{position:'relative',display:'flex',justifyContent:'start',textTransform:'lowercase',marginBottom:5,zIndex:1}} startIcon={<ArrowBackIcon/>}>back to admin panel</Button></Link>

      </>
  );
};

export default Add_product;
