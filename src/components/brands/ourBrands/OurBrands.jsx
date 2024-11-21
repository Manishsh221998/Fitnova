import React from "react";
import OurGoals from "../Goals/OurGoals";
import Header from "../../../layout/header/Header";
import { Box, Container } from "@mui/material";
import FitnovaAccordion from "../../home/FitnovaAccordian/FitnovaAccordian";

const OurBrands = () => {
  const people = [
    {
      name: "Asitis",
      role: "Best Whey Protein Concentrate.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbLape9i4PluxVH9btowdJUNEPfmDdLzK_g&s",
    },
    {
      name: "Muscle Blaze",
      role: "Health supplement brand.",
      imageUrl:
        "https://choice.wetestyoutrust.com/sites/default/files/styles/medium/public/2022-03/7888b841-13ae-11eb-9dfd-06f7a2c059a3.png?itok=TlEOXcoE",
    },
    {
      name: "Optimum Nutrition",
      role: "Gold Standard why™",
      imageUrl:
        "https://logodownload.org/wp-content/uploads/2021/04/optimum-nutrition-logo-0.png",
    },
    {
      name: "Truebasics",
      role: "Best Wellness Essentials",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBrctq2dyHWHuStY5IT2cHcM6WNUkLUIpKw&s",
    },
    {
      name: "Gritzo",
      role: "Personalised Nutrition Drink.",
      imageUrl:
        "https://img1.hkrtcdn.com/22214/normal_2221360_o.png",
    },
    {
      name: "Big Muscle",
      role: "Health supplement brand.",
      imageUrl:
        "https://i.ytimg.com/vi/iyqgTMJHu2U/maxresdefault.jpg",
    },
    // More people...
  ];
  return (
    <>
    <Box sx={{backgroundImage:'url(https://images.pond5.com/paper-texture-noise-animated-stop-footage-148295348_iconl.jpeg)',borderRadius:6}}>
    <Header/>
    <Container>
    <div className="py-24 sm:py-32 rounded-xl p-4 bg-teal-50 ms-3 m-2 shadow-md">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Our Brand Partners 
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 "
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6 p-2 hover:shadow-md hover:bg-[#FEF9F2] hover:rounded-md">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900 text-start  hover:text-[#ff8940]">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600 text-start  hover:text-[#ff4c7f]">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
     </div>
     <OurGoals/>

     </Container>

     </Box>
     </>
  );
};

export default OurBrands;
