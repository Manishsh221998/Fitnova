// import React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import {
//   TextField,
//   Container,
//   Divider,
//   IconButton,
//   InputAdornment,
//   OutlinedInput,
//   InputLabel,
//   FormControl,
// } from "@mui/material";
// import { useForm } from "react-hook-form";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useDispatch, useSelector } from "react-redux";
// import { adminLogin } from "../../redux/adminSlice/adminSlice";
//  import { useNavigate } from "react-router-dom";
 
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// const Admin_login = () => {
//   //-------------------Modal----------------------------
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   //-------------------Password Toggle----------------------------

//   const [showPassword, setShowPassword] = React.useState(false);
//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleMouseUpPassword = (event) => {
//     event.preventDefault();
//   };
// //----------------------------------------------
// let navigate=useNavigate()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const OnSubmit = (data) => {
 
//      console.log(data);
//     dispatch(adminLogin())
//     .then(res=>{
//         console.log(res)
//          let emailVarify=res?.payload?.data.find(x=>x?.email===data?.email)
//          let passwordVarify=res?.payload?.data.find(x=>x?.password===data?.password)
//          if(!emailVarify){
//             // swAlert("error","Invalid email",700)
//             alert("Invalid email")
//          }
//          else if(!passwordVarify){
//             // swAlert("error","Invalid password",700)
//             alert("Invalid password")

//          }
//          else{
//             navigate("/producttable")
//             handleClose()
//             window.localStorage.setItem("isAdminLogged","true")
//             window.localStorage.setItem("name","Dashboard")
//             window.localStorage.setItem("link","/producttable")
//             // window.location.reload()
//            }
  
//     })
//   };

//   const{isLoading,error,inputValue}=useSelector(state=>state.admin)
//   let dispatch=useDispatch()
 

//   return (
//     <>
//       <div>
//       <Button onClick={handleOpen}>admin login</Button>
//       <Modal
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="keep-mounted-modal-title"
//         aria-describedby="keep-mounted-modal-description"
//       >
//         <Container component="main" sx={{ maxWidth: { xs: 400 } }}>
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               maxWidth: { xs: 300, sm: 300, md: 350, lg: 440 },
//               bgcolor: "background.paper",
//               boxShadow: 24,
//               border: "2px solid #C2F0FC",
//               borderRadius: 3,
//               p: 4,
//               maxHeight: "80vh", // Constrain the height
//               overflowY: "auto", // Enable vertical scrolling
//             }}
//           >
//             <Typography
//               component="h1"
//               variant="h5"
//               sx={{ textAlign: "center", marginY: 2, color: "#3D6CB9" }}
//             >
//               <Divider>Admin Login</Divider>
//             </Typography>

//             <Box
//               component="form"
//               onSubmit={handleSubmit(OnSubmit)}
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                  fullWidth
//                 id="name"
//                 label="Name"
//                 autoComplete="on"
//                 autoFocus
//                 {...register("name", {
//                   required: { value: true, message: "Name is required" },
//                  })}
//                  error={errors.name}
//                  helperText={errors?.name?.message}
//               />
//               <TextField
//                 margin="normal"
//                  fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="on"
//                 {...register("email", {
//                     required: { value: true, message: "Email is required" },
//                     pattern: {
//                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                       message: "Invalid email address",
//                     },
//                   })}
//                   error={errors.email}
//                   helperText={errors?.email?.message}

//               />
//               <FormControl
//                 variant="outlined"
//                 fullWidth
//                 sx={{ marginTop: 2 }}
//                 id="password"
//               >
//                 <InputLabel htmlFor="password" 
//                 >
//                   Password
//                 </InputLabel>
//                 <OutlinedInput
//                  id="password"
//                   type={showPassword ? "text" : "password"}
//                    endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label={
//                           showPassword
//                             ? "hide the password"
//                             : "display the password"
//                         }
//                         onClick={handleClickShowPassword}
//                         onMouseDown={handleMouseDownPassword}
//                         onMouseUp={handleMouseUpPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                   {...register("password", {
//                     required: { value: true, message: "Email is required" },
//                   })}
//                   error={errors.password}
//                   helperText={errors?.password?.message}  
//                   label="Password"

//                 />
                
//               </FormControl>

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                  >
//                 Log In
//               </Button>
//             </Box>
//           </Box>
//         </Container>
//       </Modal>
//     </div>
//     </>
//   );
// };

// export default Admin_login;
