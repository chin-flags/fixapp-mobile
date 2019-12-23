/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Equipment from './Equipment';

const EquipmentList = ({ state, onItemPressed }) => {
  const {
    selectedEquipment: { name },
    data,
  } = state;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {data.map((item) => {
          const selected = name === item.name;
          return (
            <Equipment
              key={item.id}
              equipment={item}
              onItemPressed={onItemPressed}
              selected={selected}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

EquipmentList.propTypes = {
  state: PropTypes.object.isRequired,
  onItemPressed: PropTypes.func.isRequired,
};

export default EquipmentList;
