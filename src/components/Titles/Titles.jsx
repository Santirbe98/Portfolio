import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';
import resume from './resume.pdf';

const Titles = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} id="home">
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              {!lenguage ? `Hi! I'm Santiago` : `Hola!, soy Santiago`}
            </Text>
            <br />
            <Text color={'blue.400'} as={'span'}>
              Full-Stack web developer
            </Text>
          </Heading>

          <Center>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <a href={resume} download>
                <Button
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  {!lenguage ? `Download resume` : `Descargar CV`}
                </Button>
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <Button rounded={'full'}>
                  {!lenguage ? `Contact me!` : `Contacto!`}
                </Button>
              </Link>
            </Stack>
          </Center>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Titles;
