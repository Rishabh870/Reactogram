const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGIN_ERROR':
      return initialState;
    default:
      return state;
  }
};
