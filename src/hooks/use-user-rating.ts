import { useQuery } from 'react-query';

type User = {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  ratedGames: string[];
  username: string;
};

const fetchUserRating = (
  userId: string | undefined,
  gameId: string | undefined,
): Promise<User> => {
  return typeof userId === 'undefined'
    ? Promise.reject(new Error('Invalid id'))
    : (fetch('https://team-lp-project-3.herokuapp.com/rate', {
        method: 'GET',
        body: JSON.stringify({
          userId: userId,
          gameId: gameId,
        }),
      })
        .then((data) => data.json())
        .catch((error) => console.error(error)) as Promise<User>);
};

export const useUserRating = (
  userId: string | undefined,
  gameId: string | undefined,
) => {
  return useQuery<User, Error>(
    ['userRating', userId],
    () => fetchUserRating(userId, gameId),
    {
      refetchOnWindowFocus: false,
      enabled: !!userId,
    },
  );
};
