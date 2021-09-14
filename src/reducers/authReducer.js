const initialState = {
  user: {
    profileObj: {
      email: '',
      familyName: '',
      givenName: '',
      googleId: '',
      imageUrl: '',
      name: ''
    },
    accessToken: ''
  }
};

// Reducer para la autenticacion
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...action.payload,
        logged: true
      };
    case 'logout':
      return {
        ...initialState,
        logged: false
      };

    default:
      return state;
  }
};
