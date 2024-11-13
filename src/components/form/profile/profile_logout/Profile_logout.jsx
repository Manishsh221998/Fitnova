import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../../layout/header/Header";
const Profile_logout = () => {
  let navigate = useNavigate();
  navigate("/");
  window.sessionStorage.clear();
  return (
    <>
      <Header />
    </>
  );
};

export default Profile_logout;
