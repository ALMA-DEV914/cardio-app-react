import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


const Footer = () => (
  <Container maxWidth="xlg" mt="80px" className='footer'>
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <div className='d-flex icons'>
     <Facebook/> <Twitter/><Instagram/>
     </div>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '25px', xs: '20px' } }} mt="41px" textAlign="center" pb="20px">Copyright reserved@2022</Typography>
  </Container>
);

export default Footer;
