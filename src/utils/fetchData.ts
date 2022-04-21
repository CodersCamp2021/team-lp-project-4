export type Response = {
  message?: string;
  error?: string;
};

export const fetchData = <T extends object>(
  url: string,
  resBody?: RequestInit | undefined,
): Promise<T> => {
  return fetch(url, resBody)
    .then((response) => response.json())
    .catch((err) => console.error(err)) as Promise<T>;
};
