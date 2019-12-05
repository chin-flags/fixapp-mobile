import { createStackNavigator } from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';

const AuthStackNavigator = createStackNavigator({
  Home: {
    screen: AuthScreen,
  },
});

export default AuthStackNavigator;
