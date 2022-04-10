import { Container, createStyles, Stack, Text } from '@mantine/core';
import HomeGames from './HomeGames';

const useStyles = createStyles((theme) => ({
  homeView: {
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column-reverse',
    },
  },
  textContainer: {
    justifyContent: 'center',
  },

  title: {
    fontFamily: theme.fontFamily,
    fontSize: '80px',
    fontWeight: '700',
    lineHeight: '120px',
    color: theme.colors.white,
    [theme.fn.smallerThan('lg')]: {
      fontSize: '60px',
      lineHeight: '80px',
    },
    [theme.fn.smallerThan('md')]: {
      textAlign: 'center',
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: '40px',
      lineHeight: '60px',
    },
  },

  subtitle: {
    fontFamily: theme.fontFamily,
    fontSize: '25px',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0.215rem',
    color: theme.colors.grey,
    [theme.fn.smallerThan('lg')]: {
      fontSize: '18px',
    },
    [theme.fn.smallerThan('md')]: {
      textAlign: 'center',
    },
  },
}));

const Home = () => {
  const { classes } = useStyles();
  return (
    <Container className={classes.homeView}>
      <Stack className={classes.textContainer}>
        <Text className={classes.title} color="#ffffff">
          Let them play your game.
        </Text>
        <Text className={classes.subtitle} color="#cccccc">
          Discover, review, enjoy yourself
        </Text>
      </Stack>
      <HomeGames />
    </Container>
  );
};

export default Home;
