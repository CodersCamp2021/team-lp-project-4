import { Grid, Box, Text, ScrollArea } from '@mantine/core';
import UserTile from './UserTile';

const gameData = {
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
};

const userData = [
  {
    id: 1,
    firstName: 'Jakub',
    lastName: 'Czerwiński',
    username: 'kubaczerwinski77',
    rating: 2,
  },
  {
    id: 2,
    firstName: 'Maciej',
    lastName: 'Jankowski',
    username: 'macjank',
    rating: 2,
  },
  {
    id: 3,
    firstName: 'Łukasz',
    lastName: 'Powązka',
    username: 'lukiq',
    rating: 1,
  },
];

const GameInfo = () => {
  const { description } = gameData;

  return (
    <Grid>
      <Grid.Col span={8}>
        <Box
          sx={{
            width: '94%',
          }}
        >
          <Text
            color="rgba(167, 156, 184, 1)"
            sx={{
              fontWeight: 700,
              fontSize: 34,
              letterSpacing: '0.125em',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            ABOUT
          </Text>
          <ScrollArea
            offsetScrollbars={true}
            type="auto"
            sx={{ height: 350, paddingRight: 15 }}
          >
            <Text
              color="#EBEBEB"
              align="justify"
              sx={{
                fontWeight: 400,
                fontSize: 24,
              }}
            >
              {description + description}
            </Text>
          </ScrollArea>
        </Box>
      </Grid.Col>
      <Grid.Col span={4}>
        <Text
          color="#A79CB8"
          sx={{
            fontWeight: 600,
            fontSize: 34,
            align: 'left',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          RATED BY
        </Text>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '90%',
            justifyContent: 'space-evenly',
          }}
        >
          {userData.map((user) => (
            <UserTile key={user.id} user={user} />
          ))}
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default GameInfo;
