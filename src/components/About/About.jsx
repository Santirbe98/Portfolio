import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import avatar from './blanco.png';
import { useSelector } from 'react-redux';

const About = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <Box id="about">
      <Container maxW={'7xl'} p="12">
        <Heading as="h1">{!lenguage ? `About me` : `Sobre mi`}</Heading>
        <Box
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              pb={{ base: '1', sm: '50' }}
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%"
            >
              <Image
                borderRadius="full"
                src={avatar}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}
          >
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Text fontSize="2xl">
                  {!lenguage ? `Who am I? 😇👀` : `¿Quién soy? 😇👀`}
                </Text>
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="sm"
            >
              {!lenguage
                ? `My name is Santiago, I'm 24 years old and I'm a Full-Stack Web
              Developer. I have great ability to organize work environments and
              communicate assertively. As a professional goal, I want to further
              develop my leadership skills.`
                : `Mi nombre es Santiago, tengo 24 años y soy Desarrollador web Full-Stack. Poseo gran habilidad para organizar entornos de trabajo y comunicar de manera asertiva. Como objetivo profesional, deseo desarrollar mas mis habilidades de liderazgo.`}
            </Text>
            <br />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Text fontSize="2xl">
                  {!lenguage ? `Profile 🤓💻` : `Perfil 🤓💻`}
                </Text>
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="sm"
            >
              {!lenguage
                ? `I love helping people solve problems with their code. I have the
                ability to understand and communicate. I aspire to work in the
                Video Game field someday.`
                : `Me encanta ayudar a la gente a resolver problemas con su código. Tengo la capacidad de entender y comunicar. Aspiro a trabajar en el área de Videojuegos algún día.`}
            </Text>
            <br />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Text fontSize="2xl">
                  {!lenguage ? `Why me? 🤔👨🏼‍🏫👐🏻` : `¿Por qué yo? 🤔👨🏼‍🏫👐🏻`}
                </Text>
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="sm"
            >
              {!lenguage
                ? `I'm always looking for organization and planning things, I'm very
                committed and love good practices. I am an empathetic person, I
                like to work in a team and I consider that I have great leadership
                skills. I try to make the final product as close as possible to
                what the client needs.`
                : `Busco siempre la organización y planeamiento de las cosas, soy muy comprometido y amante de las buenas prácticas.
                Soy una persona empática, me gusta trabajar en equipo y considero que tengo una gran capacidad de liderazgo.
                Trato de que el producto final sea lo mas parecido a lo que el cliente necesita.`}
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
