/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import layout from '../../constants/Layout';

const CustomButton = ({ title, onPress, color = '#E86E57' }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={{
      height: 40,
      width: layout.window.width - layout.sizes.padding * 2,
      backgroundColor: color,
      borderRadius: 10,
      zIndex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text
      style={{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'notosans-regular',
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
export default CustomButton;
