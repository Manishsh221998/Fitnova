import React from 'react'
import OurTeam from './OurTeam/OurTeam'
import AboutUs from './About_services/About_serv'
import Header from '../../layout/header/Header'
  
const About = () => {
  return (
<><Header/>
    <div>
    <AboutUs/>
    <OurTeam/> 
      </div>
      </>
  )
}

export default About