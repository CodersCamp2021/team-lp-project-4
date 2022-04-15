import {
  Container,
  createStyles,
  Loader,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { useGames } from '../../utils/useGames';
import GameTile from './GameTile';

const useStyles = createStyles((theme) => ({
  container: {
    margin: '80px auto',
    [theme.fn.smallerThan(1024)]: {
      paddingLeft: '120px',
      paddingRight: '120px',
    },
    [theme.fn.smallerThan(768)]: {
      paddingLeft: '60px',
      paddingRight: '60px',
    },
    [theme.fn.smallerThan(576)]: {
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
  headingText: {
    fontFamily: theme.fontFamily,
    fontSize: 40,
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 700,
    lineHeight: '60px',
    letterSpacing: 1,
    paddingBottom: 20,
    paddingLeft: 15,
    color: 'rgba(167, 156, 184, 1)',
    [theme.fn.smallerThan(400)]: {
      fontSize: '35px',
      textAlign: 'center',
    },
  },
  gamepad: {
    [theme.fn.smallerThan(400)]: {
      display: 'none',
    },
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
  },
}));

const AllGames = () => {
  const { classes } = useStyles();
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
