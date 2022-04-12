import { Grid } from '@mantine/core';
import Recommended from './Recommended';
import TopRatedSelection from './TopRatedSelection';
import AllGamesSelection from './AllGamesSelection';

const Games = () => {
  return (
    <Grid
      justify="center"
      sx={{
        width: '80vw',
        margin: '0 auto',
        columnGap: 100,
      }}
      columns={24}
    >
      <Grid.Col span={22}>
        <Recommended />
      </Grid.Col>
      <Grid.Col span={9}>
        <TopRatedSelection />
      </Grid.Col>
      <Grid.Col span={9}>
        <AllGamesSelection />
      </Grid.Col>
    </Grid>
  );
};
export default Games;
