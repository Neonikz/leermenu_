import { types } from '../types/types'
const initialState = {
  accessToken: '',
};

// Reducer para la autenticacion
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
      };
    case types.logout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
