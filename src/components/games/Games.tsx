import { Grid } from '@mantine/core';
import Recommended from './Recommended';
import TopRatedSelection from './TopRatedSelection';
import AllGamesSelection from './AllGamesSelection';
import useGamesStyles from '../../hooks/use-games-styles';

const Games = () => {
  const { classes } = useGamesStyles();

  return (
    <Grid justify="center" className={classes.gamesGrid} columns={24}>
      <Grid.Col span={22}>
        <Recommended />
      </Grid.Col>
      <Grid.Col md={22} lg={7} xl={8} className={classes.gamesSelection}>
        <TopRatedSelection />
      </Grid.Col>
      <Grid.Col md={22} lg={7} xl={8} className={classes.gamesSelection}>
        <AllGamesSelection />
      </Grid.Col>
    </Grid>
  );
};
export default Games;
