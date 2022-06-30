import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/joan.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#0D98BA" fontWeight="600" fontSize="26px" fontFamily="Roboto">Fitness World</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    Dare to be great<br /> Exercise and Be Fit!
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px', background: '#0D98BA', padding: '14px'}}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#0D98BA" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="vecteezy.com" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
