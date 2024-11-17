import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Page_not_found from "../PNF/Page_not_found"
import Header from "../layout/header/Header"
import Footer from "../layout/footer/Footer"
import Login from "../components/form/log/Login"
import Registration from "../components/form/rege/Registration"
import Profile from "../components/form/profile/Profile"
import Home from "../components/home/Home"
import Profile_logout from "../components/form/profile/profile_logout/Profile_logout"
import About from "../components/About/About"
import OurBrands from "../components/brands/ourBrands/OurBrands"
import Contact_us from "../components/contact/Contact_us"
import ProductTable from "../components/admin_panel/ProductTable/ProductTable"
import Admin_login from "../components/admin_login/Admin_login"
import Add_product from "../components/admin_panel/Add_product/Add_product"
import Edit_product from "../components/admin_panel/Edit_product/Edit_product"
import Footer4 from "../layout/Footer2/Footer4"
import Product from "../components/product/Product"
import SingleProduct from "../components/product/AllProducts/SingleProduct/SingleProduct"
import Marquee from "react-fast-marquee"
import Cart from "../components/Cart/Cart"
import { Box } from "@mui/material"
import CelebrationIcon from '@mui/icons-material/Celebration';
import {ProtectedRouteForAdmin, ProtectedRoutes} from "../protectedRoute/ProtectedRouting"
import ErrorPage from "../protectedRoute/errorPage/ErrorPage"
 
const Routing = () => {
  

   return (
      <Router>
         {/* {!isAdminLogged? */}
         {/* <Header /> */}
         {/* :null} */}
         <Routes>
            <Route path="" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="brands" element={<OurBrands />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact_us />} />
        
            <Route path="product" element={<Product />} />
            <Route path="product/singleProduct/:id" element={<SingleProduct />} />

           {/* Cart paths */}

            {/* Authentication paths */}
            <Route path="signup" element={<Registration />} />
            <Route path="login" element={<Login />} />
            <Route path="/logout" element={<Profile_logout />} />

            {/* protect routes */}
            <Route element={<ProtectedRoutes/>}>
            <Route path="profile/:id" element={<Profile />} />
            <Route path="cart" element={<Cart />} />
            </Route>

            <Route path="error" element={<ErrorPage />} />

            {/* Admin Login */}
            <Route path="admin_login" element={<Admin_login/>} />
            {/* Admin panel */}
            
             {/* protect routes */}
            <Route element={<ProtectedRouteForAdmin/>}>
            {/* Inventory */}
            <Route path="producttable" element={<ProductTable />} />
            <Route path="addProduct" element={<Add_product />} />
            <Route path="updateProduct" element={<Edit_product />} />
            </Route>
            {/* Page not found */}
            <Route path="*" element={<Page_not_found />} />
         </Routes>
         <Footer4 />
         <Marquee direction="left" speed='50' gradient="black green" >
         <Box sx={{color:'teal'}}>50% discount on your Fitnova health products! Don’t miss out on this exclusive offer!</Box>
      </Marquee>
       </Router>
   )
}
export default Routing