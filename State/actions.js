// import { collection, getDoc } from "firebase/firestore";
// import db from "../firebase";
import { useDispatch } from "react-redux";

export const LoginRequest = (payload) => {
  const dispatch = useDispatch();
  return (dispatch) => {
    console.log("..............................got it .......................");
    let userQuery = collection(db, "users", payload.token);

    let user = getDoc(userQuery);

    console.log(".....................user...................", user.data());

    const currenState = {
      user: {
        ...payload,
        userInfo: user,
      },
    };
    dispatch(LoginSuccess(currenState));
  };
};

export const LoginSuccess = (payload) => {
  return {
    type: "AUTHENTICATION",
    payload: payload,
  };
};
