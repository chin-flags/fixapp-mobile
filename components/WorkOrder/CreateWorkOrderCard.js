/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const CreateWorkOrderCard = ({ title, icon = null, children }) => (
  <View style={{
    marginVertical: 10,
    borderRadius: 15,
    elevation: 2,
    margin: 2,
    backgroundColor: 'white',
    padding: 20,
  }}
  >
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text
        style={{
          fontFamily: 'notosans-regular',
          fontWeight: 'bold',
          fontSize: 16,
        }}
      >
        {title}
      </Text>
      {icon}
    </View>
    <View style={{ marginTop: 20 }}>
      {children}
    </View>
  </View>
);

CreateWorkOrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
};

export default CreateWorkOrderCard;
