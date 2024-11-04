import React, { useEffect, useState } from "react";
import Form from "../Form";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../redux/authSlice/AuthSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance/axiosInstance";
import { end_points } from "../../../api/api_url";
 import swAlert from "../../../swAlert/swAlert";
const Registration = () => {
  let navigate = useNavigate();
  let api = end_points.user;
  let [img, setImg] = useState("");

  let [userData, setData] = useState([]);


  const getData = () => {
    axiosInstance
      .get(api)
      .then((res) => {
        console.log("axios res for user", res);
        if (res.status === 200) {
          setData(res?.data);
          console.log("userData for signup -",userData);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  },[]);

  let getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const { isLoading, error, userValue } = useSelector((state) => {
    // console.log("State of sign up", state);
    return state?.auth;
  });

  let dispatch = useDispatch("");

  const OnSubmit = (data) => {
    console.log("user form data for sign up", data, "Image", data.image[0]);

    getBase64(data.image[0])
      .then((res) => {
        console.log("signup image url -", res, typeof res);
        setImg(res);
      })
      .catch((err) => console.log("signup image url error", err));

    let formData = {
      ...data,
      image:img,
    };

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
      <Form view={"signup"} OnSubmit={OnSubmit} />
    </>
  );
};

export default Registration;
