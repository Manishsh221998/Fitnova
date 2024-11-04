import React from 'react'
import { Button, Paper } from "@mui/material";
import "./carouselItem.css"
 const CarouselItem = (props) => {
  return (
     <Paper className='paper' sx={{m:1}}>
    <img src={props.item.image} alt={props.item.caption1}/>
    <div className="banner_text">
       <Button className="banner_head">{props.item.caption1}</Button>
       <p>{props.item.caption2}</p>
      </div>
  </Paper>
   )
}

export default CarouselItem
