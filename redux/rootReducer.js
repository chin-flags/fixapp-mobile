import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import equipmentReducer from './equipment/equipmentReducer';
import workorderReducer from './workorder/workorderReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  equipment: equipmentReducer,
  workorder: workorderReducer,
});

export default rootReducer;
