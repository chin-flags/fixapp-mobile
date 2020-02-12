/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

import HomeHeader from '../components/Headers/HomeHeader';
import WorkOrderItem from '../components/WorkOrder/WorkOrderItem';

import { workOrders } from '../mock/mockdata';
import { useFirestoreCollection } from '../hooks/useFirestore';
import colors from '../constants/Colors';
import Layout from '../constants/Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: Layout.sizes.padding / 2,
  },
});

const HomeScreen = () => {
  const { loading, data } = useFirestoreCollection('workOrders');

  return (
    <View style={{ flex: 1 }}>
      {
        loading && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator />
          </View>
        )
      }
      {
        data && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              {data.map((workOrder) => (
                <WorkOrderItem workOrder={workOrder} key={workOrder.id} />
              ))}
            </View>
          </ScrollView>
        )
      }
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: <HomeHeader />,
};

export default HomeScreen;
