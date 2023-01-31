import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import ProyectCard from '../Card/ProyectCard';
import { proyects } from './data.js';
import { proyects2 } from './data.js';

const ProyectCards = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <Box mt={100} id="proyects">
      <Center>
        <Heading as="h1">
          {!lenguage ? 'My recent proyects' : 'Mis proyectos recientes'}
        </Heading>
      </Center>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        alignItems="flex-start"
        spacingX="40px"
        spacingY="20px"
      >
        {!lenguage
          ? proyects.map(p => (
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
            ))
          : proyects2.map(p => (
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
