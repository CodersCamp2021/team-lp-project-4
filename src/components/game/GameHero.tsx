import { Grid, Image, Center, Text, Button, Box } from '@mantine/core';
import { AiOutlineLike, AiOutlineDislike, AiFillStar } from 'react-icons/ai';
import useGameStyles from '../../hooks/use-game-styles';
import { Game } from '../../interfaces/Games';

type GameHeroProps = Pick<
  Game,
  'cover' | 'title' | 'category' | 'platform' | 'rating'
>;

const GameHero = ({
  cover,
  title,
  category,
  platform,
  rating,
}: GameHeroProps) => {
  const { classes } = useGameStyles();

  return (
    <Grid className={classes.gameHeroWrapper}>
      <Grid.Col span={8}>
        <Box className={classes.heroInfoWrapper}>
          <Image
            src={cover.screenshot_med}
            width={200}
            height={200}
            className={classes.image}
            alt={`${title} cover`}
          />
          <Box className={classes.heroTextWrapper}>
            <Text className={classes.title}>{title}</Text>
            <Text className={classes.subTitle}>Category: {category}</Text>
            <Text className={classes.subTitle}>
              Platform: {platform.join(', ')}
            </Text>
          </Box>
        </Box>
      </Grid.Col>
      <Grid.Col span={3} sx={{ width: '100%' }}>
        <Center>
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
