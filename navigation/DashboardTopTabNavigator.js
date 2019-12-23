/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import PropTypes from 'prop-types';

import NavigationIcon from '../components/Dashboard/NavigationIcon';
import WorkOrdersDashboard from '../components/Dashboard/WorkOrdersDashboard';
import EquipmentsDashboardStack from './EquipmentDashboardStack';
import PeopleDashboard from '../components/Dashboard/PeopleDashboard';
import NavigationButtons from '../components/Dashboard/NavigationButtons';

const DashboardTopNavigator = createMaterialTopTabNavigator({
  Equipments: {
    screen: EquipmentsDashboardStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <NavigationIcon name="gears" color={tintColor} />,
    },
  },
  WorkOrder: {
    screen: WorkOrdersDashboard,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <NavigationIcon name="list-alt" color={tintColor} />,
    },
  },
  People: {
    screen: PeopleDashboard,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <NavigationIcon name="users" color={tintColor} />,
    },
  }, 
}, {
  tabBarComponent: NavigationButtons,
  tabBarOptions: {
    activeTintColor: '#ffab91',
    inactiveTintColor: '#bdbdbd',
  }
});

DashboardTopNavigator.propTypes = {
  tintColor: PropTypes.string.isRequired,
}

export default DashboardTopNavigator;
