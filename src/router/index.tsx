import LoginController from '../screen/login/login.controller';
import MainController from '../screen/main/main.controller';

import {useAuth} from '../hooks/useAuth';

const Router = () => {
  const {userData} = useAuth();

  return <>{userData ? <MainController /> : <LoginController />}</>;
};

export default Router;
