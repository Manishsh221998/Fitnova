import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Typography, Input, MenuItem, Select, InputLabel, FormControl, Stack, Divider, Container } from "@mui/material";
import { useDispatch } from "react-redux";
 import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getProduct, getSingleProd, upateProduct } from "../../../redux/productSlice/ProductSlice";

const Edit_product = ({ pid }) => {
  let newid=pid?.id
  console.log("new id",newid);
  
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [imgState, setImage] = useState();
    const [prevData, setPrevData] = useState(null);
    const [formData, setFormData] = useState({
        brand: "",
        product_name: "",
        product_category: "",
        weight: "",
        flavour: "",
        price: "",
        discount:"",
        warranty:"",
        prodImage:""
    });

    // Fetch product details and update form data when fetched
    useEffect(() => {
        dispatch(getSingleProd(newid))
            .then((result) => {
                setPrevData(result?.payload);
                // console.log("Fetched data",result?.payload)
            })
            .catch((error) => {
                console.log("Error fetching product details", error);
                swlAlert("Something went wrong", "error");
            });
    }, [dispatch, newid]);

     // Update form data with fetched product details
    useEffect(() => {
        if (prevData) {
            setFormData({
                brand: prevData?.brand || "",
                product_name: prevData?.product_name || "",
                product_category: prevData?.product_category || "",
                weight: prevData?.weight || "",
                flavour: prevData?.flavour || "",
                price: prevData?.price || "",
                discount: prevData?.discount || "",
                warranty: prevData?.warranty || "",
                prodImage: prevData?.prodImage || "",
            });
        }
    }, [prevData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newData = {
            ...formData,
            prodImage: imgState || formData.prodImage  // Use imgState if new image is uploaded
        };
const dataId={
    newData:newData,
    newid:newid 
}
        dispatch(upateProduct(dataId))
            .then((result) => {
                // swlAlert("Product updated successfully", "success");
                console.log("result",result?.payload);
                
                // navigate(`/dashboard/${adminId}`);
            })
            .catch((error) => {
                console.log("Error submitting form", error);
                // swlAlert("Something went wrong", "error");
            });
    };

    const imgHandler = (file) => {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
            setImage(fileReader.result);
        });
        fileReader.readAsDataURL(file);
    };

    const swlAlert = (message, type) => {
        Swal.fire({
            title: type === "success" ? "Success" : "Error",
            text: message,
            icon: type,
            confirmButtonText: 'OK',
        });
    };

    return (
        <Box
             sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                width: "100%",
                maxWidth: 500,
                margin: "0 auto",
                padding:0,
             }}
        >
     <Container
      maxWidth="xs"
      sx={{
        maxHeight: "100vh", // Constrain the height
        overflowY: "auto", // Enable vertical scrolling
        borderRadius: 4,
        py:5,
        boxShadow: 3,
         my:5,
         color:'turquoise',
         bgcolor:'white'
   
      }}
    >
      <Typography variant="h5" gutterBottom>
        <Divider>Edit Product</Divider>
      </Typography>
      <form style={{ padding: 12 }} noValidate onSubmit={handleSubmit}
 >
        {/* row-1 */}
        <Stack direction="row" spacing={1}>
          <TextField
            fullWidth
            label="Brand"
            id="brand"
            name="brand"
            margin="normal"
            color="warning"
            className="customTextField"
            value={formData?.brand}
            onChange={handleChange}


          />
          <TextField
            fullWidth
            label="Product name"
            id="product_name"
            name="product_name"
            margin="normal"
            color="warning"
              className="customTextField"
              value={formData?.product_name}
              onChange={handleChange}
          />
        </Stack>

        {/* row-2 */}

        <TextField
          fullWidth
          sx={{ mb: 2 }}
          label="Product category"
          id="product_category"
          name="product_category"
          margin="normal"
          color="warning"
          className="customTextField"
          value={formData?.product_category}
          onChange={handleChange}
        />

        {/* row-3*/}
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Weight"
            id="weight"
            name="weight"
            margin="normal"
            color="warning"
            className="customTextField"
            value={formData?.weight}
          onChange={handleChange}

            />
          <TextField
            fullWidth
            label="Flavour"
            id="flavour"
            name="flavour"
            margin="normal"
            color="warning"
            className="customTextField"
            value={formData?.flavour}
            onChange={handleChange}
  

           />
        </Stack>

        {/* row-4 */}
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Price"
            id="price"
            name="price"
            margin="normal"
            color="warning"
            type="text"
            className="customTextField"
            value={formData?.price}
            onChange={handleChange}

           />
          <TextField
            fullWidth
            label="Discount (%)"
            id="discount"
            name="discount"
            margin="normal"
            color="warning"
            type="text"
            className="customTextField"
            value={formData?.discount}
            onChange={handleChange}

           />
        </Stack>

          {/* row-4 */}
        <FormControl sx={{ textAlign: "start" }} size="medium" fullWidth>
          <InputLabel color="warning">Warranty</InputLabel>
          <Select
            labelId="warranty"
            id="warranty"            
            name="warranty"            
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
            value={formData?.warranty}
            onChange={handleChange}
          >
            <MenuItem value="6 months">6 months</MenuItem>
            <MenuItem value="1 year">1 year</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          accept="image/*"
          id="prodImage"
          name="prodImage"
          type="file"
          margin="normal"
          variant="outlined"
          color="warning"
           className="customTextField"
           onChange={(e)=>{imgHandler(e.target.files[0])}}
         />

        <Button type="submit" variant="contained" fullWidth sx={{marginTop:1,bgcolor:'turquoise',color:'white',fontWeight:500,letterSpacing:1}}
        >
          Submit
        </Button>
      </form>
    </Container>
        </Box>
    );
};

export default Edit_product;
