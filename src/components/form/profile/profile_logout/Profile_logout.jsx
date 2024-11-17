import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
 const Profile_logout = () => {
  let navigate = useNavigate();

   useEffect(()=>{
    window.sessionStorage.clear();
    navigate('/')
   },[])

  return (
    <>
     </>
  );
};

export default Profile_logout;
