import { Grid, Box, Text } from '@mantine/core';


const placeholderData = [
    {
      _id: '623b6a5a3a7961fe18bcf5d7',
      title: 'The Last Guardian',
      category: 'Platform, Puzzle, Adventure',
      description:
        'In a strange and mystical land, a young boy discovers a mysterious creature with which he forms a deep, unbreakable bond. The unlikely pair must rely on each other to journey through towering, treacherous ruins filled with unknown dangers. Experience the journey of a lifetime in this touching, emotional story of friendship and trust.',
      platform: ['PS4'],
      developer: 'Team Ico, SIE Japan Studio, genDESIGN',
      releaseDate: '2016-12-06T00:00:00.000Z',
      cover: 'https://images.igdb.com/igdb/image/upload/t_thumb/co271e.jpg',
      rating: 4,
      ratedBy: ['621eb71fac4e3d58a5c6c668'],
      __v: 1,
    },
  ];


const GameInfo = () => {
  return (
    <Grid>
         {placeholderData.map(({ description }) => (
             <>
      <Grid.Col span={8}>
      <Box
        sx={{
          width: '90%',
          marginLeft: '35px'
        }}
      ><Text color="#A79CB8" transform="uppercase" sx={(theme) => ({
        fontFamily: theme.fontFamily,
        fontWeight: 600,
        fontSize: 34,
        align: "left",
        
      })}>About</Text>
      <Text color="#EBEBEB" align="justify" sx={(theme) => ({
        fontFamily: theme.fontFamily,
        fontSize: 24
      })}>{description}</Text></Box></Grid.Col>
      <Grid.Col span={4}><Text color="#A79CB8" transform="uppercase" sx={(theme) => ({
        fontFamily: theme.fontFamily,
        fontWeight: 600,
        fontSize: 34,
        align: "left",
      })}>Rated by</Text></Grid.Col>
      </>
          ))} </Grid>
  );
};

export default GameInfo;
