import React, {useState, useEffect, useContext, createContext} from 'react';
import {Alert} from 'react-native';

import auth from '@react-native-firebase/auth';

import {AUTH_ERRORS} from '../constants/errors';

import {AuthContextData, AuthProviderProps, SignInData, User} from './types';

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [authErrorResponse, setAuthErrorResponse] = useState('');

  const signIn = ({email, password}: SignInData, callback: any) => {
    setAuthErrorResponse('');
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        if (response.user) callback({loading: false});
      })
      .catch(error => {
        setAuthErrorResponse(error.code);
        callback(false);
      });
  };

  const signOut = () => {
    setAuthErrorResponse('');

    auth().signOut();
  };

  const handleErrorResponse = () => {
    if (!authErrorResponse) return;

    Alert.alert(
      AUTH_ERRORS[authErrorResponse].title,
      AUTH_ERRORS[authErrorResponse].message,
    );
  };

  useEffect(() => {
    handleErrorResponse();
  }, [authErrorResponse]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userInfo => {
      setUserData(userInfo);
    });

    return subscriber;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        authErrorResponse,
        signOut,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export {AuthProvider, useAuth};
