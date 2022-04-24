import { Grid, Image, Center, Text, Button, Box } from '@mantine/core';
import { useState } from 'react';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillStar,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { useMutation } from 'react-query';
import useGameStyles from '../../hooks/use-game-styles';
import { Game } from '../../interfaces/Games';
import { Rating } from '../../interfaces/Rating';
import { calcRatings } from '../utils/calcRatings';
import { updateRating } from '../utils/updateRating';

type GameHeroProps = Pick<Game, 'cover' | 'title' | 'category' | 'platform'> & {
  ratings: Rating | undefined;
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
  const [liked, setLiked] = useState(0);
  const { classes } = useGameStyles();
  const { mutate } = useMutation(updateRating, {
    onMutate: (variables) => {
      setLiked(variables.rating);
    },
    onError: (error) => {
      console.error('There was an error while rating the game:', error);
    },
  });

  const handleLike = () => mutate({ rating: 2, gameId });
  const handleDislike = () => mutate({ rating: 1, gameId });
  const handleReset = () => mutate({ rating: 0, gameId });

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
              Platform: {platform?.join(', ')}
            </Text>
          </Box>
        </Box>
      </Grid.Col>
      <Grid.Col span={3} sx={{ margin: '0 auto' }}>
        <Center>
          <Text className={classes.heroRating}>
            {ratings && ratings.rating?.length > 0
              ? calcRatings(ratings.rating)
              : 0}
            /5{' '}
            <AiFillStar
              fill="gold"
              size={90}
              style={{ verticalAlign: 'middle' }}
            />
          </Text>
        </Center>
        <Center>
          <Button
            leftIcon={
              liked === 2 ? (
                <AiFillLike size={40} fill="#49d66f" />
              ) : (
                <AiOutlineLike size={40} />
              )
            }
            className={classes.thumbsButtons}
            onClick={liked === 2 ? handleReset : handleLike}
          >
            <Text
              color={liked === 2 ? '#49d66f' : 'inherit'}
              className={classes.thumbsText}
              sx={
                liked === 2
                  ? {
                      textShadow: '1px 0 0 #49d66f, 0 1px 0 #49d66f',
                    }
                  : { textShadow: 'none' }
              }
            >
              LIKE
            </Text>
          </Button>
          <Button
            leftIcon={
              liked === 1 ? (
                <AiFillDislike size={40} fill="#c71e2c" />
              ) : (
                <AiOutlineDislike size={40} />
              )
            }
            className={classes.thumbsButtons}
            onClick={liked === 1 ? handleReset : handleDislike}
          >
            <Text
              color={liked === 1 ? '#c71e2c' : 'inherit'}
              sx={
                liked === 1
                  ? {
                      textShadow: '1px 0 0 #c71e2c, 0 1px 0 #c71e2c',
                    }
                  : { textShadow: 'none' }
              }
              className={classes.thumbsText}
            >
              DISLIKE
            </Text>
          </Button>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default GameHero;
