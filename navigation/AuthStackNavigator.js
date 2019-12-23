import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from '../screens/AuthScreen';

const AuthStackNavigator = createStackNavigator({
  Home: {
    screen: AuthScreen,
  },
});

export default AuthStackNavigator;
