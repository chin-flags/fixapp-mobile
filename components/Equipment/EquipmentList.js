/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Equipment from './Equipment';

const EquipmentList = ({ state, onItemPressed }) => {
  const {
    selectedEquipment: { text },
    data,
  } = state;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        {data.map((item) => {
          const selected = text === item.text;
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
