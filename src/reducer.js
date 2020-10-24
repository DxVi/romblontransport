export const initialState = {
  RTC: {},
};

export const actionTypes = {
  SET_RTC: "SET_RTC",
};

const reducer = (state, action) => {
  // console.log("reducer>>>",action);

  switch (action.type) {
    case actionTypes.SET_RTC:
      return {
        ...state,
        RTC: action.RTC,
      };

    default:
      return state;
  }
};

export default reducer;
