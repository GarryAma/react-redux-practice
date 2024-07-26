const DEFAULT_STATE = {
  count: 0,
};

export const counterReducer = (state = DEFAULT_STATE, action) => {
  //   console.log("counterReducer runs");
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_INPUT":
      return { ...state, count: Number(action.payload) };
    default:
      return state;
  }
};
