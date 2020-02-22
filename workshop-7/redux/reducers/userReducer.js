const initialState = {
  number: 0,
  profile: {
    id: null,
    name: null,
    year: null,
    color: null,
    pantone_value: null
  },
  isLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_NUMBER": {
      return {
        ...state,
        number: ++state.number
      };
    }
    case "SET_USER": {
      return {
        ...state,
        isLogin: true,
        profile: action.payload
      };
    }
    case "RESET_USER": {
        return initialState;
      }
  }
  return state;
};
