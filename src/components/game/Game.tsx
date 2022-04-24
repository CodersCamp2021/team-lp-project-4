import { Container, Grid, Loader, Text, Center } from '@mantine/core';
import GameHero from './GameHero';
import GameInfo from './GameInfo';

import useGameStyles from '../../hooks/use-game-styles';
import { useGame } from '../../hooks/use-game';
import { useRatings } from '../../hooks/use-ratings';
import { useParams, Link } from 'react-router-dom';

const Game = () => {
  const { classes } = useGameStyles();
  const { gameId } = useParams();
  const { data: game, isLoading: isLoadingGame, isError } = useGame(gameId);
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
  } else if (isError) {
    return (
      <Center
        sx={{
          margin: '0 auto',
          flexDirection: 'column',
          width: '80vw',
          height: '80vh',
          color: 'rgb(235,235,235)',
        }}
      >
        <Text
          sx={{
            fontSize: 60,
          }}
        >
          Game not found!
        </Text>
        <Text
          component={Link}
          to={'/games'}
          sx={{
            fontSize: 36,
            color: 'rgb(168, 168, 168)',
            textDecoration: 'underline',
            '&:hover': {
              color: 'rgb(220, 220, 220)',
            },
          }}
        >
          Go back to games
        </Text>
      </Center>
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
            platform={platform || []}
            ratings={ratings || []}
          />
        </Grid.Col>
        <Grid.Col span={10}>
          <GameInfo description={description || ''} ratings={ratings || []} />
        </Grid.Col>
      </Grid>
    );
  } else {
    return null;
  }
};

export default Game;
