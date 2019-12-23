import equipmentActionTypes from './equipmentActionTypes';

const INITIAL_STATE = {
  selectedEquipment: {},
};

const equipmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case equipmentActionTypes.SET_SELECTED_EQUIPMENT:
      return { ...state, selectedEquipment: action.payload };
    default:
      return state;
  }
};

export default equipmentReducer;
