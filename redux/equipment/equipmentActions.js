import equipmentActionTypes from './equipmentActionTypes';

export const setSelectedEquipment = (equipment) => ({
  type: equipmentActionTypes.SET_SELECTED_EQUIPMENT,
  payload: equipment,
});
