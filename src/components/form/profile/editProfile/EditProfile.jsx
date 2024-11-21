import React, { useState } from 'react'
 import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {useFormik} from 'formik'
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../../../redux/authSlice/AuthSlice';
const EditProfile = ({data,close}) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [imageBase64, setImageBase64] = useState("");
    
    let[prevData,setPrevData]=useState(data)
    // console.log(prevData)

    let dispatch=useDispatch()
    const handleSubmit=(formData)=>{
        // console.log("Form Data",formData)
        let allData={...formData,image:imageBase64}
        // console.log("all data",allData)

        let userId=window.sessionStorage.getItem("userId")
        let newData={
            id:userId,
            updtData:allData
        }
        // console.log("new Data",newData)
        dispatch(updateProfile(newData))
        .then(res=>{console.log(res)
            dispatch(allData())
            .then()
        })
        .catch(err=>console.log(err ))
        close()
            }

    let formik=useFormik({
        initialValues:{
            fname:prevData?.fname,
            lname:prevData?.lname,
            email:prevData?.email,
            password:prevData?.password,
            image:prevData?.image
          },
        onSubmit:handleSubmit,
    })
    const handleImageChange = (e) => {
        const file = e.target.files[0];
         const reader = new FileReader();
        reader.onloadend = () => {
          setImageBase64(reader.result); // Store the base64 string
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      };
  return (
    < >
        <Box
      sx={{
        width: isMobile ? "90%" : "60%",
        mx: "auto",
        mt: 1,
        p: 3,
        bgcolor: "background.paper",
        
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
      Edit Profile
      </Typography>
      <form  onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              required
              name='fname'
              value={formik?.values.fname}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              name='lname'
              fullWidth
              required
              value={formik?.values.lname}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              name='email'
              type="email"
              fullWidth
              required
              value={formik?.values.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Change Passsword"
              variant="outlined"
              name='password'
              type='text'
               fullWidth
               value={formik?.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
               variant="outlined"
              type="file"
               fullWidth
              accept="image/*"
               onChange={handleImageChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    </>
  )
}

export default EditProfile