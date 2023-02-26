import React from 'react';

import LoginLayout from './login.layout';

const LoginController = () => {
  const localState = {};
  const handlers = {};

  return <LoginLayout localState={localState} handlers={handlers} />;
};

export default LoginController;
