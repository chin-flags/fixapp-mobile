/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Layout from '../../constants/Layout';
import CustomButton from '../CustomButton/CustomButton';

const WorkOrderHeader = ({ workOrder, onOpen, navigation }) => (
  <View
    style={{
      flexDirection: 'row',
      backgroundColor: '#3E5B79',
      height: Layout.window.height / 3,
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
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="md-arrow-round-back" color="white" size={24} />
      </TouchableOpacity>
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
    <View style={{ position: 'absolute', bottom: 20, left: Layout.sizes.padding }}>
      {
        onOpen && (
        <CustomButton
          title="Update Status"
          onPress={onOpen}
          color="#E86E57"
        />
        )
      }
    </View>
  </View>
);

WorkOrderHeader.propTypes = {
  workOrder: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(WorkOrderHeader);
