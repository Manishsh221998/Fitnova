import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../../redux/authSlice/AuthSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Divider, IconButton } from "@mui/material";
import Header from "../../../layout/header/Header";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Modal, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EditProfile from "./editProfile/EditProfile";
import EditIcon from '@mui/icons-material/Edit'; 
import LogoutIcon from '@mui/icons-material/Logout';
const styled={
  
}
const Profile = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let { id } = useParams();
  let navigate = useNavigate();
  console.log(id);

  let [data, setData] = useState({});

  const { isLoading, error, userValue } = useSelector((state) => state.auth);
  console.log("userValue", userValue);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(profile())
      .then((res) => {
        console.log(
          "axios res for profile",
          res.payload.find((x) => x.id === id)
        );
        setData(res.payload.find((x) => x.id === id));
        console.log("data", data);
      })
      .catch((err) => console.log(err));
  }, []);
  const logout = () => {
    navigate("/");
    window.sessionStorage.clear();
  };

  const handleEdit=()=>{
    handleOpen()
  }
 
  return (
    <>
      <Header />
      <Box
        sx={{
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          margin: { xs: "20px" },
           backgroundImage:'url(https://images.pond5.com/paper-texture-noise-animated-stop-footage-148295348_iconl.jpeg)'
        }}
      >
        <Card sx={{ maxWidth: 345, boxShadow:5 , boxShadow: '0px 4px 10px rgba(136, 171, 142,0.6)', marginY:'6rem'}}>
          <CardMedia
            sx={{ height: 250, width: 300,p:1 }}
            image={data.image}
            title="green iguana"
            
          />
          <CardContent >
            <Divider>
              <Typography gutterBottom variant="h5" sx={{color:'teal'}} component="div">
                {data.fname} {data.lname}
              </Typography>
            </Divider>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Email : {data.email}
            </Typography>
          </CardContent>
          <CardActions>
     
            <Button startIcon={<EditIcon/>}  sx={{color:'#059212',textTransform:'none'}}  onClick={() => handleEdit()}>
                Edit
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-modal-title"
              aria-describedby="responsive-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: isMobile ? "90%" : "50%",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 2,
                  maxHeight: "80vh", // Ensures the modal doesn't exceed the viewport height
                  overflowY: "auto", 
                }}
              >
                <IconButton sx={{position:'absolute',top:'2%',right:'2%'}} variant="contained" onClick={handleClose}>
                  <CloseIcon />
                  </IconButton>
                
               <EditProfile data={data} close={handleClose}/>
              </Box>
            </Modal>
            <Button endIcon={<LogoutIcon/>}  sx={{color:"#FF6500",textTransform:'none'}} onClick={logout}>Logout
            </Button>
          </CardActions>
        </Card>
     
      </Box>
    </>
  );
};

export default Profile;