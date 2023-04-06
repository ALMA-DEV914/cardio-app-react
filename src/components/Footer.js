import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


const Footer = () => (
  <div  className='footer'>
  <Container>
    <Stack >
      <div className='d-flex icons'>
     <Facebook/> <Twitter/><Instagram/>
     </div>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '22px', xs: '20px' } }} mt="41px" textAlign="center" pb="20px">Alma Braun <br></br>Copyright reserved@2022</Typography>
  </Container>
  </div>
);

export default Footer;
