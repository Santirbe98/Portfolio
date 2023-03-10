import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title, linkedin }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <a href={linkedin} target="_blank" rel="noreferrer">
        <Avatar src={src} alt={name} mb={2} />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600}>{name}</Text>
          <Text
            fontSize={'sm'}
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {title}
          </Text>
        </Stack>
      </a>
    </Flex>
  );
};

const Testimonials = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} id="testimonials">
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>{!lenguage ? 'Testimonials' : 'Testimonios'}</Heading>
          <Text>
            {!lenguage
              ? `feedback from my colleagues`
              : `feedback de mis colegas`}
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {!lenguage ? `Always ready` : `Siempre predispuesto`}
              </TestimonialHeading>
              <TestimonialText>
                {!lenguage
                  ? `Santiago is a really competent and hardworking devloper who is
                always in good mood and has a predisposition to help and solve
                problems. Key member in the proyects who we work together, his
                capabilities in organizing, planning and tech skills were
                awesome. I assure I have learnt a lot from him, which helps me
                to this day.`
                  : `Santiago es un desarrollador realmente competente y trabajador que siempre est?? de buen humor y tiene    predisposici??n para ayudar y resolver problemas.
                     Miembro clave en los proyectos que trabajamos juntos, sus capacidades de organizaci??n, planificaci??n y habilidades tecnol??gicas eran impresionantes. 
                    Aseguro haber aprendido mucho de ??l, lo que me ayuda hasta el d??a de hoy.`}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://avatars.githubusercontent.com/u/22782144?v=4'}
              name={'Juan Alcaide'}
              linkedin="https://www.linkedin.com/in/juan-manuel-alcaide-05093020a/"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {!lenguage ? `Good lead` : `Buen lider`}
              </TestimonialHeading>
              <TestimonialText>
                {!lenguage
                  ? `Santiago is a personal friend for many years and I was fortunate
                to be able to walk the path of the Bootcamp "Soy Henry" with
                him. He proved to be a person who can lead a group, organize it
                and make sure that we can bring out the best potential of us. I
                believe that wherever he goes in his professional career he will
                be able to bring some of that enthusiasm and the desire to
                continue growing.`
                  : `Santiago es un amigo personal desde hace muchos a??os y tuve la suerte de
                de poder recorrer el camino del Bootcamp "Soy Henry" con
                ??l. Demostr?? ser una persona capaz de liderar un grupo, organizarlo
                y asegurarse de que podemos sacar el mejor potencial de nosotros. Creo que all?? donde vaya en su carrera profesional podr??
                ser?? capaz de aportar algo de ese entusiasmo y el deseo de
                de seguir creciendo.`}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://avatars.githubusercontent.com/u/70273175?v=4'}
              name={'Salvador Armanasco'}
              linkedin="https://www.linkedin.com/in/salvador-armanasco-catalin/"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {!lenguage ? `Optimistic` : `Optimista`}
              </TestimonialHeading>
              <TestimonialText>
                {!lenguage
                  ? `I had the pleasure of having studied with Santiago, if there is
                something I would highlight about him is that he is a very
                optimistic person. It is also worth mentioning that he knows how
                to work in a team supporting his peers for an excellent group
                growth. Undoubtedly he contributes in every job he does all his
                technical knowledge and, even more, an impeccable human behavior
                that, together, make him a complete professional.`
                  : `Tuve el agrado de haber estudiado con Santiago, si hay algo que resaltar??a de el es que es una persona muy optimista. As?? mismo cabe resaltar que sabe trabajar en equipo apoyando a sus pares para un crecimiento grupal excelente.
                Indudablemente aporta en cada trabajo que realiza todos sus conocimientos t??cnicos y, m??s a??n, un comportamiento humano impecable que, juntos, lo hacen un profesional completo.`}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://avatars.githubusercontent.com/u/93475201?v=4'}
              name={'Sebastian Cerutti'}
              linkedin="https://www.linkedin.com/in/cerutti-sebasti%C3%A1ng/"
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};
export default Testimonials;
