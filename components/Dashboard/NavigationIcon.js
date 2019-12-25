/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

const NavigationIcon = ({ name, color }) => (
  <View style={{
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: color,
  }}
  >
    <FontAwesome name={name} color="white" size={28} />
  </View>
);

NavigationIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default NavigationIcon;
