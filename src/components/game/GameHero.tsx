import { Grid, Image, Center, Text, Button, Box } from '@mantine/core';
import { AiOutlineLike, AiOutlineDislike, AiFillStar } from 'react-icons/ai';
import useGameStyles from '../../hooks/use-game-styles';

const gameData = {
  _id: '623b6a5a3a7961fe18bcf5d7',
  title: 'The Last Guardian',
  category: 'Platform, Puzzle, Adventure',
  description:
    'In a strange and mystical land, a young boy discovers a mysterious creature with which he forms a deep, unbreakable bond. The unlikely pair must rely on each other to journey through towering, treacherous ruins filled with unknown dangers. Experience the journey of a lifetime in this touching, emotional story of friendship and trust.',
  platform: ['PS4'],
  developer: 'Team Ico, SIE Japan Studio, genDESIGN',
  releaseDate: '2016-12-06T00:00:00.000Z',
  cover:
    'https://images.igdb.com/igdb/image/upload/t_screenshot_med/co271e.jpg',
  rating: 4,
  ratedBy: ['621eb71fac4e3d58a5c6c668'],
  __v: 1,
};
const GameHero = () => {
  const { cover, title, category, platform, rating } = gameData;
  const { classes } = useGameStyles();

  return (
    <Grid className={classes.gameHeroWrapper}>
      <Grid.Col span={8}>
        <Box className={classes.heroInfoWrapper}>
          <Image
            src={cover}
            width={200}
            height={200}
            className={classes.image}
            alt={`${title} cover`}
          />
          <Box className={classes.heroTextWrapper}>
            <Text className={classes.title}>{title}</Text>
            <Text className={classes.subTitle}>category: {category}</Text>
            <Text className={classes.subTitle}>platforms: {platform}</Text>
          </Box>
        </Box>
      </Grid.Col>
      <Grid.Col span={4}>
        <Center
          sx={{
            width: '100%',
          }}
        >
          <Text className={classes.heroRating}>
            {rating.toFixed(1)}/5{' '}
            <AiFillStar
              fill="gold"
              size={90}
              style={{ verticalAlign: 'middle' }}
            />
          </Text>
        </Center>
        <Center>
          <Button
            leftIcon={<AiOutlineLike size={40} />}
            className={classes.heroThumbs}
          >
            LIKE
          </Button>
          <Button
            leftIcon={<AiOutlineDislike size={40} />}
            className={classes.heroThumbs}
          >
            DISLIKE
          </Button>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default GameHero;
