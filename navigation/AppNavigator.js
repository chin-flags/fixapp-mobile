import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthStackNavigator,
    Main: MainStackNavigator,
  },
  {
    initialRouteName: 'Main',
  }),
);
