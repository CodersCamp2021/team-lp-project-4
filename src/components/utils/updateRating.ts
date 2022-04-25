type Response = {
  message?: string;
  error?: string;
  ok?: string;
};

const putRating = <T extends object>(
  url: string,
  resBody?: RequestInit | undefined,
): Promise<T> => {
  return fetch(url, resBody)
    .then((response) => response.json())
    .catch((err) => console.error(err)) as Promise<T>;
};

export const updateRating = async ({
  rating,
  gameId,
  userId,
}: {
  rating: number;
  gameId: string;
  userId: string;
}) => {
  const response = await putRating<Response>(
    'https://team-lp-project-3.herokuapp.com/rate',
    {
      method: 'PUT',
      body: JSON.stringify({
        gameId: gameId,
        userId: userId,
        rating: rating,
      }),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  if (!(response.message === 'Rating updated.')) {
    throw new Error('Not logged in');
  }

  return response;
};
