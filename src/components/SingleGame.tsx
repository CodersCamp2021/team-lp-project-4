import { Grid, Center, Image, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';




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
    }];

const GameHero = () => {
  return (
    <Center
      sx={{
        width: '100%',
        // gridColumn: 1 / 2,
      }}
    >
{placeholderData.map(
          ({ _id, title, cover, platform, category }) => (
      <><Image
      style={{ width: 240, marginLeft: "10%", marginRight: "auto" }}
      radius="md"
      src={cover}
      alt="game cover" />
      <Text size="xl" align="center" color="rgb(255, 255, 255)">{title}</Text>
      <Text size="md" align="center">{category}</Text>
      <Text size="md" align="center">{platform}</Text></>
          
          ))
};
          </Center>)};

const GameInfo = () => {
  return (
    <Center
    sx={{
      width: '100%',
      gridColumn: 1 / 2,
    }}
    >
    <Text size="md">Default text</Text>
    <Text size="sm">Small text</Text>
      gameinfo
    </Center>
  );
};


const SingleGame = () => {
    const navigate = useNavigate();
    const handleNavigateToGame = () => {
        navigate(`/games/id`);
      };
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
            <GameHero />
          </Grid.Col>
          <Grid.Col span={12}>
            <GameInfo />
          </Grid.Col>
        </Grid>
      );
};
export default SingleGame;
