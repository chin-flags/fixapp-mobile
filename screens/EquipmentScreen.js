/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { Button } from 'react-native-paper';

import Layout from '../constants/Layout';
import { equipments } from '../mock/mockdata';
import EquipmentList from '../components/Equipment/EquipmentList';
import EquipmentNavigator from '../components/Equipment/EquipmentNavigator';
import CustomButton from '../components/CustomButton/CustomButton';
import EquipmentSelectorHeader from '../components/Headers/EquipmentSelectorHeader';
import Colors from '../constants/Colors';

const EquipmentSelector = () => {
  const { navigate } = useNavigation();
  const [state, setState] = useState({
    originalData: equipments,
    data: equipments,
    selectedItems: [],
    selectedEquipment: {},
    history: [],
  });

  const resetSelectedItem = () => {
    setState((prevState) => ({
      ...prevState,
      selectedEquipment: {},
    }));
  }

  const itemPressed = (item) => {

    console.log('item', item)
    console.log('selected', state.selectedEquipment)
    if (!item.children) {
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
      data: item.children,
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
        justifyContent: 'space-between'
      }}
    >
      <View>
        <EquipmentNavigator state={state} onParentPressed={onParentPressed} />
        <EquipmentList state={state} onItemPressed={itemPressed} />
      </View>
      <Button
        mode='outlined'
        color={Colors.accent}
        disabled={Object.keys(state.selectedEquipment).length === 0}
        dark={false}
        onPress={() => navigate('createNotification', {
          equipment: state.selectedEquipment,
        })}
      >
        DONE
      </Button>
    </View>
  );
};

EquipmentSelector.navigationOptions = {
  header: <EquipmentSelectorHeader />,
};

export default EquipmentSelector;
