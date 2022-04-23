import { useQuery } from 'react-query';
import { Game } from '../interfaces/Games';

const fetchGame = (gameId: string | undefined): Promise<Game> => {
  return typeof gameId === 'undefined'
    ? Promise.reject(new Error('Invalid id'))
    : (fetch(`https://team-lp-project-3.herokuapp.com/games/${gameId}`)
        .then((data) => data.json())
        .catch((error) => console.error(error)) as Promise<Game>);
};

export const useGame = (gameId: string | undefined) => {
  return useQuery<Game, Error>(['game', gameId], () => fetchGame(gameId), {
    refetchOnWindowFocus: false,
    enabled: !!gameId,
  });
};
