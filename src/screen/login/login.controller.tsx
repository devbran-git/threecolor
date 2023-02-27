import React, {useState} from 'react';

import LoginLayout from './login.layout';

import {useAuth} from '../../hooks/useAuth';

const LoginController = () => {
  const {signIn} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = (response: boolean) => setIsLoading(response);

  const handleSignIn = () => {
    toggleLoading(true);

    signIn({email: email.trim(), password: password.trim()}, toggleLoading);
  };

  return (
    <LoginLayout
      localState={{isLoading, email, password}}
      handlers={{setEmail, setPassword, handleSignIn}}
    />
  );
};

export default LoginController;
