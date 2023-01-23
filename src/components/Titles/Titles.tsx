import { Image } from "@chakra-ui/image";
import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";

export const Titles = () => {
  return (
    <Box>
      <Grid>
        <GridItem>
          <Image src="https://i.ibb.co/zfqzrgv/blanco.png"></Image>
        </GridItem>
        <GridItem>
          <Text fontSize="5xl">Hi i'm Santiago</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
