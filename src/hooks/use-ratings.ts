import { useQuery } from 'react-query';
import { Rating } from '../interfaces/Rating';

const fetchRatings = (gameId: string | undefined): Promise<Rating[]> => {
  return typeof gameId === 'undefined'
    ? Promise.reject(new Error('Invalid id'))
    : (fetch(`https://team-lp-project-3.herokuapp.com/rate/${gameId}`)
        .then((data) => data.json())
        .catch((error) => console.error(error)) as Promise<Rating[]>);
};

export const useRatings = (gameId: string | undefined) => {
  return useQuery<Rating[], Error>(
    ['game', gameId],
    () => fetchRatings(gameId),
    {
      refetchOnWindowFocus: false,
      enabled: !!gameId,
    },
  );
};
