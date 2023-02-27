import {useAuth} from '../hooks/useAuth';
import LoginController from '../screens/login/login.controller';
import MainController from '../screens/main/main.controller';

const Router = () => {
  const {userData} = useAuth();

  return <>{userData ? <MainController /> : <LoginController />}</>;
};

export default Router;
