import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Titles from './components/Titles/Titles';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import ProyectCards from './components/Proyects/Cards/ProyectCards';
import MySkills from './components/MySkills/MySkills';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher
            justifySelf="flex-end"
            position="fixed"
            zIndex="2"
          />
          <NavBar justifySelf="flex-start" position="fixed" zIndex="2" />
          <Titles />
          <About />
          <ProyectCards />
          <MySkills />
          <Testimonials />
          <Contact />
        </Grid>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
