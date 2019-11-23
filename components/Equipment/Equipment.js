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
import layout from '../../constants/Layout';

const machineImage = require('../../assets/images/machine_temp.jpg');

const width = layout.window.width - layout.sizes.padding * 4;

const styles = StyleSheet.create({
  container: {
    height: width * 0.2,
    width,
    flexDirection: 'row',
    borderRadius: 5,
    marginBottom: layout.sizes.margin / 2,
    elevation: 2,
  },
});

const Equipment = ({ equipment, onItemPressed, selected }) => (
  <TouchableOpacity
    activeOpacity={0.9}
    style={styles.container}
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
        justifyContent: 'space-around',
        marginLeft: layout.sizes.margin / 2,
        marginTop: layout.sizes.margin / 2,
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
      {selected && <Ionicons name="md-checkmark" color="green" size={4} />}
    </View>
  </TouchableOpacity>
);


Equipment.propTypes = {
  equipment: PropTypes.object.isRequired,
  onItemPressed: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Equipment;
