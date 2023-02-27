interface AuthErrors {
  [key: string]: ErrorAlert;
}

interface ErrorAlert {
  title: string;
  message: string;
}

export const AUTH_ERRORS: AuthErrors = {
  'auth/user-not-found': {
    title: 'Usuário não encontrado',
    message: 'Tente novamente com outro e-mail',
  },
  'auth/wrong-password': {
    title: 'Senha inválida',
    message: 'Tente novamente com a senha correta',
  },
};
