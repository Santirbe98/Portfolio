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
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} id="testimonials">
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Testimonials</Heading>
          <Text>feedback from my colleagues</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
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
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
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
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
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
