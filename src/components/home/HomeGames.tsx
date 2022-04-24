import { SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useGames } from '../../hooks/use-games';
import HomeGame from './HomeGame';

const HomeGames = () => {
  const matches = useMediaQuery('(min-width: 600px)');
  const { data: games } = useGames();

  const gamesToDisplay = matches ? games?.slice(0, 16) : games?.slice(0, 9);

  return (
    <SimpleGrid
      sx={{
        gridTemplateColumns: matches ? 'repeat(4, 100px)' : 'repeat(3, 80px)',
        justifyContent: 'center',
      }}
    >
      {gamesToDisplay?.map((game) => {
        const { _id, title, cover } = game;
        return <HomeGame key={_id} id={_id} title={title} src={cover.thumb} />;
      })}
    </SimpleGrid>
  );
};

export default HomeGames;
