/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const machineImage = require('../../assets/images/machine_temp.jpg');

const width = Layout.window.width - Layout.sizes.padding * 2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: width * 0.2,
    width,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: Layout.sizes.radius,
    marginTop: 5,
  },
});

const Equipment = ({ equipment, onItemPressed, selected }) => (
  <TouchableOpacity
    activeOpacity={0.9}
    style={[styles.container, { backgroundColor: selected ? Colors.gray : 'white' }]}
    onPress={() => onItemPressed(equipment)}
  >
    <ImageBackground
      source={machineImage}
      style={{ flex: 1, overflow: 'hidden' }}
    />
    <View
      style={{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: Layout.sizes.margin / 2,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: Colors.black,
          fontWeight: 'bold',
          fontFamily: 'notosans-regular-italic',
        }}
      >
        {equipment.text}
      </Text>
      { equipment.children ? <Ionicons name="ios-arrow-forward" color="black" size={24} /> : null}
      {selected && <Ionicons name="md-checkmark" color="green" size={24} />}
    </View>
  </TouchableOpacity>
);


Equipment.propTypes = {
  equipment: PropTypes.object.isRequired,
  onItemPressed: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Equipment;
