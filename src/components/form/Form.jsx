import React, { useState } from "react";
import { Button, TextField, Typography, Container, Box} from "@mui/material";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Form = ({ view ,OnSubmit}) => {
  // const [file, setFile] = useState(null);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 0,
          borderRadius: 3,
          p: 5,
          boxShadow: 3,
          // backgroundImage:
          //   "url(https://s3.images-iherb.com/blog/uploads/must-have-products-2022-large.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {view === "login" ? "Log in" : "Sign up"}
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(OnSubmit)}>
          {view === "login" ? null : (
            <>
               <TextField
                margin="normal"
                required
                fullWidth
                label="First name"
                type="text"
                variant="standard"
                autoComplete="on"
                id="fname"
                {...register("fname", {
                  required: { value: true, message: "First name is required" },
                  minLength: {
                    value: 2,
                    message: "minimum 2 characters required",
                  },
                })}
                helperText={errors?.fname?.message}

              />
 
              <TextField
                margin="normal"
                required
                fullWidth
                label="Last name"
                type="text"
                variant="standard"
                id="lname"
                {...register("lname", {
                  required: { value: true, message: "Last name is required" },
                  minLength: {
                    value: 3,
                    message: "minimum 3 characters required",
                  },
                })}
                helperText={errors?.lname?.message}

              />
              
            </>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            variant="standard"
            id="email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            helperText={errors?.email?.message}

          />
    
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            variant="standard"
            autoComplete="current-password"
            id="password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              // pattern:{
              //   value:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$/,
              //   message:' contains atleast(A-Z,a-z,0-9,!@#$&*)'
              // },
              minLength: { value: 6, message: "minimum length 6 characters" },
              maxLength: { value: 12, message: "maximum lenght 12 characters" },
            })}
            helperText={errors?.password?.message}

          />
       
          {view === "login" ? null : (
            <>
              <input
                accept="*"
                style={{ display: "none" }}
                id="image"
                type="file"
                {...register("image")}
                // onChange={(e) => {
                //   setFile(e.target.files[0]);
                // }}
                name="image"
            
              />
              <label htmlFor="image">
                <Button
                  variant="outlined"
                  component="span"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  {/* {file ? file.name : "Choose File"} */}
                  Choose File
                </Button>
              </label>
            </>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <Button type="submit" variant="contained"  sx={{ mt: 3, mb: 2, px:'45px',bgcolor:'#00b5b7' }}>
              {view === "login" ? "Login" : "Sign up"}
            </Button>
            {view === "login" ? (
              <Link to="/signup">
                <Button
                  variant='text'
                  sx={{
                    // bgcolor: "white", // Custom background color
                    // color: "black", // Custom text color
                    mt: 3,
                    mb: 2,
                    // "&:hover": {
                    //   bgcolor: "", // Darker shade on hover
                    //   color: "black",
                    //    fontWeight: "500",
                    //   },
                  
                  }}
                >
                  Create account
                </Button>
              </Link>
            ) : null}
          </Box>
          {view === "login" ? null : (
            <span>
              Have an account? <Link to="/login">Login</Link>
            </span>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Form;