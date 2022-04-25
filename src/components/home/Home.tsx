import { Container, Stack, Text } from '@mantine/core';
import useHomeStyles from '../../hooks/use-home-styles';
import HomeGames from './HomeGames';

const Home = () => {
  const { classes } = useHomeStyles();
  return (
    <Container className={classes.homeView}>
      <Stack className={classes.textContainer}>
        <Text className={classes.title}>Let them play your game.</Text>
        <Text className={classes.subtitle}>
          Discover, review,
          <br /> enjoy yourself
        </Text>
      </Stack>
      <HomeGames />
    </Container>
  );
};

export default Home;
