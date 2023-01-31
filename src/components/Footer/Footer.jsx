import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';

export default function Footer() {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <BsFillBriefcaseFill />
        <Text fontSize="4xl" fontFamily="-moz-initial">
          Santiago Bonetto
        </Text>
        <Stack
          direction={{ base: 'column', sm: 'column', md: 'row' }}
          spacing={6}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            {!lenguage ? `Home` : `Inicio`}
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            {!lenguage ? `About` : `Sobre mi`}
          </Link>
          <Link
            to="mySkills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            {!lenguage ? `Skills` : `Habilidades`}
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            {!lenguage ? `Testimonials` : `Testimonios`}
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            {!lenguage ? `Contact` : `Contacto`}
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="center"
          align={{ base: 'center', md: 'center' }}
        >
          <Text fontSize="small">
            {!lenguage
              ? `© 2023 SB Dev. All rights reserved`
              : `© 2023 SB Dev. Todos los derechos reservados`}
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
