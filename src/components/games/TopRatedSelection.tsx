import React from 'react';
import { Box, Text, Stack, Skeleton } from '@mantine/core';

import useGamesStyles from '../../hooks/use-games-styles';
import { useGames } from '../../hooks/use-games';
import GameTile from './GameTile';

const TopRatedSelection = () => {
  const { classes } = useGamesStyles();
  const { data: games, isLoading } = useGames();

  const gamesToDisplay = React.useMemo(
    () =>
      games
        ?.sort((a, b) => {
          if (a.rating > b.rating) {
            return 1;
          } else if (a.rating < b.rating) {
            return -1;
          } else {
            return 0;
          }
        })
        ?.slice(games.length - 4),
    [games],
  );

  return (
    <Box className={classes.selectionContainer}>
      <Text color="rgba(167, 156, 184, 1)" className={classes.headingText}>
        TOP RATED{' '}
        <span role="img" aria-label="hot">
          🔥
        </span>
      </Text>
      <Stack className={classes.gameTilesWrapper} spacing={10}>
        {!isLoading
          ? gamesToDisplay?.map((game, index) => (
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
    </Box>
  );
};

export default TopRatedSelection;
