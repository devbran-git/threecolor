export interface LoginProps {
  localState: {
    isLoading: boolean;
    email: string;
    password: string;
  };
  handlers: {
    setPassword: (email: string) => void;
    setEmail: (password: string) => void;
    handleSignIn: () => void;
  };
}
