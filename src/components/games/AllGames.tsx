import { Container, Loader, SimpleGrid, Text } from '@mantine/core';
import { useGames } from '../../hooks/use-games';
import useAllGamesStyles from '../../hooks/use-all-games-styles';
import GameTile from './GameTile';

const AllGames = () => {
  const { classes } = useAllGamesStyles();
  const { data, status } = useGames();

  let content;

  if (status !== 'success') {
    content = (
      <Container className={classes.loadingContainer}>
        <Loader size="xl" color="white" />;
      </Container>
    );
  } else {
    content = (
      <SimpleGrid
        cols={2}
        breakpoints={[{ maxWidth: 1024, cols: 1, spacing: 'md' }]}
      >
        {data.map((game, index) => (
          <GameTile key={game._id} game={game} index={index} />
        ))}
      </SimpleGrid>
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
