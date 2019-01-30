import { Navigation } from 'react-native-navigation';

import MainScreen from 'containers/MainScreen';
import LoginScreen from 'containers/LoginScreen';
import SignUpScreen from 'containers/SignUpScreen';
import { screens } from './constants/screenConstants';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent(screens.main, () => MainScreen, store, Provider);
  Navigation.registerComponent(screens.login, () => LoginScreen, store, Provider);
  Navigation.registerComponent(screens.signUp, () => SignUpScreen, store, Provider);
};

export default registerScreens;
