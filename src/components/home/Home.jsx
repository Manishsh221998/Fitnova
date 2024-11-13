import React from 'react'
import CarouselSlides from './carousel/CarouselSlides'
import Header from '../../layout/header/Header'
import Bestsellers from './BestSeller/Bestsellers'
import FeatureSection from './FeatureSection/FeatureSection'
import DealsSection from './DealsSection/DealsSection'
import BannerImage from './Banner/BannerImage'
import { Container } from '@mui/material'
import Marquee from 'react-fast-marquee'
 
const Home = () => {
  return (
<>
<Header/>
<CarouselSlides/>
<Marquee direction="left" speed='50' gradient="black green" >
  50% discount on your Fitnova health products! Don’t miss out on this exclusive offer!
   </Marquee>
    <Container> 
        <FeatureSection/>
        <DealsSection/>
       <Bestsellers/>
        <BannerImage/>
    </Container>
    </>
  )
}

export default Home