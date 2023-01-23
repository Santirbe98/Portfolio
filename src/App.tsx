import { Box, Center, ChakraProvider } from "@chakra-ui/react";
import { Footer } from "./components/Footer/Footer";
import { Titles } from "./components/Titles/Titles";

const App = () => {
  return (
    <ChakraProvider>
      <Center>
        <Box minH="100vh">
          <Titles />
          <Footer />
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default App;
