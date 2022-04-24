import { Container, Grid, Loader, Text } from '@mantine/core';
import GameHero from './GameHero';
import GameInfo from './GameInfo';

import useGameStyles from '../../hooks/use-game-styles';
import { useGame } from '../../hooks/use-game';
import { useRatings } from '../../hooks/use-ratings';
import { useParams } from 'react-router-dom';

const Game = () => {
  const { classes } = useGameStyles();
  const { gameId } = useParams();
  const { data: game, isLoading: isLoadingGame } = useGame(gameId);
  const { data: ratings, isLoading: isLoadingRatings } = useRatings(gameId);

  if (isLoadingGame || isLoadingRatings) {
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
  } else if (game !== undefined) {
    const { _id, cover, title, category, platform, description } = game;
    return (
      <Grid justify="center" columns={12} className={classes.gameGrid}>
        <Grid.Col span={10}>
          <GameHero
            gameId={_id || ''}
            cover={cover || ''}
            title={title || ''}
            category={category || ''}
            platform={platform || ''}
            ratings={ratings}
          />
        </Grid.Col>
        <Grid.Col span={10}>
          <GameInfo description={description} ratings={ratings} />
        </Grid.Col>
      </Grid>
    );
  } else {
    return <Text>Game not found!</Text>;
  }
};

export default Game;
