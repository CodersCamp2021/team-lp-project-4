import { Container, Grid, Loader, Text } from '@mantine/core';
import GameHero from './GameHero';
import GameInfo from './GameInfo';

import useGameStyles from '../../hooks/use-game-styles';
import { useGame } from '../../hooks/use-game';
import { useParams } from 'react-router-dom';

const Game = () => {
  const { classes } = useGameStyles();
  const { gameId } = useParams();
  const { data: game, isLoading } = useGame(gameId);

  if (isLoading) {
    return (
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '75vh',
        }}
      >
        <Loader size="xl" color="white" />
      </Container>
    );
  } else if (game === undefined) {
    return <Text>Game not found!</Text>;
  } else {
    const { cover, title, category, platform, rating, description } = game;
    return (
      <Grid justify="center" columns={12} className={classes.gameGrid}>
        <Grid.Col span={10}>
          <GameHero
            cover={cover || ''}
            title={title || ''}
            category={category || ''}
            platform={platform || ''}
            rating={rating || 0}
          />
        </Grid.Col>
        <Grid.Col span={10}>
          <GameInfo description={description} />
        </Grid.Col>
      </Grid>
    );
  }
};

export default Game;
