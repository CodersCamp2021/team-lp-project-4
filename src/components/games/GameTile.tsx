import { motion } from 'framer-motion';
import { Box, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { Game } from '../../interfaces/Games';
import useGamesStyles from '../../hooks/use-games-styles';
import { AiFillStar } from 'react-icons/ai';

type TileProps = { game: Game };

const hoverAnimation = { scale: 1.03, originY: 0.5 };

const GameTile = ({ game }: TileProps) => {
  const { _id, title, cover, developer, ratings } = game;

  const { classes } = useGamesStyles();

  return (
    <motion.div whileHover={hoverAnimation} style={{ width: '100%' }}>
      <Box
        component={Link}
        to={`/games/${_id}`}
        className={classes.tileWrapper}
        data-testid={`gameDiv${_id}`}
      >
        <Box className={classes.gameInfoWrapper}>
          <Image
            fit="cover"
            width={50}
            height={50}
            radius="sm"
            src={cover.thumb}
            alt={title}
            className={classes.gameImage}
          />
          <Box className={classes.gameTextWrapper}>
            <Text lineClamp={1} className={classes.gameTitle}>
              {title}
            </Text>
            <Text
              lineClamp={1}
              transform="uppercase"
              className={classes.gameDeveloper}
            >
              {developer}
            </Text>
          </Box>
        </Box>
        <Text className={classes.gameRating}>
          {ratings?.length > 0 ? ratings[0]?.stars.toFixed(1) : 0}/5{' '}
          <AiFillStar style={{ verticalAlign: 'sub' }} size={25} fill="gold" />
        </Text>
      </Box>
    </motion.div>
  );
};

export default GameTile;
