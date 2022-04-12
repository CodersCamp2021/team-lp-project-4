import { useState } from 'react';
import { Box, Text, Stack, Image } from '@mantine/core';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const hoverAnimation = { scale: 1.03, originY: 0.5 };

const TopRatedSelection = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  return (
    <Box
      sx={{
        minWidth: 560,
        paddingTop: 30,
      }}
    >
      <Text
        color="rgba(167, 156, 184, 1)"
        sx={(theme) => ({
          fontFamily: theme.fontFamily,
          fontSize: 30,
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          fontWeight: 600,
          letterSpacing: 1,
          paddingBottom: 5,
          paddingLeft: 15,
        })}
      >
        TOP RATED 🔥
      </Text>
      <Stack spacing={10}>
        {placeholderData.map(
          ({ _id, title, cover, rating, developer }, index) => (
            <motion.div
              key={_id}
              animate={hoveredTile === index ? hoverAnimation : undefined}
            >
              <Box
                onMouseEnter={() => setHoveredTile(index)}
                onMouseLeave={() => setHoveredTile(null)}
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 70,
                  background: 'rgba(29, 23, 23, 0.9)',
                  borderRadius: theme.radius.md,
                  padding: 0,
                  boxShadow: '2px 2px 20px 0px rgba(0, 0, 0, 0.25)',
                  textDecoration: 'none',
                })}
                component={Link}
                to={_id}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 450,
                  }}
                >
                  <Image
                    radius="sm"
                    src={cover}
                    alt={title}
                    sx={{
                      minWidth: 50,
                      width: 50,
                      paddingRight: '15px',
                      paddingLeft: '11px',
                    }}
                  />
                  <Box sx={{ width: '100%' }}>
                    <Text
                      sx={{
                        fontSize: '24px',
                        fontWeight: 600,
                        lineHeight: '22px',
                        letterSpacing: 1,
                        color: 'rgba(255, 255, 255, 1)',
                      }}
                    >
                      {title}
                    </Text>
                    <Text
                      transform="uppercase"
                      sx={{
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        letterSpacing: '0.10em',
                        color: 'rgba(135, 135, 135, 1)',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        maxWidth: '90%',
                      }}
                    >
                      {developer}
                    </Text>
                  </Box>
                </Box>
                <Text
                  sx={(theme) => ({
                    fontSize: '18px',
                    color: theme.colors.gray[5],
                    fontWeight: 600,
                    paddingRight: 15,
                  })}
                >
                  {rating}/5 ⭐️
                </Text>
              </Box>
            </motion.div>
          ),
        )}
      </Stack>
    </Box>
  );
};

export default TopRatedSelection;
