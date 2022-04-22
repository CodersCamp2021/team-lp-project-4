import React, { useState } from 'react';
import { Box, Text, Group, Loader, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

import useGamesStyles from '../../hooks/use-games-styles';
import { useGames } from '../../hooks/use-games';
import GameCard from './GameCard';

const variantsLarge = {
  current: { scale: 1.25, originY: 1 },
  adjacent: { scale: 1.1, originY: 1 },
};

const variantsSmall = {
  current: { scale: 1.13, originY: 1 },
  adjacent: { scale: 1.05, originY: 1 },
};

const Recommended = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { classes } = useGamesStyles();
  const smallScreen = useMediaQuery('(max-width: 870px)');
  const mediumScreen = useMediaQuery('(max-width: 1250px)');
  const { data, isLoading } = useGames();

  const games = React.useMemo(
    () => data?.sort(() => 0.5 - Math.random()),
    [data],
  );

  return (
    <Box>
      <Text
        color="rgba(255, 255, 255, 0.55)"
        className={classes.recommendedHeading}
      >
        RECOMMENDED
      </Text>
      {isLoading ? (
        <Container className={classes.loadingContainer}>
          <Loader size="xl" color="white" />
        </Container>
      ) : (
        <Group className={classes.recommendedGamesWrapper}>
          {games?.slice(0, 5).map((game, index) => (
            <motion.div
              key={game._id}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              animate={
                hoveredCard === index
                  ? 'current'
                  : smallScreen // if screen === small, no animation for adjacent cards
                  ? undefined
                  : hoveredCard === index + 1 // otherwise, check for adjacent cards and add animation
                  ? 'adjacent'
                  : hoveredCard === index - 1
                  ? 'adjacent'
                  : undefined
              }
              variants={mediumScreen ? variantsSmall : variantsLarge}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </Group>
      )}
    </Box>
  );
};

export default Recommended;
