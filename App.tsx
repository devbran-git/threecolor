import React from 'react';
import {AuthProvider} from './src/hooks/useAuth';
import Router from './src/router';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
