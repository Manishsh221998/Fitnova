import React, { useState } from "react";
import Form from "../Form";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../redux/authSlice/AuthSlice";
import { useNavigate } from "react-router-dom";
import swAlert from "../../../swAlert/swAlert";
import Header from "../../../layout/header/Header";

const Login = () => {
  let navigate = useNavigate();
  let [userData, setData] = useState([]);
 
  const { isLoading, error } = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  const OnSubmit = (data) => {
    console.log("user form data for sign in", data);

    dispatch(signIn())
      .then((res) => {
        console.log("axios res for signINN", res?.payload);
        setData(res?.payload);
        console.log("userData", userData);

        let email_varify = res?.payload.find((x) => x.email === data.email);
        let password_varify = res?.payload.find((x) => x.password === data.password);

        // console.log("Email & password", email_varify, password_varify);

        if (!email_varify) {
          swAlert("error", "Incorrect email", 400);
        } else if (!password_varify) {
          swAlert("error", "Incorrent password", 400);
        } else {
          swAlert("success", "Log in successfully", 400);
          navigate(`/profile/${email_varify.id}`);
          // window.location.reload()
          window.sessionStorage.setItem("isLogged", "true");
          window.sessionStorage.setItem("proImg", email_varify.image);
          window.sessionStorage.setItem("firstName", email_varify.fname);
          window.sessionStorage.setItem("userId", email_varify.id);

          // window.sessionStorage.setItem("token",JSON.stringify(email_varify))
          // window.location.reload(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <Header/>
  <Form view={"login"} OnSubmit={OnSubmit} >
{isLoading && <p>isLoading</p>}
{error && <p>error:{error}</p>}

  </Form>
  </>
  )
};

export default Login;
