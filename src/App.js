import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Titles from './components/Titles/Titles';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import ProyectCards from './components/Proyects/Cards/ProyectCards';
import MySkills from './components/MySkills/MySkills';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" position="fixed" />
          <Titles />
          <About />
          <ProyectCards />
          <MySkills />
          <Testimonials />
          <Footer />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
