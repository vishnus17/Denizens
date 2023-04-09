import { users } from "../components/Home/Dummy/data";

const initialState = {
  user: {
    tokenID: null,
    attributes: "",
    roles: "",
    role: "",
    logedIn: Boolean(false),
    email: "",
    userInfo: {
      firstname: "",
      lastname: "",
      email: "",
      avathar: "",
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
    case "LOGOUT":
      return initialState;

    case "PROFILE_EDIT":
      return {
        ...state, //copy all previous states

        user: {
          ...state.user,
          userInfo: action.payload.userInfo,
        },
      };
    default:
      return state;
  }
};
