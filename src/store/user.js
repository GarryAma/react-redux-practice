const DEFAULT_STATE = {
  username: "",
  // email: "garry@gmail.com",
  id: "",
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  // console.log("userReducer runs");
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        username: action.payload.username,
        id: action.payload.id,
      };
    default:
      return state;
  }
  // return state;
};
