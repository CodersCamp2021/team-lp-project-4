import { Grid, Image, Center, Text, Button, Box } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useContext, useState } from 'react';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillStar,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AuthContext } from '../../AuthContext';
import useGameStyles from '../../hooks/use-game-styles';
import { Game } from '../../interfaces/Games';
import { UserRating } from '../../interfaces/UserRating';
import { Rating } from '../../interfaces/Rating';
import { calcRatings } from '../utils/calcRatings';
import { updateRating } from '../utils/updateRating';
import { fetchUserRating } from '../utils/fetchUserRating';

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
  const auth = useContext(AuthContext);
  const queryClient = useQueryClient();

  useQuery<UserRating, Error>(
    ['userRating', auth?.userInfo?.id],
    () => fetchUserRating(auth?.userInfo?.id, gameId),
    {
      onSuccess: (userData) => {
        setLiked(userData?.rating);
      },
      onError: (error) => {
        console.error('Failed to fetch user rating:', error);
      },
      refetchOnWindowFocus: false,
      enabled: !!auth?.userInfo?.id,
    },
  );

  const { mutate } = useMutation(updateRating, {
    onSuccess: async (_, variables) => {
      setLiked(variables.rating);
      await queryClient.invalidateQueries(['ratings', gameId]);
      await queryClient.invalidateQueries(['userRating', auth?.userInfo?.id]);
      showNotification({
        title: 'Success!',
        message: 'Game rated.',
        icon: <BsCheckLg size={10} />,
        color: 'teal',
      });
    },
    onError: (error) => {
      auth?.setUserInfo(null);
      showNotification({
        title: 'Something went wrong!',
        message: `Please make sure you're logged in.`,
        icon: <ImCross size={10} />,
        color: 'red',
      });
      console.error('There was an error while rating the game:', error);
    },
  });

  const handleLike = () => {
    if (auth?.userInfo?.id) {
      mutate({ rating: 2, gameId, userId: auth.userInfo.id });
    }
  };
  const handleDislike = () => {
    if (auth?.userInfo?.id) {
      mutate({ rating: 1, gameId, userId: auth.userInfo.id });
    }
  };
  const handleReset = () => {
    if (auth?.userInfo?.id) {
      mutate({ rating: 0, gameId, userId: auth.userInfo.id });
    }
  };

  return (
    <Grid className={classes.gameHeroWrapper}>
      <Grid.Col
        md={8}
        span={12}
        sx={(theme) => ({
          [theme.fn.smallerThan('lg')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        })}
      >
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
      <Grid.Col
        span={3}
        sx={{
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Center>
            <Text className={classes.heroRating}>
              {ratings && ratings.rating?.length > 0
                ? calcRatings(ratings.rating)
                : 0}
              /5 <AiFillStar fill="gold" style={{ verticalAlign: 'middle' }} />
            </Text>
          </Center>
          <Center>
            <Button
              leftIcon={
                auth?.userInfo && liked === 2 ? (
                  <AiFillLike size={40} fill="#49d66f" />
                ) : (
                  <AiOutlineLike size={40} />
                )
              }
              disabled={auth?.userInfo ? false : true}
              className={classes.thumbsButtons}
              sx={{
                '&:disabled': {
                  backgroundColor: 'transparent !important',
                  color: '#5c6268 !important',
                },
              }}
              onClick={liked === 2 ? handleReset : handleLike}
            >
              <Text
                color={auth?.userInfo && liked === 2 ? '#49d66f' : 'inherit'}
                className={classes.thumbsText}
                sx={
                  auth?.userInfo && liked === 2
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
                auth?.userInfo && liked === 1 ? (
                  <AiFillDislike size={40} fill="#c71e2c" />
                ) : (
                  <AiOutlineDislike size={40} />
                )
              }
              disabled={auth?.userInfo ? false : true}
              className={classes.thumbsButtons}
              sx={{
                '&:disabled': {
                  backgroundColor: 'transparent !important',
                  color: '#5c6268 !important',
                },
              }}
              onClick={liked === 1 ? handleReset : handleDislike}
            >
              <Text
                color={auth?.userInfo && liked === 1 ? '#c71e2c' : 'inherit'}
                sx={
                  auth?.userInfo && liked === 1
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
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default GameHero;
