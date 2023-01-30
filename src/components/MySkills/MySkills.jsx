import {
  Box,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Text,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

const MySkills = () => {
  return (
    <Box id="mySkills" pt={20}>
      <Heading
        align="center"
        as="h2"
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        Languages and Tools:
      </Heading>
      <SimpleGrid
        mt={10}
        mb={10}
        columns={{ base: 1, sm: 2, md: 4, xl: 4 }}
        spacingX="40px"
        spacingY="20px"
      >
        <Stack>
          <Text>Front End</Text>
          <Box
            minH={180}
            bg={useColorModeValue('gray.100', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <SimpleGrid
              columns={{ base: 3, sm: 3, md: 3, xl: 4 }}
              pl={{ base: 10, sm: 5, md: 3 }}
            >
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a
                  href="https://www.w3schools.com/css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a
                  href="https://www.w3.org/html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                    alt="redux"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
            </SimpleGrid>
          </Box>
        </Stack>

        <Stack>
          <Text>Back-end</Text>
          <Box
            minH={180}
            bg={useColorModeValue('gray.100', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <SimpleGrid
              columns={{ base: 3, sm: 3, md: 3, xl: 4 }}
              pl={{ base: 10, sm: 5, md: 3 }}
            >
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a
                  href="https://expressjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://i.ibb.co/c6768Kc/https3987944058-files-gitbook-io-filesv0bgitbook-legacy-filesoassets2-F-Lh14lb3-LH4-C886q-Wx-YA2-FSc.png"
                    alt="express"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a href="https://heroku.com" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
                    alt="heroku"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a href="https://railway.app/" target="_blank" rel="noreferrer">
                  <img
                    src="https://railway.app/brand/logo-light.png"
                    alt="railway"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a
                  href="https://www.postgresql.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                    alt="postgresql"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
            </SimpleGrid>
          </Box>
        </Stack>
        <Stack>
          <Text>programming languages</Text>
          <Box
            minH={180}
            bg={useColorModeValue('gray.100', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <SimpleGrid
              columns={{ base: 3, sm: 3, md: 3, xl: 4 }}
              pl={{ base: 10, sm: 5, md: 3 }}
            >
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="typescript"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
            </SimpleGrid>
          </Box>
        </Stack>
        <Stack>
          <Text>Extras</Text>
          <Box
            minH={180}
            bg={useColorModeValue('gray.100', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <SimpleGrid
              columns={{ base: 3, sm: 3, md: 3, xl: 4 }}
              pl={{ base: 10, sm: 5, md: 3 }}
            >
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
              <Stack
                pt={5}
                _hover={{
                  transitionDuration: '0.5s',
                  transform: 'rotate(5deg) scale(1.2)',
                }}
              >
                <a href="https://postman.com" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    alt="postman"
                    width="40"
                    height="40"
                  />
                </a>
              </Stack>
            </SimpleGrid>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default MySkills;
