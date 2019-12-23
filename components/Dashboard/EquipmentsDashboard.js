/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../Card';

import { equipments } from '../../mock/mockdata';
import { setSelectedEquipment } from '../../redux/equipment/equipmentActions';

import Layout from '../../constants/Layout';

const EquipmentsDashboard = ({ navigation, setEquipment }) => (
  <View style={{
    flex: 1,
    padding: Layout.sizes.padding / 2,
  }}
  >
    <FlatList
      showsVerticalScrollIndicator={false}
      data={equipments}
      renderItem={({ item }) => {
        const { name, id, items } = item;
        return (
          <Card
            key={id}
            title={name}
            items={items}
            handleOnPress={() => {
              setEquipment(item);
              navigation.navigate('equipmentDetails');
            }}
          />
        );
      }}
    />
  </View>
);


const mapDispatchToProps = (dispatch) => ({
  setEquipment: (equipment) => dispatch(setSelectedEquipment(equipment)),
});

EquipmentsDashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
  setEquipment: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(EquipmentsDashboard);
