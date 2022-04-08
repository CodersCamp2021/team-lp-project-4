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
        width: '1200px',
        margin: 'auto',
        minHeight: '85vh',
        gridTemplateColumns: '2fr',
      }}
    >
      <Recommended />

      <TopRated />
      <AllGames />
    </Grid>
  );
};
export default Games;
