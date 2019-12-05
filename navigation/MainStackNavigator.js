import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import WorkOrderDetails from '../screens/WorkOrderDetailsScreen';
import CreateNotification from '../screens/CreateNotificationScreen';
import EquipmentScreen from '../screens/EquipmentScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  WorkOrderDetails: {
    screen: WorkOrderDetails,
  },
  createNotification: {
    screen: CreateNotification,
  },
  EquipmentSelector: {
    screen: EquipmentScreen,
  },
  Profile: {
    screen: ProfileScreen,
  }
});

export default MainStackNavigator;
