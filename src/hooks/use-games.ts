import { useQuery } from 'react-query';
import { Game } from '../interfaces/Games';

const fetchGames = async () => {
  const data = await fetch('https://team-lp-project-3.herokuapp.com/games');
  return data.json();
};

export type useGamesType = {
  data: Game[];
  status: 'error' | 'idle' | 'loading' | 'success';
};

export const useGames = () => {
  return useQuery<Game[], Error>('games', fetchGames, {
    refetchOnWindowFocus: false,
  });
};
