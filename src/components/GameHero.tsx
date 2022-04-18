import { Grid, Image, Center, SimpleGrid, Text, Button } from '@mantine/core';

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
    <Grid>
      {placeholderData.map(({ cover, title, category, platform, rating }) => (
        <>
          <Grid.Col span={3}>
            <Center
              sx={{
                width: '100%',
                marginLeft: '20px',
                marginRight: '10px',
              }}
            >
              <Image src={cover} width={200} alt="game cover" />
            </Center>
          </Grid.Col>
          <Grid.Col span={5}>
            <SimpleGrid cols={1} spacing={0}>
              <Text
                color="rgb(255, 255, 255)"
                sx={(theme) => ({
                  fontFamily: theme.fontFamily,
                  fontWeight: 600,
                  fontSize: 40,
                })}
              >
                {title}
              </Text>
              <Text
                color="#A79CB8"
                sx={(theme) => ({
                  fontFamily: theme.fontFamily,
                  fontSize: 24,
                  margin: 0,
                })}
              >
                category: {category}
              </Text>
              <Text
                color="#A79CB8"
                sx={(theme) => ({
                  fontFamily: theme.fontFamily,
                  fontSize: 24,
                  margin: 0,
                })}
              >
                platforms: {platform}
              </Text>
            </SimpleGrid>
          </Grid.Col>
          <Grid.Col span={4}>
            {' '}
            <Center
              sx={{
                width: '100%',
              }}
            >
              <Text
                color="#EBEBEB"
                sx={(theme) => ({
                  fontFamily: theme.fontFamily,
                  fontSize: 70,
                  fontWeight: 600,
                })}
              >
                {rating}/5 ⭐️
              </Text>
            </Center>
            <Center>
              <Button
                leftIcon="👍"
                sx={(theme) => ({
                  fontFamily: theme.fontFamily,
                  fontSize: 32,
                  fontWeight: 600,
                  backgroundColor: 'transparent',
                  marginRight: 0,
                })}
              >
                Like
              </Button>
              <Button
                leftIcon="👎"
                sx={(theme) => ({
                  fontFamily: theme.fontFamily,
                  fontSize: 32,
                  fontWeight: 600,
                  backgroundColor: 'transparent',
                  marginLeftt: 0,
                })}
              >
                Dislike
              </Button>
            </Center>
          </Grid.Col>
        </>
      ))}
    </Grid>
  );
};

export default GameHero;
