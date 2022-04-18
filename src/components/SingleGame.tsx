import { Grid } from '@mantine/core';
import GameHero from './GameHero';
import GameInfo from './GameInfo';



const SingleGame = () => {
 return (
  <Grid
  sx={{
    width: '70vw',
    height: '80%',
    alignItems: 'center',
    margin: '0 auto',
  }}
>
  <Grid.Col >
    <GameHero />
  </Grid.Col>
  <Grid.Col >
    <GameInfo />
  </Grid.Col>
</Grid>
 )
  
};
export default SingleGame;
