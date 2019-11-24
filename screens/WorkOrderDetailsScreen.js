/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useRef } from 'react';
import { View, Text, Modal, TouchableHighlight, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigationParam } from 'react-navigation-hooks';
import Modalize from 'react-native-modalize';

import WorkOrderSummary from '../components/WorkOrder/WorkOrderSummary';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import CustomButton from '../components/CustomButton/CustomButton';
import UpDateStatusModal from '../components/WorkOrder/UpDateStatusModal';

const WorkOrderDetails = () => {
  const modalRef = useRef(Modalize);
  const workOrder = useNavigationParam('workOrder');

  const onOpen = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.open();
    }
  };

  return (
    <View style={{ flex: 3, backgroundColor: Colors.background }}>
      <Modalize
        ref={modalRef}
        modalHeight={Layout.window.height - 100}
        snapPoint={Layout.window.height / 2}
      >
        <UpDateStatusModal currentStatus={workOrder.status} />
      </Modalize>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#3E5B79',
          borderBottomRightRadius: Layout.sizes.padding,
          borderBottomLeftRadius: Layout.sizes.padding,
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: Layout.sizes.padding * 1.5,
            left: Layout.sizes.padding,
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
        <View style={{position: 'absolute', bottom: 20, left: Layout.sizes.padding }}>
          <CustomButton
            title="Update Status"
            onPress={onOpen}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          marginTop: Layout.sizes.margin,
          paddingHorizontal: Layout.sizes.padding,
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
