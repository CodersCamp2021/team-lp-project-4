import { useState } from 'react';
import { Box, Text, Group, Card, Image } from '@mantine/core';
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

const variants = {
  current: { scale: 1.1, originY: 1 },
};

const AllGamesSelection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        paddingTop: 30,
      }}
    >
      <Text
        color="rgba(255, 255, 255, 0.55)"
        sx={(theme) => ({
          fontFamily: theme.fontFamily,
          fontSize: 30,
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          paddingBottom: 5,
          paddingLeft: 15,
        })}
      >
        All Games
      </Text>
      <Group
        spacing={10}
        sx={{
          justifyContent: 'center',
        }}
      >
        {placeholderData.map(
          ({ _id, title, cover, rating, developer }, index) => (
            <motion.div
              key={_id}
              animate={hoveredCard === index ? 'current' : undefined}
              variants={variants}
            >
              <Card
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                shadow="2px 2px 20px 0px rgba(0, 0, 0, 0.25)"
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'row',
                  //  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: 500,
                  height: 70,
                  background: 'rgba(29, 23, 23, 0.9)',
                  borderRadius: theme.radius.md,
                })}
                component={Link}
                to={_id}
              >
                <Card.Section>
                  <Box>
                    <Image
                      radius="sm"
                      src={cover}
                      alt={title}
                      sx={{
                        width: 40,
                        padding: '26px 40px 8px',
                      }}
                    />
                  </Box>
                </Card.Section>
                <Card.Section>
                  <Box>
                    <Text
                      sx={(theme) => ({
                        width: 200,
                        fontFamily: theme.fontFamily,
                        fontSize: theme.fontSizes.xl,
                        fontWeight: 50,
                        lineHeight: '22px',
                        letterSpacing: '0em',
                        textAlign: 'center',
                        color: theme.colors.gray[0],
                      })}
                    >
                      {title}
                    </Text>
                    <Text
                      transform="uppercase"
                      sx={(theme) => ({
                        width: '140px',
                        fontFamily: theme.fontFamily,
                        fontSize: 15,
                        fontWeight: 600,
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        lineHeight: '22.5px',
                        textAlign: 'center',
                        letterSpacing: '0.5px',
                        color: 'rgba(135, 135, 135, 1)',
                        paddingBottom: '5px',
                      })}
                    >
                      {developer}
                    </Text>
                  </Box>
                </Card.Section>
                <Card.Section>
                  <Text
                    sx={(theme) => ({
                      textAlign: 'left',
                      fontFamily: theme.fontFamily,
                      fontSize: 12,
                      color: theme.colors.gray[5],
                      fontWeight: 700,
                    })}
                  >
                    {rating}/5 ⭐️
                  </Text>
                </Card.Section>
              </Card>
            </motion.div>
          ),
        )}
      </Group>
      <Text
        color="rgba(255, 255, 255, 0.55)"
        align="right"
        sx={(theme) => ({
          fontFamily: theme.fontFamily,
          fontSize: 10,
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          paddingBottom: 5,
          paddingLeft: 15,
        })}
      >
        See more...
      </Text>
    </Box>
  );
};

export default AllGamesSelection;
