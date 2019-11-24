/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const WorkOrderSummaryItem = ({
  icon,
  children,
}) => (
  <View style={{ flexDirection: 'row', marginBottom: 20 }}>
    <AntDesign name={icon} size={24} color={Colors.iconColor} />
    {children}
  </View>
);

WorkOrderSummaryItem.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WorkOrderSummaryItem;
