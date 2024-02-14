// RetreatDetails.jsx

import React from 'react';
import CustomNavbar from '../Components/CustomNavbar';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';


const retreats = [
  {
    id: 1,
    type: 'Boat House',
    image: 'https://images.unsplash.com/photo-1610046371606-fa82a77a0035?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdCUyMGhvdXNlfGVufDB8fDB8fHww',
    description: 'Luxurious boat house with stunning waterfront views.',
    price: '$200 per night',
  },
  {
    id: 2,
    type: 'Beach House',
    image: 'https://cdn.autonomous.ai/static/upload/images/new_post/tiny-beach-house-designs-for-privacy-6520-1685693866974.webp',
    description: 'Relaxing beach house with direct access to the sandy shore.',
    price: '$150 per night',
  },
  {
    id: 3,
    type: 'Lake House',
    image: '',
    description: 'Peaceful lake house surrounded by nature and tranquility.',
    price: '$180 per night',
  },
  {
    id: 4,
    type: 'Lake House',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6H4Lyitce4FRC2JBhIy2Lt_cZSUjlV5ztA&usqp=CAU',
    description: 'Peaceful lake house surrounded by nature and tranquility.',
    price: '$180 per night',
  },
  {
    id: 2,
    type: 'Beach House',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtlx37InNDST5ltWz90UA0tXCXIt0KqEdcg&usqp=CAU',
    description: 'Relaxing beach house with direct access to the sandy shore.',
    price: '$150 per night',
  },
  {
    id: 1,
    type: 'Boat House',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2021/4/HE/XY/UG/611578/img-20200120-wa0016-jpg-500x500.jpg',
    description: 'Luxurious boat house with stunning waterfront views.',
    price: '$200 per night',
  },
];


const Postboatdetails = () => {
  return (
    <div>
          <header>
        <CustomNavbar />
        </header>
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Explore Water Retreats
      </Typography>
      <Grid container spacing={3}>
        {retreats.map((retreat) => (
          <Grid item key={retreat.id} xs={12} sm={6} md={4}>
            <Card>
              <div
                style={{
                  backgroundImage: `url(${retreat.image})`,
                  backgroundSize: 'cover',
                  height: 200,
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {retreat.type}
                </Typography>
                <Typography color="text.secondary">{retreat.description}</Typography>
                <Typography variant="h6" color="primary">
                  {retreat.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    <footer className="black-footer">
        {/* <Container> */}
          <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
            &copy; 2022 AquaVoyage CloudPort. All rights reserved.
          </Typography>
        {/* </Container> */}
      </footer>
    </div>
  );
};

export default Postboatdetails;