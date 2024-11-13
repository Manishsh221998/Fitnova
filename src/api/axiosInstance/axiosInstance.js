import axios from "axios"
import base_url from "../api_url"

const axiosInstance=axios.create({
    baseURL:base_url
})

// axiosInstance.interceptors.request.use(
//     async function (config) {
//         const token=window.sessionStorage.getItem("token")||window.localStorage.getItem("token");
//         if(token){
//             config.headers["X-access-token"]=token;
//         }
//         return config;
//     },
//     function (err){
//       return Promise.reject(err);  
//     }
// )

export default axiosInstance