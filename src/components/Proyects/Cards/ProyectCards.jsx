import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ProyectCard from '../Card/ProyectCard';
import { proyects } from './data.js';

const ProyectCards = () => {
  return (
    <Box mt={100} id="proyects">
      <Center>
        <Heading as="h1">My recent proyects</Heading>
      </Center>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        spacingX="40px"
        spacingY="20px"
      >
        {proyects.map(p => (
          <ProyectCard
            proyectImage={p.proyectImage}
            key={p.id}
            name={p.name}
            description={p.description}
            date={p.date}
            state={p.state}
            githubRepo={p.githubRepo}
            liveDemo={p.liveDemo}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProyectCards;
