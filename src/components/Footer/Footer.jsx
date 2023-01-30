import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

export default function Footer() {
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
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            About
          </Link>
          <Link
            to="mySkills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            Skills
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            Contact
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
          <Text fontSize="small">© 2023 SB Dev. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
}
