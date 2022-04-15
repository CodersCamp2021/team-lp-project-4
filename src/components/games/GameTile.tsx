import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { Game } from '../../interfaces/Games';
import useGamesStyles from '../../hooks/use-games-styles';

type GameProps = { game: Game; index: number };

const hoverAnimation = { scale: 1.03, originY: 0.5 };

const GameTile = ({ game, index }: GameProps) => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  const { _id, title, cover, rating, developer } = game;

  const { classes } = useGamesStyles();

  return (
    <motion.div animate={hoveredTile === index ? hoverAnimation : undefined}>
      <Box
        component={Link}
        to={_id}
        onMouseEnter={() => setHoveredTile(index)}
        onMouseLeave={() => setHoveredTile(null)}
        className={classes.tileWrapper}
        data-testid={`gameDiv${_id}`}
      >
        <Box className={classes.gameInfoWrapper}>
          <Image
            radius="sm"
            src={cover}
            alt={title}
            className={classes.gameImage}
          />
          <Box className={classes.gameTextWrapper}>
            <Text className={classes.gameTitle}>{title}</Text>
            <Text transform="uppercase" className={classes.gameDeveloper}>
              {developer}
            </Text>
          </Box>
        </Box>
        <Text className={classes.gameRating}>{rating}/5 ⭐️</Text>
      </Box>
    </motion.div>
  );
};

export default GameTile;
