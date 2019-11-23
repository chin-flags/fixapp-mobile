import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import WorkOrderDetails from '../screens/WorkOrderDetailsScreen';
import CreateNotification from '../screens/CreateNotificationScreen';
import EquipmentSelector from '../screens/EquipmentScreen';

const MainStackNavigator = createStackNavigator({
  Home: {
    screen: CreateNotification,
  },
  WorkOrderDetails: {
    screen: WorkOrderDetails,
  },
  createNotification: {
    screen: CreateNotification,
  },
  EquipmentSelector: {
    screen: EquipmentSelector,
  },
});

export default MainStackNavigator;
