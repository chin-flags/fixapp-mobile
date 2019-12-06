import authActionTypes from './authActionTypes';

const INITIAL_STATE = {
  name: 'chinthaka',
  age: 23,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.GET_USER:
      return state;
    default:
      return state;
  }
};

export default authReducer;
