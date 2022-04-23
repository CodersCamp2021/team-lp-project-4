import React from 'react';
import { Box, Text, Stack, Skeleton } from '@mantine/core';
import { Link } from 'react-router-dom';

import useGamesStyles from '../../hooks/use-games-styles';
import { useGames } from '../../hooks/use-games';
import GameTile from './GameTile';

const AllGamesSelection = () => {
  const { classes } = useGamesStyles();
  const { data, isLoading } = useGames();

  const games = React.useMemo(
    () =>
      data?.sort((a, b) => {
        if (a.rating > b.rating) {
          return 1;
        } else if (a.rating < b.rating) {
          return -1;
        } else {
          return 0;
        }
      }),
    [data],
  );
  return (
    <Box className={classes.selectionContainer} data-testid="allGames">
      <Text color="rgba(167, 156, 184, 1)" className={classes.headingText}>
        ALL GAMES 🎮
      </Text>
      <Stack className={classes.gameTilesWrapper} spacing={10}>
        {!isLoading
          ? games
              ?.slice(games.length - 20, games.length - 16)
              .map((game, index) => (
                <GameTile key={game._id} game={game} index={index} />
              ))
          : [0, 1, 2, 3].map((_, index) => (
              <Skeleton
                key={index}
                height={70}
                radius="md"
                sx={(theme) => ({
                  '&::after': {
                    backgroundColor: theme.colors.dark[5],
                  },
                  '&::before': {
                    backgroundColor: theme.colors.dark[6],
                  },
                })}
              />
            ))}
      </Stack>
      <Box className={classes.anchorWrapper}>
        <Text
          component={Link}
          to={'/games/all'}
          className={classes.seeMoreAnchor}
          data-testid="moreGamesLink"
        >
          SEE MORE ...
        </Text>
      </Box>
    </Box>
  );
};

export default AllGamesSelection;
