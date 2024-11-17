import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes=()=>{
    const isUserLogged = window.sessionStorage.getItem('userId')
    return (isUserLogged) ? <Outlet/>:<Navigate to='/error' />
}
const ProtectedRouteForAdmin=()=>{
    const isAdminLogged=window.localStorage.getItem("isAdminLogged")
    console.log(isAdminLogged)
    return (isAdminLogged)?<Outlet/>:<Navigate to='/error'/>
}

export  { ProtectedRoutes,ProtectedRouteForAdmin}