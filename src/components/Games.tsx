import { Grid, Center } from '@mantine/core';
import Recommended from './Recommended';
import TopRatedSelection from './TopRatedSelection';
import AllGamesSelection from './AllGamesSelection';

const TopRated = () => {
  return (
    <Center
      sx={{
        width: '40%',
        gridColumn: 1 / 2,
      }}
    >
      TopRatedSelection
    </Center>
  );
};

const AllGames = () => {
  return (
    <Center
      sx={{
        width: '40%',
        gridColumn: -1,
      }}
    >
      All Games
    </Center>
  );
};

const Games = () => {
  return (
    <Grid
      sx={{
        width: '80vw',
        height: '80%',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <Grid.Col sx={{}} span={12}>
        <Recommended />
      </Grid.Col>
      <Grid.Col span={6}>
        <TopRatedSelection />
      </Grid.Col>
      <Grid.Col span={6}>
        <AllGamesSelection />
      </Grid.Col>
    </Grid>
  );
};
export default Games;
