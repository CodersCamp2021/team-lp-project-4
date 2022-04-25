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
}: {
  rating: number;
  gameId: string;
}) => {
  const response = await putRating<Response>(
    'https://team-lp-project-3.herokuapp.com/rate',
    {
      method: 'PUT',
      body: JSON.stringify({
        gameId: gameId,
        userId: '6255da29d3e26228536f50d8',
        rating: rating,
      }),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  if (!response.ok) {
    throw new Error('Not logged in');
  }

  return response;
};
