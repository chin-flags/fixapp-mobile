/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import layout from '../../constants/Layout';

const styles = StyleSheet.create({
  container_selected: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 1,
    marginLeft: 5,
    marginBottom: layout.sizes.margin,
  },
});

const EquipmentNavigator = ({ state, onParentPressed }) => (
  <FlatList
    style={{ height: 40 }}
    horizontal
    showsHorizontalScrollIndicator={false}
    data={state.selectedItems}
    renderItem={({ item, index }) => (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.8}
        onPress={() => onParentPressed(item)}
        style={styles.container_selected}
      >
        {index === 0 && (
          <Ionicons
            name="ios-arrow-back"
            size={24}
            style={{ marginRight: 5 }}
          />
        )}
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'notosans-regular',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {`${item.text} /`}
        </Text>
      </TouchableOpacity>
    )}
  />
  // <TouchableOpacity
  //   activeOpacity={0.8}
  //   onPress={() =>
  //     onParentPressed(state.selectedItems[state.selectedItems.length - 1])
  //   }
  //   style={styles.container_selected}
  // >
  //   <Ionicons name='ios-arrow-back' size={24} style={{ marginRight: 5 }} />
  //   {state.selectedItems.length > 0 && (
  //     <Text
  //       style={{
  //         fontSize: 24,
  //         fontWeight: 'bold',
  //         fontFamily: 'notosans-regular',
  //         alignItems: 'center',
  //         justifyContent: 'center'
  //       }}
  //     >
  //       {state.selectedItems[state.selectedItems.length - 1].text}
  //     </Text>
  //   )}
  // </TouchableOpacity>
);

EquipmentNavigator.propTypes = {
  state: PropTypes.object.isRequired,
  onParentPressed: PropTypes.func.isRequired,
};

export default EquipmentNavigator;
