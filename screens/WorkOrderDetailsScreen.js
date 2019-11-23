/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigationParam } from 'react-navigation-hooks';
import layout from '../constants/Layout';
import WorkOrderSummary from '../components/WorkOrder/WorkOrderSummary';

import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton/CustomButton';

const WorkOrderDetails = () => {
  const workOrder = useNavigationParam('workOrder');
  return (
    <View style={{ flex: 3, backgroundColor: Colors.background }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#3E5B79',
          borderBottomRightRadius: layout.sizes.padding,
          borderBottomLeftRadius: layout.sizes.padding,
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: layout.sizes.padding * 1.5,
            left: layout.sizes.padding,
          }}
        >
          <Ionicons name="md-arrow-round-back" color="white" size={24} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontFamily: 'notosans-bold',
              }}
            >
              Work Order
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontFamily: 'notosans-bold-italic',
                marginLeft: 10,
              }}
            >
              {workOrder.id}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: 'yellow',
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontFamily: 'notosans-regular',
                color: 'white',
                fontSize: 16,
              }}
            >
              {workOrder.status}
            </Text>
          </View>
        </View>
        <CustomButton title="Update Status" />
      </View>
      <View
        style={{
          flex: 2,
          marginTop: layout.sizes.margin,
          paddingHorizontal: layout.sizes.padding,
        }}
      >
        <WorkOrderSummary workOrder={workOrder} />
      </View>
    </View>
  );
};

WorkOrderDetails.navigationOptions = {
  header: null,
};

export default WorkOrderDetails;
