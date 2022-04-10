import { Grid, Center, Image, Text, Button } from '@mantine/core';
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
  },
];

const GameHero = () => {
  return (
    <Grid
      sx={{
        width: '90%',
        justify: "space-between"
      }}
    >
      {placeholderData.map(
        ({ title, cover, platform, category, rating }) => (
          <>
             <Grid.Col span={3}><Image
              style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}
              radius="md"
              src={cover}
              alt="game cover"
            /></Grid.Col>
             <Grid.Col span={5}><Text size="xl"  align="center" color="rgb(255, 255, 255)">
              {title}
            </Text>
            <Text size="md" align="center" color="#A79CB8">
              category: {category}
            </Text>
            <Text size="md" align="center" color="#A79CB8">
             platforms: {platform}
            </Text></Grid.Col>
            <Grid.Col span={4}><Text size="md" align="center" color="#EBEBEB">
              {rating}/5 ⭐️
            </Text>
            <Button variant="subtle" leftIcon="👍">
              Like
            </Button>
            <Button variant="subtle" leftIcon="👎">
              Dislike
            </Button></Grid.Col>
          </>
        ),
      )}
      
    </Grid>
  );
};

const GameInfo = () => {
  return (
    <Center
      sx={{
        width: '100%',
        gridColumn: 1 / 2,
      }}
    >
      {placeholderData.map(({ description }) => (
        <>
          <></>
          <Text size="md" color="rgba(255, 255, 255, 0.55)">
            About
          </Text>
          <Text size="sm" color="#EBEBEB">
            {description}
          </Text>
        </>
      ))}
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
        margin: 'auto',
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
