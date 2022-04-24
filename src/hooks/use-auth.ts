import { useEffect, useState } from 'react';
import { fetchData, UserInfo } from './fetchData';

export const useAuth = (): [
  UserInfo | null,
  React.Dispatch<React.SetStateAction<UserInfo | null>>,
] => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const getAuth = async () => {
      try {
        const data = await fetchData<UserInfo>(
          'http://localhost:3001/user/userInfo',
          {
            credentials: 'include',
            headers: {
              'content-type': 'application/json',
            },
          },
        );
        setUserInfo(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.message === 'Auth error') {
            setUserInfo(null);
          }
          console.error(error);
        }
      }
    };

    getAuth()
      .then((res) => res)
      .catch((error) => {
        if (error instanceof Error) {
          if (error.message === 'Auth error') {
            setUserInfo(null);
          }
        }
        return error as Error;
      });
  }, []);

  return [userInfo, setUserInfo];
};
