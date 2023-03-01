import { ReactNode } from 'react';

export interface AuthProviderProps {
  children: ReactNode;
}

export interface User {
  uid: string;
}

export interface AuthContextData {
  userData: User | null;
  authErrorResponse: string;
  signIn: (
    { email, password }: SignInData,
    callback: (loading: boolean) => void,
  ) => void;
  signOut: () => void;
}

export interface SignInData {
  email: string;
  password: string;
}
