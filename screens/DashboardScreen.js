/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native'

import DashboardHeader from '../components/Headers/DashboardHeader';
import NavigationButtons from '../components/Dashboard/NavigationButtons';
import WorkOrdersDashboard from '../components/Dashboard/WorkOrdersDashboard';
import Layout from '../constants/Layout';


const DashboardScreen = () => {
  return (
    <View style={{padding: Layout.sizes.padding }}>
      <NavigationButtons />
      <WorkOrdersDashboard />
    </View>
  )
}

DashboardScreen.navigationOptions ={
  header: <DashboardHeader />,
}

export default DashboardScreen;
