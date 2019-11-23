/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import layout from '../constants/Layout';
import { equipments } from '../mock/mockdata';
import EquipmentList from '../components/Equipment/EquipmentList';
import EquipmentNavigator from '../components/Equipment/EquipmentNavigator';
import CustomButton from '../components/CustomButton/CustomButton';

const EquipmentSelector = () => {
  const { navigate } = useNavigation();
  const [state, setState] = useState({
    originalData: equipments,
    data: equipments,
    selectedItems: [],
    selectedEquipment: {},
    history: [],
  });

  const itemPressed = (item) => {
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
      }}
    >
      <View
        style={{
          paddingHorizontal: layout.sizes.padding,
          marginTop: layout.sizes.margin,
          justifyContent: 'space-around',
        }}
      >
        <EquipmentNavigator state={state} onParentPressed={onParentPressed} />
        <EquipmentList state={state} onItemPressed={itemPressed} />
      </View>
      <CustomButton
        title="Done"
        onPress={() => navigate('createNotification', {
          equipment: state.selectedEquipment,
        })}
      />
    </View>
  );
};

EquipmentSelector.navigationOptions = {
  header: null,
};

export default EquipmentSelector;
