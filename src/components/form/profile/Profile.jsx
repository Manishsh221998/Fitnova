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
import { Box, Container, Divider } from "@mui/material";
import Header from "../../../layout/header/Header";
 
const Profile = () => {
   let { id } = useParams();
   let navigate=useNavigate()
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
  const logout=()=>{
    navigate('/')
    window.sessionStorage.clear()
  }
  return (
    <>
    <Header/>
    <Box
      sx={{
        alignContent: "center",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        my:10,
        margin:{xs:'20px'}
      }}
    >
      <Card sx={{ maxWidth: 345,boxShadow:3, }}>
        <CardMedia
          sx={{ height:250, width:300 }}
          image={data.image}
          title="green iguana"
        />
        <CardContent>
          <Divider>
            <Typography gutterBottom variant="h5" component="div">
              {data.fname} {data.lname}
            </Typography>
          </Divider>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Email : {data.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" >Edit</Button>
          <Button size="small" onClick={logout}>Log out</Button>
        </CardActions>
      </Card>
    </Box>
    </>
   );
};

export default Profile;
