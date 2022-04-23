import { Grid, Image, Center, Text, Button, Box } from '@mantine/core';
import { AiOutlineLike, AiOutlineDislike, AiFillStar } from 'react-icons/ai';
import { useMutation } from 'react-query';
import useGameStyles from '../../hooks/use-game-styles';
import { Game } from '../../interfaces/Games';
import { Rating } from '../../interfaces/Rating';
import { calcRatings } from '../utils/calcRatings';
import { updateRating } from '../utils/updateRating';

type GameHeroProps = Pick<Game, 'cover' | 'title' | 'category' | 'platform'> & {
  ratings: Rating[];
  gameId: string;
};

const GameHero = ({
  gameId,
  cover,
  title,
  category,
  platform,
  ratings,
}: GameHeroProps) => {
  const { classes } = useGameStyles();

  const { mutate } = useMutation(updateRating);

  return (
    <Grid className={classes.gameHeroWrapper}>
      <Grid.Col span={8}>
        <Box className={classes.heroInfoWrapper}>
          <Image
            src={cover?.screenshot_med}
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
            {ratings?.length > 0 ? calcRatings(ratings) : 0}/5{' '}
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
            onClick={() => mutate({ rating: 2, gameId })}
          >
            LIKE
          </Button>
          <Button
            leftIcon={<AiOutlineDislike size={40} />}
            className={classes.heroThumbs}
            onClick={() => mutate({ rating: 1, gameId })}
          >
            DISLIKE
          </Button>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default GameHero;
