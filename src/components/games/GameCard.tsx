import { Card, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { Game } from '../../interfaces/Games';
import useGamesStyles from '../../hooks/use-games-styles';

type CardProps = {
  game: Game;
};

const GameCard = ({ game }: CardProps) => {
  const { _id, title, cover, developer, ratings } = game;
  const { classes } = useGamesStyles();

  return (
    <Card
      component={Link}
      to={_id}
      shadow="2px 2px 20px 0px rgba(0, 0, 0, 0.25)"
      className={classes.gameCard}
      data-testid={`gameDiv${_id}`}
    >
      <Card.Section>
        <Image
          radius="sm"
          fit="cover"
          width={80}
          height={80}
          src={cover}
          alt={title}
          className={classes.cardImage}
        />
      </Card.Section>
      <Card.Section>
        <Text lineClamp={2} className={classes.cardTitle}>
          {title}
        </Text>
      </Card.Section>
      <Card.Section>
        <Text className={classes.cardRating}>
          {ratings[0]?.stars || 0}/5 ⭐️
        </Text>
      </Card.Section>
      <Card.Section className={classes.cardDeveloperSection}>
        <Text transform="uppercase" className={classes.cardDeveloper}>
          {developer}
        </Text>
      </Card.Section>
    </Card>
  );
};

export default GameCard;
