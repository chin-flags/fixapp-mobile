/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';

const CreateWorkOrderCard = ({ title, children }) => (
  <View style={{
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    borderColor: Colors.borderColor,
  }}
  >
    <Text
      style={{
        fontFamily: 'notosans-regular',
        fontWeight: 'bold',
        fontSize: 16,
      }}
    >
      {title}
    </Text>
    <View style={{ marginTop: 20 }}>
      {children}
    </View>
  </View>
);

CreateWorkOrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default CreateWorkOrderCard;
