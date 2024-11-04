import React from 'react'
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Divider,
  Avatar
} from "@mui/material";
const OurTeam = () => {
    const teamMembers = [
        {
          name: 'Adam Den',
          title: 'Founder & CEO',
          image: 'https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg',
          bio: 'With a background in health sciences, Adam founded Fitnova to provide accessible health solutions.',
        },
        {
          name: 'Sammy Jhones',
          title: 'Head of Product Development',
          image: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
          bio: 'An expert in nutritional science, Sammy Jhones oversees the research and development of our product line.',
        },
       
        {
          name: 'Michael Brown',
          title: 'Marketing Director',
          image: ' https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg',
          bio: 'With a passion for communication, Michael drives our marketing strategies to connect with customers.',
        },
        {
          name: 'Alen Rose',
          title: 'Customer Relations Manager',
          image: 'https://t4.ftcdn.net/jpg/03/76/47/81/360_F_376478182_yPuPo2qi6rYcu9ilwGWR6gQ7QBBC8Isw.jpg',
          bio: 'Alen Rose ensures that customer feedback is heard and valued with her efforts, fostering meaningful relationships.',
        },
        {
          name: 'Sarah Davis',
          title: 'Fitness and Wellness Coach',
          image: 'https://t3.ftcdn.net/jpg/06/45/17/94/360_F_645179444_EtQDcQw5Mcyv1MSH25K5FrEkb3LfH5Vk.jpg',
          bio: 'With extensive experience in personal training, Sarah provides insights for our product development.',
        },
        {
            name: 'Lavi Rats',
            title: 'Quality Analyst',
            image: 'https://img.freepik.com/free-photo/human-face-expressions-emotions-positive-joyful-young-beautiful-female-with-fair-straight-hair-casual-clothing_176420-15188.jpg?semt=ais_hybrid',
            bio: 'With extensive experience in quality analyst, Lavi provides insights for our product quality development.',
          },
      ];
  return (
    <> 
<Container maxWidth="xl" sx={{backgroundImage:'url(https://images.pond5.com/paper-texture-noise-animated-stop-footage-148295348_iconl.jpeg)',borderRadius:6}}>
    <Container maxWidth="lg" style={{ padding: '2rem'}}>
 
    <Typography variant="h4" align="center" gutterBottom sx={{my:5}}>
    <Divider sx={{fontWeight:'600'}}>Meet Our Team</Divider> 
    <Typography variant="body1" align="center" paragraph>
    Our team is the heartbeat of our mission to promote health and wellness. Each member brings a wealth of experience and a shared passion for helping individuals achieve their health goals. Together, we are committed to quality, innovation, and customer satisfaction.
        </Typography> 
    </Typography>
    <Grid container spacing={4}>
      {teamMembers.map((member) => (
        <Grid item xs={12} sm={6} md={4} key={member.name}>
          <Card sx={{'&:hover':{background:'#FCFAEE',boxShadow:5}}}>
            <CardContent>
              <Avatar
                alt={member.name}
                src={member.image}
                sx={{ width: 100, height: 100, margin: '0 auto' }}
              />
              <Typography variant="h6" align="center" gutterBottom>
                {member.name}
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary">
                <Divider>{member.title}</Divider>
              </Typography>
              <Typography variant="body2" align="center" paragraph>
                {member.bio}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
   </Container>
  
  </Container>
  </>
  )
}

export default OurTeam