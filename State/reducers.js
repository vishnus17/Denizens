const initialState = {
  user: {
    tokenID: null,
    attributes: "",
    role: "",
    logedIn: Boolean(false),
    email: "",
    userInfo: {
      firstname: "",
      lastname: "",
      email: "",
    },
  },
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state, //copy all previous states

        userInfo: action.payload.userInfo,
      };
    case "AUTHENTICATION":
      return {
        ...state, //copy all previous states

        user: action.payload.user,
      };
    default:
      return state;
  }
};
