import { createContext } from 'react';
import { UserInfo } from './hooks/fetchData';

export type AuthContextProps = {
  userInfo: UserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
};

export const AuthContext = createContext<AuthContextProps | null>(null);
