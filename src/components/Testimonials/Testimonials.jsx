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
                  : `Santiago es un desarrollador realmente competente y trabajador que siempre está de buen humor y tiene    predisposición para ayudar y resolver problemas.
                     Miembro clave en los proyectos que trabajamos juntos, sus capacidades de organización, planificación y habilidades tecnológicas eran impresionantes. 
                    Aseguro haber aprendido mucho de él, lo que me ayuda hasta el día de hoy.`}
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
                  : `Santiago es un amigo personal desde hace muchos años y tuve la suerte de
                de poder recorrer el camino del Bootcamp "Soy Henry" con
                él. Demostró ser una persona capaz de liderar un grupo, organizarlo
                y asegurarse de que podemos sacar el mejor potencial de nosotros. Creo que allá donde vaya en su carrera profesional podrá
                será capaz de aportar algo de ese entusiasmo y el deseo de
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
                  : `Tuve el agrado de haber estudiado con Santiago, si hay algo que resaltaría de el es que es una persona muy optimista. Así mismo cabe resaltar que sabe trabajar en equipo apoyando a sus pares para un crecimiento grupal excelente.
                Indudablemente aporta en cada trabajo que realiza todos sus conocimientos técnicos y, más aún, un comportamiento humano impecable que, juntos, lo hacen un profesional completo.`}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://avatars.githubusercontent.com/u/93475201?v=4'}
              name={'Sebastian Cerutti'}
              linkedin="https://www.linkedin.com/in/cerutti-sebasti%C3%A1ng/"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {!lenguage ? `contributory` : `contributivo`}
              </TestimonialHeading>
              <TestimonialText>
                {!lenguage
                  ? `With Santiago we started together in the same company and since then I have witnessed his remarkable professional growth.
                  Santiago possesses a strong technical skill set and a highly decisive approach to development challenges. His ability to learn and adapt quickly is impressive, and he is always willing to take on additional responsibilities to ensure the success of the team. Santiago is a pleasure to work with, and his contribution to the team has been significant. His dedication and passion for development make him a valuable resource. I have no doubt that he will continue to thrive in his career.
                  I wish Santiago all the best in his future endeavors!`
                  : `Con Santiago comenzamos juntos en la misma empresa y desde entonces he sido testigo de su notable crecimiento profesional.
                  Santiago posee un sólido conjunto de habilidades técnicas y un enfoque altamente resolutivo para los desafíos de desarrollo. Su capacidad para aprender y adaptarse rápidamente es impresionante, y siempre está dispuesto a asumir responsabilidades adicionales para garantizar el éxito del equipo. Es un placer trabajar con Santiago, y su contribución al equipo ha sido significativa. Su dedicación y pasión por el desarrollo lo convierten en un recurso valioso. No tengo dudas de que seguirá prosperando en su carrera.
                  ¡Le deseo a Santiago lo mejor en sus futuros proyectos!`}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://avatars.githubusercontent.com/u/100777846?v=4'}
              name={'Gaspar Muñoz'}
              linkedin="https://www.linkedin.com/in/gaspar-mu%C3%B1oz-7a9825239/"
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};
export default Testimonials;
