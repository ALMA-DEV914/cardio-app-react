import React from 'react';
import { Box, Stack, Typography, Container } from '@mui/material';

const HeroBanner = () => (
  
  <Box  className='hero'>
   <Container>
    <Typography color="#0D98BA" fontWeight="600" fontSize="26px" fontFamily="Roboto">Fitness World</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    Dare to be great<br /> Exercise and Be Fit!
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you.
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px', background: '#0D98BA', padding: '14px'}}>Explore Exercises</a>
    </Stack>
    <h1 className='text-shadow'>
      Exercise
    </h1>
   </Container>
  </Box>
);

export default HeroBanner;
