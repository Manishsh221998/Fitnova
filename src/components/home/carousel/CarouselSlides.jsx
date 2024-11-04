 import React from 'react'
 import Carousel from "react-material-ui-carousel"
 import CarouselItem from "./CarouselItem"
const CarouselSlides = () => {
  
    const items = [
      {
        id: "Banner img 1",
        image: "https://img6.hkrtcdn.com/35910/bnr_3590975_o.jpg",
        // caption1:"Byu now",
        // caption2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: "Banner img 2",
        image: "https://img4.hkrtcdn.com/34825/bnr_3482453_o.jpg",
        // caption1:"Banner 2",
        // caption2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: "Banner img 3",
        image: "https://img4.hkrtcdn.com/35904/bnr_3590353_o.jpg",
        // caption1:"Banner 3",
        // caption2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: "Banner img 3",
        image: "https://img4.hkrtcdn.com/35922/bnr_3592173_o.jpg",
        // caption1:"Banner 3",
        // caption2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: "Banner img 3",
        image: " https://img8.hkrtcdn.com/35879/bnr_3587867_o.jpg",
        // caption1:"Banner 3",
        // caption2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: "Banner img 3",
        image: "https://img4.hkrtcdn.com/34713/bnr_3471213_o.jpg",
        // caption1:"Banner 3",
        // caption2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        id: "Banner img 3",
        image: " https://img2.hkrtcdn.com/35921/bnr_3592081_o.jpg",
        // caption1:"Banner 3",
        // caption2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
     
    ];
    
   return (
     <Carousel>
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};
 
 
 export default CarouselSlides