import workorderActionTypes from './workorderActionTypes';

const INITIAL_STATE = {
  selectedWorkorder: {},
};

const workorderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case workorderActionTypes.SET_SELECTED_WORKORDER:
      return { ...state, selectedWorkorder: action.payload };
    default:
      return state;
  }
};

export default workorderReducer;
