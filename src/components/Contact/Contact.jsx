import {
  Box,
  Button,
  CircularProgress,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Contact() {
  const { hasCopied, onCopy } = useClipboard('santirbe@gmail.com');
  const formRef = useRef();
  const [loadingEmail, setLoadingEmail] = useState(false);
  const lenguage = useSelector(state => state.lenguage);
  const handleSubmit = e => {
    e.preventDefault();
    setLoadingEmail(true);
    emailjs
      .sendForm(
        'service_72c4mxk',
        'template_13q5043',
        formRef.current,
        'HNXoYtV-g5e9wQGt5'
      )
      .then(
        result => {
          console.log(result.text);
          setLoadingEmail(false);
          alert('The message was successfully sent');
        },
        error => {
          setLoadingEmail(false);
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Flex align="center" justify="center" id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}
            >
              {!lenguage ? `Contact me!` : `Contacto!`}
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}
              >
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<AiOutlineMail />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://github.com/Santirbe98" target="_blank">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<AiFillGithub />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/santiago-bonetto/"
                  target="_blank"
                >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<AiFillLinkedin size="28px" />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
                boxShadow={'2xl'}
              >
                <VStack spacing={5}>
                  <form onSubmit={handleSubmit} ref={formRef}>
                    <FormControl isRequired>
                      <FormLabel>{!lenguage ? `Name` : `Nombre`}</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsFillPersonFill />} />
                        <Input
                          type="text"
                          name="user_name"
                          placeholder={!lenguage ? `Your name` : `Tu nombre`}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<AiOutlineMail />} />
                        <Input
                          type="email"
                          name="user_email"
                          placeholder={!lenguage ? `Your email` : `Tu email`}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>{!lenguage ? `Message` : `Mensaje`}</FormLabel>

                      <Textarea
                        name="user_message"
                        placeholder={!lenguage ? `Your Message` : `Tu mensaje`}
                        rows={6}
                        resize="none"
                      />
                      <Button
                        mt={10}
                        width={140}
                        bg={useColorModeValue('gray.700', 'blue.400')}
                        color="white"
                        _hover={{
                          bg: useColorModeValue('gray.800', 'blue.500'),
                        }}
                        type="submit"
                      >
                        {!loadingEmail ? (
                          !lenguage ? (
                            'Send Message'
                          ) : (
                            'Enviar mensaje'
                          )
                        ) : (
                          <CircularProgress
                            isIndeterminate
                            size="30px"
                            color="gray.900"
                          />
                        )}
                      </Button>
                    </FormControl>
                  </form>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
