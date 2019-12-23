/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import WorkOrderDetails from '../screens/WorkOrderDetailsScreen';
import CreateNotification from '../screens/CreateNotificationScreen';
import EquipmentScreen from '../screens/EquipmentScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DashboardHeader from '../components/Headers/DashboardHeader';

import DashboardTopTabNavigator from './DashboardTopTabNavigator';

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
  },
  Dashboard: {
    screen: DashboardTopTabNavigator,
    navigationOptions:  {
      header: <DashboardHeader/>
    }
  },
});

export default MainStackNavigator;
