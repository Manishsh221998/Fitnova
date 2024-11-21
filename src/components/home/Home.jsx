import React from 'react'
import CarouselSlides from './carousel/CarouselSlides'
import Header from '../../layout/header/Header'
import Bestsellers from './BestSeller/Bestsellers'
import FeatureSection from './FeatureSection/FeatureSection'
import DealsSection from './DealsSection/DealsSection'
import BannerImage from './Banner/BannerImage'
import { Box, Container, Divider } from '@mui/material'
import Marquee from 'react-fast-marquee'
import CelebrationIcon from '@mui/icons-material/Celebration';
import FastSelling from './FastSelling/FastSelling'
import PromoCards from './PromoCard/PromoCards'
  const Home = () => {
  return (
<>
<Header/>
<CarouselSlides/>
<Marquee direction="left" speed='50' gradient="black green" >
 <Box sx={{color:'yellowgreen',paddingRight:1}}>50% discount </Box> on your <Box sx={{color:'turquoise',paddingX:1}}>Fitnova health products!</Box> Don’t miss out on this exclusive <Box sx={{color:'gold',fontWeight:500,paddingX:1}}>OFFER!</Box><CelebrationIcon sx={{color:'#F7FD04',fontSize:'1.3rem',paddingBottom:"2px"}}/>
   </Marquee>
    <Container> 
        <FeatureSection/>
        <DealsSection/>
<PromoCards/>
      <FastSelling/>
       <Bestsellers/>
        <BannerImage/>
    </Container>
     </>
  )
}

export default Home