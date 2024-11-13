import React, { useEffect, useState } from "react";
import Form from "../Form";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../redux/authSlice/AuthSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance/axiosInstance";
import { end_points } from "../../../api/api_url";
import swAlert from "../../../swAlert/swAlert";
import Header from "../../../layout/header/Header";
const Registration = () => {
  let navigate = useNavigate();
  let api = end_points.user;

  let [userData, setData] = useState([]);

  const getData = () => {
    axiosInstance
      .get(api)
      .then((res) => {
        console.log("axios res for user", res);
        if (res.status === 200) {
          setData(res?.data);
          console.log("userData for signup -", userData);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

 
  const [imageBase64, setImageBase64] = useState("");
  const [file, setFile] = useState(null);

  const { isLoading, error, userValue } = useSelector((state) => {
    // console.log("State of sign up", state);
    return state?.auth;
  });

  let dispatch = useDispatch("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file.name)
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result); // Store the base64 string
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
   const OnSubmit = (data) => {
    console.log("user form data for sign up", data, "Image", data.image[0]);


    console.log("image-------------", imageBase64);

    let formData = { ...data, image: imageBase64 };

    const emailFound = userData.find((x) => x.email === data.email);
    if (!emailFound) {
      dispatch(signUp(formData))
        .then((res) => {
          console.log(res);
          if (res.payload.status === 201) {
            swAlert("success", "Sign up successfully", 1000);
            navigate("/login");
          } else {
          }
        })
        .catch((err) => console.log("axios err", err));
    } else {
      swAlert("error", "Email is already exist", 1000);
    }
  };

  return (
    <>
    <><Header/></>
      <Form view={"signup"} OnSubmit={OnSubmit} handleImageChange={handleImageChange} filename={file}/>
    </>
  );
};

export default Registration;
