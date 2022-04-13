import { Box, Text, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

import useGamesStyles from '../../hooks/use-games-styles';
import GameTile from './GameTile';

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
  {
    _id: '623b6a5a3a7961fe18bcf5d8',
    title: 'Final Fantasy XV',
    category: 'Role-playing (RPG), Adventure',
    description:
      'Take the journey, now in ultimate quality. Boasting a wealth of bonus content and supporting ultra high-resolution graphical options and HDR 10, you can now enjoy the beautiful and carefully-crafted experience of FINAL FANTASY XV like never before.',
    platform: ['PC', 'PS4', 'XBOX ONE'],
    developer: 'Square Enix',
    releaseDate: '2016-11-29T00:00:00.000Z',
    cover: 'https://images.igdb.com/igdb/image/upload/t_thumb/co1tr2.jpg',
    rating: 4.3,
    ratedBy: [],
    __v: 0,
  },
  {
    _id: '623b6a5a3a7961fe18bcf5d9',
    title: 'Watch_Dogs',
    category: 'Shooter, Adventure',
    description:
      "Set in Chicago, where a central network of computers connects everyone and everything, Watch_Dogs explores the impact of technology within our society. Using the city as your weapon, you will embark on a personal mission to inflict your own brand of justice. Chicago's overarching network is known as the Central Operating System (ctOS), and it controls almost all of the city's technology and information - including key data on all of the city's residents.",
    platform: ['PC', 'PS4', 'XBOX ONE'],
    developer: 'Ubisoft Montreal, Ubisoft',
    releaseDate: '2014-05-27T00:00:00.000Z',
    cover: 'https://images.igdb.com/igdb/image/upload/t_thumb/co2p5w.jpg',
    rating: 2.8,
    ratedBy: [],
    __v: 0,
  },
  {
    _id: '623b6a5a3a7961fe18bcf5da',
    title: 'Star Citizen',
    category: 'Shooter, Role-playing (RPG), Simulator, Adventure, Indie',
    description:
      'Star Citizen is an upcoming space trading and combat simulator video game for Microsoft Windows. Star Citizen will consist of two main components: first person space combat and trading in a massively multiplayer persistent universe and customizable private servers (known as Star Citizen), and a branching single-player game (known as Squadron 42). The game will also feature VR support.',
    platform: ['PC'],
    developer: 'Cloud Imperium Games Corporation',
    cover: 'https://images.igdb.com/igdb/image/upload/t_thumb/co4azh.jpg',
    rating: 1.2,
    ratedBy: [],
    __v: 0,
  },
];

const AllGamesSelection = () => {
  const { classes } = useGamesStyles();

  return (
    <Box className={classes.selectionContainer}>
      <Text color="rgba(167, 156, 184, 1)" className={classes.headingText}>
        ALL GAMES 🎮
      </Text>
      <Stack className={classes.gameTilesWrapper} spacing={10}>
        {placeholderData.map((game, index) => (
          <GameTile key={game._id} game={game} index={index} />
        ))}
      </Stack>
      <Box className={classes.anchorWrapper}>
        <Text
          component={Link}
          to={'/games/all'}
          className={classes.seeMoreAnchor}
        >
          SEE MORE ...
        </Text>
      </Box>
    </Box>
  );
};

export default AllGamesSelection;
