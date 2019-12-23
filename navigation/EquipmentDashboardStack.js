import { createStackNavigator } from 'react-navigation-stack';

import EquipmentDashboard from '../components/Dashboard/EquipmentsDashboard';
import EquipmentDetails from '../components/Dashboard/EquipmentDetails';

const EquipmentDashboardStack = createStackNavigator({
  equipment: {
    screen: EquipmentDashboard,
    navigationOptions: {
      header: null,
    },
  },
  equipmentDetails: {
    screen: EquipmentDetails,
  },
});

export default EquipmentDashboardStack;
