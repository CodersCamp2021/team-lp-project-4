export type Response = {
  message?: string;
  error?: string;
};

export type UserInfo = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  ratedGames: string[];
};

export const fetchData = <T extends object>(
  url: string,
  resBody?: RequestInit | undefined,
): Promise<T> => {
  return fetch(url, resBody)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Auth error');
      } else {
        return response.json();
      }
    })
    .catch((err) => console.error(err)) as Promise<T>;
};
