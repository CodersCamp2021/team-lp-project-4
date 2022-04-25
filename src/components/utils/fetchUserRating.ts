import { UserRating } from '../../interfaces/UserRating';

export const fetchUserRating = (
  userId: string | undefined,
  gameId: string | undefined,
): Promise<UserRating> => {
  return typeof userId === 'undefined'
    ? Promise.reject(new Error('Invalid id'))
    : (fetch('https://team-lp-project-3.herokuapp.com/rate', {
        method: 'POST',
        body: JSON.stringify({
          userId: userId,
          gameId: gameId,
        }),
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((data) => data.json())
        .catch((error) => console.error(error)) as Promise<UserRating>);
};
