import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FitnovaAccordion = () => {
  return (
    <Box Box sx={{paddingX:1,my:'3rem'}}>
         <Typography variant="h5" sx={{textAlign:'start',my:"10px",color:'#007F73',fontFamily:'inherit'}}>More Details about Health, Nutrition & Body Building Supplements   <Divider/></Typography>
     
      <Accordion sx={{textAlign:'start'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>About Fitnova</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#ECF9FF'}}>
          <Typography>
            Established in March 2011, Fitnova quickly transitioned from a
            small team to a leading online platform. By 2019, it introduced
            certified Indian and international brands, growing annually.
            <ul style={{listStyle:'circle',paddingLeft:'18px'}}>
              <li>Great online presence</li>
              <li>Informational content</li>
              <li>Loyalty programs</li>
              <li>Better services and authentic products</li>
              <li>Focus on every health and fitness requirement</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{textAlign:'start'}}>
        <AccordionSummary sx={{backgroundColor:'mintcream'}} expandIcon={<ExpandMoreIcon />}>
          <Typography>What Makes Fitnova Special?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFEFEF'}}>
          <Typography>
            Fitnova is dedicated to providing everything you need on your
            fitness journey:
            <ul style={{listStyle:'circle',paddingLeft:'18px'}} >
              <li>The widest range of bodybuilding supplements</li>
              <li>Product comparison options</li>
              <li>Detailed product information</li>
              <li>Exclusive discounts and offers</li>
              <li>100% authentic products sourced from manufacturers</li>
              <li>High safety standards and easy return policies</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{textAlign:'start'}}>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography>House Of Fitnova</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#ECF9FF'}}>
          <Typography>
            Fitnova brings premium nutritional products and online health
            consultations under one portal. Features include:
            <ul style={{listStyle:'circle',paddingLeft:'18px'}}>
              <li>Wide range of high-performance nutrition products</li>
              <li>Ability to compare and choose the right products</li>
              <li>Online and offline accessibility</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{textAlign:'start'}}>
        <AccordionSummary sx={{backgroundColor:'mintcream'}} expandIcon={<ExpandMoreIcon />}>
          <Typography>Sports Nutrition Supplements</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFEFEF'}}>
          <Typography>
            Boost your workout regime with:
            <ul style={{listStyle:'circle',paddingLeft:'18px'}}>
              <li>Whey Protein</li>
              <li>Whey Protein Isolate</li>
              <li>Mass Gainers</li>
              <li>BCAA for muscle recovery</li>
              <li>Pre & Post Workout Supplements</li>
              <li>Protein Bars and Protein Water</li>
              <li>Creatine for performance enhancement</li>
              <li>Peanut Butter for nutrition</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{textAlign:'start'}}>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography>Vitamins & Supplements</Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{backgroundColor:'#ECF9FF'}}>
          <Typography>
            Improve overall well-being with:
            <ul style={{listStyle:'circle',paddingLeft:'18px'}} >
              <li>Multivitamins</li>
              <li>Omega-3 and Fish Oil</li>
              <li>Biotin for hair, skin, and nails</li>
              <li>Calcium for bone health</li>
              <li>Vitamin C, D, and E capsules</li>
              <li>Collagen for skin and joint health</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{textAlign:'start'}}>
        <AccordionSummary sx={{backgroundColor:'mintcream'}} expandIcon={<ExpandMoreIcon />}>
          <Typography>Ayurveda & Herbs</Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{backgroundColor:'#FFEFEF'}}>
          <Typography>
            Traditional remedies for immunity and strength:
            <ul style={{listStyle:'circle',paddingLeft:'18px'}} >
              <li>Safed Musli</li>
              <li>Green Coffee Bean & Tea Extract</li>
              <li>Wheatgrass and Garcinia Cambogia</li>
              <li>Milk Thistle and Bhringraj</li>
              <li>Ashwagandha and Amla</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{textAlign:'start'}}>
        <AccordionSummary   expandIcon={<ExpandMoreIcon />}>
          <Typography>Health Foods & Drinks</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#ECF9FF'}}>
          <Typography>
            Nutritional options for a healthier lifestyle:
            <ul style={{listStyle:'circle',paddingLeft:'18px'}} >
              <li>Meal Replacement Shakes</li>
              <li>Apple Cider Vinegar</li>
              <li>Protein Shakes</li>
              <li>Oats, Muesli, and Breakfast Cereals</li>
              <li>Protein Cookies and Nut Butter</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{textAlign:'start'}}>
        <AccordionSummary sx={{backgroundColor:'mintcream'}} expandIcon={<ExpandMoreIcon />}>
          <Typography>Immunity Boosters</Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{backgroundColor:'#FFEFEF'}}>
          <Typography>
            Build your immune shield with:
            <ul style={{listStyle:'circle',paddingLeft:'18px'}} >
              <li>Fitnova Immunity +</li>
              <li>TrueBasics Immuno Boost</li>
              <li>Specialized multivitamin formulas</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FitnovaAccordion;
