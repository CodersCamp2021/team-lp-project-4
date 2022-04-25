import { UserRating } from '../../interfaces/UserRating';

export const fetchUserRating = (
  userId: string | undefined,
  gameId: string | undefined,
): Promise<UserRating> => {
  return typeof userId === 'undefined'
    ? Promise.reject(new Error('Invalid id'))
    : (fetch('http://localhost:3001/rate', {
        method: 'GET',
        body: JSON.stringify({
          userId: userId,
          gameId: gameId,
        }),
      })
        .then((data) => data.json())
        .catch((error) => console.error(error)) as Promise<UserRating>);
};
