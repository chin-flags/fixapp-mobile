/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import HomeHeader from '../components/Headers/HomeHeader';
import WorkOrderItem from '../components/WorkOrder/WorkOrderItem';

import { workOrders } from '../mock/mockdata';
import colors from '../constants/Colors';
import Layout from '../constants/Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: Layout.sizes.padding / 2,
  },
});

const HomeScreen = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      {workOrders.map((workOrder) => (
        <WorkOrderItem workOrder={workOrder} key={workOrder.id} />
      ))}
    </View>
  </ScrollView>
);

HomeScreen.navigationOptions = {
  header: <HomeHeader />,
};

export default HomeScreen;
