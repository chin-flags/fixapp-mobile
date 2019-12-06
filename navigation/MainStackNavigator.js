import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import WorkOrderDetails from '../screens/WorkOrderDetailsScreen';
import CreateNotification from '../screens/CreateNotificationScreen';
import EquipmentScreen from '../screens/EquipmentScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DashboardScreen from '../screens/DashboardScreen';

const MainStackNavigator = createStackNavigator({
  Home: {
    screen: DashboardScreen,
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
  },
  Dashboard: {
    screen: DashboardScreen,
  },
});

export default MainStackNavigator;
