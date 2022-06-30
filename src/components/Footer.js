import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo.jpg';

const Footer = () => (
  <Container maxWidth="xlg" mt="80px" className='footer'>
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '120px', height: '80px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '25px', xs: '20px' } }} mt="41px" textAlign="center" pb="20px">Made with ❤️ by Alma Braun</Typography>
  </Container>
);

export default Footer;
