/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

const EquipmentDetails = ({ selectedEquipment }) => {
  return (
    <View style={{flex: 1, padding: Layout.sizes.padding / 2, backgroundColor: Colors.background  }}>
      <Text>{selectedEquipment.name}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  selectedEquipment: state.equipment.selectedEquipment,
});

EquipmentDetails.propTypes = {
  selectedEquipment: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(EquipmentDetails);
