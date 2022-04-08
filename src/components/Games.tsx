import { Grid, Center } from '@mantine/core';
import Recommended from './Recommended';

const TopRated = () => {
  return (
    <Center
      sx={{
        width: '40%',
        gridColumn: 1 / 2,
      }}
    >
      Top Rated
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
      justify="center"
      sx={{
        width: '80vw',
        margin: '0 auto',
        height: '100%',
        gridTemplateColumns: '2fr',
        border: 'none',
      }}
    >
      <Recommended />

      <TopRated />
      <AllGames />
    </Grid>
  );
};
export default Games;
