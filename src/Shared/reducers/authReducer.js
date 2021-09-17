import { types } from '../types/types'
const initialState = {
  name: '',
  email: '',
  familyName: '',
  givenName: '',
  googleId: '',
  imageUrl: '',
  accessToken: '',
  logged:false
};

// Reducer para la autenticacion
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
        logged: true
      };
    case types.logout:
      return {
        ...initialState,
        logged: false
      };

    default:
      return state;
  }
};
