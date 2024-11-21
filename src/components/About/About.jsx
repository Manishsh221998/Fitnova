import React from 'react'
import OurTeam from './OurTeam/OurTeam'
import AboutUs from './About_services/About_serv'
import Header from '../../layout/header/Header'
import FitnovaAccordion from '../home/FitnovaAccordian/FitnovaAccordian'
import { Container } from '@mui/material'
  
const About = () => {
  return (
<><Header/>
    <div>
    <AboutUs/>
    <OurTeam/> 
    <Container>
    <FitnovaAccordion/>
    </Container>
      </div>
      </>
  )
}

export default About