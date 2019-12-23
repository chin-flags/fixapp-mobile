import workorderActionTypes from './workorderActionTypes';

export const setSelectedWorkorder = (workorder) => ({
  type: workorderActionTypes.SET_SELECTED_WORKORDER,
  payload: workorder,
});
