import { createStyles, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import HomeGames from './HomeGames';

const useStyles = createStyles((theme) => ({
  homeView: {
    padding: '10rem 10rem',
  },
  title: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '80px',
    fontWeight: '700',
    lineHeight: '120px',
  },
  subtitle: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '25px',
    fontWeight: '700',
    lineHeight: '37.5px',
  },
}));

const Home = () => {
  const { classes } = useStyles();
  return (
    <SimpleGrid
      cols={2}
      className={classes.homeView}
      breakpoints={[{ maxWidth: 'md', cols: 1, spacing: 'sm' }]}
    >
      {/* <Title order={1}>Let them play your game.</Title> */}
      <Stack>
        {/* <Text> */}
        <Title order={1} className={classes.title}>
          Let them play your game.
        </Title>
        {/* </Text> */}
        <Text>
          <Title order={2}>Discover, review, enjoy yourself</Title>
        </Text>
      </Stack>
      <HomeGames />
    </SimpleGrid>
  );
};

export default Home;
