import { Grid } from '@mantine/core';
import GameHero from './GameHero';
import GameInfo from './GameInfo';

import useGameStyles from '../../hooks/use-game-styles';

const Game = () => {
  const { classes } = useGameStyles();

  return (
    <Grid justify="center" columns={12} className={classes.gameGrid}>
      <Grid.Col span={10}>
        <GameHero />
      </Grid.Col>
      <Grid.Col span={10}>
        <GameInfo />
      </Grid.Col>
    </Grid>
  );
};
export default Game;
