import { Container, Loader, ScrollArea, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import { useGames } from '../../hooks/use-games';
import useAllGamesStyles from '../../hooks/use-all-games-styles';
import GameTile from './GameTile';

const AllGames = () => {
  const { classes } = useAllGamesStyles();
  const { data: games, status } = useGames();

  const gamesToDisplay = React.useMemo(() => games, [games]);

  let content;

  if (status !== 'success') {
    content = (
      <Container className={classes.loadingContainer}>
        <Loader size="xl" color="white" />
      </Container>
    );
  } else {
    content = (
      <ScrollArea type="always" style={{ height: '60vh' }}>
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: 1024, cols: 1, spacing: 'md' }]}
          sx={{ padding: '0 20px' }}
        >
          {gamesToDisplay?.map((game, index) => (
            <GameTile key={game._id} game={game} index={index} />
          ))}
        </SimpleGrid>
      </ScrollArea>
    );
  }

  return (
    <Container size="lg" px="60px" className={classes.container}>
      <Text className={classes.headingText}>
        ALL GAMES <span className={classes.gamepad}>🎮</span>
      </Text>
      {content}
    </Container>
  );
};

export default AllGames;
