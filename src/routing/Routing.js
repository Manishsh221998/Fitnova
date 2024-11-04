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
import Footer2 from "../layout/Footer2/Footer2"
    
 const Routing = () => {
     return (
        <Router>
            <Header />
                 <Routes>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="brands" element={<OurBrands/>} />


                {/* Authentication paths */}
                <Route path="signup" element={<Registration />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Profile_logout />} />
                <Route path="profile/:id" element={<Profile />} />

                {/* Page not found */}
                <Route path="*" element={<Page_not_found />} />
            </Routes>

            <Footer />
            <Footer2/>
        </Router>
    )
}
export default Routing