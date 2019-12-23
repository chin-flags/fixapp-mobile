/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';

import Layout from '../constants/Layout';
import { equipments } from '../mock/mockdata';
import EquipmentList from '../components/Equipment/EquipmentList';
import EquipmentNavigator from '../components/Equipment/EquipmentNavigator';
import EquipmentSelectorHeader from '../components/Headers/EquipmentSelectorHeader';
import Colors from '../constants/Colors';

const EquipmentSelector = ({ navigation }) => {
  const [state, setState] = useState({
    originalData: equipments,
    data: equipments,
    selectedItems: [],
    selectedEquipment: {},
    history: [],
  });

  const itemPressed = (item) => {
    if (!item.items) {
      setState((prevState) => ({
        ...prevState,
        selectedEquipment: item,
      }));
      return;
    }

    const newHistoryItem = {
      selectedItems: state.selectedItems.slice(),
      id: item.id,
      data: state.data,
    };
    setState((prevState) => ({
      ...prevState,
      data: item.items,
      selectedItems: [...state.selectedItems, item],
      history: [...state.history, newHistoryItem],
    }));
  };

  const onParentPressed = (item) => {
    const lastHistory = state.history;
    const prevItemIndex = lastHistory.findIndex(
      (history) => history.id === item.id,
    );
    const prevItem = lastHistory[prevItemIndex];
    lastHistory.length = prevItemIndex;

    setState((prevState) => ({
      ...prevState,
      selectedItems: prevItem.selectedItems,
      data: prevItem.data,
      history: lastHistory,
      selectedEquipment: {},
    }));
  };

  return (
    <View
      style={{
        flex: 1,
        padding: Layout.sizes.padding,
        justifyContent: 'space-between',
      }}
    >
      <View>
        <EquipmentNavigator state={state} onParentPressed={onParentPressed} />
        <EquipmentList state={state} onItemPressed={itemPressed} />
      </View>
      <View
        style={{ alignItems: 'center' }}
      >
        {
          state.selectedEquipment.name && (
            <Text
              style={{ fontFamily: 'notosans-regular', marginBottom: 10 }}
            >
              You have selected {state.selectedEquipment.name}
            </Text>
          )
        }
        <Button
          style={{
            width: '100%',
            borderColor: Colors.accent,
            borderWidth: 1,
            borderRadius: 10,
          }}
          mode="outlined"
          color={Colors.accent}
          disabled={Object.keys(state.selectedEquipment).length === 0}
          onPress={() => navigation.navigate('createNotification', {
            equipment: state.selectedEquipment,
          })}
        >
          <Text style={{ color: 'black', fontSize: Layout.sizes.font }}>
            DONE
          </Text>
        </Button>
      </View>
    </View>
  );
};

EquipmentSelector.navigationOptions = {
  header: <EquipmentSelectorHeader />,
};

EquipmentSelector.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default EquipmentSelector;
