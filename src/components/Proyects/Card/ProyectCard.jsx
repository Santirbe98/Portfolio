import {
  Box,
  Image,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export default function ProyectCard({
  name,
  description,
  date,
  state,
  liveDemo,
  githubRepo,
  proyectImage,
}) {
  return (
    <Center py={6}>
      <Box
        maxW={'370px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image
            src={
              proyectImage ||
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
            h={210}
            w="100%"
            objectFit="cover"
          />
        </Box>
        <Stack>
          <Text
            color={state === 'finish' ? 'green.500' : 'yellow.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {state}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {name}
          </Heading>
          <Text color={'gray.500'}>{description}</Text>
        </Stack>
        <Stack mt={3}>
          <a href={githubRepo} target="_blank" rel="noreferrer">
            <Button isDisabled={githubRepo ? false : true} > Github Repo </Button>
          </a>
          <a href={liveDemo} target="_blank" rel="noreferrer">
            <Button isDisabled={liveDemo ? false : true} colorScheme="blue">
              Link / Live demo
            </Button>
          </a>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'gray.500'}>{date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
