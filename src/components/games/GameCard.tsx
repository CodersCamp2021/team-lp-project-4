import { Card, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { Game } from '../../interfaces/Games';
import useGamesStyles from '../../hooks/use-games-styles';
import React from 'react';

type GameProps = {
  game: Game;
  index: number;
  setHoveredCard: React.Dispatch<React.SetStateAction<number | null>>;
};

const GameCard = ({ game, index, setHoveredCard }: GameProps) => {
  const { _id, title, cover, rating, developer } = game;
  const { classes } = useGamesStyles();

  return (
    <Card
      component={Link}
      to={_id}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      shadow="2px 2px 20px 0px rgba(0, 0, 0, 0.25)"
      className={classes.gameCard}
    >
      <Card.Section>
        <Image
          radius="sm"
          src={cover}
          alt={title}
          className={classes.cardImage}
        />
      </Card.Section>
      <Card.Section>
        <Text className={classes.cardTitle}>{title}</Text>
      </Card.Section>
      <Card.Section>
        <Text className={classes.cardRating}>{rating}/5 ⭐️</Text>
      </Card.Section>
      <Card.Section>
        <Text transform="uppercase" className={classes.cardDeveloper}>
          {developer}
        </Text>
      </Card.Section>
    </Card>
  );
};

export default GameCard;
