import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Fade,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillPersonFill, BsBookmarksFill, BsTools } from 'react-icons/bs';
import { GiTalk } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavBar = props => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box shadow="md" {...props}>
      <IconButton
        size="md"
        onClick={onToggle}
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        icon={<HamburgerIcon />}
        {...props}
      />

      <Fade in={isOpen}>
        <Box
          p="17px"
          mt="12"
          rounded="md"
          shadow="md"
          position="fixed"
          zIndex="3"
          justifySelf="center"
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
        >
          <Stack
            _hover={{
              bg: useColorModeValue('gray.200', 'gray.700'),
              cursor: 'pointer',
            }}
            p="5px"
            borderRadius="2xl"
          >
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              <AiFillHome />
            </Link>
          </Stack>
          <Stack
            mt={5}
            _hover={{
              bg: useColorModeValue('gray.200', 'gray.700'),
              cursor: 'pointer',
            }}
            p="5px"
            borderRadius="2xl"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <BsFillPersonFill />
            </Link>
          </Stack>
          <Stack
            mt={5}
            _hover={{
              bg: useColorModeValue('gray.200', 'gray.700'),
              cursor: 'pointer',
            }}
            p="5px"
            borderRadius="2xl"
          >
            <Link
              to="proyects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <BsBookmarksFill />
            </Link>
          </Stack>
          <Stack
            mt={5}
            _hover={{
              bg: useColorModeValue('gray.200', 'gray.700'),
              cursor: 'pointer',
            }}
            p="5px"
            borderRadius="2xl"
          >
            <Link
              to="mySkills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <BsTools />
            </Link>
          </Stack>
          <Stack
            mt={5}
            _hover={{
              bg: useColorModeValue('gray.200', 'gray.700'),
              cursor: 'pointer',
            }}
            p="5px"
            borderRadius="2xl"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <GiTalk />
            </Link>
          </Stack>
        </Box>
      </Fade>
    </Box>
  );
};

export default NavBar;
